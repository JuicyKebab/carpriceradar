import { NextResponse } from "next/server";
import { getAirport } from "@/lib/airports";
import { getCountry } from "@/lib/countries";
import { discoverCarsLink, discoverCarsCountryLink } from "@/lib/discovercars";

export const dynamic = "force-dynamic";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BOTS = /bot|crawl|spider|preview|facebookexternalhit|slurp|headless/i;

// Only slugs we own resolve, so this can never be used as an open redirect.
function resolveTarget(sp) {
  const airport = sp.get("a");
  if (airport) {
    const a = getAirport(airport);
    return a && { kind: "airport", slug: a.slug, url: discoverCarsLink(a) };
  }
  const country = sp.get("c");
  if (country) {
    const c = getCountry(country);
    return c && { kind: "country", slug: c.slug, url: discoverCarsCountryLink(c) };
  }
  return null;
}

export async function GET(req, { params }) {
  const { partner } = await params;
  const sp = req.nextUrl.searchParams;
  const target = partner === "dc" ? resolveTarget(sp) : null;
  if (!target) return new NextResponse("Not found", { status: 404 });

  const placement = sp.get("p") === "bottom" ? "bottom" : "top";
  if (SUPABASE_URL && SERVICE_KEY && !BOTS.test(req.headers.get("user-agent") || "")) {
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/affiliate_clicks`, {
        method: "POST",
        headers: {
          apikey: SERVICE_KEY,
          Authorization: `Bearer ${SERVICE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({ partner, kind: target.kind, slug: target.slug, placement }),
        signal: AbortSignal.timeout(1500),
      });
    } catch {
      // A failed log must never block the redirect.
    }
  }

  const res = NextResponse.redirect(target.url, 302);
  res.headers.set("Cache-Control", "no-store");
  res.headers.set("X-Robots-Tag", "noindex");
  return res;
}
