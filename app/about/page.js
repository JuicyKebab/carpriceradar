import Link from "next/link";
import { SITE } from "@/lib/site";
import { READY_AIRPORTS } from "@/lib/airports";

const CONTACT_EMAIL = "hello@carpriceradar.com";

export const metadata = {
  title: "About",
  description:
    "Why CarPriceRadar exists: compare airport car-rental prices across suppliers, with the pickup detail booking sites leave out.",
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
          <h1>Airport car rental without the tricks</h1>
          <p className="lead">
            {SITE.name} compares what a rental car actually costs at the airport
            across suppliers and car types, and adds the pickup detail booking
            sites leave out, so you book on facts, not a countdown timer.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 680 }}>
          {/* TODO: add a founder photo next to this intro (strongest single trust signal). */}
          <h2>Who runs this</h2>
          <p className="muted">
            Hi, I&apos;m Anthony. I built {SITE.name} after one too many airport
            rentals where the price at checkout wasn&apos;t the price at the
            counter, and I couldn&apos;t find out where to actually pick the car up
            until after I&apos;d landed. So I track rates across{" "}
            {READY_AIRPORTS.length} airports and write up the pickup detail, where
            the rental center is, how long the shuttle takes, which tolls bite, for
            each one. Found a price that looks wrong, or an airport I should add?
            Email me directly at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. I read and
            answer every one myself.
          </p>

          <h2>Why this exists</h2>
          <p className="muted">
            Airport car rental is one of the few things you book where the price
            swings wildly between suppliers and you get rushed by a countdown
            timer. {SITE.name} puts the live rates side by side for your dates,
            then tells you the things that actually bite on arrival, where the
            rental center is, how long the shuttle takes, which tolls you hit. The
            stuff a booking page never mentions.
          </p>

          <h2>How we stay honest</h2>
          <p className="muted">
            We make money when you book through a partner link, at no extra cost
            to you. We do not take payment to rank suppliers, and the prices and
            pickup detail you see are the same whether you book or not. The full
            detail is on our <Link href="/disclosure">affiliate disclosure</Link> and{" "}
            <Link href="/how-it-works">how it works</Link> pages.
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
