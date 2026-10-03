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

// Deep link to a pre-filled Discover Cars search for one airport.
// `iata` lands the user on that location's results; the marker credits you.
export function discoverCarsLink(airport) {
  const base = "https://www.discovercars.com/";
  const params = new URLSearchParams();
  if (MARKER) params.set("a_aid", MARKER);
  if (airport?.iata) {
    // Discover Cars resolves a location query; IATA + city is the most reliable.
    params.set("filter-pickup", `${airport.city} (${airport.iata})`);
  }
  const qs = params.toString();
  return qs ? `${base}?${qs}` : base;
}

export const hasMarker = Boolean(MARKER);
