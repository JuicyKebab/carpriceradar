# CarPriceRadar: SEO playbook toegepast (Charles Flo)

2026-10-06. Basis: global skill `seo-playbook`. Live op carpriceradar.com (Cloudflare Workers/OpenNext). Mapt de 13 punten op de huidige staat. Context: project-memory `project_carpriceradar_2026_10_03` + `..._country_pillars_2026_10_04` + `AIRPORT-BACKLOG.md`.

## Kernbevinding
Beter mechanisme (prijs vergelijken + pickup-detail dat boekingssites weglaten) maar nul autoriteit. OpenSEO bevestigt: airport-keywords easy-KD + transactioneel + CPC $5-11, maar **echte bottleneck = domain authority** (zelfde les als Dealoco/GBScout). Prijsdata = de enige echte gap (geen self-serve auto-feed <50k verkeer) → positie = "compare live + know the pickup" (plan B), price-history dormant.

## 1. 0-to-100 launch → N.V.T. (al live)
Resteert uit die fase: entity-/trust-links nog niet gelegd. Doe de dag-1-batch alsnog: Product Hunt, AlternativeTo, SaaSHub, Crunchbase, socials, Github, Medium. Elke URL → `NEXT_PUBLIC_SAME_AS` (schema-code staat nu klaar). Homepage rankt op merknaam (goed: brandable domein).

## 2. Wat NIET doen
- Geen scraping (Discover Cars ToS / Rentalcars robots blokkeren) — al besloten.
- Head "cheapest car rental" KD72 negeren (al besloten).
- Geen 50 pagina's ineens meer promoten zonder indexatie-bewijs (gebeurde bij batch-2, tegen advies in; nu wachten op GSC). Playbook + eigen case: gespreid 87% vs 41%.
- Site-focus strikt airport car rental. eSIM-cross-link (GBScout) bewust pas tonen als pillars ranken — goed, anders off-topic dilutie.
- Geen `/go`-affiliate op GBScout (static). CarPriceradar `/go` bestaat (klik-tracking) — houden.

## 3. Linkplan (playbook: consensus + copy-what-works)
Nog niet gestart (outreach vanaf ~mnd 3 gepland). Playbook-aanzet:
- Reverse-engineer 3-5 realistische SERP-concurrenten per airport-term (niet de giganten). Vind consensus-domeinen (linken naar 2+). OpenSEO backlink-profielen zoals bij flightcomp/gbscout.
- Linkable asset = de pickup/drives/klimaat-data + (later) prijsgeschiedenis. Datastory "car-rental price spread per airport" met echte cijfers zodra ≥2 prijspunten.
- Doeltypes: reisblogs met airport-gidsen, "car rental tips [city]"-artikelen, universiteit/int'l-student-resourcepagina's (umich-type, werkte als idee bij gbscout), nomad/travel-nieuws.
- Blokkade: hello@carpriceradar.com email-routing nog niet opgezet → outreach-afzender ontbreekt (zelfde patroon als gbscout).

## 4. Topical map en uitrol (playbook: longtail-buyer-intent eerst)
Live: 50 ready airports + 12 landen-pillars (draft/noindex) + navigationele intent-secties (rental car center/return). Volgorde (elk pas na indexatie-bewijs van de vorige = "unlock authority first"):
1. **Landen-pillars draft→ready** (user leest na): Iceland 14,8k/KD13, Italy 9,9k, Mexico 6,6k/KD1, France 2,4k/KD0 — hoogste volume, laagste KD eerst. Interne links + sitemap aanzetten per land.
2. **`AIRPORT-BACKLOG.md` waves 3-7** (~76 airports, SJU KD0/14,8k eerst) — PAS na GSC bewijst dat de 50 indexeren/ranken (user-eis "onthoud voor later als het begint te ranken").
3. **Navigationele queries** (rental car center KD0, SFO 135k) al verweven — hoog volume, maar searcher heeft al geboekt (CPC $2 vs $7), dus funnel-top niet geld-top.
4. Info/AEO-gidsen (`car rental requirements/age/debit card [land]`) = secties IN de pillar (0 los volume) — al zo gedaan, goed.
Per nieuwe pagina: wat rankt (page-type) + ROI (volume x CTR x EPC ~$20/boeking Discover Cars) + queue.

