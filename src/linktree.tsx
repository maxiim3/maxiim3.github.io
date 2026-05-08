import { createRoot } from "react-dom/client";
import { Feather } from "lucide-react";
import { content } from "./data/portfolio";
import "./index.css";

const NostrIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M23.137 2.47A13.27 13.27 0 0 0 16.002 0C8.269 0 2 6.268 2 14.002c0 3.151 1.05 6.062 2.81 8.392L2.09 29.52a.5.5 0 0 0 .65.637l7.184-2.73A13.93 13.93 0 0 0 16 28.004C23.732 28.004 30 21.735 30 14.002A13.97 13.97 0 0 0 23.137 2.47Zm-3.824 18.5-3.95-5.637v5.637h-3.5V9.033h3.288l3.95 5.637V9.033h3.5V20.97Z" />
  </svg>
);

const MatrixIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M4 2h2v28H4V2zm22 0h2v28h-2V2zm-18 3h2v2H8V5zm0 4h2v2H8V9zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm4-20h2v2h-2V5zm4 0h2v2h-2V5zm4 0h2v2h-2V5zm-8 4h2v2h-2V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9zm-8 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2z" />
  </svg>
);

const links = [
  {
    group: "Contact",
    items: [
      { label: "Email", href: `mailto:${content.socials.email}` },
      { label: "GitHub", href: content.socials.github, icon: "github" },
      { label: "Nostr", href: content.socials.nostr, icon: "nostr" },
      { label: "X", href: content.socials.twitter, icon: "x" },
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
                    item.href.startsWith("mailto") || "download" in item
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
