# CarPriceRadar — SEO Action Plan (2026-10-05)

Overall 89/100. Technical foundation is now excellent — the 2026-10-04 warnings (www 301, security headers, home schema, home og:image, FAQPage removal, llms.txt) are all shipped. Three items remain.

## Do now (high ROI, low effort)
1. **Per-airport `og:image`** — add `app/car-rental/[airport]/opengraph-image.js` (city + IATA on brand bg). Fixes blank social cards on all 50 money pages. *Cheap fallback:* add `images:[…]` to the `openGraph` object at `app/car-rental/[airport]/page.js:32`.
2. **Fix llms.txt over-claim** — reword "current rate by car type / how that rate has moved over recent weeks" to match the affiliate-compare + pickup-logistics pivot. Keep trend language out until data exists.

## Decide (strategic)
3. **Price trend: light it up or drop it.** Either seed price history for top airports (module already gates on data) or remove trend from positioning. No straddling. Align H1/llms/copy to the choice.

## Later (growth)
4. **Country hub pages** — publish the held country pillars as real hubs interlinking their airports; targets "car rental [country]" + adds internal-link depth.
5. **Run PSI** on home + a few airport pages to confirm CWV (LCP/INP/CLS); not yet measured.
6. **Hold the quality bar** as airports scale — real per-airport logistics only; don't out-run content with slugs.

## No action
- robots/sitemap/canonicals/HTTPS/redirects — clean.
- Affiliate rel + `/go/` routing — correct.
- FAQPage — correctly removed; keep visible `<details>` Q&A for users/AEO.
- WebSite SearchAction / sitelinks searchbox — skip (no site search).
