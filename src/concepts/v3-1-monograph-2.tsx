import { useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { content, type Lang } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { BubbleBackground } from "@/components/animate-ui/components/backgrounds/bubble";

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
      className="mb-16 font-sans text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-500"
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
  year,
  url,
  viewLabel,
}: {
  index: number;
  title: string;
  tagline: string;
  description: string;
  tech: readonly string[];
  role: string;
  year: string;
  url: string;
  viewLabel: string;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article {...reveal} className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
      {/* Number + year column */}
      <div className="md:col-span-2 flex md:flex-col items-baseline md:items-start gap-4 md:gap-2">
        <span className="font-serif text-6xl md:text-7xl font-thin text-white/8 leading-none select-none">
          {num}
        </span>
        <span className="font-sans text-[11px] tracking-[0.15em] text-zinc-600 tabular-nums">
          {year}
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
              className="border border-white/8 px-3 py-1 font-sans text-[11px] tracking-wide text-zinc-500"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-sky-400 transition-colors duration-300 hover:text-sky-300"
        >
          {viewLabel}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
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
        <span className="font-sans text-[11px] tracking-[0.15em] text-zinc-600 tabular-nums">
          {period}
        </span>
      </div>
    </motion.article>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function V3Monograph2() {
  const [lang, setLang] = useState<Lang>("en");

  return (
    <div className="min-h-screen bg-[#111111] text-zinc-100 antialiased">
      {/* ── BUBBLE BACKGROUND ──────────────────────────────────────────── */}
      <BubbleBackground
        interactive={false}
        className="!fixed inset-0 z-0 opacity-40"
        colors={{
          first: '217,119,6',
          second: '190,60,80',
          third: '234,88,12',
          fourth: '180,83,9',
          fifth: '159,18,57',
          sixth: '245,158,11',
        }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <header className="relative z-10 flex min-h-screen flex-col justify-between px-6 md:px-12 lg:px-24 py-8">
        {/* Top bar — language toggle */}
        <nav
          aria-label="Language"
          className="flex justify-end gap-1"
        >
          {(["en", "fr"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              aria-current={lang === l ? "true" : undefined}
              className={cn(
                "px-3 py-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.3em] transition-colors duration-300 cursor-pointer",
                lang === l
                  ? "text-zinc-100"
                  : "text-zinc-600 hover:text-sky-400",
              )}
            >
              {l}
            </button>
          ))}
        </nav>

        {/* Center content */}
        <div className="flex flex-1 flex-col justify-center">
          {/* Name — massive, left-aligned, overflowing */}
          <motion.h1
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="-ml-1 md:-ml-2 font-serif text-[clamp(6rem,18vw,16rem)] font-thin leading-[0.85] tracking-tight text-zinc-100 select-none"
          >
            {content.name}
          </motion.h1>

          {/* Title + subtitle */}
          <div className="mt-8 md:mt-12 max-w-lg md:ml-2">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              className="font-sans text-xs font-medium uppercase tracking-[0.35em] text-zinc-500"
            >
              {content.title[lang]}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              className="mt-6 font-serif text-lg font-thin leading-relaxed text-zinc-300 italic"
            >
              {content.subtitle[lang]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
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
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-7 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-500 transition-colors duration-300 hover:text-sky-400"
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
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-zinc-700" />
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
              {[
                {
                  value: `${content.stats.yearsExp}+`,
                  label: { en: "Years of\nexperience", fr: "Années\nd'expérience" },
                },
                {
                  value: `${content.stats.projects}+`,
                  label: { en: "Projects\ndelivered", fr: "Projets\nlivrés" },
                },
                {
                  value: `${content.stats.clients}+`,
                  label: { en: "Happy\nclients", fr: "Clients\nsatisfaits" },
                },
              ].map((stat) => (
                <div key={stat.label.en} className="flex flex-col gap-1 md:text-right">
                  <span className="font-serif text-5xl font-thin text-zinc-100 tabular-nums leading-none">
                    {stat.value}
                  </span>
                  <span className="mt-2 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 whitespace-pre-line">
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
                year={project.year}
                url={project.url}
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

        {/* ── SKILLS ─────────────────────────────────────────────────────── */}
        <Section id="skills">
          <SectionLabel>{content.sections.skills[lang]}</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {(
              [
                { key: "frontend", label: { en: "Frontend", fr: "Frontend" } },
                { key: "backend", label: { en: "Backend", fr: "Backend" } },
                { key: "tools", label: { en: "Tools & Infra", fr: "Outils & Infra" } },
              ] as const
            ).map((cat) => (
              <motion.div key={cat.key} {...fadeUp}>
                <h3 className="mb-6 font-serif text-lg font-thin text-zinc-200">
                  {cat.label[lang]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {content.skills[cat.key].map((skill) => (
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
                {lang === "en"
                  ? "Available for freelance and full-time opportunities. Let's build something meaningful together."
                  : "Disponible pour des missions freelance et des postes en CDI. Construisons quelque chose d'ambitieux ensemble."}
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

            <motion.div {...fadeUp} className="md:col-span-5 flex flex-col gap-4 md:items-end md:justify-end">
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
                  className="group flex items-center gap-3 font-sans text-sm text-zinc-500 transition-colors duration-300 hover:text-sky-400"
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium uppercase tracking-[0.2em] text-[11px]">
                    {label}
                  </span>
                </a>
              ))}

              <a
                href="/cv.pdf"
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
          <span className="font-serif text-lg font-thin text-zinc-600">
            {content.name}
          </span>
          <p className="font-sans text-[11px] tracking-[0.2em] text-zinc-600">
            &copy; {new Date().getFullYear()} &mdash;{" "}
            {lang === "en" ? "All rights reserved" : "Tous droits réservés"}
          </p>
        </div>
      </footer>
    </div>
  );
}
