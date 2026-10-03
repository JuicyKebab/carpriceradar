import { notFound } from "next/navigation";
import { READY_AIRPORTS, getAirport, nearbyAirports } from "@/lib/airports";
import { getPriceHistory, sparklinePath } from "@/lib/priceHistory";
import { discoverCarsLink } from "@/lib/discovercars";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return READY_AIRPORTS.map((a) => ({ airport: a.slug }));
}

export async function generateMetadata({ params }) {
  const { airport: slug } = await params;
  const a = getAirport(slug);
  if (!a) return {};
  const title = `${a.city} Airport (${a.iata}) car rental prices`;
  return {
    title,
    description: `Current car-rental prices at ${a.name} (${a.iata}), how the rate has moved recently, and how pickup works. Compare suppliers before you book in ${a.city}.`,
    alternates: { canonical: `/car-rental/${a.slug}` },
    openGraph: { title: `${title} | ${SITE.name}`, type: "article" },
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
      q: `When is the cheapest time to book a rental car at ${a.iata}?`,
      a: `Prices at ${a.iata} move week to week, so there is no fixed answer. Check the price trend on this page: booking a few weeks ahead usually beats the walk-up rate, and our chart shows whether the current week is high or low versus recent ones.`,
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

  const history = await getPriceHistory(a.slug, 90);
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
  const bookUrl = discoverCarsLink(a);

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="wrap">
        <nav aria-label="Breadcrumb" className="crumb">
          <a href="/">Home</a> › <a href="/car-rental">Airports</a> › <span aria-current="page">{a.city} ({a.iata})</span>
        </nav>
      </div>

      <section className="hero" style={{ paddingTop: 8, paddingBottom: 24 }}>
        <div className="wrap">
          <h1>{a.city} Airport ({a.iata}) car rental prices</h1>
          <p className="lead">
            {latest
              ? `Prices at ${a.name} move week to week. See the trend, then compare suppliers before you book.`
              : `Compare live rental prices at ${a.name}. We're building the price history here, so check back to watch the trend.`}
          </p>
        </div>
      </section>

      {/* Price + trend module */}
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card">
            <div className="pricebox">
              <div>
                {latest ? (
                  <>
                    <div className="faint">Recent average, all car types</div>
                    <div className="big">
                      {a.currency === "USD" ? "$" : a.currency === "GBP" ? "£" : a.currency === "EUR" ? "€" : ""}
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
                    <div className="big" style={{ fontSize: "1.6rem" }}>Check today's rate</div>
                    <p className="muted" style={{ marginTop: 6 }}>
                      We are building the price history for {a.iata}. Check the live
                      rate now through our partner and come back to watch the trend.
                    </p>
                  </>
                )}
                <a href={bookUrl} className="btn accent" rel="sponsored nofollow" target="_blank" style={{ marginTop: 14 }}>
                  {trend === "down" ? `Lock in this rate at ${a.iata}` : `Compare live prices at ${a.iata}`}
                </a>
                <p className="faint" style={{ marginTop: 8 }}>
                  Free for you. Same price as booking direct. We only earn a commission if you book.
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
          </div>
        </div>
      </section>

      {/* Pickup + driving detail — the proprietary, airport-specific depth */}
      <section>
        <div className="wrap">
          <div className="section-head"><h2>Picking up at {a.iata}</h2></div>
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
            <div className="info-row">
              <div className="k">Popular drives</div>
              <div className="v">
                <div className="chips">
                  {a.popularRoutes.map((r) => <span key={r} className="chip">{r}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      {nearby.length > 0 && (
        <section>
          <div className="wrap">
            <div className="section-head"><h2>Nearby airports</h2></div>
            <div className="grid cols-3">
              {nearby.map((n) => (
                <a key={n.slug} href={`/car-rental/${n.slug}`} className="card airport-card">
                  <span className="iata">{n.iata}</span>
                  <span className="city">{n.city}</span>
                  <span className="country">{n.km} km away</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
