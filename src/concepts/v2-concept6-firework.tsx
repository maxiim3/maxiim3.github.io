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
  Sparkles,
} from "lucide-react";
import { FireworksBackground } from "@/components/animate-ui/components/backgrounds/fireworks";
import { content, type Lang } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// ─── Accent palette ───────────────────────────────────────────────────────────
const ORANGE = "#f97316"; // orange-500

// ─── Animation presets ────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: "easeOut" },
};

// ─── Section wrapper ──────────────────────────────────────────────────────────
// All sections share the same translucent dark treatment so the fireworks
// remain visible through every scroll position.

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
        "relative border-t border-white/5 bg-black/40 backdrop-blur-md",
        className,
      )}
    >
      {children}
    </section>
  );
}

// ─── Stat pill ────────────────────────────────────────────────────────────────

function StatPill({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="text-3xl font-light tabular-nums"
        style={{ color: ORANGE }}
      >
        {value}
      </span>
      <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </span>
    </div>
  );
}

// ─── Project card ─────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  lang,
  delay,
}: {
  project: (typeof content.projects)[number];
  lang: Lang;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      whileHover={{ y: -4 }}
      className={cn(
        "group relative flex flex-col gap-5 rounded-2xl border border-white/5 bg-black/50 p-7",
        "transition-all duration-500",
        "hover:border-orange-500/20 hover:shadow-[0_0_40px_-8px_rgba(249,115,22,0.2)]",
      )}
    >
      {/* Year badge */}
      <div className="flex items-start justify-between gap-4">
        <span
          className="text-xs font-medium uppercase tracking-[0.2em]"
          style={{ color: ORANGE + "99" }} // 60% opacity
        >
          {project.year}
        </span>
        <a
          href={project.url}
          aria-label={`View ${project.title}`}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-zinc-500 hover:text-zinc-300"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      {/* Title + tagline */}
      <div>
        <h3 className="mb-1.5 text-xl font-light text-zinc-100 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm font-light text-zinc-400 leading-relaxed">
          {project.tagline[lang]}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm leading-loose text-zinc-500 flex-1">
        {project.description[lang]}
      </p>

      {/* Role */}
      <p className="text-xs text-zinc-600 font-light">
        {project.role[lang]}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-2 pt-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full px-3 py-1 text-xs font-light text-orange-300/80"
            style={{ background: "rgba(249,115,22,0.08)", border: "1px solid rgba(249,115,22,0.15)" }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

// ─── Experience entry ─────────────────────────────────────────────────────────

function ExperienceEntry({
  exp,
  lang,
  delay,
}: {
  exp: (typeof content.experience)[number];
  lang: Lang;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={cn(
        "flex flex-col gap-3 rounded-2xl border border-white/5 bg-black/30 p-7",
        "hover:border-orange-500/15 hover:bg-black/40 transition-all duration-500",
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p
            className="mb-1 text-xs font-medium uppercase tracking-[0.2em]"
            style={{ color: ORANGE + "80" }}
          >
            {exp.company}
          </p>
          <h3 className="text-lg font-light text-zinc-200 leading-snug">
            {exp.role[lang]}
          </h3>
        </div>
        <span className="shrink-0 text-xs text-zinc-600 tabular-nums pt-0.5">
          {exp.period}
        </span>
      </div>
      <p className="text-sm leading-loose text-zinc-500">
        {exp.description[lang]}
      </p>
    </motion.article>
  );
}

// ─── Skill pill ───────────────────────────────────────────────────────────────

function SkillPill({ label }: { label: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-white/8 bg-white/[0.03]",
        "px-4 py-1.5 text-sm font-light text-zinc-400",
        "hover:border-orange-500/25 hover:text-zinc-300 transition-colors duration-300",
      )}
    >
      {label}
    </span>
  );
}

// ─── Social link ──────────────────────────────────────────────────────────────

function SocialLink({
  href,
  label,
  icon: Icon,
  text,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "flex items-center gap-2.5 rounded-xl border border-white/8 px-5 py-3",
        "text-sm font-light text-zinc-500 transition-all duration-300",
        "hover:border-orange-500/30 hover:text-zinc-300",
      )}
    >
      <Icon className="h-4 w-4" />
      {text}
    </a>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Concept6Firework() {
  const [lang, setLang] = useState<Lang>("en");

  function scrollToAbout() {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="relative min-h-screen text-zinc-100" style={{ scrollBehavior: "smooth" }}>

      {/* ── FIXED BACKGROUND ─────────────────────────────────────────────────── */}
      {/* Canvas-based fireworks sit behind ALL sections at z-0. */}
      <div className="fixed inset-0 z-0 bg-[#09090b]">
        <FireworksBackground
          population={0.5}
          color={["#f97316", "#fb923c", "#fdba74", "#fff7ed"]}
          fireworkSpeed={{ min: 3, max: 6 }}
          particleSize={{ min: 1, max: 3 }}
          className="w-full h-full opacity-60"
        />
      </div>

      {/* ── ALL CONTENT: above the fireworks canvas ───────────────────────────── */}
      <div className="relative z-10">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section className="relative flex h-screen flex-col items-center justify-center px-6 text-center">

          {/* Language toggle */}
          <div className="absolute right-6 top-6 z-20 flex gap-1">
            {(["en", "fr"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-medium uppercase tracking-widest transition-colors duration-300",
                  lang === l
                    ? "text-orange-400"
                    : "text-zinc-600 hover:text-zinc-400",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-5 text-6xl font-light leading-none tracking-tight md:text-8xl text-white"
          >
            {content.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="mb-4 text-base font-light uppercase tracking-[0.3em] text-zinc-400"
          >
            {content.title[lang]}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
            className="mb-10 max-w-md text-sm font-extralight leading-loose text-zinc-500"
          >
            {content.subtitle[lang]}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <button
              onClick={scrollToAbout}
              className={cn(
                "flex items-center gap-2 rounded-full px-7 py-3 text-sm font-light",
                "transition-all duration-300",
              )}
              style={{
                background: "rgba(249,115,22,0.12)",
                border: "1px solid rgba(249,115,22,0.3)",
                color: "#fb923c",
              }}
            >
              {content.cta.explore[lang]}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>

            <a
              href="/cv.pdf"
              download
              className={cn(
                "flex items-center gap-2 rounded-full border border-white/8 px-7 py-3",
                "text-sm font-light text-zinc-400",
                "hover:border-white/15 hover:text-zinc-300 transition-colors duration-300",
              )}
            >
              <Download className="h-3.5 w-3.5" />
              {content.cta.downloadCV[lang]}
            </a>
          </motion.div>

          {/* Bouncing scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 text-zinc-700" />
          </motion.div>
        </section>

        {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
        <Section id="about" className="py-28 px-6">
          <div className="mx-auto max-w-4xl">

            {/* Section label */}
            <motion.div {...fadeUp} className="mb-14">
              <p
                className="mb-2 text-xs font-medium uppercase tracking-[0.25em]"
                style={{ color: ORANGE + "80" }}
              >
                {lang === "en" ? "About" : "À propos"}
              </p>
              <h2 className="text-2xl font-light text-zinc-200">
                {content.sections.about[lang]}
              </h2>
            </motion.div>

            <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">

              {/* Bio */}
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                className="flex-1 text-base font-extralight leading-[1.9] text-zinc-300"
              >
                {content.about[lang]}
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="flex shrink-0 flex-row gap-10 lg:flex-col lg:gap-8"
              >
                <StatPill
                  value={`${content.stats.yearsExp}+`}
                  label={lang === "en" ? "Years exp." : "Années exp."}
                />
                <StatPill
                  value={`${content.stats.projects}+`}
                  label={lang === "en" ? "Projects" : "Projets"}
                />
                <StatPill
                  value={`${content.stats.clients}+`}
                  label={lang === "en" ? "Clients" : "Clients"}
                />
              </motion.div>
            </div>
          </div>
        </Section>

        {/* ── SELECTED WORK ──────────────────────────────────────────────────── */}
        <Section id="projects" className="py-28 px-6">
          <div className="mx-auto max-w-4xl">

            <motion.div {...fadeUp} className="mb-14">
              <p
                className="mb-2 text-xs font-medium uppercase tracking-[0.25em]"
                style={{ color: ORANGE + "80" }}
              >
                {lang === "en" ? "Work" : "Projets"}
              </p>
              <h2 className="text-2xl font-light text-zinc-200">
                {content.sections.projects[lang]}
              </h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {content.projects.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  lang={lang}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* ── EXPERIENCE ─────────────────────────────────────────────────────── */}
        <Section id="experience" className="py-28 px-6">
          <div className="mx-auto max-w-3xl">

            <motion.div {...fadeUp} className="mb-14">
              <p
                className="mb-2 text-xs font-medium uppercase tracking-[0.25em]"
                style={{ color: ORANGE + "80" }}
              >
                {lang === "en" ? "Career" : "Carrière"}
              </p>
              <h2 className="text-2xl font-light text-zinc-200">
                {content.sections.experience[lang]}
              </h2>
            </motion.div>

            <div className="flex flex-col gap-4">
              {content.experience.map((exp, i) => (
                <ExperienceEntry
                  key={i}
                  exp={exp}
                  lang={lang}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </div>
        </Section>

        {/* ── SKILLS ─────────────────────────────────────────────────────────── */}
        <Section id="skills" className="py-28 px-6">
          <div className="mx-auto max-w-3xl">

            <motion.div {...fadeUp} className="mb-14">
              <p
                className="mb-2 text-xs font-medium uppercase tracking-[0.25em]"
                style={{ color: ORANGE + "80" }}
              >
                {lang === "en" ? "Craft" : "Métier"}
              </p>
              <h2 className="text-2xl font-light text-zinc-200">
                {content.sections.skills[lang]}
              </h2>
            </motion.div>

            <div className="flex flex-col gap-10">
              {(
                [
                  { key: "frontend", label: { en: "Frontend", fr: "Frontend" } },
                  { key: "backend", label: { en: "Backend", fr: "Backend" } },
                  { key: "tools", label: { en: "Tools", fr: "Outils" } },
                ] as const
              ).map((cat, i) => (
                <motion.div
                  key={cat.key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: i * 0.12 }}
                >
                  <h3 className="mb-4 text-xs font-light uppercase tracking-[0.25em] text-zinc-600">
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
          </div>
        </Section>

        {/* ── CONTACT ────────────────────────────────────────────────────────── */}
        <Section id="contact" className="py-28 px-6">
          <div className="mx-auto max-w-3xl">

            <motion.div {...fadeUp} className="mb-14">
              <p
                className="mb-2 text-xs font-medium uppercase tracking-[0.25em]"
                style={{ color: ORANGE + "80" }}
              >
                {lang === "en" ? "Reach out" : "Contact"}
              </p>
              <h2 className="text-2xl font-light text-zinc-200">
                {content.sections.contact[lang]}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="mb-10 text-sm font-extralight leading-loose text-zinc-500"
            >
              {lang === "en"
                ? "Available for freelance and full-time opportunities."
                : "Disponible pour des missions freelance et des postes en CDI."}
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="mb-10 flex flex-wrap gap-3"
            >
              <SocialLink
                href={content.socials.github}
                label="GitHub"
                icon={Github}
                text="GitHub"
              />
              <SocialLink
                href={content.socials.linkedin}
                label="LinkedIn"
                icon={Linkedin}
                text="LinkedIn"
              />
              <SocialLink
                href={content.socials.twitter}
                label="Twitter"
                icon={Twitter}
                text="Twitter"
              />
              <SocialLink
                href={`mailto:${content.socials.email}`}
                label="Email"
                icon={Mail}
                text={content.socials.email}
              />
            </motion.div>

            {/* Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
              className="flex flex-col items-start gap-2"
            >
              <a
                href="/cv.pdf"
                download
                className={cn(
                  "inline-flex items-center gap-3 rounded-full px-8 py-3.5",
                  "text-sm font-light transition-all duration-400",
                )}
                style={{
                  background: "rgba(249,115,22,0.1)",
                  border: "1px solid rgba(249,115,22,0.25)",
                  color: "#fb923c",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(249,115,22,0.18)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(249,115,22,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(249,115,22,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(249,115,22,0.25)";
                }}
              >
                <Download className="h-4 w-4" />
                {content.cta.downloadCV[lang]}
              </a>

              {/* Fun footnote */}
              <p className="flex items-center gap-1.5 text-[11px] font-light text-zinc-700">
                <Sparkles className="h-3 w-3" />
                {lang === "en"
                  ? "click anywhere on the page for fireworks"
                  : "cliquez n'importe où pour des feux d'artifice"}
              </p>
            </motion.div>
          </div>
        </Section>

        {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
        <footer className="border-t border-white/5 bg-black/40 backdrop-blur-md py-10 px-6 text-center">
          <p className="text-xs font-extralight tracking-widest text-zinc-700">
            &copy; {new Date().getFullYear()} {content.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
