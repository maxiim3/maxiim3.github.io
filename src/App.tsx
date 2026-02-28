import { useState, lazy, Suspense } from "react";
import "./index.css";

const concepts = {
  "starfield-1": lazy(() => import("./concepts/v3-starfield")),
  "starfield-2": lazy(() => import("./concepts/v3-starfield-2")),
  "starfield-3": lazy(() => import("./concepts/v3-starfield-3")),
  "monograph-1": lazy(() => import("./concepts/v3-1-monograph")),
  "monograph-2": lazy(() => import("./concepts/v3-1-monograph-2")),
  "monograph-3": lazy(() => import("./concepts/v3-1-monograph-3")),
  "terminal-1": lazy(() => import("./concepts/v3-2-terminal")),
  "terminal-2": lazy(() => import("./concepts/v3-2-terminal-2")),
  "terminal-3": lazy(() => import("./concepts/v3-2-terminal-3")),
} as const;

type ConceptKey = keyof typeof concepts;

const aliases: Record<string, ConceptKey> = {
  starfield: "starfield-1",
  monograph: "monograph-1",
  terminal: "terminal-1",
};

const groups = [
  {
    label: "Starfield",
    keys: ["starfield-1", "starfield-2", "starfield-3"] as ConceptKey[],
  },
  {
    label: "Monograph",
    keys: ["monograph-1", "monograph-2", "monograph-3"] as ConceptKey[],
  },
  {
    label: "Terminal",
    keys: ["terminal-1", "terminal-2", "terminal-3"] as ConceptKey[],
  },
];

const labels: Record<ConceptKey, string> = {
  "starfield-1": "Stars",
  "starfield-2": "Gravity",
  "starfield-3": "Hole",
  "monograph-1": "Blobs",
  "monograph-2": "Bubbles",
  "monograph-3": "Gradient",
  "terminal-1": "System Mono",
  "terminal-2": "JetBrains",
  "terminal-3": "Space Mono",
};

function getConceptFromURL(): ConceptKey {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("concept");
  if (raw) {
    if (raw in concepts) return raw as ConceptKey;
    if (raw in aliases) return aliases[raw];
  }
  return "starfield-1";
}

function Loader() {
  return (
    <div className="fixed inset-0 bg-[#09090b] flex items-center justify-center z-50">
      <div className="w-6 h-6 border-2 border-zinc-700 border-t-zinc-300 rounded-full animate-spin" />
    </div>
  );
}

function Switcher({
  current,
  onChange,
}: {
  current: ConceptKey;
  onChange: (key: ConceptKey) => void;
}) {
  const [open, setOpen] = useState(true);

  return (
    <div className="fixed top-4 right-4 z-[100] font-sans select-none">
      <button
        onClick={() => setOpen(!open)}
        className="mb-2 ml-auto flex items-center gap-1.5 rounded-lg bg-white/10 backdrop-blur-md px-3 py-1.5 text-[11px] text-white/70 hover:bg-white/15 transition-colors cursor-pointer border border-white/10"
      >
        <span className="text-[9px]">{open ? "✕" : "◆"}</span>
        <span className="uppercase tracking-[0.15em] font-medium">
          Concepts
        </span>
      </button>

      {open && (
        <div className="rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 p-3 min-w-[160px]">
          {groups.map((group, gi) => (
            <div key={group.label} className={gi > 0 ? "mt-3" : ""}>
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30 mb-1.5 px-1">
                {group.label}
              </div>
              <div className="flex flex-col gap-0.5">
                {group.keys.map((key, i) => (
                  <button
                    key={key}
                    onClick={() => onChange(key)}
                    className={`text-left rounded-md px-2 py-1.5 text-xs transition-colors cursor-pointer ${
                      current === key
                        ? "bg-white/15 text-white"
                        : "text-white/50 hover:text-white/80 hover:bg-white/5"
                    }`}
                  >
                    <span className="text-white/20 mr-1.5 text-[10px] tabular-nums">
                      {i + 1}
                    </span>
                    {labels[key]}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function App() {
  const [conceptKey, setConceptKey] = useState<ConceptKey>(getConceptFromURL);
  const Concept = concepts[conceptKey];

  const handleChange = (key: ConceptKey) => {
    setConceptKey(key);
    const url = new URL(window.location.href);
    url.searchParams.set("concept", key);
    window.history.pushState({}, "", url.toString());
  };

  return (
    <>
      <Switcher current={conceptKey} onChange={handleChange} />
      <Suspense fallback={<Loader />}>
        <Concept />
      </Suspense>
    </>
  );
}

export default App;
