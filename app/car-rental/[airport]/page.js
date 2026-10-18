import Link from "next/link";
import { notFound } from "next/navigation";
import { BUILT_AIRPORTS, READY_AIRPORTS, getAirport, nearbyAirports, currencySymbol, formatDistance } from "@/lib/airports";
import PriceAlertForm from "@/app/components/PriceAlertForm";
import { getPriceHistory, sparklinePath } from "@/lib/priceHistory";
import { AIRPORT_DETAILS } from "@/lib/airportDetails";
import { AIRPORT_DRIVES } from "@/lib/airportDrives";
import { pillarForAirport } from "@/lib/countries";
import { SITE } from "@/lib/site";

function driveTime(mins) {
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60), m = mins % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

export function generateStaticParams() {
  return BUILT_AIRPORTS.map((a) => ({ airport: a.slug }));
}

export async function generateMetadata({ params }) {
  const { airport: slug } = await params;
  const a = getAirport(slug);
  if (!a) return {};
  // Keep the keyword part within ~60 chars so Google only truncates the brand suffix.
  const long = `${a.city} Airport (${a.iata}) car rental, rental car center & return`;
  const short = `${a.city} Airport (${a.iata}) car rental & return`;
  const title = long.length <= 60 ? long : short.length <= 60 ? short : `${a.city} (${a.iata}) car rental & return`;
  return {
    title,
    description: `Car rental at ${a.name} (${a.iata}): compare supplier rates, find the rental car center, and see how pickup, return and fees work.`,
    alternates: { canonical: `/car-rental/${a.slug}` },
    openGraph: { title: `${title} | ${SITE.name}`, type: "article" },
    // Queued airports are built but held back from the index until promoted.
    ...(a.status === "ready" ? {} : { robots: { index: false, follow: true } }),
  };
}

// Airport-specific FAQ — real questions, answered from this airport's own data.
function buildFaq(a) {
  return [
    {
      q: `Where do you pick up a rental car at ${a.city} (${a.iata})?`,
      a: a.rentalCenter,
    },
    {
      q: `Where do you return a rental car at ${a.city} (${a.iata})?`,
      a: `Follow the rental car return signs on the approach roads. Most brands take the car back at the same rental center where you collected it, unless your booking names a different drop-off. Refuel before you return and leave time for the trip back to your terminal.`,
    },
    {
      q: `When is the cheapest time to book a rental car at ${a.iata}?`,
      a: `Prices at ${a.iata} move week to week, so there is no fixed answer. As a rule, booking two to three weeks ahead beats the walk-up rate, and midweek pickups are usually cheaper than weekend ones. Compare your exact dates above before you commit.`,
    },
    {
      q: `Do I need to watch out for tolls driving from ${a.city}?`,
      a: a.localDriving,
    },
    {
      q: `Which car type should I rent at ${a.iata}?`,
      a: `For city trips a compact or economy car is usually enough and cheapest. If you are heading to ${a.popularRoutes[0]} or ${a.popularRoutes[1]}, size up for the luggage and distance. Compare the rate per car type above before deciding.`,
    },
    {
      q: `Does it cost more to book through ${SITE.name} than going direct?`,
      a: `No. You pay the same price the rental company lists either way. If you book through one of our partner links they pay us a commission, not you, and that is what funds the price tracking.`,
    },
  ];
}

