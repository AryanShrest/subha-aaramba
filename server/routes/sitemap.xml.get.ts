import { createClient } from "@supabase/supabase-js";

// Define your site URL
const SITE_URL = "https://drainagecleaningnepal.com";

export default defineEventHandler(async (event) => {
  // Initialize Supabase client
  const supabaseUrl = process.env.VITE_SUPABASE_URL!;
  const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY!;
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
