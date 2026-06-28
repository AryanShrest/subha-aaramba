import { createClient } from "@supabase/supabase-js";

// Define your site URL
const SITE_URL = "https://drainagecleaningnepal.com";

export default defineEventHandler(async (event) => {
  // Initialize Supabase client - using hardcoded values like src/lib/supabase.ts
  const supabaseUrl = "https://bdwwiokeojuqmwyfusos.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkd3dpb2tlb2p1cW13eWZ1c29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MjYzNjEsImV4cCI6MjA5NjUwMjM2MX0.fkoEnI5pzSJIiQL1UF8pna3HqzFQR9NixWKTX3XOgzI";
  const supabase = createClient(supabaseUrl, supabaseKey);

  // Fetch services from Supabase
  const { data: services } = await supabase
    .from("services")
    .select("id")
    .order("created_at", { ascending: false });

  // Build sitemap
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`;

  // Add service pages to sitemap
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

  // Return sitemap as XML
  setHeader(event, "content-type", "application/xml");
  return sitemap;
});