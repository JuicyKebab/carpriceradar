import { READY_AIRPORTS } from "@/lib/airports";

export const metadata = {
  title: "Car rental prices by airport",
  description:
    "Browse airport car-rental prices and trends. Pick an airport to see today's rate, how it has moved, and the pickup details that catch travellers out.",
  alternates: { canonical: "/car-rental" },
};

export default function CarRentalHub() {
  const byCountry = {};
  for (const a of READY_AIRPORTS) (byCountry[a.country] ||= []).push(a);

  return (
    <main>
      <section className="hero" style={{ paddingBottom: 20 }}>
        <div className="wrap">
          <p className="eyebrow">All airports</p>
          <h1>Car rental prices by airport</h1>
          <p className="lead">
            Choose an airport to see the current rate by car type, the price trend
            over recent weeks, and exactly how pickup works there.
          </p>
        </div>
      </section>

      {Object.entries(byCountry).map(([country, list]) => (
        <section key={country} style={{ paddingTop: 10 }}>
          <div className="wrap">
            <div className="section-head"><h2>{country}</h2></div>
            <div className="grid cols-4">
              {list.map((a) => (
                <a key={a.slug} href={`/car-rental/${a.slug}`} className="card airport-card">
                  <span className="iata">{a.iata}</span>
                  <span className="city">{a.city}</span>
                  <span className="country">{a.region}</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
