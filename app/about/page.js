import { SITE } from "@/lib/site";

const CONTACT_EMAIL = "hello@carpriceradar.com";

export const metadata = {
  title: "About",
  description:
    "Why CarPriceRadar exists: airport car-rental prices with the one thing booking sites hide, the price history.",
  alternates: { canonical: "/about" },
};

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.domain,
    description: SITE.description,
    email: CONTACT_EMAIL,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="hero" style={{ paddingBottom: 20 }}>
        <div className="wrap">
          <p className="eyebrow">About</p>
          <h1>Prices with a memory</h1>
          <p className="lead">
            {SITE.name} tracks what a rental car actually costs at the airport,
            and keeps a record of how that price moves, so a "deal" that is
            really a high week gets caught.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 680 }}>
          <h2>Why this exists</h2>
          <p className="muted">
            Airport car rental is one of the few things you book where the price
            swings wildly and you have no idea whether today's number is good.
            Booking sites show a single rate and a countdown timer. They never
            show you where that rate has been. {SITE.name} does. For each airport
            we record the going rate every day and draw the trend, so you can
            tell a genuine low from a manufactured one.
          </p>

          <h2>How we stay honest</h2>
          <p className="muted">
            We make money when you book through a partner link, at no extra cost
            to you. We do not take payment to rank suppliers, and the price
            history is recorded the same way whether you book or not. The full
            detail is on our <a href="/disclosure">affiliate disclosure</a> and{" "}
            <a href="/how-it-works">how it works</a> pages.
          </p>

          <h2>Contact</h2>
          <p className="muted">
            Spotted a price that looks wrong, or an airport we should add? Email
            us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We read
            every message.
          </p>
        </div>
      </section>
    </main>
  );
}
