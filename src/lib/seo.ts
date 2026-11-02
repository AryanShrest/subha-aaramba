export const SITE_URL = "https://drainagecleaningnepal.com";
export const SITE_LASTMOD = "2026-11-02";

export const BUSINESS = {
  name: "Drainage Cleaning Nepal",
  alternateName: "शुभ आरम्भ Cleaning Service",
  phone: "+977 9812330094",
  phoneHref: "tel:+9779812330094",
  email: "netrashrestha0309@gmail.com",
  whatsapp: "https://wa.me/9779812330094",
  image: `${SITE_URL}/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp`,
  locality: "Kathmandu",
  region: "Bagmati",
  country: "NP",
  priceRange: "Rs 1,500 - Rs 5,500",
  instagram: "https://www.instagram.com/drainage_cleaning_nepal/",
};

export const SERVICE_PAGES = [
  {
    path: "/drainage-cleaning-kathmandu",
    label: "Drainage Cleaning in Kathmandu",
    priority: "0.9",
  },
  {
    path: "/septic-tank-cleaning-kathmandu",
    label: "Septic Tank Cleaning in Kathmandu",
    priority: "0.9",
  },
  {
    path: "/water-tank-cleaning-kathmandu",
    label: "Water Tank Cleaning in Kathmandu",
    priority: "0.9",
  },
  {
    path: "/water-tank-cleaning-lalitpur",
    label: "Water Tank Cleaning in Lalitpur",
    priority: "0.8",
  },
  {
    path: "/drain-cleaning-bhaktapur",
    label: "Drain Cleaning in Bhaktapur",
    priority: "0.8",
  },
];

export const SERVICE_IDS = ["1", "2", "3", "4"];

export const SITEMAP_PATHS = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "weekly", priority: "0.9" },
  ...SERVICE_PAGES.map((page) => ({
    path: page.path,
    changefreq: "weekly",
    priority: page.priority,
  })),
  ...SERVICE_IDS.map((id) => ({
    path: `/services/${id}`,
    changefreq: "monthly",
    priority: "0.8",
  })),
];

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  alternateName: BUSINESS.alternateName,
  url: `${SITE_URL}/`,
  description:
    "Drainage Cleaning Nepal provides professional drainage, septic tank, sewage, water tank and plumbing cleaning services in Kathmandu, Lalitpur and Bhaktapur, Nepal.",
  telephone: "+977-9812330094",
  email: BUSINESS.email,
  image: BUSINESS.image,
  priceRange: BUSINESS.priceRange,
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.locality,
    addressRegion: BUSINESS.region,
    addressCountry: BUSINESS.country,
  },
  areaServed: [
    { "@type": "City", name: "Kathmandu" },
    { "@type": "City", name: "Lalitpur" },
    { "@type": "City", name: "Bhaktapur" },
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "27.7172",
    longitude: "85.3240",
  },
  sameAs: [BUSINESS.instagram],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drainage Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Septic Tank Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Tank Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewage Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plumbing Repair" } },
    ],
  },
};

type LandingHeadInput = {
  title: string;
  description: string;
  path: string;
  serviceName: string;
  city: string;
  breadcrumbLabel: string;
  faqs: { q: string; a: string }[];
};

export function buildLandingHead({
  title,
  description,
  path,
  serviceName,
  city,
  breadcrumbLabel,
  faqs,
}: LandingHeadInput) {
  const canonical = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: serviceName,
          serviceType: serviceName,
          url: canonical,
          areaServed: { "@type": "City", name: city },
          provider: { "@id": `${SITE_URL}/#business` },
          offers: {
            "@type": "Offer",
            priceCurrency: "NPR",
            availability: "https://schema.org/InStock",
            url: canonical,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
            { "@type": "ListItem", position: 3, name: breadcrumbLabel, item: canonical },
          ],
        }),
      },
    ],
  };
}
