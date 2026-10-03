# CarPriceRadar

Airport car-rental price tracker. Next.js 16 (App Router) + Supabase, deployed on
**Cloudflare Workers** via the OpenNext adapter. pSEO: one page per airport with
live price, price history, and pickup logistics.

## Develop

```bash
npm run dev            # localhost:3000 (Cloudflare runtime via OpenNext dev)
```

Runs fine without any env vars — prices/history just stay empty.

### Env (`.env.local`, see `.env.local.example`)

| Var | What |
|-----|------|
| `NEXT_PUBLIC_DC_MARKER` | Discover Cars affiliate marker (`a_aid`). Self-serve signup, no company needed. |
| `SUPABASE_URL` / `SUPABASE_ANON_KEY` | Read price history. |
| `SUPABASE_SERVICE_ROLE_KEY` | Write daily snapshots (cron only). |
| `CRON_SECRET` | Protects `/api/snapshot`. |

Create the table once: run `supabase/schema.sql` in the Supabase SQL editor.

## Deploy (Cloudflare)

Domain `carpriceradar.com` is already on Cloudflare — point it at the Worker.

```bash
npm run preview        # build + run the Worker locally
npm run deploy         # build + deploy to Cloudflare Workers
```

Set production secrets (not in wrangler.jsonc):

```bash
npx wrangler secret put NEXT_PUBLIC_DC_MARKER
npx wrangler secret put SUPABASE_URL
npx wrangler secret put SUPABASE_ANON_KEY
npx wrangler secret put SUPABASE_SERVICE_ROLE_KEY
npx wrangler secret put CRON_SECRET
```

First deploy creates the Worker; then bind the custom domain in the Cloudflare
dashboard (Workers > carpriceradar > Settings > Domains) to `carpriceradar.com`.

## Daily price snapshot (cron) — wire when the feed is ready

`fetchLivePrices()` in `app/api/snapshot/route.js` is a stub returning `[]`, so the
cron would write nothing yet. Once it returns real rates:

1. Add to `wrangler.jsonc`: `"triggers": { "crons": ["0 10 * * *"] }`
2. Add a `scheduled()` handler. Simplest: a thin wrapper worker that re-exports
   OpenNext's `fetch` and calls `/api/snapshot` with the `CRON_SECRET` bearer on
   schedule. (Cloudflare cron triggers invoke `scheduled()`, not an HTTP path.)

Until then, leave the trigger out so deploys don't register a no-op cron.

## Structure

- `lib/airports.js` — airport seed + data-gate (`status: "ready"`) + nearby lookup
- `lib/priceHistory.js` — Supabase read/write + sparkline (no chart lib, no SDK)
- `lib/discovercars.js` — affiliate deep link
- `app/car-rental/[airport]/page.js` — the pSEO template
- `app/api/snapshot/route.js` — daily snapshot writer (feed TODO)
- `supabase/schema.sql` — the one table
