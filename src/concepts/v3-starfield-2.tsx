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
import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars";
import { content, type Lang } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// ─── Simple fade-in on scroll ─────────────────────────────────────────────────
const fade = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

// ─── Section wrapper — transparent (no bg, no blur, no borders) ───────────────
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
    <section id={id} className={cn("px-6 py-28", className)}>
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}

// ─── Section label ────────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      {...fade}
      className="mb-4 text-xs font-light uppercase tracking-[0.2em] text-sky-400"
    >
      {children}
    </motion.h2>
  );
}

// ─── Project card (floating card with subtle bg) ──────────────────────────────
function ProjectCard({
  title,
  tagline,
  description,
  tech,
  role,
  year,
  url,
}: {
  title: string;
  tagline: string;
  description: string;
  tech: readonly string[];
  role: string;
  year: string;
  url: string;
}) {
  return (
    <motion.article
      {...fade}
      className={cn(
        "group relative rounded-2xl border border-white/[0.06] bg-white/[0.03]",
        "p-8 md:p-10 transition-colors duration-500",
        "hover:border-white/[0.12] hover:bg-white/[0.05]",
      )}
    >
      <span className="absolute top-8 right-8 text-xs tabular-nums text-zinc-400 font-light">
        {year}
      </span>

      <div className="mb-6 pr-12">
        <h3 className="text-2xl font-light text-white tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-sm font-light text-zinc-300 leading-relaxed">
          {tagline}
        </p>
      </div>

      <p className="mb-8 text-sm leading-[1.8] text-zinc-300 font-light">
        {description}
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/[0.06] px-3 py-1 text-xs font-light text-zinc-400"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs font-light text-zinc-300 uppercase tracking-[0.15em]">
          {role}
        </span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-light text-sky-400/70 uppercase tracking-[0.15em] transition-colors duration-300 hover:text-sky-300"
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
}: {
  role: string;
  company: string;
  period: string;
  description: string;
}) {
  return (
    <motion.article
      {...fade}
      className="group rounded-xl border border-white/[0.06] bg-white/[0.03] p-8 md:p-10 transition-colors duration-500 hover:border-white/[0.12] hover:bg-white/[0.05]"
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <h3 className="text-lg font-light text-white leading-snug">
            {role}
          </h3>
          <p className="mt-1 text-sm font-light text-zinc-400 uppercase tracking-[0.15em]">
            {company}
          </p>
        </div>
        <span className="shrink-0 text-xs tabular-nums text-zinc-400 font-light">
          {period}
        </span>
      </div>
      <p className="text-sm leading-[1.8] text-zinc-300 font-light max-w-2xl">
        {description}
      </p>
    </motion.article>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function V3Starfield2() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div className="min-h-screen text-zinc-100">

      {/* ── FIXED STAR BACKGROUND ─────────────────────────────────────────── */}
      <GravityStarsBackground
        starsCount={100}
        starsSize={2}
        mouseGravity="attract"
        gravityStrength={60}
        movementSpeed={0.2}
        glowIntensity={12}
        className="!fixed inset-0 z-0"
      />

      {/* ── CONTENT ───────────────────────────────────────────────────────── */}
      <div className="relative z-10">

        {/* ── HERO (transparent — text directly on starfield) ─────────────── */}
        <section className="relative flex h-screen w-full flex-col items-center justify-center px-6 text-center">

          {/* Language toggle */}
          <header className="absolute right-6 top-6 z-20">
            <nav aria-label="Language" className="flex gap-1">
              {(["en", "fr"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-current={lang === l ? "true" : undefined}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-xs font-light uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer",
                    lang === l
                      ? "text-white"
                      : "text-zinc-400 hover:text-zinc-300",
                  )}
                >
                  {l}
                </button>
              ))}
            </nav>
          </header>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="mb-6 font-thin leading-none tracking-[0.08em] text-white text-7xl md:text-9xl"
          >
            {content.name.toUpperCase()}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="mb-4 text-base font-light uppercase tracking-[0.35em] text-zinc-300"
          >
            {content.title[lang]}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            className="mb-12 max-w-md text-sm font-light leading-loose text-zinc-300"
          >
            {content.subtitle[lang]}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3 text-xs font-light uppercase tracking-[0.2em] text-zinc-300 hover:border-sky-400/40 hover:text-sky-300 transition-colors duration-300 cursor-pointer"
            >
              {content.cta.explore[lang]}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>

            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-white/[0.06] px-7 py-3 text-xs font-light uppercase tracking-[0.2em] text-zinc-300 hover:border-sky-400/30 hover:text-sky-300 transition-colors duration-300"
            >
              <Download className="h-3.5 w-3.5" />
              {content.cta.downloadCV[lang]}
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 text-zinc-500" />
          </motion.div>
        </section>

        {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
        <main>

        {/* ── ABOUT (transparent — text on starfield) ─────────────────────── */}
        <Section id="about">
          <SectionLabel>{content.sections.about[lang]}</SectionLabel>

          <motion.p
            {...fade}
            className="mb-16 text-xl md:text-2xl font-light text-zinc-200 leading-relaxed max-w-2xl"
          >
            {content.about[lang]}
          </motion.p>

          <motion.div {...fade} className="flex flex-wrap justify-center gap-8 md:gap-16">
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
                <span className="text-4xl font-thin text-sky-300 tabular-nums">
                  {stat.value}
                </span>
                <span className="text-xs font-light text-zinc-300 uppercase tracking-[0.2em]">
                  {stat.label[lang]}
                </span>
              </div>
            ))}
          </motion.div>
        </Section>

        {/* ── SELECTED WORK (floating cards) ──────────────────────────────── */}
        <Section id="projects">
          <SectionLabel>{content.sections.projects[lang]}</SectionLabel>

          <div className="flex flex-col gap-6">
            {content.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                tagline={project.tagline[lang]}
                description={project.description[lang]}
                tech={project.tech}
                role={project.role[lang]}
                year={project.year}
                url={project.url}
              />
            ))}
          </div>
        </Section>

        {/* ── EXPERIENCE (floating cards) ─────────────────────────────────── */}
        <Section id="experience">
          <SectionLabel>{content.sections.experience[lang]}</SectionLabel>

          <div className="flex flex-col gap-6">
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

        {/* ── SKILLS (transparent) ────────────────────────────────────────── */}
        <Section id="skills">
          <SectionLabel>{content.sections.skills[lang]}</SectionLabel>

          <div className="flex flex-col gap-12">
            {(
              [
                { key: "frontend", label: { en: "Frontend", fr: "Frontend" } },
                { key: "backend", label: { en: "Backend", fr: "Backend" } },
                { key: "tools", label: { en: "Tools", fr: "Outils" } },
              ] as const
            ).map((cat) => (
              <motion.div key={cat.key} {...fade}>
                <h3 className="mb-5 text-xs font-light uppercase tracking-[0.25em] text-sky-400">
                  {cat.label[lang]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {content.skills[cat.key].map((skill) => (
                    <span
                      key={skill}
                      className="inline-block rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-sm font-light text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── CONTACT (transparent) ───────────────────────────────────────── */}
        <Section id="contact">
          <SectionLabel>{content.sections.contact[lang]}</SectionLabel>

          <motion.p
            {...fade}
            className="mb-16 text-sm font-light leading-loose text-zinc-300 max-w-md"
          >
            {lang === "en"
              ? "Available for freelance and full-time opportunities. Let's build something together."
              : "Disponible pour des missions freelance et des postes en CDI. Construisons quelque chose ensemble."}
          </motion.p>

          {/* Email */}
          <motion.div {...fade} className="mb-16">
            <a
              href={`mailto:${content.socials.email}`}
              className="group inline-flex items-center gap-3 text-2xl font-light text-zinc-300 border-b border-white/10 pb-3 transition-colors duration-300 hover:text-sky-300 hover:border-sky-400/30"
            >
              {content.socials.email}
              <ArrowUpRight className="h-5 w-5 text-zinc-400 transition-colors duration-300 group-hover:text-sky-400" />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div {...fade} className="mb-16 flex flex-wrap gap-3">
            {[
              { href: content.socials.github, label: "GitHub", icon: Github },
              { href: content.socials.linkedin, label: "LinkedIn", icon: Linkedin },
              { href: content.socials.twitter, label: "Twitter", icon: Twitter },
              { href: `mailto:${content.socials.email}`, label: "Email", icon: Mail },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] px-5 py-3 text-sm font-light text-zinc-400 transition-colors duration-300 hover:border-sky-400/30 hover:text-sky-300"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </motion.div>

          {/* Download CV */}
          <motion.div {...fade}>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] px-8 py-3.5 text-xs font-light uppercase tracking-[0.2em] text-zinc-300 hover:border-sky-400/30 hover:text-sky-300 transition-colors duration-500"
            >
              <Download className="h-3.5 w-3.5" />
              {content.cta.downloadCV[lang]}
            </a>
          </motion.div>
        </Section>

        </main>

        {/* ── FOOTER ──────────────────────────────────────────────────────── */}
        <footer className="py-10 px-6 text-center">
          <p className="text-xs font-light tracking-[0.25em] text-zinc-500">
            &copy; {new Date().getFullYear()} {content.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
