import { Env, ADMIN_EMAIL, RESET_TOKEN_TTL, json, optionsResponse, checkRateLimit } from "./_utils";

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const kv = context.env.AUTH_KV;

  // Rate limit forgot-password too
  const ip = context.request.headers.get("CF-Connecting-IP") || "unknown";
  const { allowed } = await checkRateLimit(kv, `forgot:${ip}`);
  if (!allowed) {
    // Always return success to avoid email enumeration
    return json({ ok: true, message: "If the email is correct, a reset link has been sent." });
  }

  let body: any;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const { email } = body;
  if (!email || email.toLowerCase() !== ADMIN_EMAIL) {
    // Don't reveal whether email exists
    return json({ ok: true, message: "If the email is correct, a reset link has been sent." });
  }

  // Generate reset token
  const token = crypto.randomUUID();
  await kv.put(`reset:${token}`, JSON.stringify({ created: Date.now() }), { expirationTtl: RESET_TOKEN_TTL });

  const resetUrl = `https://quent-tech.com/admin/reset/?token=${token}`;

  // Send email via MailChannels (free from CF Workers)
  try {
    const emailResp = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: ADMIN_EMAIL, name: "Quent Tech Admin" }] }],
        from: { email: "noreply@quent-tech.com", name: "Quent Tech" },
        subject: "Password Reset - Quent Tech Admin",
        content: [
          {
            type: "text/html",
            value: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                <h2 style="color: #1a1a2e;">Password Reset Request</h2>
                <p>A password reset was requested for your Quent Tech admin account.</p>
                <p>Click the link below to reset your password. This link expires in 1 hour.</p>
                <p style="margin: 24px 0;">
                  <a href="${resetUrl}" style="background: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
                    Reset Password
                  </a>
                </p>
                <p style="color: #666; font-size: 14px;">If you didn't request this, you can safely ignore this email.</p>
                <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
                <p style="color: #999; font-size: 12px;">Quent Tech GmbH</p>
              </div>
            `,
          },
        ],
      }),
    });

    if (!emailResp.ok) {
      console.error("MailChannels error:", await emailResp.text());
    }
  } catch (e: any) {
    console.error("Email send error:", e.message);
  }

  return json({ ok: true, message: "If the email is correct, a reset link has been sent." });
};

export const onRequestOptions: PagesFunction = async () => optionsResponse();
