import { useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { content, type Lang } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// ─── Animation presets ────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, ease: "easeOut" },
};

// ─── Project card ─────────────────────────────────────────────────────────────

function ProjectCard({
  title,
  tagline,
  description,
  tech,
  role,
  year,
  url,
  delay,
}: {
  title: string;
  tagline: string;
  description: string;
  tech: readonly string[];
  role: string;
  year: string;
  url: string;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, ease: "easeOut", delay }}
      className={cn(
        "group relative rounded-2xl border border-white/8 bg-black/40 backdrop-blur-md",
        "p-8 md:p-10 transition-all duration-500",
        "hover:border-white/20 hover:bg-black/50",
      )}
      style={{
        boxShadow: "0 0 0 0 transparent",
      }}
      whileHover={{
        boxShadow: "0 0 40px 0 rgba(255,255,255,0.04)",
      }}
    >
      {/* Year — top-right, decorative */}
      <span className="absolute top-8 right-8 text-xs tabular-nums text-zinc-700 font-light">
        {year}
      </span>

      {/* Title + tagline */}
      <div className="mb-6 pr-12">
        <h3 className="text-2xl font-light text-white tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-sm font-light text-zinc-400 leading-relaxed">
          {tagline}
        </p>
      </div>

      {/* Description */}
      <p className="mb-8 text-sm leading-loose text-zinc-500 font-light">
        {description}
      </p>

      {/* Tech stack */}
      <div className="mb-8 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/8 px-3 py-1 text-xs font-light text-zinc-500"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-light text-zinc-600 uppercase tracking-[0.15em]">
          {role}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "flex items-center gap-1.5 text-xs font-light text-zinc-500 uppercase tracking-[0.15em]",
            "transition-colors duration-300 hover:text-zinc-200",
          )}
        >
          View
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </motion.article>
  );
}

// ─── Experience row ───────────────────────────────────────────────────────────

