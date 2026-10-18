import { READY_AIRPORTS } from "@/lib/airports";
import { READY_COUNTRIES } from "@/lib/countries";
import { SITE } from "@/lib/site";

// Bump when page content actually changes. A per-request `new Date()` makes
// every URL look modified on every crawl, so Google learns to ignore lastmod.
const CONTENT_UPDATED = new Date("2026-10-05");

export default function sitemap() {
  const staticPages = [
    { url: SITE.domain, priority: 1 },
    { url: `${SITE.domain}/car-rental`, priority: 0.9 },
    { url: `${SITE.domain}/car-rental-fees`, priority: 0.6 },
    { url: `${SITE.domain}/how-it-works`, priority: 0.4 },
    { url: `${SITE.domain}/about`, priority: 0.3 },
    { url: `${SITE.domain}/disclosure`, priority: 0.3 },
    { url: `${SITE.domain}/privacy`, priority: 0.2 },
    { url: `${SITE.domain}/terms`, priority: 0.2 },
    { url: `${SITE.domain}/alternatives`, priority: 0.5 },
  ];
  const airportPages = READY_AIRPORTS.map((a) => ({
    url: `${SITE.domain}/car-rental/${a.slug}`,
    priority: 0.8,
  }));
  const countryPages = READY_COUNTRIES.map((c) => ({
    url: `${SITE.domain}/rent-a-car/${c.slug}`,
    priority: 0.8,
  }));
  return [...staticPages, ...airportPages, ...countryPages].map((p) => ({
    ...p,
    lastModified: CONTENT_UPDATED,
  }));
}
