export const SITE = {
  name: "CarPriceRadar",
  domain: "https://carpriceradar.com",
  tagline: "Compare airport car-rental prices before you book",
  // Short, human description reused in metadata + JSON-LD.
  description:
    "Compare live car-rental prices at your airport by car type, and get the pickup details (rental-center location, shuttle time, tolls) that catch travellers out.",
  // Price-history tracking is built but dormant until a live price feed exists
  // (Discover Cars API unlocks at ~50k visitors/month). Flip to true to show the
  // daily-trend module + populate it via the /api/snapshot cron.
  priceHistoryEnabled: false,
  // Entity-profielen (sameAs) voor Organization-schema: komma-gescheiden URLs in env,
  // na aanmaken socials/Crunchbase/Product Hunt/etc. (AEO: entity + consensus).
  sameAs: (process.env.NEXT_PUBLIC_SAME_AS || "").split(",").map((s) => s.trim()).filter(Boolean),
};