export default async function AirportPage({ params }) {
  const { airport: slug } = await params;
  const a = getAirport(slug);
  if (!a) notFound();

  const history = SITE.priceHistoryEnabled ? await getPriceHistory(a.slug, 90) : [];
  const spark = sparklinePath(history);
  const latest = history.length ? history[history.length - 1] : null;
  const trend =
    spark && spark.last != null && spark.first != null
      ? spark.last > spark.first
        ? "up"
        : spark.last < spark.first
          ? "down"
          : "flat"
      : null;
  const faq = buildFaq(a);
  const nearby = nearbyAirports(a, 3);
  // Other indexable airports in the same country, excluding self + the nearby set
  // already shown. Gives a non-geographic internal-link path for users + crawlers.
  const sameCountry = READY_AIRPORTS.filter(
    (x) => x.country === a.country && x.slug !== a.slug && !nearby.some((n) => n.slug === x.slug)
  ).slice(0, 6);
  const pillar = pillarForAirport(a.slug);
  const bookUrl = `/go/dc?a=${a.slug}`;
  const drivesData = AIRPORT_DRIVES[a.slug];
  const climate = drivesData?.climate;
  const drives = drivesData?.drives || [];
  const details = AIRPORT_DETAILS[a.slug];
  const goodToKnow = details
    ? [
        { k: "Suppliers on site", v: details.suppliers },
        { k: "Fees that inflate the rate", v: details.airportFee },
        { k: "When prices peak", v: details.peakSeason },
        { k: "Money-saving tip", v: details.moneyTip },
      ].filter((r) => r.v)
    : [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
          { "@type": "ListItem", position: 2, name: "Airports", item: `${SITE.domain}/car-rental` },
          { "@type": "ListItem", position: 3, name: `${a.city} (${a.iata})`, item: `${SITE.domain}/car-rental/${a.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      // Only claim an offer when we have real price data — never fabricate.
      ...(latest
        ? [
            {
              "@type": "Product",
              name: `Car rental at ${a.name} (${a.iata})`,
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: a.currency,
                lowPrice: latest.min,
                offerCount: latest.count,
                availability: "https://schema.org/InStock",
              },
            },
          ]
        : []),
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <div className="wrap">
        <nav aria-label="Breadcrumb" className="crumb">
          <Link href="/">Home</Link> › <Link href="/car-rental">Airports</Link> › <span aria-current="page">{a.city} ({a.iata})</span>
        </nav>
      </div>

      <section className="hero" style={{ paddingTop: 8, paddingBottom: 24 }}>
        <div className="wrap">
          <h1>{a.city} Airport ({a.iata}) car rental prices</h1>
          <p className="lead">
            {latest
              ? `Prices at ${a.name} move week to week. See the trend, then compare suppliers before you book.`
              : `Compare car rental at ${a.city} Airport (${a.iata}) across suppliers and car types for your exact dates, and see exactly how pickup works before you land.`}
          </p>
        </div>
      </section>

      {/* Price module */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card">
            {SITE.priceHistoryEnabled ? (
              /* Price-history view — active once a live feed populates the trend. */
              <div className="pricebox">
                <div>
                  {latest ? (
                    <>
                      <div className="faint">Recent average, all car types</div>
                      <div className="big">
                        {currencySymbol(a.currency)}
                        {latest.avg} <small>/ day</small>
                      </div>
                      {trend && (
                        <p className="muted" style={{ marginTop: 6 }}>
                          {trend === "down"
                            ? "Prices have eased over the tracked period. This is a reasonable time to book."
                            : trend === "up"
                              ? "Prices have climbed recently. If your dates are flexible, it may pay to wait."
                              : "Prices have held steady over the tracked period."}
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="faint">Live prices</div>
                      <div className="big" style={{ fontSize: "1.6rem" }}>Check today&apos;s rate</div>
                      <p className="muted" style={{ marginTop: 6 }}>
                        Check the live rate now through our partner and come back to watch the trend.
                      </p>
                    </>
                  )}
                  <a href={bookUrl} className="btn accent" rel="sponsored nofollow" target="_blank" style={{ marginTop: 14 }}>
                    {trend === "down" ? `Lock in this rate at ${a.iata}` : `Compare live prices at ${a.iata}`} &rarr; on DiscoverCars
                  </a>
                  <p className="faint" style={{ marginTop: 8, maxWidth: 560 }}>
                    You&apos;ll compare and book on DiscoverCars.com. Same price as
                    booking direct, we never see your card details, and we only earn a
                    commission if you book.
                  </p>
                </div>
                <div>
                  <p className="muted" style={{ fontSize: "0.82rem", fontWeight: 700, marginBottom: 6 }}>Price trend</p>
                  {spark ? (
                    <>
                      <svg className="spark" viewBox="0 0 280 48" preserveAspectRatio="none" role="img" aria-label={`Price trend for ${a.iata}`}>
                        <path d={spark.d} />
                      </svg>
                      <p className="faint" style={{ marginTop: 6 }}>
                        Daily average, last {history.length} days tracked.
                      </p>
                    </>
                  ) : (
                    <p className="faint">Price trend chart appears once we have a few days of data for {a.iata}.</p>
                  )}
                </div>
              </div>
            ) : (
              /* Live-compare view — current default while price history is dormant. */
              <div>
                <div className="faint">Live prices on DiscoverCars, our booking partner</div>
                <div className="big" style={{ fontSize: "1.6rem", marginTop: 4 }}>
                  Compare car rental at {a.city} Airport ({a.iata})
                </div>
                <p className="muted" style={{ marginTop: 8, maxWidth: 560 }}>
                  See current prices across suppliers and car types at {a.name}, for
                  your exact dates, then book the one that fits. No markup, no countdown
                  tricks.
                </p>
                <a href={bookUrl} className="btn accent" rel="sponsored nofollow" target="_blank" style={{ marginTop: 16 }}>
                  Compare live prices at {a.iata} &rarr; on DiscoverCars
                </a>
                <p className="faint" style={{ marginTop: 8, maxWidth: 560 }}>
                  You&apos;ll compare and book on DiscoverCars.com. Same price as
                  booking direct, we never see your card details, and we only earn a
                  commission if you book.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Price-drop alert — captures not-ready visitors + seeds price history */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <PriceAlertForm iata={a.iata} city={a.city} slug={a.slug} />
        </div>
      </section>

      {/* Pickup + driving detail — the proprietary, airport-specific depth */}
      <section>
        <div className="wrap">
          <div className="section-head"><h2>{a.city} ({a.iata}) rental car center: where it is and how to get there</h2></div>
          <div className="card">
            <div className="info-row">
              <div className="k">Rental center</div>
              <div className="v">{a.rentalCenter}</div>
            </div>
            <div className="info-row">
              <div className="k">Driving & tolls</div>
              <div className="v">{a.localDriving}</div>
            </div>
            <div className="info-row">
              <div className="k">Terminals</div>
              <div className="v">{a.terminals.join(", ")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Returning the car — targets "rental car return [airport]" intent */}
      <section>
        <div className="wrap">
          <div className="section-head"><h2>Returning your rental car at {a.city} Airport ({a.iata})</h2></div>
          <div className="card">
            <div className="info-row">
              <div className="k">Where to go</div>
              <div className="v">
                Follow the rental car return signs on the approach roads. Most brands take the car back at the
                same rental center where you collected it, unless your booking names a different drop-off.
              </div>
            </div>
            <div className="info-row">
              <div className="k">Getting to your terminal</div>
              <div className="v">
                The shuttle or train that links the rental center and the terminals runs both ways, so use
                the route described above in reverse.
              </div>
            </div>
            <div className="info-row">
              <div className="k">Fuel</div>
              <div className="v">
                Check your fuel policy. Full-to-full is usually cheapest: refuel a short drive from the airport
                rather than right next to it, and keep the receipt, since a partial tank triggers the rental
                company&apos;s refuelling fee.
              </div>
            </div>
            <div className="info-row">
              <div className="k">Time to allow</div>
              <div className="v">
                Leave time for refuelling, the return inspection and the trip from the rental center to your
                terminal, and hand the car back well before check-in closes.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Good to know — researched, airport-specific depth */}
      {goodToKnow.length > 0 && (
        <section>
          <div className="wrap">
            <div className="section-head"><h2>Good to know before you book at {a.iata}</h2></div>
            <div className="card">
              {goodToKnow.map((r) => (
                <div className="info-row" key={r.k}>
                  <div className="k">{r.k}</div>
                  <div className="v">{r.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Driving from here — distances, times and seasonal weather */}
      {(drives.length > 0 || climate) && (
        <section>
          <div className="wrap">
            <div className="section-head"><h2>Driving from {a.city} ({a.iata})</h2></div>
            <div className="card">
              {climate && (
                <p className="muted" style={{ marginTop: 0 }}>
                  Expect daytime highs around {climate.hotHigh}&deg;C in {climate.hotMonth} and
                  around {climate.coldHigh}&deg;C in {climate.coldMonth}.
                  {climate.hotHigh >= 35 ? " Check the A/C blows cold before you leave the lot in summer." : ""}
                </p>
              )}
              {drives.map((d) => (
                <div className="info-row" key={d.to}>
                  <div className="k">{d.to}</div>
                  <div className="v">{formatDistance(d.km, a)}, about {driveTime(d.mins)} by car</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section>
        <div className="wrap">
          <div className="section-head"><h2>Car rental at {a.city} ({a.iata}): common questions</h2></div>
          {faq.map((f) => (
            <details className="faq" key={f.q}>
              <summary>{f.q}</summary>
              <p className="muted" style={{ margin: 0 }}>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Nearby — internal linking */}
      {pillar && (
        <section>
          <div className="wrap">
            <Link href={`/rent-a-car/${pillar.slug}`} className="card">
              <div className="faint">Country guide</div>
              <div className="big" style={{ fontSize: "1.3rem", marginTop: 4 }}>Renting a car in {pillar.name}</div>
              <p className="muted" style={{ marginTop: 8, marginBottom: 0 }}>
                Licence and IDP rules, insurance, tolls, local driving rules and the common mistakes, for the whole trip.
              </p>
            </Link>
          </div>
        </section>
      )}

      {sameCountry.length > 0 && (
        <section>
          <div className="wrap">
            <div className="section-head"><h2>More car rental in {a.country}</h2></div>
            <div className="grid cols-3">
              {sameCountry.map((n) => (
                <Link key={n.slug} href={`/car-rental/${n.slug}`} className="card airport-card">
                  <span className="iata">{n.iata}</span>
                  <span className="city">{n.city}</span>
                  <span className="country">{n.region}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {nearby.length > 0 && (
        <section>
          <div className="wrap">
            <div className="section-head"><h2>Nearby airports</h2></div>
            <div className="grid cols-3">
              {nearby.map((n) => (
                <Link key={n.slug} href={`/car-rental/${n.slug}`} className="card airport-card">
                  <span className="iata">{n.iata}</span>
                  <span className="city">{n.city}</span>
                  <span className="country">{formatDistance(n.km, a)} away</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
