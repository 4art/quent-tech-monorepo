import { Env, validateSession, verifyPassword, hashPassword, json, optionsResponse } from "./_utils";

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const kv = context.env.AUTH_KV;

  if (!(await validateSession(kv, context.request))) {
    return json({ error: "Unauthorized" }, 401);
  }

  let body: any;
  try {
    body = await context.request.json();
  } catch {
    return json({ error: "Invalid JSON" }, 400);
  }

  const { currentPassword, newPassword, confirmPassword } = body;

  if (!currentPassword || !newPassword || !confirmPassword) {
    return json({ error: "All fields are required" }, 400);
  }

  if (newPassword !== confirmPassword) {
    return json({ error: "New passwords do not match" }, 400);
  }

  if (newPassword.length < 8) {
    return json({ error: "Password must be at least 8 characters" }, 400);
  }

  if (!/[A-Z]/.test(newPassword) || !/[a-z]/.test(newPassword) || !/[0-9]/.test(newPassword)) {
    return json({ error: "Password must contain uppercase, lowercase, and a number" }, 400);
  }

  const storedHash = await kv.get("admin:password_hash");
  if (!storedHash || !(await verifyPassword(currentPassword, storedHash))) {
    return json({ error: "Current password is incorrect" }, 403);
  }

  const newHash = await hashPassword(newPassword);
  await kv.put("admin:password_hash", newHash);

  return json({ ok: true, message: "Password changed successfully" });
};

export const onRequestOptions: PagesFunction = async () => optionsResponse();
