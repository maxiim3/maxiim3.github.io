#!/usr/bin/env bun
import path from "path";

const dist = path.resolve("dist");

const IMMUTABLE = "public, max-age=31536000, immutable";
const NO_CACHE = "no-cache";

function getHeaders(pathname: string): HeadersInit {
  // Hashed assets (JS, CSS) — cache forever
  if (/\.(js|css)$/.test(pathname)) return { "Cache-Control": IMMUTABLE };
  // HTML — always revalidate
  if (/\.html$/.test(pathname)) return { "Cache-Control": NO_CACHE, "Content-Type": "text/html; charset=utf-8" };
  // PDFs
  if (/\.pdf$/.test(pathname)) return { "Cache-Control": NO_CACHE, "Content-Type": "application/pdf" };
  return {};
}

Bun.serve({
  port: 4173,
  static: {
    "/": new Response(Bun.file(path.join(dist, "index.html")), {
      headers: { "Cache-Control": NO_CACHE, "Content-Type": "text/html; charset=utf-8" },
    }),
    "/robots.txt": new Response(Bun.file("public/robots.txt"), {
      headers: { "Content-Type": "text/plain", "Cache-Control": NO_CACHE },
    }),
  },
  fetch(req) {
    const url = new URL(req.url);
    const filePath = path.join(dist, url.pathname);
    const file = Bun.file(filePath);
    return new Response(file, { headers: getHeaders(url.pathname) });
  },
});

console.log("Production server running at http://localhost:4173");
