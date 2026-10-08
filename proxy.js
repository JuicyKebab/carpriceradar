import { NextResponse } from "next/server";

// Canonical host: 301 www.carpriceradar.com -> carpriceradar.com, preserving
// path and query. Both hostnames are custom domains on the same Worker, so
// without this they both serve 200 (duplicate host). Next 16 proxy (the renamed
// middleware convention) runs before routes on the edge.
export function proxy(request) {
  const host = request.headers.get("host") || "";
  if (host === "www.carpriceradar.com") {
    const url = new URL(request.url);
    url.host = "carpriceradar.com";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = {
  // Run on everything except Next internals and static assets.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
