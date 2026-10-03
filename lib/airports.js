// Airport seed data. Each entry powers one pSEO page: /car-rental/[slug].
// Hand-picked low-KD / high-volume airports for the MVP (see project memory).
// `status: "ready"` = passes the data-gate and is indexable; anything else is
// held back (noindex) until it has real price + logistics data.
//
// Keep the per-airport fields genuinely different (terminals, rental-center
// logistics, local driving notes, popular routes) — that difference is what
// keeps these pages off Google's thin-content radar.

export const AIRPORTS = [
  {
    slug: "phoenix-sky-harbor",
    iata: "PHX",
    name: "Phoenix Sky Harbor International Airport",
    city: "Phoenix",
    region: "Arizona",
    country: "United States",
    countryCode: "US",
    currency: "USD",
    lat: 33.4342,
    lng: -112.0116,
    rentalCenter:
      "All rental brands sit in one consolidated Rental Car Center, about 3 miles from the terminals. The free PHX Sky Train runs 24/7 from each terminal to the 44th Street station, then a shuttle finishes the trip — budget 20-25 minutes.",
    localDriving:
      "Loop 101 and Loop 202 ring the city, so most trips skip surface streets entirely. No toll roads in metro Phoenix. Summer asphalt gets brutally hot — check that the A/C blows cold before you leave the lot.",
    popularRoutes: ["Grand Canyon", "Sedona", "Tucson", "Las Vegas"],
    terminals: ["Terminal 3", "Terminal 4"],
    status: "ready",
  },
  {
    slug: "honolulu",
    iata: "HNL",
    name: "Daniel K. Inouye International Airport",
    city: "Honolulu",
    region: "Hawaii",
    country: "United States",
    countryCode: "US",
    currency: "USD",
    lat: 21.3187,
    lng: -157.9224,
    rentalCenter:
      "A Consolidated Rental Car Facility opened next to the terminals — you walk or take a short shuttle rather than driving off-airport. Oahu demand spikes around cruise-ship turnarounds, so book early for weekend pickups.",
    localDriving:
      "H-1 is the island's spine and jams hard at rush hour between Honolulu and the west side. No tolls. A compact is plenty for Oahu; you only want an SUV if you're loading surfboards or doing the North Shore with a crowd.",
    popularRoutes: ["North Shore", "Waikiki", "Hanauma Bay", "Kailua"],
    terminals: ["Terminal 1", "Terminal 2"],
    status: "ready",
  },
  {
    slug: "seattle-tacoma",
    iata: "SEA",
    name: "Seattle-Tacoma International Airport",
    city: "Seattle",
    region: "Washington",
    country: "United States",
    countryCode: "US",
    currency: "USD",
    lat: 47.4502,
    lng: -122.3088,
    rentalCenter:
      "The Rental Car Facility is about 1.5 miles north of the terminal. Shuttles leave from the third floor of the parking garage every few minutes and take roughly 10 minutes.",
    localDriving:
      "I-5 and I-405 both clog badly in peak hours — give yourself slack returning the car before a flight. The SR 520 and SR 99 tunnel are tolled electronically (Good To Go!); ask whether the rental handles tolls or you'll get a service fee later.",
    popularRoutes: ["Mount Rainier", "Olympic National Park", "Leavenworth", "Portland"],
    terminals: ["Main Terminal"],
    status: "ready",
  },
  {
    slug: "san-francisco",
    iata: "SFO",
    name: "San Francisco International Airport",
    city: "San Francisco",
    region: "California",
    country: "United States",
    countryCode: "US",
    currency: "USD",
    lat: 37.6213,
    lng: -122.379,
    rentalCenter:
      "Take the free AirTrain Red Line to the Rental Car Center — every brand is under one roof there. It runs around the clock and the ride is about 5 minutes from the terminals.",
    localDriving:
      "Bay Area bridges are tolled and most are now cashless — the Golden Gate in particular bills by plate, so confirm the rental's toll policy or you'll overpay. Parking in the city is scarce and expensive; plan where the car sleeps before you book a hotel.",
    popularRoutes: ["Napa Valley", "Big Sur", "Lake Tahoe", "Yosemite"],
    terminals: ["Terminal 1", "Terminal 2", "Terminal 3", "International Terminal"],
    status: "ready",
  },
  {
    slug: "las-vegas-harry-reid",
    iata: "LAS",
    name: "Harry Reid International Airport",
    city: "Las Vegas",
    region: "Nevada",
    country: "United States",
    countryCode: "US",
    currency: "USD",
    lat: 36.084,
    lng: -115.1537,
    rentalCenter:
      "The Rental Car Center is about 3 miles from the terminals with a dedicated shuttle running 24/7 — plan on 15-20 minutes door to counter. It's one of the busiest rental hubs in the country, so weekend lines move slowly.",
    localDriving:
      "The I-15 and the 215 beltway handle most trips; no tolls in the valley. If you're driving to the Grand Canyon or Zion, take a full-size with range — stretches between gas stations are long and hot.",
    popularRoutes: ["Grand Canyon", "Zion National Park", "Hoover Dam", "Death Valley"],
    terminals: ["Terminal 1", "Terminal 3"],
    status: "ready",
  },
  {
    slug: "denver",
    iata: "DEN",
    name: "Denver International Airport",
    city: "Denver",
    region: "Colorado",
    country: "United States",
    currency: "USD",
    countryCode: "US",
    lat: 39.8561,
    lng: -104.6737,
    rentalCenter:
      "Rental counters and cars are at an off-terminal facility reached by shuttle from level 5, doors 505-513 (east) and 504-512 (west). The airport sits far out on the plains, so the shuttle plus the drive in means a real 30-40 minutes before you reach the city.",
    localDriving:
      "I-70 west into the mountains is gorgeous but weather turns fast — in winter many rentals require or strongly suggest AWD and chains over the passes. The E-470 toll road rings the east side; it's license-plate billed, so check the toll policy.",
    popularRoutes: ["Rocky Mountain National Park", "Boulder", "Aspen", "Colorado Springs"],
    terminals: ["Jeppesen Terminal (A, B, C gates)"],
    status: "ready",
  },
  {
    slug: "new-york-jfk",
    iata: "JFK",
    name: "John F. Kennedy International Airport",
    city: "New York",
    region: "New York",
    country: "United States",
    countryCode: "US",
    currency: "USD",
    lat: 40.6413,
    lng: -73.7781,
    rentalCenter:
      "Brands are split across lots near the terminals rather than one central building — take the free AirTrain to the right stop for your company, which you pick when you book. Allow extra time; it's not a single shuttle.",
    localDriving:
      "Driving in NYC itself is a headache and parking is punishing — most JFK renters are really heading to Long Island, upstate, or New England. Bridges and tunnels into Manhattan are heavily tolled and cashless (E-ZPass / Tolls by Mail).",
    popularRoutes: ["The Hamptons", "Long Island", "Boston", "Upstate New York"],
    terminals: ["Terminal 1", "Terminal 4", "Terminal 5", "Terminal 7", "Terminal 8"],
    status: "ready",
  },
  {
    slug: "miami",
    iata: "MIA",
    name: "Miami International Airport",
    city: "Miami",
    region: "Florida",
    country: "United States",
    countryCode: "US",
    currency: "USD",
    lat: 25.7959,
    lng: -80.287,
    rentalCenter:
      "The MIA Rental Car Center is linked to the terminal by the MIA Mover automated train — free, frequent, about a 5-minute ride. Every major brand is in the one building.",
    localDriving:
      "South Florida runs on tolled expressways (SunPass) — 836, 826, Turnpike — and most are plate-billed, so a rental without a transponder racks up admin fees fast. Confirm the toll setup at the counter. Afternoon thunderstorms in summer flood underpasses.",
    popularRoutes: ["Key West", "Everglades", "Fort Lauderdale", "Naples"],
    terminals: ["North Terminal", "Central Terminal", "South Terminal"],
    status: "ready",
  },
  {
    slug: "london-heathrow",
    iata: "LHR",
    name: "London Heathrow Airport",
    city: "London",
    region: "England",
    country: "United Kingdom",
    countryCode: "GB",
    currency: "GBP",
    lat: 51.47,
    lng: -0.4543,
    rentalCenter:
      "Desks sit in each terminal's arrivals area, but the cars are often in nearby lots reached by a short shuttle — it varies by brand and terminal. Check which terminal your company serves before you land.",
    localDriving:
      "You'll drive on the left, and central London's ULEZ and Congestion Charge apply daily — a rental that trips them bills you back with a fee on top, so avoid driving into the zone unless you must. The M25 orbital is notorious for jams.",
    popularRoutes: ["Cotswolds", "Oxford", "Bath", "Stonehenge"],
    terminals: ["Terminal 2", "Terminal 3", "Terminal 4", "Terminal 5"],
    status: "ready",
  },
  {
    slug: "dubai",
    iata: "DXB",
    name: "Dubai International Airport",
    city: "Dubai",
    region: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    currency: "AED",
    lat: 25.2532,
    lng: 55.3657,
    rentalCenter:
      "Rental desks are in the arrivals halls of Terminals 1 and 3. Pickup is quick by global standards, but you'll need your passport, licence and often an International Driving Permit depending on your nationality.",
    localDriving:
      "Salik toll gates are electronic and automatic — the charge passes through to the renter, usually with a per-day admin fee, so ask how it's handled. Roads are wide and fast; speed cameras are everywhere and fines land on the rental.",
    popularRoutes: ["Abu Dhabi", "Hatta", "Al Ain", "Sharjah"],
    terminals: ["Terminal 1", "Terminal 2", "Terminal 3"],
    status: "ready",
  },
  {
    slug: "faro",
    iata: "FAO",
    name: "Faro Airport",
    city: "Faro",
    region: "Algarve",
    country: "Portugal",
    countryCode: "PT",
    currency: "EUR",
    lat: 37.0144,
    lng: -7.9659,
    rentalCenter:
      "Most desks are right in the arrivals terminal with cars in the adjacent lot — one of the easier pickups in Europe. It's a holiday airport, so cars sell out fast in summer; booking weeks ahead beats the walk-up price badly.",
    localDriving:
      "The A22 motorway along the Algarve is an electronic-only toll (no booths) — rentals handle it with a transponder, but confirm it's fitted or you risk fines. Otherwise driving is easy and distances short between beach towns.",
    popularRoutes: ["Lagos", "Albufeira", "Tavira", "Seville"],
    terminals: ["Main Terminal"],
    status: "ready",
  },
  {
    slug: "atlanta",
    iata: "ATL",
    name: "Hartsfield-Jackson Atlanta International Airport",
    city: "Atlanta",
    region: "Georgia",
    country: "United States",
    countryCode: "US",
    currency: "USD",
    lat: 33.6407,
    lng: -84.4277,
    rentalCenter:
      "The Rental Car Center is reached by the free ATL SkyTrain from the domestic terminal — a 5-minute ride to one building holding every brand. It's the world's busiest airport, so give returns a buffer.",
    localDriving:
      "I-285 (the Perimeter) rings the metro and the downtown Connector (I-75/85) is one of the most congested stretches in the US — avoid it at rush hour. The I-85 Express Lanes are tolled via Peach Pass; check the rental's policy.",
    popularRoutes: ["Savannah", "Blue Ridge Mountains", "Chattanooga", "Athens"],
    terminals: ["Domestic Terminal", "International Terminal"],
    status: "ready",
  },
];

export const READY_AIRPORTS = AIRPORTS.filter((a) => a.status === "ready");

export function getAirport(slug) {
  return AIRPORTS.find((a) => a.slug === slug) || null;
}

// Haversine distance in km — used for the "nearby airports" internal-linking block.
function distanceKm(a, b) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const la1 = (a.lat * Math.PI) / 180;
  const la2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(la1) * Math.cos(la2) * Math.sin(dLng / 2) ** 2;
  return Math.round(2 * R * Math.asin(Math.sqrt(h)));
}

export function nearbyAirports(airport, limit = 3) {
  return READY_AIRPORTS.filter((a) => a.slug !== airport.slug)
    .map((a) => ({ ...a, km: distanceKm(airport, a) }))
    .sort((x, y) => x.km - y.km)
    .slice(0, limit);
}
