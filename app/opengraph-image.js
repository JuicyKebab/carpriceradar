import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name}: ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded default social card. Statically generated at build (no request-time
// data), so it ships as a cached static asset — no edge runtime needed.
export default function Image() {
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
        <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1, marginTop: 24, display: "flex" }}>
          Compare airport car rental prices
        </div>
        <div style={{ fontSize: 30, opacity: 0.85, marginTop: 28, display: "flex" }}>
          Live rates by car type, plus the pickup details, before you book.
        </div>
      </div>
    ),
    { ...size }
  );
}
