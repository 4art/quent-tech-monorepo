import { Env, validateSession, json, optionsResponse } from "./_utils";

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const valid = await validateSession(context.env.AUTH_KV, context.request);
  return json({ authenticated: valid });
};

export const onRequestOptions: PagesFunction = async () => optionsResponse();
