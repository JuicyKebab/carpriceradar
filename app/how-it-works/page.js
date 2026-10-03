import { SITE } from "@/lib/site";

export const metadata = {
  title: "How the price tracking works",
  description:
    "How CarPriceRadar collects airport car-rental prices, builds the price history, and makes money without it costing you anything.",
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
            you the number and where it has been, so you can judge it.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="grid cols-3">
            <div className="card">
              <h3>1. We check live rates</h3>
              <p className="muted">
                For each airport we pull current prices from our booking partner
                across the main car types, so you are comparing the same thing.
              </p>
            </div>
            <div className="card">
              <h3>2. We record them daily</h3>
              <p className="muted">
                Every day the rate gets saved. Over weeks that becomes a trend
                line, which is the part no booking page wants you to see.
              </p>
            </div>
            <div className="card">
              <h3>3. You decide</h3>
              <p className="muted">
                Book when the trend says the price is low, or set your dates and
                move on. Either way you are not guessing.
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
            another, and the price history is recorded the same way whether you
            book or not.
          </p>
        </div>
      </section>
    </main>
  );
}
