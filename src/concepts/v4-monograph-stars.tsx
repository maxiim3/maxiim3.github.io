import { useState, type ComponentType } from "react";
import { motion } from "motion/react";
import {
  Github,
  Mail,
  Download,
  ArrowUpRight,
  ChevronDown,
  Feather,
} from "lucide-react";
import { content, type Lang } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

const NostrIcon = ({
  size = 16,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 512 512"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M 286.666 75.634 C 279.792 74.548 274.782 68.2 275.868 61.326 C 276.954 54.452 283.302 49.442 290.176 50.528 C 321.82 55.542 350.798 70.772 372.42 93.75 C 394.044 116.728 407.302 146.166 410.278 177.728 C 411.562 191.092 402.092 202.906 389.14 204.244 C 376.188 205.582 364.762 196.016 363.478 182.73 C 361.238 157.982 350.546 135.372 333.304 118.082 C 316.06 100.792 293.752 89.944 269.066 87.474 C 262.148 86.78 257.062 80.712 257.756 73.794 C 258.45 66.876 264.518 61.79 271.436 62.484 C 300.874 65.454 328.512 78.472 349.736 100.078 C 370.96 121.684 383.886 150.162 386.43 180.792 C 387.046 188.108 391.606 194.276 398.324 196.616 C 405.042 198.956 412.494 196.982 417.212 191.616 C 421.93 186.25 422.93 178.658 419.73 172.228 C 405.486 143.676 379.52 94.076 357.476 71.476 C 335.432 48.876 269.126 0.016 269.126 0.016 L 286.666 75.634 Z" />
    <path d="M 256 96 C 167.634 96 96 167.634 96 256 C 96 344.366 167.634 416 256 416 C 344.366 416 416 344.366 416 256 C 416 167.634 344.366 96 256 96 Z M 256 144 C 317.856 144 368 194.144 368 256 C 368 317.856 317.856 368 256 368 C 194.144 368 144 317.856 144 256 C 144 194.144 194.144 144 256 144 Z" />
    <path d="M 256 192 C 220.654 192 192 220.654 192 256 C 192 291.346 220.654 320 256 320 C 291.346 320 320 291.346 320 256 C 320 220.654 291.346 192 256 192 Z M 256 240 C 264.836 240 272 247.164 272 256 C 272 264.836 264.836 272 256 272 C 247.164 272 240 264.836 240 256 C 240 247.164 247.164 240 256 240 Z" />
  </svg>
);

const MatrixIcon = ({
  size = 16,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M4 2h2v28H4V2zm22 0h2v28h-2V2zm-18 3h2v2H8V5zm0 4h2v2H8V9zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm0 4h2v2H8v-2zm4-20h2v2h-2V5zm4 0h2v2h-2V5zm4 0h2v2h-2V5zm-8 4h2v2h-2V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9zm-8 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2z" />
  </svg>
);

const XIcon = ({
  size = 16,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.15z" />
  </svg>
);

// ─── Clip-reveal animation preset ────────────────────────────────────────────
const reveal = {
  initial: { opacity: 0, y: 32, clipPath: "inset(0 0 100% 0)" },
  whileInView: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
  },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const LANGUAGE_OPTIONS = [
  "en",
  "fr",
  "sr-lat",
] as const satisfies readonly Lang[];
const SKILL_CATEGORIES = ["frontend", "backend", "tools"] as const;

const STAT_ITEMS = [
  {
    value: `${content.stats.yearsExp}+`,
    label: content.skills.stats.yearsExp.label,
  },
  {
    value: `${content.stats.techExp}+`,
    label: content.skills.stats.techExp.label,
  },
  {
    value: `${content.stats.frameworks}`,
    label: content.skills.stats.frameworks.label,
  },
] as const;

const HERO_NAME_INITIAL = { clipPath: "inset(0 0 100% 0)" };
const HERO_NAME_ANIMATE = { clipPath: "inset(0 0 0% 0)" };
const HERO_NAME_TRANSITION = { duration: 1.2, ease: [0.22, 1, 0.36, 1] };
const HERO_COPY_INITIAL = { y: 16 };
const HERO_COPY_ANIMATE = { y: 0 };
const HERO_TITLE_TRANSITION = { duration: 0.6, ease: "easeOut", delay: 0.3 };
const HERO_SUBTITLE_TRANSITION = { duration: 0.6, ease: "easeOut", delay: 0.4 };
const HERO_ACTIONS_TRANSITION = { duration: 0.5, ease: "easeOut", delay: 0.5 };
const SCROLL_HINT_ANIMATE = { y: [0, 6, 0] };
const SCROLL_HINT_TRANSITION = {
  duration: 2.5,
  repeat: Infinity,
  ease: "easeInOut",
};

const SOCIAL_LINKS: readonly {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  { href: content.socials.github, label: "GitHub", icon: Github },
  {
    href: content.socials.twitter,
    label: "X",
    icon: XIcon,
  },
  {
    href: content.socials.nostr,
    label: "Nostr",
    icon: NostrIcon,
  },
  {
    href: `mailto:${content.socials.email}`,
    label: "Email",
    icon: Mail,
  },
];

// ─── Section wrapper ─────────────────────────────────────────────────────────
function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-6 md:px-12 lg:px-24 py-24 md:py-32",
        "border-t border-white/10",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

// ─── Section label — editorial style ─────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      {...fadeUp}
      className="mb-16 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-400"
    >
      {children}
    </motion.h2>
  );
}

// ─── Numbered project card ───────────────────────────────────────────────────
function ProjectCard({
  index,
  title,
  tagline,
  description,
  tech,
  role,
  url,
  viewLabel,
}: {
  index: number;
  title: string;
  tagline: string;
  description: string;
  tech: readonly string[];
  role: string;
  url?: string;
  viewLabel: string;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      {...reveal}
      className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12"
    >
      {/* Number column */}
      <div className="md:col-span-2 flex md:flex-col items-baseline md:items-start gap-4 md:gap-2">
        <span className="font-serif text-6xl md:text-7xl font-thin text-white/8 leading-none select-none">
          {num}
        </span>
      </div>

      {/* Content column */}
      <div className="md:col-span-10">
        <div className="mb-4 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <h3 className="font-serif text-3xl md:text-4xl font-thin tracking-tight text-zinc-100">
            {title}
          </h3>
          <span className="font-sans text-xs font-medium uppercase tracking-[0.15em] text-sky-400">
            {role}
          </span>
        </div>

        <p className="mb-3 font-serif text-lg font-thin italic text-zinc-400 leading-relaxed">
          {tagline}
        </p>

        <p className="mb-6 max-w-2xl font-sans text-sm leading-[1.9] text-zinc-300">
          {description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="border border-white/8 px-3 py-1 font-sans text-[11px] tracking-wide text-zinc-400"
            >
              {t}
            </span>
          ))}
        </div>

        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-sky-400 transition-colors duration-300 hover:text-sky-300"
          >
            {viewLabel}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}

