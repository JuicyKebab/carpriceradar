import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Terms of use",
  description:
    "The terms for using CarPriceRadar. We compare prices and link to partners; we are not the seller.",
  alternates: { canonical: "/terms" },
};

export default function Terms() {
  return (
    <main>
      <section className="hero" style={{ paddingBottom: 20 }}>
        <div className="wrap">
          <p className="eyebrow">The rules</p>
          <h1>Terms of use</h1>
          <p className="lead">
            By using {SITE.name} you accept these terms. Here is the short,
            plain-English version.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 680 }}>
          <h2>What {SITE.name} is</h2>
          <p className="muted">
            {SITE.name} is a free, independent tool that compares car-rental
            prices by airport and explains the pickup logistics. We do not rent
            cars and we are not the seller. When you book, your contract is with
            the rental partner, such as Discover Cars, not with us.
          </p>

          <h2>Prices and accuracy</h2>
          <p className="muted">
            We show rates gathered from partners and keep them as current as we
            can, but we cannot guarantee they are complete or error-free. The
            price that applies is the one shown on the partner&apos;s site at the
            moment you book. Always confirm the vehicle, dates and total there
            before paying. The site is provided &quot;as is&quot; and may change
            or be unavailable at any time.
          </p>

          <h2>Booking links and affiliates</h2>
          <p className="muted">
            Some links are affiliate links: if you book after clicking, we may
            earn a commission at no extra cost to you. It never changes what we
            show you. See our <Link href="/disclosure">affiliate disclosure</Link>.
          </p>

          <h2>Acceptable use</h2>
          <p className="muted">
            Use the site for your own, lawful, personal use. Do not scrape or
            republish its content at scale, interfere with how it runs, or use it
            in any way that breaks the law or infringes anyone&apos;s rights.
          </p>

          <h2>Liability</h2>
          <p className="muted">
            We provide information to help you choose, not advice. To the extent
            the law allows, we are not liable for any loss from your use of the
            site or from a booking you make with a partner. Nothing here limits
            liability that cannot be limited by law.
          </p>

          <h2>Changes and contact</h2>
          <p className="muted">
            If these terms change, the updated version appears here. Questions?
            Reach us via our <Link href="/about">about page</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