## 5. Refresh boven publish
- Prijzen/brandstof in pillars + airportDetails = okt-2026-momentopnames → periodieke verversingsronde (open punt (c)). Dateer + reindex-request na update.
- Price-history dormant (`priceHistoryEnabled:false`): her-activeren bij 50k verkeer (DC-API) of onderhandelde feed → vlag true + `fetchLivePrices()`. Tot dan geen vlakke sparkline (goed, geen stale fake-lijn = playbook stale-cache-regel).

## 6. Information gain (5% uniek)
- Uniek dat concurrenten niet hebben: **pickup-detail** (rental-center, shuttle-tijd, tolls), **drives/klimaat** (OSRM + Open-Meteo), per-airport fees. Al gebouwd = E-E-A-T-moat. Dat IS de info-gain-laag.
- Later: prijsgeschiedenis-datastory zodra feed/seed loopt.

## 7. AEO / GEO (playbook: entity, consensus, corroboratie)
- Entity: schema `knowsAbout` + `sameAs` (NU doorgevoerd in `app/layout.js` site-breed + `lib/site.js`; vul `NEXT_PUBLIC_SAME_AS`). About heeft al named human ("Anthony") + semantic triples.
- Consensus: vermeldingen op reis-/airport-blogs (zonder link volstaat), consistent: "compare airport car-rental prices + pickup detail".
- Corroboratie: /how-it-works + /disclosure + gesourcete pillar-secties (factcheck-agent) = Claude-vriendelijk (bronnen).
- llms.txt = `public/llms.txt` (bestond al, rijk: Core/Trust + beschrijvingen). Linkt /car-rental-hub i.p.v. elke airport los. Bij veel ready countries evt. pillars toevoegen.
- Meet: baseline-vragen in ChatGPT/Gemini/Claude ("car rental at [airport]", "cheapest car rental [city] airport").

## 8. CRO en LTV
- Hoofdhefboom = airport-view → Discover Cars `/go`-klik (al solide CTA + tracking in `affiliate_clicks`). Analyseer per airport/placement welke converteert (`select kind,slug,placement,count(*)`).
- Lead magnet/capture: static+Worker; mogelijk maar nu geen verkeer → playbook: CRO loont pas bij verkeer. Uitstellen. Optie later: "prijsalert voor je airport+datums"-mail (hergebruikt price-history-infra zodra feed er is).
- LTV: reiziger huurt opnieuw → e-mail-haak pas zinvol na feed.

## 9. Content-overlap kanalen
1 airport-/pillar-inzicht → X + Reddit (r/travel, r/churning voor car-rental-hacks, city-subs: behulpzaam) + Product Hunt-launch + korte video. Niet forceren vóór autoriteit.

## 10. Onpage (consensus + over-optimalisatie)
- Per doelterm top-3 openen, consensus matchen + uniek pickup-datapunt toevoegen (wedge). Titels al ≤60 tekens keyword-deel, geen stuffing. Behouden.
- Em dashes al verwijderd (humanizer-pass). Houden.

## 11. Technische checks (playbook: crawled-not-indexed)
- **#1 gap: GSC nog niet gevolgd voor carpriceradar** (geen reminder, anders dan dealoco). Indienen + sitemap + request-index top airports/pillars. MONITOR de 50-ineens-batch (indexatie kan deels hangen).
- www→apex 301 via `proxy.js` al OK. Cookie-consent live.
- Bij draft→ready: sitemap/nav/interne links schakelen automatisch (READY_*-filters) — goed.

## 12. Code-acties
- [x] `lib/site.js`: `sameAs` uit `NEXT_PUBLIC_SAME_AS`.
- [x] `app/layout.js`: `knowsAbout` + `sameAs` + description in site-brede Organization.
- [ ] `NEXT_PUBLIC_SAME_AS` env vullen na profielen + redeploy.
- [x] llms.txt bestond al als `public/llms.txt` (geen actie; mijn route-handler was redundant en verwijderd).
- [ ] Landen-pillars draft→ready (user leest na) + redeploy.
- [ ] GSC + sitemap indienen, 50-batch-indexatie monitoren.
- [ ] Email-routing hello@ (outreach-afzender).

## Meetmomenten
Nu: deploy schema-win + GSC indienen. +2-4 wk: indexatie-check 50 airports → beslis backlog waves 3+. +mnd 3: backlink-outreach. Price-feed = aparte unlock (50k verkeer of deal).
