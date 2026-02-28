import { useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Mail, Download, ChevronDown } from "lucide-react";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { SplittingText } from "@/components/animate-ui/primitives/texts/splitting";
import { ShimmeringText } from "@/components/animate-ui/primitives/texts/shimmering";
import { content, type Lang } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// ─── Animation presets ────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.8, ease: "easeOut" },
};

// ─── Aurora glow backdrop for each section ────────────────────────────────────
// A single blurred radial blob, purely decorative.

function AuroraGlow({ color }: { color: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full blur-3xl opacity-100"
      style={{ background: color }}
    />
  );
}

// ─── Experience card ──────────────────────────────────────────────────────────

function ExperienceCard({
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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: "easeOut", delay }}
      className={cn(
        "rounded-2xl border border-white/5 bg-white/[0.03] p-8",
        "hover:border-emerald-500/20 hover:bg-white/[0.05] transition-colors duration-500",
      )}
    >
      {/* Period — muted, top right */}
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-400/70 mb-2">
            {company}
          </p>
          <h3 className="text-xl font-light text-zinc-200 leading-snug">
            {role}
          </h3>
        </div>
        <span className="shrink-0 text-xs text-zinc-600 tabular-nums pt-1">
          {period}
        </span>
      </div>
      <p className="text-sm leading-loose text-zinc-500">{description}</p>
    </motion.article>
  );
}

// ─── Skill tag ────────────────────────────────────────────────────────────────

function SkillTag({ label }: { label: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-white/8 bg-white/[0.04]",
        "px-4 py-1.5 text-sm font-light text-zinc-400",
      )}
    >
      {label}
    </span>
  );
}

// ─── Journey card ─────────────────────────────────────────────────────────────

function JourneyCard({
  year,
  title,
  description,
  delay,
}: {
  year: string;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, ease: "easeOut", delay }}
      className={cn(
        "flex gap-10 rounded-2xl border border-white/5 bg-white/[0.03] p-8",
        "hover:border-cyan-500/20 hover:bg-white/[0.04] transition-colors duration-500",
      )}
    >
      {/* Year — large, decorative */}
      <div className="shrink-0 pt-0.5">
        <span className="font-extralight text-5xl text-zinc-800 tabular-nums leading-none">
          {year}
        </span>
      </div>
      <div>
        <h3 className="mb-2 text-lg font-light text-zinc-200">{title}</h3>
        <p className="text-sm leading-loose text-zinc-500">{description}</p>
      </div>
    </motion.article>
  );
}

