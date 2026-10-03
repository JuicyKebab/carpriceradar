import { Geist } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name}: ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: { siteName: SITE.name, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image" },
};

function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <a href="/" className="logo">
          <span className="dot" aria-hidden />
          {SITE.name}
        </a>
        <nav className="nav">
          <a href="/car-rental">Airports</a>
          <a href="/how-it-works">How it works</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          <strong>{SITE.name}</strong>
          <p className="disclaimer">
            We compare live rental prices and track how they move. Booking links
            go to our partners, who may pay us a commission. It never changes the
            price you pay.
          </p>
        </div>
        <div>
          <p>
            <a href="/car-rental">All airports</a>
            <br />
            <a href="/how-it-works">How it works</a>
          </p>
          <p className="faint">© {"2026"} {SITE.name}</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <div id="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
