/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const base = [
      { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    ];
    return [
      {
        // Everything except the embeddable widgets keeps the frame lock.
        source: "/((?!embed/).*)",
        headers: [...base, { key: "X-Frame-Options", value: "SAMEORIGIN" }],
      },
      {
        // The /embed/* widgets are meant to be iframed on third-party sites,
        // so no X-Frame-Options; frame-ancestors * allows any host to embed them.
        source: "/embed/:path*",
        headers: [...base, { key: "Content-Security-Policy", value: "frame-ancestors *" }],
      },
    ];
  },
};

export default nextConfig;

// Lets `next dev` use the Cloudflare Workers runtime + bindings locally.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
