interface Env {
  NOTIFICATION_EMAIL: string;
  ALLOWED_ORIGINS: string;
  AWS_REGION: string;
  AWS_ACCESS_KEY_ID: string;
  AWS_SECRET_ACCESS_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin") || "";
    const allowed = env.ALLOWED_ORIGINS.split(",");
    const corsOrigin = allowed.includes(origin) ? origin : allowed[0];
    const corsHeaders: Record<string, string> = {
      "Access-Control-Allow-Origin": corsOrigin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    try {
      const body = (await request.json()) as Record<string, string>;
      const { name, email, company, message, honeypot } = body;

      // Honeypot spam check
      if (honeypot) {
        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Validation
      if (!name || !email || !message) {
        return new Response(
          JSON.stringify({ error: "Name, email, and message are required" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(
          JSON.stringify({ error: "Invalid email address" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Send via SES using AWS Signature V4
      await sendViaSES(env, {
        name,
        email,
        company: company || "Not provided",
        message,
      });

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error:", error);
      return new Response(JSON.stringify({ error: "Failed to send message" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  },
};

interface ContactData {
  name: string;
  email: string;
  company: string;
  message: string;
}

async function sendViaSES(env: Env, data: ContactData): Promise<void> {
  const region = env.AWS_REGION;
  const service = "ses";
  const host = `email.${region}.amazonaws.com`;
  const endpoint = `https://${host}/`;

  const params = new URLSearchParams({
    Action: "SendEmail",
    "Source": env.NOTIFICATION_EMAIL,
    "Destination.ToAddresses.member.1": env.NOTIFICATION_EMAIL,
    "ReplyToAddresses.member.1": data.email,
    "Message.Subject.Data": `[Quent Tech] New Contact Form: ${data.name}`,
    "Message.Body.Text.Data": `New contact form submission:\n\nName: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\n\nMessage:\n${data.message}\n\n---\nSent from quent-tech.com contact form`,
    Version: "2010-12-01",
  });

  const body = params.toString();
  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, "");
  const dateStamp = amzDate.slice(0, 8);

  const headers: Record<string, string> = {
    "Content-Type": "application/x-www-form-urlencoded",
    Host: host,
    "X-Amz-Date": amzDate,
  };

  // AWS Signature V4
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const canonicalHeaders = Object.keys(headers)
    .sort()
    .map((k) => `${k.toLowerCase()}:${headers[k]}\n`)
    .join("");
  const signedHeaders = Object.keys(headers)
    .sort()
    .map((k) => k.toLowerCase())
    .join(";");

  const payloadHash = await sha256Hex(body);
  const canonicalRequest = `POST\n/\n\n${canonicalHeaders}\n${signedHeaders}\n${payloadHash}`;
  const stringToSign = `AWS4-HMAC-SHA256\n${amzDate}\n${credentialScope}\n${await sha256Hex(canonicalRequest)}`;

  const signingKey = await getSignatureKey(env.AWS_SECRET_ACCESS_KEY, dateStamp, region, service);
  const signature = await hmacHex(signingKey, stringToSign);

  headers["Authorization"] =
    `AWS4-HMAC-SHA256 Credential=${env.AWS_ACCESS_KEY_ID}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers,
    body,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`SES error ${response.status}: ${text}`);
  }
}

async function sha256Hex(message: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function hmac(key: ArrayBuffer | Uint8Array, message: string): Promise<ArrayBuffer> {
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    key,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  return crypto.subtle.sign("HMAC", cryptoKey, new TextEncoder().encode(message));
}

async function hmacHex(key: ArrayBuffer, message: string): Promise<string> {
  const sig = await hmac(key, message);
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function getSignatureKey(
  key: string,
  dateStamp: string,
  region: string,
  service: string
): Promise<ArrayBuffer> {
  const kDate = await hmac(new TextEncoder().encode(`AWS4${key}`), dateStamp);
  const kRegion = await hmac(kDate, region);
  const kService = await hmac(kRegion, service);
  return hmac(kService, "aws4_request");
}