function ExperienceRow({
  role,
  company,
  period,
  description,
  delay,
}: {
  role: string;
  company: string;
  period: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, ease: "easeOut", delay }}
      className={cn(
        "group border-t border-white/5 py-10",
        "transition-colors duration-500 hover:border-white/10",
      )}
    >
      {/* Top row */}
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h3 className="text-xl font-light text-white leading-snug">
            {role}
          </h3>
          <p className="mt-1 text-sm font-light text-zinc-500 uppercase tracking-[0.15em]">
            {company}
          </p>
        </div>
        <span className="shrink-0 text-xs tabular-nums text-zinc-700 font-light">
          {period}
        </span>
      </div>
      <p className="text-sm leading-loose text-zinc-400 font-light max-w-2xl">
        {description}
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
        "px-4 py-1.5 text-sm font-light text-zinc-300",
      )}
    >
      {label}
    </span>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function V2Concept5Starfield() {
  const [lang, setLang] = useState<Lang>("en");

  function scrollToAbout() {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    // Root — no background here; the fixed stars provide it
    <div className="min-h-screen text-zinc-100" style={{ scrollBehavior: "smooth" }}>

      {/* ── FIXED STAR BACKGROUND ───────────────────────────────────────────── */}
      {/*
        position: fixed; inset: 0 — covers the full viewport at all times.
        overflow-hidden (from the component) clips stars at viewport edges.
        z-0 sits below all content.
      */}
      <StarsBackground
        speed={80}
        factor={0.03}
        starColor="#e4e4e7"
        className="!fixed inset-0 z-0"
      />

      {/* ── ALL CONTENT — sits above the fixed background ───────────────────── */}
      <div className="relative z-10">

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section className="relative flex h-screen w-full flex-col items-center justify-center px-6 text-center">

          {/* Language toggle — top-right */}
          <div className="absolute right-6 top-6 z-20 flex gap-1">
            {(["en", "fr"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-light uppercase tracking-[0.2em] transition-colors duration-300",
                  lang === l
                    ? "text-white"
                    : "text-zinc-700 hover:text-zinc-400",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Name — the centrepiece */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-6 font-thin leading-none tracking-[0.12em] text-white text-7xl md:text-9xl"
          >
            {content.name.toUpperCase()}
          </motion.h1>

          {/* Title — single line, quiet */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="mb-4 text-base font-light uppercase tracking-[0.35em] text-zinc-400"
          >
            {content.title[lang]}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="mb-12 max-w-md text-sm font-light leading-loose text-zinc-500"
          >
            {content.subtitle[lang]}
          </motion.p>

          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <button
              onClick={scrollToAbout}
              className={cn(
                "flex items-center gap-2 rounded-full border border-white/15 px-7 py-3",
                "text-xs font-light uppercase tracking-[0.2em] text-zinc-300",
                "hover:border-white/30 hover:text-white transition-colors duration-300",
              )}
            >
              {content.cta.explore[lang]}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>

            <a
              href="/cv.pdf"
              download
              className={cn(
                "flex items-center gap-2 rounded-full border border-white/6 px-7 py-3",
                "text-xs font-light uppercase tracking-[0.2em] text-zinc-600",
                "hover:border-white/15 hover:text-zinc-400 transition-colors duration-300",
              )}
            >
              <Download className="h-3.5 w-3.5" />
              {content.cta.downloadCV[lang]}
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 text-zinc-800" />
          </motion.div>
        </section>

        {/* ── ABOUT ───────────────────────────────────────────────────────── */}
        <section
          id="about"
          className="border-t border-white/5 bg-black/40 backdrop-blur-md py-32 px-6"
        >
          <div className="mx-auto max-w-3xl">
            {/* Section label */}
            <motion.p
              {...fadeUp}
              className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-zinc-600"
            >
              {content.sections.about[lang]}
            </motion.p>

            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="mb-12 text-2xl font-light text-zinc-200 leading-relaxed max-w-2xl"
            >
              {content.about[lang]}
            </motion.h2>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="flex flex-wrap gap-16"
            >
              {[
                {
                  value: `${content.stats.yearsExp}+`,
                  label: { en: "Years experience", fr: "Ans d'expérience" },
                },
                {
                  value: `${content.stats.projects}+`,
                  label: { en: "Projects shipped", fr: "Projets livrés" },
                },
                {
                  value: `${content.stats.clients}+`,
                  label: { en: "Clients", fr: "Clients" },
                },
              ].map((stat) => (
                <div key={stat.label.en} className="flex flex-col gap-1">
                  <span className="text-4xl font-thin text-white tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-xs font-light text-zinc-600 uppercase tracking-[0.2em]">
                    {stat.label[lang]}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SELECTED WORK ────────────────────────────────────────────────── */}
        <section
          id="projects"
          className="border-t border-white/5 bg-black/40 backdrop-blur-md py-32 px-6"
        >
          <div className="mx-auto max-w-3xl">
            <motion.p
              {...fadeUp}
              className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-zinc-600"
            >
              {content.sections.projects[lang]}
            </motion.p>

            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="mb-16 text-2xl font-light text-zinc-300"
            >
              {lang === "en" ? "Selected Work" : "Projets sélectionnés"}
            </motion.h2>

            <div className="flex flex-col gap-6">
              {content.projects.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  tagline={project.tagline[lang]}
                  description={project.description[lang]}
                  tech={project.tech}
                  role={project.role[lang]}
                  year={project.year}
                  url={project.url}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ──────────────────────────────────────────────────── */}
        <section
          id="experience"
          className="border-t border-white/5 bg-black/40 backdrop-blur-md py-32 px-6"
        >
          <div className="mx-auto max-w-3xl">
            <motion.p
              {...fadeUp}
              className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-zinc-600"
            >
              {content.sections.experience[lang]}
            </motion.p>

            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="mb-4 text-2xl font-light text-zinc-300"
            >
              {lang === "en" ? "Experience" : "Expérience"}
            </motion.h2>

            {/* Rows separated by top borders */}
            <div>
              {content.experience.map((exp, i) => (
                <ExperienceRow
                  key={i}
                  role={exp.role[lang]}
                  company={exp.company}
                  period={exp.period}
                  description={exp.description[lang]}
                  delay={i * 0.1}
                />
              ))}
              {/* Closing border */}
              <div className="border-t border-white/5" />
            </div>
          </div>
        </section>

        {/* ── SKILLS ──────────────────────────────────────────────────────── */}
        <section
          id="skills"
          className="border-t border-white/5 bg-black/40 backdrop-blur-md py-32 px-6"
        >
          <div className="mx-auto max-w-3xl">
            <motion.p
              {...fadeUp}
              className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-zinc-600"
            >
              {content.sections.skills[lang]}
            </motion.p>

            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="mb-16 text-2xl font-light text-zinc-300"
            >
              {lang === "en" ? "Skills" : "Compétences"}
            </motion.h2>

            <div className="flex flex-col gap-12">
              {(
                [
                  { key: "frontend", label: { en: "Frontend", fr: "Frontend" } },
                  { key: "backend", label: { en: "Backend", fr: "Backend" } },
                  { key: "tools", label: { en: "Tools", fr: "Outils" } },
                ] as const
              ).map((cat, i) => (
                <motion.div
                  key={cat.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                >
                  <h3 className="mb-5 text-xs font-light uppercase tracking-[0.25em] text-zinc-600">
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
        </section>

        {/* ── CONTACT ─────────────────────────────────────────────────────── */}
        <section
          id="contact"
          className="border-t border-white/5 bg-black/40 backdrop-blur-md py-32 px-6"
        >
          <div className="mx-auto max-w-3xl">
            <motion.p
              {...fadeUp}
              className="mb-4 text-xs font-light uppercase tracking-[0.3em] text-zinc-600"
            >
              {content.sections.contact[lang]}
            </motion.p>

            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.05 }}
              className="mb-6 text-2xl font-light text-zinc-300"
            >
              {lang === "en" ? "Get in touch" : "Me contacter"}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="mb-16 text-sm font-light leading-loose text-zinc-500 max-w-md"
            >
              {lang === "en"
                ? "Available for freelance and full-time opportunities. Let's build something together."
                : "Disponible pour des missions freelance et des postes en CDI. Construisons quelque chose ensemble."}
            </motion.p>

            {/* Email — large, prominent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              className="mb-16"
            >
              <a
                href={`mailto:${content.socials.email}`}
                className={cn(
                  "group inline-flex items-center gap-3 text-2xl font-light text-zinc-300",
                  "border-b border-white/10 pb-3 transition-colors duration-300",
                  "hover:text-white hover:border-white/25",
                )}
              >
                {content.socials.email}
                <ArrowUpRight className="h-5 w-5 text-zinc-700 transition-colors duration-300 group-hover:text-zinc-400" />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="mb-16 flex flex-wrap gap-3"
            >
              {[
                { href: content.socials.github, label: "GitHub", icon: Github, text: "GitHub" },
                { href: content.socials.linkedin, label: "LinkedIn", icon: Linkedin, text: "LinkedIn" },
                { href: content.socials.twitter, label: "Twitter", icon: Twitter, text: "Twitter" },
                { href: `mailto:${content.socials.email}`, label: "Email", icon: Mail, text: "Email" },
              ].map(({ href, label, icon: Icon, text }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className={cn(
                    "flex items-center gap-2.5 rounded-xl border border-white/8 px-5 py-3",
                    "text-sm font-light text-zinc-500 transition-colors duration-300",
                    "hover:border-white/15 hover:text-zinc-300",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {text}
                </a>
              ))}
            </motion.div>

            {/* Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            >
              <a
                href="/cv.pdf"
                download
                className={cn(
                  "inline-flex items-center gap-3 rounded-full border border-white/12 px-8 py-3.5",
                  "text-xs font-light uppercase tracking-[0.2em] text-zinc-400",
                  "hover:border-white/25 hover:text-zinc-200 transition-colors duration-500",
                )}
              >
                <Download className="h-3.5 w-3.5" />
                {content.cta.downloadCV[lang]}
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ──────────────────────────────────────────────────────── */}
        <footer className="border-t border-white/5 bg-black/40 backdrop-blur-md py-10 px-6 text-center">
          <p className="text-xs font-light tracking-[0.25em] text-zinc-800">
            &copy; {new Date().getFullYear()} {content.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
