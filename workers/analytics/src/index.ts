interface Env {
  ANALYTICS_PIPELINE: {
    send(events: unknown[]): Promise<void>;
  };
  ALLOWED_ORIGINS: string;
}

interface AnalyticsEvent {
  event_type: string;
  path?: string;
  referrer?: string;
  title?: string;
  ts?: number;
  // Enhanced fields
  session_id?: string;
  scroll_depth?: number;
  time_on_page?: number;
  // Click tracking
  click_target?: string;
  click_href?: string;
  click_text?: string;
  // Device info
  screen_width?: number;
  screen_height?: number;
  viewport_width?: number;
  viewport_height?: number;
  device_pixel_ratio?: number;
  touch?: boolean;
  // Web Vitals
  lcp?: number;
  fid?: number;
  cls?: number;
  inp?: number;
  ttfb?: number;
  fcp?: number;
  // UTM
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  // Misc
  language?: string;
  connection_type?: string;
  [key: string]: unknown;
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
      return new Response("Method not allowed", { status: 405, headers: corsHeaders });
    }

    try {
      const rawBody = await request.text();
      let events: AnalyticsEvent[];

      // Support both single event and batch
      const parsed = JSON.parse(rawBody);
      if (Array.isArray(parsed)) {
        events = parsed;
      } else {
        events = [parsed];
      }

      const now = new Date();
      const cf = request.cf;

      const pipelineEvents = events.map((body) => ({
        value: {
          timestamp: now.toISOString(),
          date: now.toISOString().slice(0, 10),
          event_type: body.event_type || "pageview",
          path: body.path || "/",
          referrer: body.referrer || "",
          title: body.title || "",
          session_id: body.session_id || "",
          // Geo from CF
          country: (cf?.country as string) || "unknown",
          city: (cf?.city as string) || "",
          region: (cf?.region as string) || "",
          continent: (cf?.continent as string) || "",
          timezone: (cf?.timezone as string) || "",
          asn: cf?.asn || 0,
          // Request info
          user_agent: request.headers.get("User-Agent") || "",
          language: body.language || "",
          // Device
          screen_width: body.screen_width || 0,
          screen_height: body.screen_height || 0,
          viewport_width: body.viewport_width || 0,
          viewport_height: body.viewport_height || 0,
          device_pixel_ratio: body.device_pixel_ratio || 0,
          touch: body.touch || false,
          connection_type: body.connection_type || "",
          // Engagement
          scroll_depth: body.scroll_depth || 0,
          time_on_page: body.time_on_page || 0,
          // Click
          click_target: body.click_target || "",
          click_href: body.click_href || "",
          click_text: body.click_text || "",
          // Web Vitals
          lcp: body.lcp || 0,
          fid: body.fid || 0,
          cls: body.cls || 0,
          inp: body.inp || 0,
          ttfb: body.ttfb || 0,
          fcp: body.fcp || 0,
          // UTM
          utm_source: body.utm_source || "",
          utm_medium: body.utm_medium || "",
          utm_campaign: body.utm_campaign || "",
          utm_term: body.utm_term || "",
          utm_content: body.utm_content || "",
          // Full raw data
          data: body,
        },
      }));

      await env.ANALYTICS_PIPELINE.send(pipelineEvents);

      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: "Bad request" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  },
};
