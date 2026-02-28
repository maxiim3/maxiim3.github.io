import { useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { HoleBackground } from "@/components/animate-ui/components/backgrounds/hole";
import { content, type Lang } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// ─── Accent palette ───────────────────────────────────────────────────────────
const BLUE = "#3b82f6"; // blue-500

// ─── Animation presets ────────────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: "easeOut" },
};

const fadeLeft = {
  initial: { opacity: 0, x: -32 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

// ─── Shared section wrapper (glassmorphism, fixed-bg always visible) ──────────
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
        "relative z-10 bg-black/40 backdrop-blur-md border-t border-white/5",
        className,
      )}
    >
      <div className="mx-auto max-w-4xl px-6 py-24">{children}</div>
    </section>
  );
}

// ─── Section heading with blue left-rule accent ───────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.div {...fadeUp} className="mb-12 flex items-center gap-4">
      <div className="h-6 w-0.5 rounded-full bg-blue-500" aria-hidden="true" />
      <h2 className="text-2xl font-medium text-zinc-100">{children}</h2>
    </motion.div>
  );
}

// ─── Skill pill ───────────────────────────────────────────────────────────────
function SkillPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-sm text-zinc-300 whitespace-nowrap">
      {label}
    </span>
  );
}

// ─── Tech stack pill (blue tint for project cards) ────────────────────────────
function TechPill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-blue-500/50 bg-blue-500/5 px-2.5 py-0.5 text-xs text-blue-300 whitespace-nowrap">
      {label}
    </span>
  );
}

