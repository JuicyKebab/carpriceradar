import Link from "next/link";
import { SITE } from "@/lib/site";
import { READY_AIRPORTS } from "@/lib/airports";
import { AIRPORT_DETAILS } from "@/lib/airportDetails";
import { AIRPORT_DRIVES } from "@/lib/airportDrives";

export const metadata = {
  title: "Airport car rental fees, compared across airports",
  description:
    "The surcharges that inflate on-airport car rental: concession recovery fees, customer facility charges, peak season and climate, compared side by side across the airports we cover. Sourced, dated, free to cite.",
  alternates: { canonical: "/car-rental-fees" },
};

// Alleen airports met gevonden fee-tekst; verbatim tonen (geen prose-parsing/geen verzonnen cijfers).
const ROWS = READY_AIRPORTS
  .map((a) => ({ a, d: AIRPORT_DETAILS[a.slug], dr: AIRPORT_DRIVES[a.slug] }))
  .filter((r) => r.d && r.d.airportFee)
  .sort((x, y) => x.a.country.localeCompare(y.a.country) || x.a.city.localeCompare(y.a.city));

// Veilige aggregaten: uitsluitend uit numerieke velden (climate °C, drive km). Niets geparsed uit prose.
const climates = ROWS.map((r) => r.dr?.climate).filter(Boolean);
const hottest = climates.reduce((m, c) => (c.hotHigh > (m?.hotHigh ?? -99) ? c : m), null);
const hottestRow = ROWS.find((r) => r.dr?.climate === hottest);
const allDrives = ROWS.flatMap((r) => (r.dr?.drives || []).map((d) => ({ ...d, city: r.a.city })));
const longest = allDrives.reduce((m, d) => (d.km > (m?.km ?? 0) ? d : m), null);
const countries = [...new Set(ROWS.map((r) => r.a.country))];

const datasetJsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Airport car rental fees and logistics",
  description:
    "Per-airport car rental surcharges (concession recovery fee, customer facility charge), peak season, and seasonal climate across airports covered by CarPriceRadar.",
  creator: { "@type": "Organization", name: SITE.name, url: SITE.domain },
  url: `${SITE.domain}/car-rental-fees`,
  keywords: ["car rental fees", "airport concession recovery fee", "customer facility charge", "car hire surcharges"],
  isAccessibleForFree: true,
};

export default function CarRentalFees() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd).replace(/</g, "\\u003c") }} />
      <section className="hero" style={{ paddingBottom: 20 }}>
        <div className="wrap">
          <p className="eyebrow">Data</p>
          <h1>Airport car rental fees, compared</h1>
          <p className="lead">
            The quoted base rate is rarely what you pay. On-airport rentals add a concession recovery fee and a
            customer facility charge that booking sites bury. Here they are side by side across {ROWS.length} airports
            in {countries.length} countries, with peak season and climate. Sourced and free to cite, with a link back.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 28 }}>
            <Stat n={`${ROWS.length}`} label="airports compared" />
            <Stat n={`${countries.length}`} label="countries" />
            {hottestRow && <Stat n={`${hottest.hotHigh}°C`} label={`hottest pickup: ${hottestRow.a.city} in ${hottest.hotMonth}`} />}
            {longest && <Stat n={`${longest.km} km`} label={`longest popular drive: ${longest.city} to ${longest.to}`} />}
          </div>

          <div style={{ overflowX: "auto", position: "relative" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 720 }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "2px solid #e5e7eb" }}>
                  <th style={th}>Airport</th>
                  <th style={th}>Country</th>
                  <th style={th}>On-airport surcharges</th>
                  <th style={th}>Peak season</th>
                  <th style={th}>Summer high</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map(({ a, d, dr }) => (
                  <tr key={a.slug} style={{ borderBottom: "1px solid #f0f0f0", verticalAlign: "top" }}>
                    <td style={td}>
                      <Link href={`/car-rental/${a.slug}`}>{a.city} ({a.iata})</Link>
                    </td>
                    <td style={td}>{a.country}</td>
                    <td style={td}>{d.airportFee}</td>
                    <td style={td}>{d.peakSeason}</td>
                    <td style={{ ...td, whiteSpace: "nowrap" }}>{dr?.climate ? `${dr.climate.hotHigh}°C (${dr.climate.hotMonth})` : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="muted" style={{ marginTop: 24, fontSize: 13 }}>
            Figures are the airport&apos;s published fees at the time of research and change over time; always confirm at
            checkout. Compiled by {SITE.name}. Reuse with a link to this page. Per-airport detail and sources on each{" "}
            <Link href="/car-rental">airport page</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}

const th = { padding: "10px 12px", fontWeight: 600 };
const td = { padding: "10px 12px" };

function Stat({ n, label }) {
  return (
    <div style={{ minWidth: 140 }}>
      <div style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.1 }}>{n}</div>
      <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>{label}</div>
    </div>
  );
}
