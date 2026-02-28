import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail, Download, ChevronDown } from "lucide-react";
import { HoleBackground } from "@/components/animate-ui/components/backgrounds/hole";
import { GradientText } from "@/components/animate-ui/primitives/texts/gradient";
import { content, type Lang } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// ─── Accent / palette constants ──────────────────────────────────────────────
const ACCENT = "#7c3aed";
const ACCENT_LIGHT = "#a855f7";
const GRADIENT = `linear-gradient(90deg, ${ACCENT}, ${ACCENT_LIGHT}, ${ACCENT})`;

// ─── Section fade-in animation preset ────────────────────────────────────────
const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" },
};

// ─── Pill badge for skills ────────────────────────────────────────────────────
function SkillBadge({ label }: { label: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-zinc-700 px-3 py-1",
        "text-sm text-zinc-300 bg-zinc-900/60 whitespace-nowrap",
      )}
    >
      {label}
    </span>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Concept1() {
  const [lang, setLang] = useState<Lang>("en");

  // Smooth-scroll to the section below the hero
  function scrollDown() {
    const section = document.getElementById("experience");
    section?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className="min-h-screen bg-[#09090b] text-zinc-100"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full">
        <HoleBackground
          className="h-full w-full dark"
          strokeColor={ACCENT}
          particleRGBColor={[124, 58, 237]}
        >
          {/* Language toggle — top-right corner */}
          <div className="absolute right-6 top-6 z-20 flex gap-1">
            {(["en", "fr"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-medium uppercase tracking-widest transition-colors",
                  lang === l
                    ? "bg-violet-700 text-white"
                    : "text-zinc-400 hover:text-zinc-200",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Centred hero content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-6 text-center">
            {/* Name */}
            <h1 className="text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl">
              <GradientText
                text={content.name}
                gradient={GRADIENT}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
            </h1>

            {/* Title */}
            <p className="text-lg font-medium text-zinc-300 sm:text-xl">
              {content.title[lang]}
            </p>

            {/* Subtitle */}
            <p className="max-w-md text-sm text-zinc-500 sm:text-base">
              {content.subtitle[lang]}
            </p>

            {/* Stats row */}
            <div className="flex gap-8 mt-2">
              {[
                { value: `${content.stats.yearsExp}+`, label: lang === "en" ? "Years" : "Ans" },
                { value: `${content.stats.projects}+`, label: lang === "en" ? "Projects" : "Projets" },
                { value: `${content.stats.clients}+`, label: lang === "en" ? "Clients" : "Clients" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-0.5">
                  <span className="text-2xl font-bold text-violet-400">{stat.value}</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <button
                onClick={scrollDown}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold",
                  "bg-violet-700 text-white hover:bg-violet-600 transition-colors",
                )}
              >
                {content.cta.explore[lang]}
                <ChevronDown className="h-4 w-4" />
              </button>

              <a
                href="/cv.pdf"
                download
                className={cn(
                  "flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold",
                  "text-zinc-300 hover:border-violet-500 hover:text-violet-300 transition-colors",
                )}
              >
                <Download className="h-4 w-4" />
                {content.cta.downloadCV[lang]}
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-5 w-5 text-zinc-600" />
          </motion.div>
        </HoleBackground>
      </section>

      {/* Sections below hero — solid dark background */}
      <div className="bg-[#09090b]">

        {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
        <section id="experience" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              {...fadeInUp}
              className="mb-12 text-3xl font-bold text-zinc-100 sm:text-4xl"
            >
              {content.sections.experience[lang]}
            </motion.h2>

            <div className="flex flex-col gap-6">
              {content.experience.map((exp, i) => {
                // Alternate slide direction for visual rhythm
                const anim = i % 2 === 0 ? fadeInLeft : fadeInRight;
                return (
                  <motion.div
                    key={i}
                    {...anim}
                    transition={{ ...anim.transition, delay: i * 0.1 }}
                    className={cn(
                      "rounded-xl border border-zinc-800 bg-zinc-900/50 p-6",
                      "hover:border-violet-800/60 transition-colors",
                    )}
                  >
                    <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-base font-semibold text-zinc-100">
                          {exp.role[lang]}
                        </h3>
                        <span className="text-sm font-medium text-violet-400">
                          {exp.company}
                        </span>
                      </div>
                      <span className="text-xs text-zinc-500 tabular-nums">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {exp.description[lang]}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="h-px bg-zinc-800" />
        </div>

        {/* ── SKILLS ───────────────────────────────────────────────────────── */}
        <section id="skills" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              {...fadeInUp}
              className="mb-12 text-3xl font-bold text-zinc-100 sm:text-4xl"
            >
              {content.sections.skills[lang]}
            </motion.h2>

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
                  {...fadeInUp}
                  transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
                >
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    {cat.label[lang]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {content.skills[cat.key].map((skill) => (
                      <SkillBadge key={skill} label={skill} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="h-px bg-zinc-800" />
        </div>

        {/* ── JOURNEY ──────────────────────────────────────────────────────── */}
        <section id="journey" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              {...fadeInUp}
              className="mb-12 text-3xl font-bold text-zinc-100 sm:text-4xl"
            >
              {content.sections.journey[lang]}
            </motion.h2>

            {/* Vertical timeline */}
            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div
                className="absolute left-[19px] top-2 bottom-2 w-px bg-zinc-800"
                aria-hidden="true"
              />

              {content.journey.map((item, i) => (
                <motion.div
                  key={i}
                  {...fadeInLeft}
                  transition={{ ...fadeInLeft.transition, delay: i * 0.12 }}
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div
                    className="relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900"
                    style={{ boxShadow: `0 0 0 3px #09090b` }}
                  >
                    <div
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-1">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-widest text-violet-400">
                      {item.year}
                    </span>
                    <h3 className="mb-1 text-base font-semibold text-zinc-100">
                      {item.title[lang]}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-400">
                      {item.description[lang]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="h-px bg-zinc-800" />
        </div>

        {/* ── CONTACT ──────────────────────────────────────────────────────── */}
        <section id="contact" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              {...fadeInUp}
              className="mb-4 text-3xl font-bold text-zinc-100 sm:text-4xl"
            >
              {content.sections.contact[lang]}
            </motion.h2>

            <motion.p
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="mb-10 text-sm text-zinc-400"
            >
              {lang === "en"
                ? "Available for freelance and full-time opportunities."
                : "Disponible pour des missions freelance et des postes en CDI."}
            </motion.p>

            {/* Social links row */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <a
                href={content.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 rounded-lg border border-zinc-800 px-4 py-2.5 text-sm text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>

              <a
                href={content.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 rounded-lg border border-zinc-800 px-4 py-2.5 text-sm text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                href={content.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex items-center gap-2 rounded-lg border border-zinc-800 px-4 py-2.5 text-sm text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 transition-colors"
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </a>

              <a
                href="mailto:hello@maxi.dev"
                aria-label="Email"
                className="flex items-center gap-2 rounded-lg border border-zinc-800 px-4 py-2.5 text-sm text-zinc-400 hover:border-zinc-600 hover:text-zinc-200 transition-colors"
              >
                <Mail className="h-4 w-4" />
                hello@maxi.dev
              </a>
            </motion.div>

            {/* Download CV CTA */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
            >
              <a
                href="/cv.pdf"
                download
                className={cn(
                  "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold",
                  "bg-violet-700 text-white hover:bg-violet-600 transition-colors",
                )}
              >
                <Download className="h-4 w-4" />
                {content.cta.downloadCV[lang]}
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-8 px-6 text-center">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} {content.name}. Crafted with precision.
          </p>
        </footer>
      </div>
    </div>
  );
}