// ─── Social link button ───────────────────────────────────────────────────────

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
        "text-sm font-light text-zinc-500 transition-colors duration-300",
        "hover:border-amber-500/30 hover:text-zinc-300",
      )}
    >
      <Icon className="h-4 w-4" />
      {text}
    </a>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Concept5() {
  const [lang, setLang] = useState<Lang>("en");

  function scrollToExperience() {
    document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-[#030712] text-zinc-100" style={{ scrollBehavior: "smooth" }}>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      {/* StarsBackground wraps only the hero — it has its own dark radial gradient */}
      <section className="relative h-screen w-full">
        <StarsBackground
          speed={80}
          factor={0.03}
          className="h-full w-full"
        >
          {/* Language toggle */}
          <div className="absolute right-6 top-6 z-20 flex gap-1">
            {(["en", "fr"] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-medium uppercase tracking-widest transition-colors duration-300",
                  lang === l
                    ? "text-white"
                    : "text-zinc-600 hover:text-zinc-400",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          {/* Hero content — centred, vast, contemplative */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-8 px-6 text-center">

            {/* Name — characters fly in */}
            <h1 className="text-7xl font-extralight leading-none tracking-[0.15em] text-white sm:text-8xl">
              <SplittingText
                text={content.name.toUpperCase()}
                type="chars"
                inView={true}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                stagger={0.08}
              />
            </h1>

            {/* Title — shimmer */}
            <p className="text-base font-light tracking-[0.3em] uppercase">
              <ShimmeringText
                text={content.title[lang]}
                duration={3}
                color="var(--color-zinc-600)"
                shimmeringColor="var(--color-zinc-300)"
              />
            </p>

            {/* Subtitle — quiet, elegant */}
            <p className="max-w-sm text-sm font-extralight leading-loose text-zinc-600">
              {content.subtitle[lang]}
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={scrollToExperience}
                className={cn(
                  "flex items-center gap-2 rounded-full border border-white/10 px-6 py-2.5",
                  "text-xs font-light uppercase tracking-widest text-zinc-300",
                  "hover:border-white/25 hover:text-white transition-colors duration-300",
                )}
              >
                {content.cta.explore[lang]}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              <a
                href="/cv.pdf"
                download
                className={cn(
                  "flex items-center gap-2 rounded-full border border-white/5 px-6 py-2.5",
                  "text-xs font-light uppercase tracking-widest text-zinc-500",
                  "hover:border-white/15 hover:text-zinc-300 transition-colors duration-300",
                )}
              >
                <Download className="h-3.5 w-3.5" />
                {content.cta.downloadCV[lang]}
              </a>
            </div>
          </div>

          {/* Scroll indicator — bounces gently */}
          <motion.div
            className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4 text-zinc-700" />
          </motion.div>
        </StarsBackground>
      </section>

      {/* ── EXPERIENCE ──────────────────────────────────────────────────────── */}
      <section id="experience" className="relative py-32 px-6 overflow-hidden">
        {/* Aurora glow — emerald/teal */}
        <AuroraGlow color="radial-gradient(ellipse, rgba(52,211,153,0.07) 0%, transparent 70%)" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="mb-3 text-xs font-light uppercase tracking-[0.3em] text-emerald-500/60">
              {lang === "en" ? "Work" : "Travail"}
            </p>
            <h2 className="text-3xl font-extralight text-zinc-300">
              {content.sections.experience[lang]}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {content.experience.map((exp, i) => (
              <ExperienceCard
                key={i}
                role={exp.role[lang]}
                company={exp.company}
                period={exp.period}
                description={exp.description[lang]}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────────────────────── */}
      <section id="skills" className="relative py-32 px-6 overflow-hidden">
        {/* Aurora glow — violet */}
        <AuroraGlow color="radial-gradient(ellipse, rgba(167,139,250,0.07) 0%, transparent 70%)" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="mb-3 text-xs font-light uppercase tracking-[0.3em] text-violet-400/60">
              {lang === "en" ? "Craft" : "Métier"}
            </p>
            <h2 className="text-3xl font-extralight text-zinc-300">
              {content.sections.skills[lang]}
            </h2>
          </motion.div>

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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.12 }}
              >
                <h3 className="mb-4 text-xs font-light uppercase tracking-[0.25em] text-zinc-600">
                  {cat.label[lang]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {content.skills[cat.key].map((skill) => (
                    <SkillTag key={skill} label={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY ─────────────────────────────────────────────────────────── */}
      <section id="journey" className="relative py-32 px-6 overflow-hidden">
        {/* Aurora glow — cyan */}
        <AuroraGlow color="radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="mb-3 text-xs font-light uppercase tracking-[0.3em] text-cyan-400/60">
              {lang === "en" ? "Story" : "Histoire"}
            </p>
            <h2 className="text-3xl font-extralight text-zinc-300">
              {content.sections.journey[lang]}
            </h2>
          </motion.div>

          <div className="flex flex-col gap-4">
            {content.journey.map((item, i) => (
              <JourneyCard
                key={i}
                year={item.year}
                title={item.title[lang]}
                description={item.description[lang]}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────────── */}
      <section id="contact" className="relative py-32 px-6 overflow-hidden">
        {/* Aurora glow — amber */}
        <AuroraGlow color="radial-gradient(ellipse, rgba(251,191,36,0.06) 0%, transparent 70%)" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="mb-16">
            <p className="mb-3 text-xs font-light uppercase tracking-[0.3em] text-amber-400/60">
              {lang === "en" ? "Reach out" : "Contact"}
            </p>
            <h2 className="text-3xl font-extralight text-zinc-300">
              {content.sections.contact[lang]}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mb-12 text-sm font-extralight leading-loose text-zinc-600"
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
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-12"
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
              href="mailto:hello@maxi.dev"
              label="Email"
              icon={Mail}
              text="hello@maxi.dev"
            />
          </motion.div>

          {/* Download CV — amber shimmer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          >
            <a
              href="/cv.pdf"
              download
              className={cn(
                "inline-flex items-center gap-3 rounded-full border border-amber-500/20 px-8 py-3.5",
                "text-xs font-light uppercase tracking-widest",
                "hover:border-amber-500/40 hover:bg-amber-500/5 transition-colors duration-500",
              )}
            >
              <Download className="h-3.5 w-3.5 text-amber-400/70" />
              <ShimmeringText
                text={content.cta.downloadCV[lang]}
                duration={2.5}
                color="var(--color-zinc-500)"
                shimmeringColor="var(--color-amber-400)"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.04] py-10 px-6 text-center">
        <p className="text-xs font-extralight tracking-widest text-zinc-700">
          &copy; {new Date().getFullYear()} {content.name}
        </p>
      </footer>
    </div>
  );
}
