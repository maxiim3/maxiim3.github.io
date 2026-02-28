#!/usr/bin/env bun
import path from "path";

const dist = path.resolve("dist");

Bun.serve({
  port: 4173,
  static: {
    "/": new Response(Bun.file(path.join(dist, "index.html"))),
    "/robots.txt": new Response(Bun.file("public/robots.txt"), {
      headers: { "Content-Type": "text/plain" },
    }),
  },
  fetch(req) {
    const url = new URL(req.url);
    const filePath = path.join(dist, url.pathname);
    const file = Bun.file(filePath);
    return new Response(file);
  },
});

console.log("Production server running at http://localhost:4173");
