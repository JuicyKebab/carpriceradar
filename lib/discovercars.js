// Discover Cars affiliate integration.
//
// Day-1 model (no business entity needed): a self-serve affiliate deep link
// with your a_aid marker. Set it in .env.local:
//   NEXT_PUBLIC_DC_MARKER=your_marker
//
// When you later add the official Discover Cars search WIDGET (iframe/script
// from their partner dashboard), drop it into the <PriceWidget> slot in the
// airport page — the deep-link button below keeps working as the fallback CTA.

const MARKER = process.env.NEXT_PUBLIC_DC_MARKER || "";
const CID = process.env.NEXT_PUBLIC_DC_CID || "";

// Discover Cars airport landing pages (pattern /{country}/{city}/{iata}), each
// verified to return 200. Linking here lands the user already in that airport's
// search context — they only pick dates. US pages use usa-{state} slugs.
const DC_PATHS = {
  "phoenix-sky-harbor": "/usa-arizona/phoenix/phx",
  honolulu: "/usa-hawaii/honolulu/hnl",
  "seattle-tacoma": "/usa-washington/seattle/sea",
  "san-francisco": "/usa-california/san-francisco/sfo",
  "las-vegas-harry-reid": "/usa-nevada/las-vegas/las",
  denver: "/usa-colorado/denver/den",
  "new-york-jfk": "/usa-new-york/new-york/jfk",
  miami: "/usa-florida/miami/mia",
  "london-heathrow": "/united-kingdom/london/lhr",
  dubai: "/united-arab-emirates/dubai/dxb",
  faro: "/portugal/faro/fao",
  atlanta: "/usa-georgia/atlanta/atl",
  "rome-fiumicino": "/italy-mainland/rome/fco",
  "venice-marco-polo": "/italy-mainland/venice/vce",
  "florence-peretola": "/italy-mainland/florence/flr",
};

// Affiliate link for one airport. Lands on that airport's Discover Cars page when
// we have a verified path (location pre-filled), else the homepage. a_aid =
// affiliate marker, a_cid = campaign id (PostAffiliatePro); both credit the sale.
export function discoverCarsLink(airport) {
  const path = airport?.slug ? DC_PATHS[airport.slug] : null;
  const base = path ? `https://www.discovercars.com${path}` : "https://www.discovercars.com/";
  const params = new URLSearchParams();
  if (MARKER) params.set("a_aid", MARKER);
  if (CID) params.set("a_cid", CID);
  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}

// Country landing pages (pattern /{country}), each verified to return 200.
const DC_COUNTRY_PATHS = {
  iceland: "/iceland",
  portugal: "/portugal",
  dubai: "/united-arab-emirates/dubai",
  london: "/united-kingdom/london",
  hawaii: "/usa-hawaii",
  spain: "/spain",
  ireland: "/ireland",
  mexico: "/mexico",
  france: "/france",
  scotland: "/united-kingdom/edinburgh",
  "new-zealand": "/new-zealand",
  italy: "/italy-mainland",
};

export function discoverCarsCountryLink(country) {
  const path = country?.slug ? DC_COUNTRY_PATHS[country.slug] : null;
  const base = path ? `https://www.discovercars.com${path}` : "https://www.discovercars.com/";
  const params = new URLSearchParams();
  if (MARKER) params.set("a_aid", MARKER);
  if (CID) params.set("a_cid", CID);
  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}

export const hasMarker = Boolean(MARKER);
