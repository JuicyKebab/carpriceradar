# CarPriceRadar — SEO Audit

**Site:** https://carpriceradar.com · **Date:** 2026-10-05 · **Stack:** Next.js (SSG) on Cloudflare Workers (OpenNext)
**Method:** LLM-first, evidence-based. Live fetch + source review. CWV not PSI-measured (env limit → *Likely excellent*, static edge).
**Supersedes** the 2026-10-04 audit — most of that run's findings are now fixed (see "Fixed since last audit").

## Overall: 89 / 100 — Good (↑ from 79)

| Category | Weight | Score | Note |
|---|---|---|---|
| Technical SEO | 25% | 95 | robots, sitemap, canonicals, HTTPS, www→apex 301, security headers, clean URLs — all clean |
| Content Quality | 20% | 82 | Genuinely unique per-airport data (suppliers, fees, drives, weather); price-trend promise still unfulfilled |
| On-Page SEO | 15% | 88 | Strong titles/meta/H1/canonical; airport pages miss og:image |
| Schema | 15% | 85 | Org+WebSite on home, BreadcrumbList on airports; FAQPage correctly removed |
| Performance (CWV) | 10% | 95 | Static edge, minimal JS (not PSI-verified) |
| Image Optimization | 10% | 78 | Home og:image ✓; 50 airport pages lack og:image |
| AI Search (GEO) | 5% | 85 | llms.txt live, crawlers open, unique extractable data; llms.txt over-claims price data |

---

## Fixed since 2026-10-04 (verified live)
- ✅ `www`→apex now **301** (was 200 duplicate host)
- ✅ Security headers present: HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy
- ✅ Home now emits **Organization + WebSite** JSON-LD (`@graph`)
- ✅ Home **og:image** wired (`opengraph-image.js` → 1200×630)
- ✅ **FAQPage** JSON-LD removed from airport pages (was ineligible on commercial site)
- ✅ **llms.txt** now 200
- ✅ H1 realigned to pivot ("Compare airport car rental prices, and know the pickup before you land") — no longer over-promises a self-hosted trend

---

## ⚠️ Open — Warnings

### 1. Airport pages have no `og:image` (50 money pages → blank social cards)
- **Evidence:** `app/car-rental/[airport]/page.js:32` → `openGraph: { title, type:"article" }` — no `images`. Live LAX head has no `og:image`; `twitter:card=summary_large_image` with no image.
- **Impact:** Every shared airport URL (X/LinkedIn/Slack/WhatsApp) renders an empty large card → lower CTR on the exact pages meant to earn links/traffic.
- **Fix:** Add `app/car-rental/[airport]/opengraph-image.js` for a per-airport dynamic OG (city + IATA on brand bg) — Next file convention auto-wires `og:image` + `twitter:image`. Cheapest alt: reuse the sitewide image by adding `images:[...]` to the `openGraph` object.

### 2. `llms.txt` over-claims vs delivery
- **Evidence:** llms.txt: *"current rate by car type… how that rate has moved over recent weeks."* Live airport pages show no price number or trend chart — compare is an affiliate hand-off ("Live prices via our booking partner").
- **Impact:** AI engines may cite a capability the page doesn't fulfill → trust mismatch; same helpful-content risk as a title that out-promises the page.
- **Fix:** Reword llms.txt + any lingering "price history/trend" copy to match the current pivot (compare live via partner + pickup logistics). Re-introduce trend language only once `price_history` is populated.

### 3. Value-prop: self-hosted price trend still empty (strategic, not technical)
- **Evidence:** `lib/priceHistory.js` present; no trend/price numbers render live. Pivot reframed the promise around affiliate compare, which lowers urgency vs the 2026-10-04 audit, but trend remains a stated differentiator with no data.
- **Impact:** Thinner moat — pages are a well-built pickup guide + affiliate CTA; the "radar"/trend differentiator isn't live.
- **Fix:** Decide: (a) seed low-volume price history for top airports to light up the trend module (code already gates on data), or (b) drop trend from positioning entirely and lean fully into "best pickup guide + live compare." Don't straddle.

---

## ℹ️ Info / opportunities
- **Country hubs:** 12 country pillars held noindex/out of sitemap (correct while draft). `/car-rental` already groups by country — publishing country hub pages (interlinking their airports) would add a mid-tier internal-link layer and catch "car rental [country]" intent. Ship when content is real.
- **Per-airport entity schema:** optional `Place`/`Airport` or `AggregateOffer` (only when real price data exists — current conditional approach is correct and honest). Lean is fine.
- **Scale discipline:** 50 indexable airports, each ~2,100–2,280 words of genuinely unique data (per-airport supplier desks, fee structures, drive times + weather) — not thin, not doorway. Keep this bar; don't mass-add airports faster than you can write real logistics.

---

## ✅ Passing (keep)
- robots.txt clean: `/api/`, `/admin`, `/go/` disallowed; sitemap + host directive.
- Affiliate hygiene textbook: outbound via `/go/dc?a=…` (robots-blocked) with `rel="sponsored nofollow"`.
- sitemap.xml valid: 50 ready airports + core pages; queued airports withheld (staged indexation).
- Canonicals + metadataBase on every page; apex HTTP→HTTPS 301; www→apex 301.
- Titles/meta unique + keyword-aligned ("[City] Airport ([IATA]) car rental & return"); single H1/page.
- Per-airport content genuinely unique and substantial.
- BreadcrumbList valid on airports; home Org+WebSite graph.
- "Nearby airports" cross-linking + full airport list on home = strong internal hub.

## Environment limitations
- CWV not measured via PageSpeed API in this run. Rated *Likely excellent* (static prerender, edge, minimal blocking JS). Run PSI to confirm LCP/INP/CLS.