// ─── Project card ─────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  lang,
  index,
}: {
  project: (typeof content.projects)[number];
  lang: Lang;
  index: number;
}) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: index * 0.12 }}
      className={cn(
        "group relative flex flex-col gap-4 rounded-xl",
        "border border-zinc-800/80 bg-black/30 backdrop-blur-sm",
        "pl-6 pr-6 pt-6 pb-6",
        // Left accent border
        "before:absolute before:inset-y-4 before:left-0 before:w-0.5 before:rounded-full before:bg-blue-500/60",
        "hover:before:bg-blue-500 hover:bg-black/50 hover:border-zinc-700",
        "transition-all duration-300",
      )}
    >
      {/* Header row */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-zinc-100">
              {project.title}
            </h3>
            <a
              href={project.url}
              aria-label={`Open ${project.title}`}
              className="text-zinc-600 transition-colors hover:text-blue-400"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="text-sm font-medium text-blue-400">
            {project.tagline[lang]}
          </p>
        </div>

        {/* Year + role badge */}
        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className="text-xs tabular-nums text-zinc-500">
            {project.year}
          </span>
          <span className="rounded-full border border-zinc-800 bg-zinc-900/60 px-2.5 py-0.5 text-xs text-zinc-400">
            {project.role[lang]}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed text-zinc-300">
        {project.description[lang]}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechPill key={t} label={t} />
        ))}
      </div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Concept1() {
  const [lang, setLang] = useState<Lang>("en");

  function scrollToAbout() {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    // Root — black base so no white flash between sections
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100">

      {/* ── FIXED BACKGROUND (always visible behind all content) ─────────── */}
      <HoleBackground
        className="fixed inset-0 z-0 dark"
        strokeColor={BLUE}
        particleRGBColor={[59, 130, 246]}
        glowColor="#1d4ed8"
        gradientColors={["#1e40af", "#3b82f6", "#60a5fa"]}
      />

      {/* ── HERO (100vh) — sits above fixed bg via z-10 ──────────────────── */}
      <section className="relative z-10 flex h-screen w-full flex-col items-center justify-center px-6 text-center">

        {/* Lang toggle — top-right */}
        <div className="absolute right-6 top-6 flex gap-1">
          {(["en", "fr"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium uppercase tracking-widest transition-colors",
                lang === l
                  ? "bg-blue-600 text-white"
                  : "text-zinc-500 hover:text-zinc-200",
              )}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-6xl font-light tracking-tight text-white md:text-8xl"
        >
          {content.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-4 text-lg font-light text-zinc-300 md:text-xl"
        >
          {content.title[lang]}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="mt-3 max-w-md text-sm leading-relaxed text-zinc-500 md:text-base"
        >
          {content.subtitle[lang]}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.38 }}
          className="mt-8 flex gap-10"
        >
          {[
            {
              value: `${content.stats.yearsExp}+`,
              label: lang === "en" ? "Years exp." : "Ans d'exp.",
            },
            {
              value: `${content.stats.projects}+`,
              label: lang === "en" ? "Projects" : "Projets",
            },
            {
              value: `${content.stats.clients}+`,
              label: lang === "en" ? "Clients" : "Clients",
            },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-light text-blue-400 tabular-nums">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-zinc-600">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={scrollToAbout}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            {content.cta.explore[lang]}
            <ChevronDown className="h-4 w-4" />
          </button>

          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-blue-500/60 hover:text-blue-300"
          >
            <Download className="h-4 w-4" />
            {content.cta.downloadCV[lang]}
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-zinc-700" />
        </motion.div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────────── */}
      <Section id="about">
        <SectionHeading>{content.sections.about[lang]}</SectionHeading>

        <div className="grid gap-10 md:grid-cols-[1fr_auto]">
          {/* Bio */}
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-base leading-relaxed text-zinc-300"
          >
            {content.about[lang]}
          </motion.p>

          {/* Stats column */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="flex flex-row gap-6 md:flex-col md:gap-5 md:border-l md:border-zinc-800 md:pl-10"
          >
            {[
              {
                value: `${content.stats.yearsExp}+`,
                label: lang === "en" ? "Years experience" : "Ans d'expérience",
              },
              {
                value: `${content.stats.projects}+`,
                label: lang === "en" ? "Projects shipped" : "Projets livrés",
              },
              {
                value: `${content.stats.clients}+`,
                label: lang === "en" ? "Clients served" : "Clients accompagnés",
              },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-2xl font-light tabular-nums text-blue-400">
                  {stat.value}
                </span>
                <span className="text-xs text-zinc-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── SELECTED WORK ─────────────────────────────────────────────────────── */}
      <Section id="projects">
        <SectionHeading>{content.sections.projects[lang]}</SectionHeading>

        <div className="flex flex-col gap-5">
          {content.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} lang={lang} index={i} />
          ))}
        </div>
      </Section>

      {/* ── EXPERIENCE ────────────────────────────────────────────────────────── */}
      <Section id="experience">
        <SectionHeading>{content.sections.experience[lang]}</SectionHeading>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0 pl-8">
          {/* Vertical track */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800"
            aria-hidden="true"
          />

          {content.experience.map((exp, i) => (
            <motion.div
              key={i}
              {...fadeLeft}
              transition={{ ...fadeLeft.transition, delay: i * 0.12 }}
              className="relative pb-10 last:pb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-8 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-blue-500/60 bg-[#09090b]"
                aria-hidden="true"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              </div>

              {/* Card */}
              <div
                className={cn(
                  "rounded-xl border border-zinc-800/80 bg-black/20 backdrop-blur-sm px-5 py-4",
                  "hover:border-zinc-700 transition-colors",
                )}
              >
                <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-medium text-zinc-100">
                      {exp.role[lang]}
                    </h3>
                    <span className="text-sm text-blue-400">{exp.company}</span>
                  </div>
                  <span className="text-xs tabular-nums text-zinc-600">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {exp.description[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── SKILLS ────────────────────────────────────────────────────────────── */}
      <Section id="skills">
        <SectionHeading>{content.sections.skills[lang]}</SectionHeading>

        <div className="flex flex-col gap-8">
          {(
            [
              { key: "frontend", label: { en: "Frontend", fr: "Frontend" } },
              { key: "backend", label: { en: "Backend", fr: "Backend" } },
              { key: "tools", label: { en: "Tools", fr: "Outils" } },
            ] as const
          ).map((cat, i) => (
            <motion.div
              key={cat.key}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
            >
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-600">
                {cat.label[lang]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.skills[cat.key].map((skill) => (
                  <SkillPill key={skill} label={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── CONTACT ───────────────────────────────────────────────────────────── */}
      <Section id="contact">
        <SectionHeading>{content.sections.contact[lang]}</SectionHeading>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mb-10 text-base leading-relaxed text-zinc-300"
        >
          {lang === "en"
            ? "Available for freelance projects and full-time positions. Let's build something great."
            : "Disponible pour des missions freelance et des postes en CDI. Construisons quelque chose de bien."}
        </motion.p>

        {/* Social links */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="mb-8 flex flex-wrap gap-3"
        >
          {[
            {
              href: content.socials.github,
              icon: Github,
              label: "GitHub",
            },
            {
              href: content.socials.linkedin,
              icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: content.socials.twitter,
              icon: Twitter,
              label: "Twitter",
            },
            {
              href: `mailto:${content.socials.email}`,
              icon: Mail,
              label: content.socials.email,
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className={cn(
                "flex items-center gap-2 rounded-lg border border-zinc-800",
                "px-4 py-2.5 text-sm text-zinc-400",
                "transition-colors hover:border-blue-500/50 hover:text-blue-300",
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </motion.div>

        {/* Download CV */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
        >
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            <Download className="h-4 w-4" />
            {content.cta.downloadCV[lang]}
          </a>
        </motion.div>
      </Section>

      {/* ── FOOTER ────────────────────────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-md px-6 py-8 text-center">
        <p className="text-xs text-zinc-700">
          &copy; {new Date().getFullYear()} {content.name}. Built with precision.
        </p>
      </footer>
    </div>
  );
}
