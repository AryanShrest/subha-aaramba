import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { createClient } from "@supabase/supabase-js";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

async function generateSitemap(): Promise<string> {
  const SITE_URL = "https://drainagecleaningnepal.com";
  const supabaseUrl = "https://bdwwiokeojuqmwyfusos.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkd3dpb2tlb2p1cW13eWZ1c29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MjYzNjEsImV4cCI6MjA5NjUwMjM2MX0.fkoEnI5pzSJIiQL1UF8pna3HqzFQR9NixWKTX3XOgzI";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: services } = await supabase
    .from("services")
    .select("id")
    .order("created_at", { ascending: false });

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

  if (services) {
    services.forEach((service) => {
      sitemap += `
  <url>
    <loc>${SITE_URL}/services/${service.id}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });
  }

  sitemap += `
</urlset>`;

  return sitemap;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      console.log("Incoming request:", url.pathname);

      if (
        url.pathname === "/sitemap.xml" ||
        url.pathname === "/sitemao.xml" ||
        url.pathname === "/site.xml"
      ) {
        console.log(`Serving ${url.pathname}!`);
        const sitemap = await generateSitemap();
        return new Response(sitemap, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
          },
        });
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
