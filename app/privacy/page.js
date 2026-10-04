import { SITE } from "@/lib/site";

export const metadata = {
  title: "Privacy policy",
  description:
    "What CarPriceRadar does and does not collect. No accounts, no selling your data, minimal tracking.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <main>
      <section className="hero" style={{ paddingBottom: 20 }}>
        <div className="wrap">
          <p className="eyebrow">Your data</p>
          <h1>Privacy policy</h1>
          <p className="lead">
            {SITE.name} is a price-tracking site, not a data business. Here is
            what that means for you.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: 680 }}>
          <h2>No accounts, no personal data</h2>
          <p className="muted">
            You do not sign in to use {SITE.name}, and we do not ask for your
            name, email or payment details. We never see your booking; that
            happens entirely on the rental partner's own site.
          </p>

          <h2>The prices we store</h2>
          <p className="muted">
            We record car-rental prices per airport over time. That data is
            about rental rates, not about you. It is what powers the trend
            charts on this site.
          </p>

          <h2>Booking links and partner cookies</h2>
          <p className="muted">
            When you click a booking link, you leave {SITE.name} for a partner
            such as Discover Cars. That partner may set a cookie so they can
            credit the referral to us if you book. That cookie and anything you
            do on their site are covered by their own privacy policy, not ours.
            See our <a href="/disclosure">affiliate disclosure</a> for how the
            referral works.
          </p>

          <h2>Analytics</h2>
          <p className="muted">
            If we use privacy-friendly, aggregate analytics to see which pages
            are useful, it is to improve the site, not to profile you. We do not
            sell or share any visitor data.
          </p>

          <h2>Changes and contact</h2>
          <p className="muted">
            If this policy changes, the updated version appears here. Questions
            about your privacy? Reach us via our <a href="/about">about page</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
