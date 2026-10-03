import { READY_AIRPORTS } from "@/lib/airports";
import { SITE } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  const staticPages = [
    { url: SITE.domain, priority: 1, changeFrequency: "daily" },
    { url: `${SITE.domain}/car-rental`, priority: 0.9, changeFrequency: "daily" },
    { url: `${SITE.domain}/how-it-works`, priority: 0.4, changeFrequency: "monthly" },
  ];
  const airportPages = READY_AIRPORTS.map((a) => ({
    url: `${SITE.domain}/car-rental/${a.slug}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.8,
  }));
  return [...staticPages.map((p) => ({ ...p, lastModified: now })), ...airportPages];
}
