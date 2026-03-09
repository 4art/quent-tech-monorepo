// Auth utilities for Cloudflare Pages Functions
// Uses Web Crypto API (PBKDF2) for password hashing since bcrypt isn't available in Workers

export interface Env {
  AUTH_KV: KVNamespace;
  CLOUDFLARE_API_TOKEN: string;
}

const SALT_LENGTH = 16;
const ITERATIONS = 100000;
const KEY_LENGTH = 32;
const ALGORITHM = "PBKDF2";
const HASH_ALGO = "SHA-256";

const INITIAL_PASSWORD = "QT2026admin!";
const ADMIN_EMAIL = "info@quent-tech.com";
const SESSION_TTL = 86400; // 24 hours
const RESET_TOKEN_TTL = 3600; // 1 hour
const RATE_LIMIT_WINDOW = 900; // 15 minutes
const MAX_LOGIN_ATTEMPTS = 10;

export const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://quent-tech.com",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

function arrayBufferToHex(buffer: ArrayBuffer): string {
  return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function hexToArrayBuffer(hex: string): ArrayBuffer {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substr(i, 2), 16);
  }
  return bytes.buffer;
}

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(SALT_LENGTH));
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey("raw", encoder.encode(password), ALGORITHM, false, ["deriveBits"]);
  const derivedBits = await crypto.subtle.deriveBits(
    { name: ALGORITHM, salt, iterations: ITERATIONS, hash: HASH_ALGO },
    keyMaterial,
    KEY_LENGTH * 8
  );
  return `${arrayBufferToHex(salt.buffer)}:${arrayBufferToHex(derivedBits)}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [saltHex, hashHex] = stored.split(":");
  const salt = new Uint8Array(hexToArrayBuffer(saltHex));
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey("raw", encoder.encode(password), ALGORITHM, false, ["deriveBits"]);
  const derivedBits = await crypto.subtle.deriveBits(
    { name: ALGORITHM, salt, iterations: ITERATIONS, hash: HASH_ALGO },
    keyMaterial,
    KEY_LENGTH * 8
  );
  return arrayBufferToHex(derivedBits) === hashHex;
}

export async function ensurePasswordInitialized(kv: KVNamespace): Promise<void> {
  const existing = await kv.get("admin:password_hash");
  if (!existing) {
    const hash = await hashPassword(INITIAL_PASSWORD);
    await kv.put("admin:password_hash", hash);
  }
}

export async function checkRateLimit(kv: KVNamespace, ip: string): Promise<{ allowed: boolean; remaining: number }> {
  const key = `ratelimit:${ip}`;
  const current = parseInt((await kv.get(key)) || "0");
  if (current >= MAX_LOGIN_ATTEMPTS) {
    return { allowed: false, remaining: 0 };
  }
  await kv.put(key, String(current + 1), { expirationTtl: RATE_LIMIT_WINDOW });
  return { allowed: true, remaining: MAX_LOGIN_ATTEMPTS - current - 1 };
}

export function createSessionCookie(token: string, maxAge: number = SESSION_TTL): string {
  return `qt_session=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;
}

export function clearSessionCookie(): string {
  return `qt_session=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;
}

export function getSessionToken(request: Request): string | null {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(/qt_session=([^;]+)/);
  return match ? match[1] : null;
}

export async function validateSession(kv: KVNamespace, request: Request): Promise<boolean> {
  const token = getSessionToken(request);
  if (!token) return false;
  const session = await kv.get(`session:${token}`);
  return session !== null;
}

export async function createSession(kv: KVNamespace): Promise<string> {
  const token = crypto.randomUUID();
  await kv.put(`session:${token}`, JSON.stringify({ created: Date.now() }), { expirationTtl: SESSION_TTL });
  return token;
}

export async function deleteSession(kv: KVNamespace, request: Request): Promise<void> {
  const token = getSessionToken(request);
  if (token) {
    await kv.delete(`session:${token}`);
  }
}

export function json(data: any, status = 200, extraHeaders: Record<string, string> = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS_HEADERS, ...extraHeaders },
  });
}

export function optionsResponse(): Response {
  return new Response(null, { headers: CORS_HEADERS });
}

export { ADMIN_EMAIL, SESSION_TTL, RESET_TOKEN_TTL };
