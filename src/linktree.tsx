import { createRoot } from "react-dom/client";
import { content } from "./data/portfolio";
import "./index.css";

const links = [
  {
    group: "Contact",
    items: [
      { label: "Email", href: `mailto:${content.socials.email}` },
      { label: "LinkedIn", href: content.socials.linkedin },
      { label: "GitHub", href: content.socials.github },
      { label: "Twitter / X", href: content.socials.twitter },
    ],
  },
  {
    group: "Apps",
    items: content.apps.map((app) => ({
      label: app.title,
      href: app.url,
      sub: app.tagline.en,
    })),
  },
  {
    group: "Work",
    items: [
      {
        label: "Portfolio",
        href: "https://maxiim3.github.io",
      },
      {
        label: "CV (EN)",
        href: "/cv-en.pdf",
        download: true,
      },
      {
        label: "CV (FR)",
        href: "/cv-fr.pdf",
        download: true,
      },
    ],
  },
];

function Linktree() {
  return (
    <div className="min-h-screen bg-[#111111] text-zinc-100 flex flex-col items-center justify-start px-4 py-16">
      <header className="mb-12 text-center">
        <p className="font-serif text-4xl font-thin tracking-tight text-zinc-100">
          {content.firstName} {content.lastName}
        </p>
        <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.3em] text-zinc-400">
          Front-end Developer
        </p>
      </header>

      <main className="w-full max-w-sm flex flex-col gap-10">
        {links.map((group) => (
          <section key={group.group}>
            <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              {group.group}
            </p>
            <div className="flex flex-col gap-2">
              {group.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  download={"download" in item ? item.download : undefined}
                  target={
                    item.href.startsWith("mailto") ||
                    "download" in item
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    item.href.startsWith("mailto") || "download" in item
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex flex-col gap-0.5 border border-white/10 px-5 py-3.5 transition-colors duration-200 hover:border-sky-400/50 hover:bg-white/[0.03]"
                >
                  <span className="font-sans text-sm font-medium text-zinc-200">
                    {item.label}
                  </span>
                  {"sub" in item && item.sub && (
                    <span className="font-sans text-[11px] text-zinc-500">
                      {item.sub}
                    </span>
                  )}
                </a>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

const root = createRoot(document.getElementById("root")!);
root.render(<Linktree />);
