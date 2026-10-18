import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { SITE } from "@/lib/site";
import CookieConsent from "./components/CookieConsent";

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
        <Link href="/" className="logo">
          <span className="dot" aria-hidden />
          {SITE.name}
        </Link>
        <nav className="nav">
          <Link href="/car-rental">Airports</Link>
          <Link href="/how-it-works">How it works</Link>
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
            We compare live rental prices and add the airport pickup detail other
            sites skip. Booking links go to our partners, who may pay us a
            commission. It never changes the price you pay.
          </p>
        </div>
        <div>
          <p>
            <Link href="/car-rental">All airports</Link>
            <br />
            <Link href="/car-rental-fees">Airport fees compared</Link>
            <br />
            <Link href="/how-it-works">How it works</Link>
            <br />
            <Link href="/about">About</Link>
            <br />
            <Link href="/disclosure">Affiliate disclosure</Link>
            <br />
            <Link href="/alternatives">Alternatives</Link>
            <br />
            <Link href="/privacy">Privacy</Link>
            <br />
            <Link href="/terms">Terms</Link>
            <br />
            <a href="https://www.instagram.com/carpriceradar/" target="_blank" rel="me noopener">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61595340780773" target="_blank" rel="me noopener">Facebook</a>
          </p>
          <p className="faint">© {"2026"} {SITE.name}</p>
        </div>
      </div>
    </footer>
  );
}

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.domain}/#org`,
      name: SITE.name,
      url: SITE.domain,
      description: SITE.description,
      knowsAbout: ["airport car rental", "car hire", "rental car pickup", "car rental prices", "airport transport"],
      ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
    },
    { "@type": "WebSite", "@id": `${SITE.domain}/#site`, name: SITE.name, url: SITE.domain, publisher: { "@id": `${SITE.domain}/#org` } },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c") }} />
        <a href="#main" className="skip-link">Skip to content</a>
        <Header />
        <div id="main">{children}</div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
