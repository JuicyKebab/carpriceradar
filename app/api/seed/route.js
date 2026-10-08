import { NextResponse } from "next/server";
import { getAirport } from "@/lib/airports";
import { writeSnapshot } from "@/lib/priceHistory";

export const dynamic = "force-dynamic";

const CRON_SECRET = process.env.CRON_SECRET;

// Manual price seeding for the owner. Low-volume: paste today's lowest rate per
// airport/category from the live Discover Cars results. Writes real observed
// figures to car_price_history so the trend chart is populated before any feed
// exists. Protected by CRON_SECRET (same secret the cron uses).
export async function POST(req) {
  const auth = req.headers.get("authorization");
  if (!CRON_SECRET || auth !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad json" }, { status: 400 });
  }

  const entries = Array.isArray(body?.entries) ? body.entries : [];
  const capturedAt = new Date().toISOString();
  const rows = [];
  for (const e of entries) {
    const a = getAirport(e.airport_slug);
    const price = Number(e.price);
    if (!a || !e.category || !Number.isFinite(price) || price <= 0) continue;
    rows.push({
      airport_slug: a.slug,
      category: e.category,
      price: Math.round(price * 100) / 100,
      currency: a.currency,
      captured_at: capturedAt,
    });
  }

  if (!rows.length) return NextResponse.json({ error: "no valid rows" }, { status: 400 });

  const written = await writeSnapshot(rows);
  return NextResponse.json({ ok: true, written });
}
