// Price-history data moat — the thing competitors' per-airport pages don't have.
//
// Backed by a single Supabase table, hit over the REST API with plain fetch
// (no SDK dependency needed for this handful of calls). Degrades to empty data
// when env vars are absent, so `npm run dev` works before Supabase is wired up.
//
// Table (SQL to create it is in supabase/schema.sql):
//   car_price_history(airport_slug text, category text, price numeric,
//                     currency text, captured_at timestamptz default now())

const URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const ANON_KEY = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const TABLE = "car_price_history";

function headers(key) {
  return { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" };
}

// Read daily-average price for one airport over the last `days`, grouped by day.
// Returns [{ day: "2026-10-01", avg: 41.2, min: 29, count: 6 }, ...] oldest first.
export async function getPriceHistory(airportSlug, days = 90) {
  if (!URL || !ANON_KEY) return [];
  const since = new Date(Date.now() - days * 864e5).toISOString();
  const q =
    `${URL}/rest/v1/${TABLE}` +
    `?airport_slug=eq.${encodeURIComponent(airportSlug)}` +
    `&captured_at=gte.${encodeURIComponent(since)}` +
    `&select=price,captured_at&order=captured_at.asc`;
  try {
    const res = await fetch(q, { headers: headers(ANON_KEY), next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const rows = await res.json();
    const byDay = new Map();
    for (const r of rows) {
      const day = r.captured_at.slice(0, 10);
      const e = byDay.get(day) || { day, sum: 0, min: Infinity, count: 0 };
      e.sum += Number(r.price);
      e.min = Math.min(e.min, Number(r.price));
      e.count += 1;
      byDay.set(day, e);
    }
    return [...byDay.values()].map((e) => ({
      day: e.day,
      avg: Math.round((e.sum / e.count) * 100) / 100,
      min: e.min,
      count: e.count,
    }));
  } catch {
    return [];
  }
}

// Append today's snapshot rows. Called by the daily cron (app/api/snapshot).
export async function writeSnapshot(rows) {
  if (!URL || !SERVICE_KEY) throw new Error("SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not set");
  const res = await fetch(`${URL}/rest/v1/${TABLE}`, {
    method: "POST",
    headers: { ...headers(SERVICE_KEY), Prefer: "return=minimal" },
    body: JSON.stringify(rows),
  });
  if (!res.ok) throw new Error(`snapshot write failed: ${res.status} ${await res.text()}`);
  return rows.length;
}

// Turn a day-series into a tiny inline SVG sparkline (no chart lib).
export function sparklinePath(series, width = 280, height = 48, pad = 4) {
  if (series.length < 2) return null;
  const vals = series.map((d) => d.avg);
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const span = max - min || 1;
  const stepX = (width - pad * 2) / (series.length - 1);
  const pts = vals.map((v, i) => {
    const x = pad + i * stepX;
    const y = pad + (height - pad * 2) * (1 - (v - min) / span);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return { d: `M ${pts.join(" L ")}`, min, max, first: vals[0], last: vals[vals.length - 1] };
}
