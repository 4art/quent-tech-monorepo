interface Env {
  CLOUDFLARE_API_TOKEN: string;
  AUTH_KV: KVNamespace;
}

const ZONE_ID = "0bf61f92bd7856e5e52bc7229146ac61";

function getSessionToken(request: Request): string | null {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(/qt_session=([^;]+)/);
  return match ? match[1] : null;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "https://quent-tech.com",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
  };

  const token = context.env.CLOUDFLARE_API_TOKEN;
  if (!token) {
    return new Response(JSON.stringify({ error: "API token not configured" }), { status: 500, headers: corsHeaders });
  }

  // Auth check - accept both cookie session and legacy session field
  const sessionToken = getSessionToken(context.request);
  let authed = false;

  if (sessionToken) {
    const session = await context.env.AUTH_KV.get(`session:${sessionToken}`);
    authed = session !== null;
  }

  let body: any;
  try {
    body = await context.request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400, headers: corsHeaders });
  }

  // Legacy support for old session check
  if (!authed && body.session === "qt-admin-authenticated") {
    authed = true;
  }

  if (!authed) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });
  }

  const { days = 30 } = body;
  const since = new Date(Date.now() - days * 86400000).toISOString().split("T")[0] + "T00:00:00Z";
  const until = new Date().toISOString().split("T")[0] + "T23:59:59Z";

  const query = `query {
    viewer {
      zones(filter: {zoneTag: "${ZONE_ID}"}) {
        httpRequests1dGroups(limit: ${days}, filter: {date_geq: "${since.split("T")[0]}", date_leq: "${until.split("T")[0]}"}, orderBy: [date_ASC]) {
          dimensions { date }
          sum {
            requests
            pageViews
            bytes
            threats
            countryMap { clientCountryName requests bytes }
          }
          uniq { uniques }
        }
      }
    }
  }`;

  try {
    const resp = await fetch("https://api.cloudflare.com/client/v4/graphql", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const data = await resp.json();
    return new Response(JSON.stringify(data), { status: resp.status, headers: corsHeaders });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "https://quent-tech.com",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
};
