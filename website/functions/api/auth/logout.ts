import { Env, deleteSession, clearSessionCookie, json, optionsResponse } from "./_utils";

export const onRequestPost: PagesFunction<Env> = async (context) => {
  await deleteSession(context.env.AUTH_KV, context.request);
  return json({ ok: true }, 200, { "Set-Cookie": clearSessionCookie() });
};

export const onRequestOptions: PagesFunction = async () => optionsResponse();
