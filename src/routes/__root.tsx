import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "keywords", content: "drainage cleaning nepal, drainage cleaning kathmandu, septic tank cleaning kathmandu, water tank cleaning nepal, sewage cleaning nepal, plumbing service kathmandu" },
      { name: "author", content: "Drainage Cleaning Nepal" },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://drainagecleaningnepal.com" },
      { property: "og:image", content: "https://drainagecleaningnepal.com/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "geo.region", content: "NP-BA" },
      { name: "geo.placename", content: "Kathmandu" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://drainagecleaningnepal.com" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Drainage Cleaning Nepal",
          "url": "https://drainagecleaningnepal.com/",
          "description": "Professional drainage, septic tank, sewage, water tank and plumbing cleaning services in Kathmandu, Nepal.",
          "telephone": "+977-9812330094",
          "image": "https://drainagecleaningnepal.com/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp",
          "priceRange": "Rs 1500 - Rs 5500",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kathmandu",
            "addressRegion": "Bagmati",
            "addressCountry": "NP"
          },
          "areaServed": {
            "@type": "City",
            "name": "Kathmandu"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "27.7172",
            "longitude": "85.3240"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Cleaning Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drainage Cleaning" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Septic Tank Cleaning" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Tank Cleaning" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewage Cleaning" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing Repair" } }
            ]
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "38"
          }
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ne">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
