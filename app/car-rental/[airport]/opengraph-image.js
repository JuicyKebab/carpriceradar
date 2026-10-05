import { ImageResponse } from "next/og";
import { BUILT_AIRPORTS, getAirport } from "@/lib/airports";
import { SITE } from "@/lib/site";

export const alt = "Airport car rental comparison";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Pre-render one static card per airport at build time (no edge runtime).
export function generateStaticParams() {
  return BUILT_AIRPORTS.map((a) => ({ airport: a.slug }));
}

export default async function Image({ params }) {
  const { airport: slug } = await params;
  const a = getAirport(slug);
  const heading = a ? `${a.city} Airport (${a.iata})` : "Airport car rental";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b5cff 0%, #063aa8 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, opacity: 0.9, display: "flex" }}>
          {SITE.name}
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, marginTop: 24, display: "flex" }}>
          {heading} car rental
        </div>
        <div style={{ fontSize: 30, opacity: 0.85, marginTop: 28, display: "flex" }}>
          Compare suppliers by car type, plus the pickup details, before you book.
        </div>
      </div>
    ),
    { ...size }
  );
}
