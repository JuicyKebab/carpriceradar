import { NextResponse } from "next/server";
import { READY_AIRPORTS } from "@/lib/airports";
import { writeSnapshot } from "@/lib/priceHistory";

export const dynamic = "force-dynamic";

const CRON_SECRET = process.env.CRON_SECRET;

// TODO (price feed): return today's rates for one airport as
//   [{ category: "economy", price: 29.0 }, ...]
// Wire this to the Discover Cars affiliate feed once approved, or to a daily
// read of the figures your own embedded widget returns. Until then it returns
// nothing and the snapshot writes nothing — we never store invented prices.
async function fetchLivePrices(/* airport */) {
  return [];
}

export async function GET(req) {
  const auth = req.headers.get("authorization");
  if (!CRON_SECRET || auth !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const capturedAt = new Date().toISOString();
  let written = 0;
  const skipped = [];

  for (const a of READY_AIRPORTS) {
    const prices = await fetchLivePrices(a);
    if (!prices.length) {
      skipped.push(a.iata);
      continue;
    }
    const rows = prices.map((p) => ({
      airport_slug: a.slug,
      category: p.category,
      price: p.price,
      currency: a.currency,
      captured_at: capturedAt,
    }));
    written += await writeSnapshot(rows);
  }

  return NextResponse.json({ ok: true, written, skipped });
}
