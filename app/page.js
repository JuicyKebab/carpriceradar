import { READY_AIRPORTS } from "@/lib/airports";
import { SITE } from "@/lib/site";

export const metadata = {
  description: SITE.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Airport car rental, with the price history</p>
          <h1>Know what a rental car should cost before you book</h1>
          <p className="lead">
            Rental prices at the airport swing week to week. We track them so you
            can see today's rate next to the last few weeks and tell whether it is
            a good time to lock it in.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 20, flexWrap: "wrap" }}>
            <a href="/car-rental" className="btn">Find your airport</a>
            <a href="/how-it-works" className="btn ghost">How the tracking works</a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>Pick your airport</h2>
            <p className="muted">
              Live prices, pickup logistics and how the rate has moved, for each airport below.
            </p>
          </div>
          <div className="grid cols-4">
            {READY_AIRPORTS.map((a) => (
              <a key={a.slug} href={`/car-rental/${a.slug}`} className="card airport-card">
                <span className="iata">{a.iata}</span>
                <span className="city">{a.city}</span>
                <span className="country">{a.country}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="grid cols-3">
            <div className="card">
              <h3>Live prices</h3>
              <p className="muted">
                We pull current rates per airport and show them by car type, so you
                compare like for like instead of one headline number.
              </p>
            </div>
            <div className="card">
              <h3>The price history</h3>
              <p className="muted">
                Every day we record the going rate. You see the trend, not just a
                snapshot, so a "deal" that is actually a high week gets caught.
              </p>
            </div>
            <div className="card">
              <h3>The airport detail</h3>
              <p className="muted">
                Where the rental center is, how long the shuttle takes, which tolls
                bite. The stuff that costs you time and money on arrival.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
