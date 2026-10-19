import Link from "next/link";
import { SITE } from "@/lib/site";
import CopyEmbed from "./CopyEmbed";

export const metadata = {
  title: "Free embeddable car-rental tools",
  description:
    "Two free tools you can embed on any site: a rental counter-insurance (CDW / excess) calculator and a pickup inspection checklist with a tappable damage diagram.",
  alternates: { canonical: "/embed" },
};

const TOOLS = [
  {
    slug: "cdw-calculator",
    name: "Should I buy the rental counter insurance? (CDW / excess) calculator",
    short: "Counter-insurance calculator",
    category: "FinanceApplication",
    blurb:
      "The super-CDW / excess waiver at the desk is usually the priciest way to get cover. This calculator compares the counter cost against a standalone excess policy and credit-card cover for your country and rental length, then gives a plain verdict and the amount you'd save.",
    height: 620,
  },
  {
    slug: "pickup-checklist",
    name: "Pickup inspection checklist + damage diagram",
    short: "Pickup inspection checklist",
    category: "TravelApplication",
    blurb:
      "A printable pre-drive checklist (fuel policy, existing damage, tyres, spare, paperwork, photos) plus a tappable top-down car diagram for marking every scratch before you drive off. Evergreen, no data to go stale.",
    height: 980,
  },
];

function embedCode(slug) {
  return (
    `<iframe src="${SITE.domain}/embed/${slug}.html" title="CarPriceRadar tool" ` +
    `loading="lazy" width="100%" height="640" style="border:0;max-width:640px;width:100%"></iframe>\n` +
    `<script>window.addEventListener("message",function(e){` +
    `if(e.data&&e.data.carpriceradarWidget==="${slug}"){` +
    `var f=document.querySelector('iframe[src*="${slug}"]');` +
    `if(f){f.style.height=e.data.height+"px";}}});</script>`
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": TOOLS.map((t) => ({
    "@type": "WebApplication",
    name: t.name,
    url: `${SITE.domain}/embed#${t.slug}`,
    applicationCategory: t.category,
    operatingSystem: "Web",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    description: t.blurb,
    provider: { "@type": "Organization", name: SITE.name, url: SITE.domain },
  })),
};

export default function EmbedPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <section className="hero" style={{ paddingBottom: 18 }}>
        <div className="wrap">
          <p className="eyebrow">Free tools</p>
          <h1>Embed our car-rental tools, free</h1>
          <p className="lead">
            Two small tools that answer the questions travellers ask at the rental desk. Drop either onto your own
            travel or finance site in one copy-paste. They resize themselves, carry no tracking, and link back here.
          </p>
        </div>
      </section>

      {TOOLS.map((t) => (
        <section key={t.slug} id={t.slug} style={{ paddingTop: 10 }}>
          <div className="wrap">
            <div className="card">
              <h2 style={{ marginBottom: 8 }}>{t.name}</h2>
              <p className="muted" style={{ marginBottom: 18, maxWidth: "62ch" }}>{t.blurb}</p>

              <div style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr", alignItems: "start" }}>
                <div>
                  <p className="faint" style={{ fontWeight: 650, marginBottom: 8 }}>Live preview</p>
                  <iframe
                    src={`/embed/${t.slug}.html`}
                    title={`${t.name} preview`}
                    loading="lazy"
                    style={{ width: "100%", maxWidth: 640, height: t.height, border: 0, borderRadius: 14 }}
                  />
                </div>
                <CopyEmbed code={embedCode(t.slug)} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section>
        <div className="wrap">
          <div className="card">
            <h2 style={{ marginBottom: 8 }}>Using the embed</h2>
            <ul className="muted" style={{ paddingLeft: 20, margin: "0 0 10px", lineHeight: 1.7 }}>
              <li>Paste the snippet wherever you can add raw HTML (most blog platforms allow a custom-HTML block).</li>
              <li>The tiny script lets the widget auto-resize to its own height, so it never scrolls inside the frame.</li>
              <li>Figures in the insurance calculator are typical, approximate benchmarks, not live quotes. Keep them labelled as such.</li>
              <li>A link back to CarPriceRadar is appreciated but not required.</li>
            </ul>
            <p style={{ margin: 0 }}>
              <Link href="/car-rental">Browse airport guides</Link>{" · "}
              <Link href="/how-it-works">How CarPriceRadar works</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
