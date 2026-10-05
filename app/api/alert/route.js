import { NextResponse } from "next/server";
import { getAirport } from "@/lib/airports";

export const dynamic = "force-dynamic";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  const email = String(body.email || "").trim().toLowerCase();
  const slug = String(body.slug || "").trim();
  const pickup_date = body.pickup_date || null;

  // Only accept a slug we own (no open write surface) + a real email.
  if (!EMAIL_RE.test(email) || !getAirport(slug)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  if (!SUPABASE_URL || !SERVICE_KEY) {
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/price_alerts`, {
      method: "POST",
      headers: {
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
        "Content-Type": "application/json",
        // Ignore duplicate (airport, email, date) so a re-submit is idempotent.
        Prefer: "return=minimal,resolution=ignore-duplicates",
      },
      body: JSON.stringify({ airport_slug: slug, email, pickup_date }),
      signal: AbortSignal.timeout(2500),
    });
    if (!res.ok && res.status !== 409) {
      return NextResponse.json({ error: "store failed" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: "timeout" }, { status: 504 });
  }

  return NextResponse.json({ ok: true });
}
