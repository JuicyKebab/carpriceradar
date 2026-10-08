import Link from "next/link";
import { notFound } from "next/navigation";
import { BUILT_COUNTRIES, getCountry } from "@/lib/countries";
import { getAirport } from "@/lib/airports";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return BUILT_COUNTRIES.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }) {
  const { country: slug } = await params;
  const c = getCountry(slug);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `/rent-a-car/${c.slug}` },
    openGraph: { title: `${c.metaTitle} | ${SITE.name}`, type: "article" },
    // Draft countries are built but held back from the index until fact-checked.
    ...(c.status === "ready" ? {} : { robots: { index: false, follow: true } }),
  };
}

function InfoSection({ title, rows, note }) {
  if (!rows?.length) return null;
  return (
    <section>
      <div className="wrap">
        <div className="section-head"><h2>{title}</h2></div>
        <div className="card">
          {rows.map((r) => (
            <div className="info-row" key={r.k}>
              <div className="k">{r.k}</div>
              <div className="v">{r.v}</div>
            </div>
          ))}
          {note && <p className="muted" style={{ marginBottom: 0 }}>{note}</p>}
        </div>
      </div>
    </section>
  );
}

export default async function CountryPage({ params }) {
  const { country: slug } = await params;
  const c = getCountry(slug);
  if (!c) notFound();

  const bookUrl = `/go/dc?c=${c.slug}&p=top`;
  const bookUrlBottom = `/go/dc?c=${c.slug}&p=bottom`;
  const airports = (c.airports || []).map(getAirport).filter(Boolean);
  const sources = [...(c.sources || []), ...(c.sourcesExtra || [])];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.domain },
          { "@type": "ListItem", position: 2, name: "Car rental", item: `${SITE.domain}/car-rental` },
          { "@type": "ListItem", position: 3, name: `${c.name} guide`, item: `${SITE.domain}/rent-a-car/${c.slug}` },
        ],
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <div className="wrap">
        <nav aria-label="Breadcrumb" className="crumb">
          <Link href="/">Home</Link> › <Link href="/car-rental">Car rental</Link> › <span aria-current="page">{c.name} guide</span>
        </nav>
      </div>

      <section className="hero" style={{ paddingTop: 8, paddingBottom: 24 }}>
        <div className="wrap">
          <h1>{c.h1}</h1>
          <p className="lead">{c.lead}</p>
          <p className="faint" style={{ marginTop: 8 }}>Last checked {c.verified}. Rules differ by rental company, so confirm yours at booking.</p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card">
            <div className="faint">Live prices via our booking partner</div>
            <div className="big" style={{ fontSize: "1.6rem", marginTop: 4 }}>Compare car rental in {c.name}</div>
            <p className="muted" style={{ marginTop: 8, maxWidth: 560 }}>
              See current prices across suppliers and car types for your exact dates, then book the one that fits.
            </p>
            <a href={bookUrl} className="btn accent" rel="sponsored nofollow" target="_blank" style={{ marginTop: 16 }}>
              Compare live prices in {c.name}
            </a>
            <p className="faint" style={{ marginTop: 8 }}>
              Free for you. Same price as booking direct. We only earn a commission if you book.
            </p>
          </div>
        </div>
      </section>

      <InfoSection title={`What you need to rent a car in ${c.name}`} rows={c.requirements} />
      <InfoSection title={`How much does it cost to rent a car in ${c.name}?`} rows={c.costs} note={c.costsNote} />
      <InfoSection title={`Car rental insurance in ${c.name}: what each cover does`} rows={c.insurance} note={c.insuranceTip} />
      <InfoSection title={`Which car to rent in ${c.name}`} rows={c.roads} />
      <InfoSection title={`Driving rules and tolls in ${c.name}`} rows={c.rules} />
      <InfoSection title="Picking up your car" rows={c.pickup} />
      <InfoSection title="Before you drive away: pickup and return checklist" rows={c.checklist} />
      <InfoSection title={`When and how to book in ${c.name}`} rows={c.booking} />
      <InfoSection title={`Common mistakes when renting a car in ${c.name}`} rows={c.mistakes} />

      <section>
        <div className="wrap">
          <div className="card">
            <div className="big" style={{ fontSize: "1.3rem" }}>Ready to book in {c.name}?</div>
            <p className="muted" style={{ marginTop: 8, maxWidth: 560 }}>
              Compare current prices across suppliers for your exact dates.
            </p>
            <a href={bookUrlBottom} className="btn accent" rel="sponsored nofollow" target="_blank" style={{ marginTop: 12 }}>
              Compare live prices in {c.name}
            </a>
            <p className="faint" style={{ marginTop: 8 }}>
              Free for you. Same price as booking direct. We only earn a commission if you book.
            </p>
          </div>
        </div>
      </section>

      {airports.length > 0 && (
        <section>
          <div className="wrap">
            <div className="section-head"><h2>Compare by airport in {c.name}</h2></div>
            <div className="grid cols-3">
              {airports.map((a) => (
                <Link key={a.slug} href={`/car-rental/${a.slug}`} className="card airport-card">
                  <span className="iata">{a.iata}</span>
                  <span className="city">{a.city}</span>
                  <span className="country">{a.country}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section>
        <div className="wrap">
          <div className="section-head"><h2>Renting a car in {c.name}: common questions</h2></div>
          {[...(c.faqExtra || []), ...c.faq].map((f) => (
            <details className="faq" key={f.q}>
              <summary>{f.q}</summary>
              <p className="muted" style={{ margin: 0 }}>{f.a}</p>
            </details>
          ))}
          <details className="faq">
            <summary>{`Does it cost more to book through ${SITE.name} than going direct?`}</summary>
            <p className="muted" style={{ margin: 0 }}>
              No. You pay the same price the rental company lists either way. If you book through one of our partner links they pay us a commission, not you.
            </p>
          </details>
        </div>
      </section>

      {sources.length > 0 && (
        <section>
          <div className="wrap">
            <div className="section-head"><h2>Sources</h2></div>
            <div className="card">
              <p className="muted" style={{ marginTop: 0 }}>
                Compiled from the rental companies and guides below, last checked {c.verified}. Always confirm the current rules with your rental company before you travel.
              </p>
              <ul className="muted" style={{ marginBottom: 0 }}>
                {sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} rel="noopener nofollow" target="_blank">{s.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
