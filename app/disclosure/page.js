import { SITE } from "@/lib/site";

export const metadata = {
  title: "Affiliate disclosure",
  description:
    "How CarPriceRadar earns money, which links are affiliate links, and why it never changes the price you pay.",
  alternates: { canonical: "/disclosure" },
};

export default function Disclosure() {
  return (
    <main>
      <section className="hero" style={{ paddingBottom: 20 }}>
        <div className="wrap">
          <p className="eyebrow">Transparency</p>
          <h1>Affiliate disclosure</h1>
          <p className="lead">
            {SITE.name} is reader-supported. Here is exactly how that works, in
            plain terms.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 680 }}>
          <h2>The short version</h2>
          <p className="muted">
            Some of the booking links on this site are affiliate links. If you
            click one and rent a car, the rental partner pays us a commission.
            You pay the same price you would have paid going to them directly.
            It never costs you anything extra.
          </p>

          <h2>Who we partner with</h2>
          <p className="muted">
            Our booking links point to car-rental partners such as Discover
            Cars. When you book through one of their links, a tracking marker
            tells them the booking came from {SITE.name}, and they pay us a
            commission on it. That commission is what funds the price tracking
            you see on every airport page.
          </p>

          <h2>What it does not change</h2>
          <p className="muted">
            We do not accept payment to rank one supplier above another, and no
            partner can buy a better position on this site. The daily price we
            record for each airport is logged the same way whether you book or
            not. The trend line you see is the real one; we have no reason to
            bend it, because we earn the same whether the price is high or low.
          </p>

          <h2>Why we tell you this</h2>
          <p className="muted">
            Because you should know when a link makes us money. US Federal Trade
            Commission guidelines require it, and it is simply the honest thing
            to do. If a link on this site earns us a commission, assume it is an
            affiliate link unless stated otherwise.
          </p>

          <p className="muted">
            Questions? See our{" "}
            <a href="/about">about page</a> for how to reach us.
          </p>
        </div>
      </section>
    </main>
  );
}