// ─── Experience row ──────────────────────────────────────────────────────────
function ExperienceRow({
  role,
  company,
  period,
  description,
}: {
  role: string;
  company: string;
  period: string;
  description: string;
}) {
  return (
    <motion.article
      {...fadeUp}
      className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12 py-10 border-b border-white/8 last:border-b-0"
    >
      <div className="md:col-span-4 flex flex-col gap-1">
        <h3 className="font-serif text-xl font-thin text-zinc-100">{role}</h3>
        <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
          {company}
        </p>
      </div>
      <div className="md:col-span-6">
        <p className="font-sans text-sm leading-[1.9] text-zinc-300">
          {description}
        </p>
      </div>
      <div className="md:col-span-2 flex items-start md:justify-end">
        <span className="font-sans text-[11px] tracking-[0.15em] text-zinc-400 tabular-nums">
          {period}
        </span>
      </div>
    </motion.article>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function V4MonographStars() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div className="min-h-screen bg-[#111111] text-zinc-100 antialiased">
      {/* ── STARS BACKGROUND ────────────────────────────────────────────── */}
      <StarsBackground
        speed={80}
        factor={0.03}
        starColor="#e4e4e7"
        className="!fixed inset-0 z-0"
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <header className="relative z-10 flex min-h-screen flex-col justify-between px-6 md:px-12 lg:px-24 py-8">
        {/* Top bar — language toggle */}
        <nav aria-label="Language" className="flex justify-end gap-1">
          {LANGUAGE_OPTIONS.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              aria-current={lang === l ? "true" : undefined}
              className={cn(
                "px-3 py-1.5 min-h-[44px] min-w-[44px] flex items-center justify-center font-sans text-[11px] font-medium uppercase tracking-[0.3em] transition-colors duration-300 cursor-pointer",
                lang === l
                  ? "text-zinc-100"
                  : "text-zinc-400 hover:text-sky-400",
              )}
            >
              {l === "sr-lat" ? "SR" : l}
            </button>
          ))}
        </nav>

        {/* Center content */}
        <div className="flex flex-1 flex-col justify-center">
          {/* Name — massive, left-aligned, overflowing */}
          <motion.h1
            initial={HERO_NAME_INITIAL}
            animate={HERO_NAME_ANIMATE}
            transition={HERO_NAME_TRANSITION}
            className="-ml-1 md:-ml-2 font-serif text-[clamp(3.5rem,18vw,16rem)] font-thin leading-[0.85] tracking-tight text-zinc-100 select-none"
          >
            <span className="block">{content.firstName}</span>
            <span className="block text-[0.75em] text-zinc-400">
              {content.lastName}
            </span>
          </motion.h1>

          {/* Title + subtitle */}
          <div className="mt-8 md:mt-12 max-w-lg md:ml-2">
            <motion.p
              initial={HERO_COPY_INITIAL}
              animate={HERO_COPY_ANIMATE}
              transition={HERO_TITLE_TRANSITION}
              className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-zinc-400"
            >
              {content.title[lang]}
            </motion.p>

            <motion.p
              initial={HERO_COPY_INITIAL}
              animate={HERO_COPY_ANIMATE}
              transition={HERO_SUBTITLE_TRANSITION}
              className="mt-6 font-serif text-lg font-thin leading-relaxed text-zinc-300 italic"
            >
              {content.subtitle[lang]}
            </motion.p>

            <motion.div
              initial={HERO_COPY_INITIAL}
              animate={HERO_COPY_ANIMATE}
              transition={HERO_ACTIONS_TRANSITION}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 border border-white/12 px-7 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-300 transition-colors duration-300 hover:border-sky-400 hover:text-sky-400 cursor-pointer"
              >
                {content.cta.explore[lang]}
                <ChevronDown className="h-3 w-3" />
              </button>
              <a
                href={`/cv-${lang}.pdf`}
                download
                className="flex items-center gap-2 px-7 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-400 transition-colors duration-300 hover:text-sky-400"
              >
                <Download className="h-3.5 w-3.5" />
                {content.cta.downloadCV[lang]}
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <motion.div
          className="flex justify-center pb-4"
          animate={SCROLL_HINT_ANIMATE}
          transition={SCROLL_HINT_TRANSITION}
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4 text-zinc-500" />
        </motion.div>
      </header>

      {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
      <main className="relative z-10">
        {/* ── ABOUT ──────────────────────────────────────────────────────── */}
        <Section id="about">
          <SectionLabel>{content.sections.about[lang]}</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <motion.div {...reveal} className="md:col-span-7">
              <p className="font-serif text-2xl md:text-3xl font-thin leading-[1.6] text-zinc-200">
                {content.about[lang]}
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="md:col-span-5 flex flex-row md:flex-col flex-wrap gap-8 md:gap-10 md:items-end md:justify-start md:pt-4"
            >
              {STAT_ITEMS.map((stat) => (
                <div
                  key={stat.label.en}
                  className="flex flex-col gap-1 md:text-right"
                >
                  <span className="font-serif text-5xl font-thin text-zinc-100 tabular-nums leading-none">
                    {stat.value}
                  </span>
                  <span className="mt-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400 whitespace-pre-line">
                    {stat.label[lang]}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </Section>

        {/* ── SELECTED WORK ──────────────────────────────────────────────── */}
        <Section id="projects">
          <SectionLabel>{content.sections.projects[lang]}</SectionLabel>

          <div className="flex flex-col gap-20 md:gap-24">
            {content.projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                index={i}
                title={project.title}
                tagline={project.tagline[lang]}
                description={project.description[lang]}
                tech={project.tech}
                role={project.role[lang]}
                url={project?.url}
                viewLabel={content.cta.viewProject[lang]}
              />
            ))}
          </div>
        </Section>

        {/* ── EXPERIENCE ─────────────────────────────────────────────────── */}
        <Section id="experience">
          <SectionLabel>{content.sections.experience[lang]}</SectionLabel>

          <div>
            {content.experience.map((exp, i) => (
              <ExperienceRow
                key={i}
                role={exp.role[lang]}
                company={exp.company}
                period={exp.period}
                description={exp.description[lang]}
              />
            ))}
          </div>
        </Section>

        {/* ── SIDE PROJECTS ──────────────────────────────────────────────── */}
        <Section id="apps">
          <SectionLabel>{content.sections.apps[lang]}</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-white/8">
            {content.apps.map((app) => (
              <motion.a
                key={app.title}
                {...fadeUp}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-4 border border-white/8 p-8 transition-colors duration-300 hover:bg-white/[0.03]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl font-thin text-zinc-100">
                      {app.title}
                    </h3>
                    <p className="mt-1 font-serif text-sm font-thin italic text-zinc-400">
                      {app.tagline[lang]}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sky-400" />
                </div>
                <p className="font-sans text-sm leading-[1.9] text-zinc-200">
                  {app.description[lang]}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/8 px-3 py-1 font-sans text-[11px] tracking-wide text-zinc-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </Section>

        {/* ── SKILLS ─────────────────────────────────────────────────────── */}
        <Section id="skills">
          <SectionLabel>{content.sections.skills[lang]}</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {SKILL_CATEGORIES.map((cat) => (
              <motion.div key={cat} {...fadeUp}>
                <h3 className="mb-6 font-serif text-lg font-thin text-zinc-200">
                  {content.skills.labels[cat][lang]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {content.skills[cat].map((skill) => (
                    <span
                      key={skill}
                      className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-sans text-[13px] text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── CONTACT ────────────────────────────────────────────────────── */}
        <Section id="contact">
          <SectionLabel>{content.sections.contact[lang]}</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            <motion.div {...reveal} className="md:col-span-7">
              <p className="font-serif text-2xl md:text-3xl font-thin leading-[1.5] text-zinc-300">
                {content.contact.tagline[lang]}
              </p>

              <motion.a
                {...fadeUp}
                href={`mailto:${content.socials.email}`}
                className="group mt-10 inline-flex items-center gap-3 font-serif text-3xl md:text-4xl font-thin text-sky-400 transition-colors duration-300 hover:text-sky-300"
              >
                {content.socials.email}
                <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.a>
            </motion.div>

            <motion.div
              {...fadeUp}
              className="md:col-span-5 flex flex-col gap-4 md:items-end md:justify-end"
            >
              {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={label}
                  className="group flex items-center gap-3 font-sans text-sm text-zinc-400 transition-colors duration-300 hover:text-sky-400"
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium uppercase tracking-[0.2em] text-[11px]">
                    {label}
                  </span>
                </a>
              ))}

              <a
                href={`/cv-${lang}.pdf`}
                download
                className="mt-4 inline-flex items-center gap-2.5 border border-white/10 px-6 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-400 transition-colors duration-300 hover:border-sky-400 hover:text-sky-400 md:self-end"
              >
                <Download className="h-3.5 w-3.5" />
                {content.cta.downloadCV[lang]}
              </a>
            </motion.div>
          </div>
        </Section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-white/10 px-6 md:px-12 lg:px-24 py-10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-serif text-lg font-thin text-zinc-400">
            {content.firstName} {content.lastName}
          </span>
          <div className="flex items-center gap-6">
            <a
              href="/linktree"
              className="font-sans text-[11px] tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
            >
              Linktree
            </a>
            <p className="font-sans text-[11px] tracking-[0.2em] text-zinc-400">
              &copy; {new Date().getFullYear()} &mdash;{" "}
              {lang === "en"
                ? "All rights reserved"
                : lang === "fr"
                  ? "Tous droits réservés"
                  : "Sva prava zadržana"}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
