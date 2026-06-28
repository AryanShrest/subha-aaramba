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
      { name: "keywords", content: "clean tank nepal, water tank cleaning nepal, tank cleaning kathmandu, septic tank cleaning kathmandu, plumbing service kathmandu, sewage cleaning nepal" },
      { name: "author", content: "शुभ आरम्भ Cleaning Service" },
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
          "name": "शुभ आरम्भ Cleaning Service",
          "alternateName": "Clean Tank Nepal",
          "description": "Professional water tank, septic tank, sewage and plumbing cleaning services in Kathmandu, Lalitpur and Bhaktapur.",
          "url": "https://clean-tank-nepal.aaryanshrestha00.com.np",
          "telephone": "+977-9800000000",
          "image": "https://clean-tank-nepal.aaryanshrestha00.com.np/images/Septic-tank-cleaning-in-Lalitpur-1-1024x538.webp",
          "priceRange": "Rs 500 - Rs 5500",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kathmandu",
            "addressRegion": "Bagmati",
            "addressCountry": "NP"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "27.7172",
            "longitude": "85.3240"
          },
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "27.7172",
              "longitude": "85.3240"
            },
            "geoRadius": "30000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Cleaning Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Overhead Tank Cleaning" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Septic Tank Cleaning" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewage & Drainage Cleaning" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing Repair & Installation" } }
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
