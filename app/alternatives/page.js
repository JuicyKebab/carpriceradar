import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Car rental comparison sites compared",
  description:
    "How CarPriceRadar compares to Discover Cars, Kayak, AutoEurope and other car rental comparison sites, and when each one is the right tool.",
  alternates: { canonical: "/alternatives" },
};

const rows = [
  ["CarPriceRadar", "Compares supplier prices by airport and adds the pickup detail (rental-center location, shuttle time, tolls, deposit), then hands off to a booking partner.", "You want the price and what actually happens when you land."],
  ["Discover Cars", "Broker that compares suppliers and books the car through its own checkout. Our booking partner.", "You are ready to book and want a single checkout."],
  ["Kayak", "Metasearch that scans many sites and sends you to the supplier to book.", "You want a wide net of prices across booking sites."],
  ["AutoEurope", "Long-running broker with its own supplier deals and support line.", "You prefer booking through an established broker with phone support."],
  ["Booking.com / Rentalcars", "Large aggregators bundling car rental alongside hotels and flights.", "You are already booking the rest of your trip in one place."],
];

export default function Alternatives() {
  return (
    <main>
      <section className="hero" style={{ paddingBottom: 20 }}>
        <div className="wrap">
          <p className="eyebrow">Alternatives</p>
          <h1>Car rental comparison sites, compared</h1>
          <p className="lead">
            Most comparison sites answer one question: what is the cheapest rate.
            {" "}{SITE.name} answers that too, then adds the part the booking page
            skips, where the rental center is, how long the shuttle takes, and
            which tolls bite on the way out. Here is how the main options line up.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr style={{ textAlign: "left", borderBottom: "2px solid var(--bd, #e4e8ee)" }}>
                  <th style={{ padding: "12px 14px" }}>Tool</th>
                  <th style={{ padding: "12px 14px" }}>What it does</th>
                  <th style={{ padding: "12px 14px" }}>Best when</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid var(--bd, #e4e8ee)" }}>
                    <td style={{ padding: "12px 14px", fontWeight: 700, whiteSpace: "nowrap" }}>{r[0]}</td>
                    <td style={{ padding: "12px 14px" }} className="muted">{r[1]}</td>
                    <td style={{ padding: "12px 14px" }} className="muted">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap" style={{ maxWidth: 680 }}>
          <h2>Where {SITE.name} fits</h2>
          <p className="muted">
            {SITE.name} is not a booking engine, and it does not replace the sites
            above. It compares the live rates for your airport and dates, shows the
            pickup logistics those sites leave out, then sends you to a booking
            partner such as Discover Cars to lock the rate. Use it before you book,
            so you know the deal and what to expect at the counter.
          </p>
          <p className="muted">
            See <Link href="/how-it-works">how it works</Link> or read our{" "}
            <Link href="/disclosure">affiliate disclosure</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
