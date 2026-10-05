# Brand context

Context for the marketing-agi skill (and any copy work). Generated 2026-10-05 from the live site, codebase, and project history. Update as the product evolves.

---

## Product
What it is, in one sentence a stranger would understand:
CarPriceRadar compares airport car-rental prices across suppliers and tells you exactly how pickup works at that airport before you book.

What it actually does (the mechanism, not the promise):
pSEO site, one page per airport (~50 live). Each page consolidates the pickup logistics (rental-center location, shuttle time, tolls, return process, fees, drive times, weather) researched per airport, and routes the user to DiscoverCars via an affiliate link (`/go/dc`, rel=sponsored nofollow) to compare live prices and book. Earns commission on bookings. Prices are written to Supabase daily, building a private price history; the on-site price-trend module is built but dormant (`priceHistoryEnabled=false`) until volume unlocks the DiscoverCars data API.

What it does NOT do (prevents overclaiming):
Does NOT render live prices or a price trend on-site today (the compare happens on DiscoverCars). Does NOT take bookings or payment. Does NOT rank suppliers for money. Is NOT a rental company.

## Audience
Who buys it:
English-speaking leisure travellers booking an airport rental car, 2-8 weeks out, flying into major US/EU/other leisure airports (LAX, LHR, Faro, Malaga, Dubai, Cancun, etc.). Value-conscious, anxious about hidden fees and arrival logistics.

What they believe before they arrive:
"Airport car rental is a rip-off with surprise fees, and I don't know where to actually pick the car up."

What they worry about at 2am:
Getting hit with a mandatory airport surcharge at the counter; not finding the rental center after a long flight; the shuttle/toll unknowns; booking the wrong (too small) car.

What they'd use instead if you didn't exist:
DiscoverCars, Kayak car rental, Rentalcars.com, AutoEurope directly — or a generic Google search + a Reddit/TripAdvisor thread.

## Positioning
The one thing true about us that a competitor could not also say:
We publish the actual pickup briefing per airport (counter location, shuttle time, specific tolls and fees) in one skimmable place, as an independent party with no booking of our own to defend, and we track prices over time rather than only showing today's number.

Category we compete in:
Airport car-rental price comparison / pre-trip planning. We sit one layer above DiscoverCars (we send traffic to it), so the real competitive question is "why not go to DiscoverCars/Kayak directly" — answered by the independent briefing + price intelligence.

Named competitors:
DiscoverCars (also our booking partner), Kayak car rental, Rentalcars.com (Booking.com), AutoEurope.

## Proof
Numbers we can cite (with source and date):
~50 airports covered (live sitemap, Oct 2026). Per-airport, verifiable operating facts (e.g. LAX ~$9/day customer facility charge, 11.11% concession fee) sourced on each page. NOTE: `car_price_history` is currently EMPTY (0 rows) — the daily price-snapshot cron is built but not yet running, so do NOT claim "we track prices daily" until it populates. NO review counts, NO booking volume, NO traffic numbers yet — do not imply any.

Named customers we're allowed to name:
None. No testimonials exist. Never fabricate one.

Claims that need legal sign-off:
Affiliate disclosure must stay accurate (we earn commission, price unchanged for user). Country-pillar driving-law/toll/insurance facts are YMYL-adjacent: publish only after human fact-check; word as "usually" + cite source.

## Voice
How we sound:
Plain, honest, slightly contrarian about industry tricks. Practical traveller-to-traveller. Specific over superlative.

How we never sound:
Hypey, urgent, salesy. No countdown-timer energy, no "unlock/transform/empower."

Words we always use:
compare, live prices, pickup, rental center, shuttle, tolls, honest, same price.

Words we never use:
"cheapest guaranteed", "unbeatable", "exclusive deal", "hurry", em dashes, fake scarcity.

## Constraints
Regulatory or legal limits:
Affiliate FTC-style disclosure required and present. No fabricated stats/reviews. YMYL driving-law content needs sourcing + human check before indexing.

Anything off-limits:
No fake scarcity/countdowns (core brand stance). No AI-render/stock-photo fakery. No auto-publishing unverified country-pillar facts.
