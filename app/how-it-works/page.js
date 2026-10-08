import { SITE } from "@/lib/site";

export const metadata = {
  title: "How it works",
  description:
    "How CarPriceRadar compares airport car-rental prices, adds the pickup detail other sites skip, and makes money without it costing you anything.",
  alternates: { canonical: "/how-it-works" },
};

export default function HowItWorks() {
  return (
    <main>
      <section className="hero" style={{ paddingBottom: 20 }}>
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h1>Prices you can actually trust</h1>
          <p className="lead">
            Most rental sites show you one number and a countdown timer. We show
            live rates across suppliers and the pickup detail they skip, so you can
            judge the deal instead of being rushed into it.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid cols-3">
            <div className="card">
              <h3>1. Compare live rates</h3>
              <p className="muted">
                For each airport you see current prices from our booking partner
                across the main car types, for your exact dates, so you are
                comparing the same thing.
              </p>
            </div>
            <div className="card">
              <h3>2. Know the pickup</h3>
              <p className="muted">
                Where the rental center is, how long the shuttle takes, which tolls
                you hit on the way out. The detail that costs you time and money on
                arrival.
              </p>
            </div>
            <div className="card">
              <h3>3. You decide</h3>
              <p className="muted">
                Book the rate that fits your dates and move on, without the fake
                urgency. Either way you are not guessing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: 680 }}>
          <h2>How we make money</h2>
          <p className="muted">
            When you book through one of our partner links, the rental company
            pays {SITE.name} a commission. You pay the same price you would have
            paid going direct. We do not take payment to rank one supplier over
            another, and the prices and pickup detail you see are the same whether
            you book or not.
          </p>
        </div>
      </section>
    </main>
  );
}
