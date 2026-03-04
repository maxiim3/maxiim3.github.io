import { serve } from "bun";
import index from "./index.html";
import linktree from "./linktree.html";

const server = serve({
  routes: {
    "/robots.txt": new Response(Bun.file("public/robots.txt"), {
      headers: { "Content-Type": "text/plain" },
    }),
    "/cv-en.pdf": new Response(Bun.file("public/cv-en.pdf"), {
      headers: { "Content-Type": "application/pdf" },
    }),
    "/cv-fr.pdf": new Response(Bun.file("public/cv-fr.pdf"), {
      headers: { "Content-Type": "application/pdf" },
    }),

    "/linktree": linktree,

    // Serve index.html for all unmatched routes.
    "/*": index,

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async req => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    // Enable browser hot reloading in development
    hmr: true,

    // Echo console logs from the browser to the server
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
