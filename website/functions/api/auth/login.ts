import { Env, ensurePasswordInitialized, verifyPassword, checkRateLimit, createSession, createSessionCookie, json, optionsResponse } from "./_utils";

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const kv = context.env.AUTH_KV;
  await ensurePasswordInitialized(kv);

  const ip = context.request.headers.get("CF-Connecting-IP") || "unknown";
  const { allowed, remaining } = await checkRateLimit(kv, ip);
  if (!allowed) {
    return json({ error: "Too many login attempts. Try again in 15 minutes." }, 429);
  }

  let body: any;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const { password } = body;
  if (!password) {
    return json({ error: "Password is required" }, 400);
  }

  const storedHash = await kv.get("admin:password_hash");
  if (!storedHash || !(await verifyPassword(password, storedHash))) {
    return json({ error: `Invalid credentials. ${remaining} attempts remaining.` }, 401);
  }

  const token = await createSession(kv);
  return json({ ok: true }, 200, { "Set-Cookie": createSessionCookie(token) });
};

export const onRequestOptions: PagesFunction = async () => optionsResponse();
