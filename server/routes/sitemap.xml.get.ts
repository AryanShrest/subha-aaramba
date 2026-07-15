import { createClient } from "@supabase/supabase-js";

// Define your site URL
const SITE_URL = "https://drainagecleaningnepal.com";

export default defineEventHandler(async (event) => {
  // Initialize Supabase client - using hardcoded values like src/lib/supabase.ts
  const supabaseUrl = "https://gfjvjatvibiwkbgeymlt.supabase.co";
  const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmanZqYXR2aWJpd2tiZ2V5bWx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQxMzM1NTIsImV4cCI6MjA5OTcwOTU1Mn0.yRcJtzLBi6cZ_DQf7b2BWipwQXyXWVJLK4vZNoBayVw";
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