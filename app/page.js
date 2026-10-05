import Link from "next/link";
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
          <p className="eyebrow">Independent airport car-rental price checker</p>
          <h1>Compare airport car rental prices, and know exactly where to go when you land</h1>
          <p className="lead">
            We don&apos;t sell the rental. We compare suppliers for your dates and
            show you what the booking page won&apos;t, where the rental center is,
            how long the shuttle takes, which tolls bite, then send you to
            DiscoverCars to lock the rate.
          </p>
          <div className="hero-ctas">
            <Link href="/car-rental" className="btn">See prices + pickup info for your airport</Link>
            <Link href="/how-it-works" className="btn ghost">How it works</Link>
          </div>
          <p className="muted" style={{ marginTop: 14, fontSize: "0.9rem" }}>
            Covering {READY_AIRPORTS.length} airports across the US, Europe and beyond.
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head">
            <h2>Pick your airport</h2>
            <p className="muted">
              Live prices and the pickup logistics that catch travellers out, for each airport below.
            </p>
          </div>
          <div className="grid cols-4">
            {READY_AIRPORTS.map((a) => (
              <Link key={a.slug} href={`/car-rental/${a.slug}`} className="card airport-card">
                <span className="iata">{a.iata}</span>
                <span className="city">{a.city}</span>
                <span className="country">{a.country}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="grid cols-3">
            <div className="card">
              <h3>Compare like for like</h3>
              <p className="muted">
                Current rates per airport across suppliers and car types, for your
                exact dates, so you weigh the same thing instead of one headline
                number.
              </p>
            </div>
            <div className="card">
              <h3>No countdown tricks</h3>
              <p className="muted">
                No fake &quot;1 seat left&quot; timers or inflated strike-through prices. Just
                the live rate and a straight link to book it.
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
