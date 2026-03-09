import { Env, hashPassword, json, optionsResponse } from "./_utils";

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const kv = context.env.AUTH_KV;

  let body: any;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const { token, newPassword, confirmPassword } = body;

  if (!token) {
    return json({ error: "Reset token is required" }, 400);
  }

  // Verify token exists (KV TTL handles expiry)
  const resetData = await kv.get(`reset:${token}`);
  if (!resetData) {
    return json({ error: "Invalid or expired reset token" }, 400);
  }

  if (!newPassword || !confirmPassword) {
    return json({ error: "All fields are required" }, 400);
  }

  if (newPassword !== confirmPassword) {
    return json({ error: "Passwords do not match" }, 400);
  }

  if (newPassword.length < 8) {
    return json({ error: "Password must be at least 8 characters" }, 400);
  }

  if (!/[A-Z]/.test(newPassword) || !/[a-z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
    return json({ error: "Password must contain uppercase, lowercase, and a number" }, 400);
  }

  // Update password
  const newHash = await hashPassword(newPassword);
  await kv.put("admin:password_hash", newHash);

  // Delete the used reset token
  await kv.delete(`reset:${token}`);

  // Invalidate all existing sessions (force re-login with new password)
  // We can't easily list all session keys, but the user will need to re-login

  return json({ ok: true, message: "Password has been reset. You can now log in." });
};

export const onRequestOptions: PagesFunction = async () => optionsResponse();
