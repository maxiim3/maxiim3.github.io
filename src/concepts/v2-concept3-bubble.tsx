'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react';

import { BubbleBackground } from '@/components/animate-ui/components/backgrounds/bubble';
import { content, type Lang } from '@/data/portfolio';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Palette
// ---------------------------------------------------------------------------

const ACCENT = '#10b981'; // emerald-500
const ACCENT_DIM = 'rgba(16,185,129,0.15)';
const ACCENT_BORDER = 'rgba(16,185,129,0.35)';

// ---------------------------------------------------------------------------
// Animation presets
// ---------------------------------------------------------------------------

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 } as { opacity: number; y: number },
  viewport: { once: true, margin: '-70px' },
  transition: { duration: 0.55, ease: 'easeOut' },
};

// ---------------------------------------------------------------------------
// Shared primitives
// ---------------------------------------------------------------------------

function AccentLine() {
  return (
    <div
      className="h-px w-12 mb-4"
      style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }}
    />
  );
}

function SectionHeading({ label }: { label: string }) {
  return (
    <motion.div
      className="mb-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <AccentLine />
      <h2 className="text-2xl font-light tracking-wide text-zinc-100">{label}</h2>
    </motion.div>
  );
}

// Outer wrapper for all below-hero sections — transparent so fixed bg shows through
function SectionWrapper({
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
        'bg-black/40 backdrop-blur-md border-t border-white/5',
        className,
      )}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-28">
        {children}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function HeroSection({
  lang,
  onToggleLang,
}: {
  lang: Lang;
  onToggleLang: () => void;
}) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Scroll CTA — absolute, rendered above the content layer */}
      <motion.div
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, ease: 'easeInOut', repeat: Infinity }}
        >
          <ChevronDown size={20} strokeWidth={1.5} />
        </motion.div>
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
      </motion.div>

      {/* Language toggle */}
      <motion.button
        onClick={onToggleLang}
        className="absolute top-8 right-8 z-20 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm transition hover:bg-white/10 hover:text-zinc-50"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        {lang === 'en' ? 'FR' : 'EN'}
      </motion.button>

      {/* Hero content — centred */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-10 px-6 text-center">
        {/* Eyebrow */}
        <motion.span
          className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Portfolio
        </motion.span>

        {/* Name */}
        <motion.h1
          className="text-6xl font-light tracking-tight text-white md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.75, ease: 'easeOut' }}
        >
          {content.name}
        </motion.h1>

        {/* Title — emerald accent */}
        <motion.p
          className="text-base font-medium tracking-widest uppercase"
          style={{ color: ACCENT }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6, ease: 'easeOut' }}
        >
          {content.title[lang]}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="max-w-lg text-sm leading-relaxed text-zinc-400 md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {content.subtitle[lang]}
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
        >
          {[
            { value: `${content.stats.yearsExp}+`, label: lang === 'en' ? 'Years' : 'Ans' },
            { value: `${content.stats.projects}+`, label: lang === 'en' ? 'Projects' : 'Projets' },
            { value: `${content.stats.clients}+`, label: lang === 'en' ? 'Clients' : 'Clients' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-light" style={{ color: ACCENT }}>
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <a
            href="#about"
            className="rounded-full px-8 py-3 text-sm font-semibold text-black transition hover:brightness-110"
            style={{ background: ACCENT }}
          >
            {content.cta.explore[lang]}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
          >
            {content.cta.getInTouch[lang]}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

function AboutSection({ lang }: { lang: Lang }) {
  return (
    <SectionWrapper id="about">
      <SectionHeading label={content.sections.about[lang]} />

      <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
        {/* Bio */}
        <motion.p
          className="text-base leading-relaxed text-zinc-300"
          {...fadeUp}
        >
          {content.about[lang]}
        </motion.p>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-3 gap-6 md:grid-cols-3"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.12 }}
        >
          {[
            { value: `${content.stats.yearsExp}+`, label: lang === 'en' ? 'Years of experience' : "Ans d'expérience" },
            { value: `${content.stats.projects}+`, label: lang === 'en' ? 'Projects shipped' : 'Projets livrés' },
            { value: `${content.stats.clients}+`, label: lang === 'en' ? 'Clients served' : 'Clients' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 rounded-2xl border border-white/8 bg-white/4 p-5"
            >
              <span className="text-3xl font-light" style={{ color: ACCENT }}>
                {stat.value}
              </span>
              <span className="text-xs leading-snug text-zinc-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

// ---------------------------------------------------------------------------
// Selected Work
// ---------------------------------------------------------------------------

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
      className={cn(
        'group relative rounded-2xl border border-white/8 bg-white/4 p-7 backdrop-blur-sm',
        'transition-all duration-300 hover:bg-white/7 hover:brightness-110',
        // Emerald left border accent
        'border-l-2',
      )}
      style={{ borderLeftColor: ACCENT_BORDER }}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: 'easeOut' }}
    >
      {/* Subtle emerald glow on left edge — visible on hover */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-px rounded-l-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(to bottom, transparent, ${ACCENT}, transparent)` }}
      />

      {/* Header */}
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-medium text-zinc-100">{project.title}</h3>
          <p className="text-sm" style={{ color: ACCENT }}>
            {project.tagline[lang]}
          </p>
        </div>
        <a
          href={project.url}
          aria-label={`View ${project.title}`}
          className="mt-0.5 shrink-0 rounded-full border border-white/10 p-2 text-zinc-500 transition hover:border-emerald-500/40 hover:text-zinc-200"
        >
          <ArrowUpRight size={14} strokeWidth={1.75} />
        </a>
      </div>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-zinc-400">
        {project.description[lang]}
      </p>

      {/* Footer row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Tech pills — emerald tint */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{
                background: ACCENT_DIM,
                color: ACCENT,
                border: `1px solid ${ACCENT_BORDER}`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-zinc-600">
          <span>{project.role[lang]}</span>
          <span className="text-zinc-700">·</span>
          <span>{project.year}</span>
        </div>
      </div>
    </motion.div>
  );
}

function WorkSection({ lang }: { lang: Lang }) {
  return (
    <SectionWrapper id="work">
      <SectionHeading label={content.sections.projects[lang]} />
      <div className="flex flex-col gap-5">
        {content.projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} lang={lang} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

function ExperienceSection({ lang }: { lang: Lang }) {
  return (
    <SectionWrapper id="experience">
      <SectionHeading label={content.sections.experience[lang]} />
      <div className="flex flex-col gap-4">
        {content.experience.map((job, i) => (
          <motion.div
            key={job.company}
            className="group rounded-2xl border border-white/8 bg-white/4 p-7 backdrop-blur-sm transition-all duration-300 hover:bg-white/7"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-base font-medium text-zinc-100">
                  {job.role[lang]}
                </h3>
                <p className="text-sm font-medium" style={{ color: ACCENT }}>
                  {job.company}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-white/8 bg-white/4 px-3 py-1 text-xs text-zinc-600">
                {job.period}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              {job.description[lang]}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

function SkillsSection({ lang }: { lang: Lang }) {
  const categories = [
    { key: 'frontend' as const, label: 'Frontend' },
    { key: 'backend' as const, label: 'Backend' },
    { key: 'tools' as const, label: lang === 'en' ? 'Tools' : 'Outils' },
  ];

  return (
    <SectionWrapper id="skills">
      <SectionHeading label={content.sections.skills[lang]} />
      <div className="flex flex-col gap-10">
        {categories.map((cat, catIdx) => (
          <div key={cat.key}>
            <motion.span
              className="mb-4 block text-xs font-medium uppercase tracking-[0.25em] text-zinc-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
            >
              {cat.label}
            </motion.span>
            <div className="flex flex-wrap gap-2.5">
              {content.skills[cat.key].map((skill, skillIdx) => (
                <motion.span
                  key={skill}
                  className="cursor-default select-none rounded-full border border-white/8 bg-white/4 px-5 py-2 text-sm text-zinc-300 transition-colors duration-200 hover:text-zinc-50"
                  style={{
                    ['--hover-border' as string]: ACCENT_BORDER,
                    ['--hover-bg' as string]: ACCENT_DIM,
                  }}
                  initial={{ opacity: 0, filter: 'blur(8px)', y: 8 }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.4,
                    delay: catIdx * 0.07 + skillIdx * 0.05,
                    ease: 'easeOut',
                  }}
                  whileHover={{
                    borderColor: ACCENT_BORDER,
                    backgroundColor: ACCENT_DIM,
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

function ContactSection({ lang }: { lang: Lang }) {
  const socials = [
    { Icon: Github, href: content.socials.github, label: 'GitHub' },
    { Icon: Linkedin, href: content.socials.linkedin, label: 'LinkedIn' },
    { Icon: Twitter, href: content.socials.twitter, label: 'Twitter' },
  ];

  return (
    <SectionWrapper id="contact" className="border-b border-white/5">
      <SectionHeading label={content.sections.contact[lang]} />

      <div className="flex flex-col gap-10">
        {/* Tagline */}
        <motion.p
          className="max-w-md text-base leading-relaxed text-zinc-300"
          {...fadeUp}
        >
          {lang === 'en'
            ? "Let's build something together. Reach out via email or connect below."
            : 'Construisons quelque chose ensemble. Contactez-moi par email ou sur les réseaux.'}
        </motion.p>

        {/* Email */}
        <motion.a
          href={`mailto:${content.socials.email}`}
          className="group inline-flex w-fit items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-6 py-4 backdrop-blur-sm transition-all duration-200 hover:border-emerald-500/30 hover:bg-white/7"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
        >
          <Mail size={17} strokeWidth={1.75} style={{ color: ACCENT }} />
          <span className="text-sm text-zinc-300 transition group-hover:text-zinc-100">
            {content.socials.email}
          </span>
        </motion.a>

        {/* Socials */}
        <motion.div
          className="flex gap-3"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.18 }}
        >
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/4 text-zinc-400 transition hover:border-emerald-500/30 hover:bg-white/8 hover:text-zinc-100"
            >
              <Icon size={16} strokeWidth={1.75} />
            </a>
          ))}
        </motion.div>

        {/* Download CV */}
        <motion.a
          href="/cv.pdf"
          download
          className="inline-flex w-fit items-center gap-2.5 rounded-full px-7 py-3 text-sm font-semibold text-black transition hover:brightness-110"
          style={{ background: ACCENT }}
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.26 }}
        >
          <Download size={14} strokeWidth={2} />
          {content.cta.downloadCV[lang]}
        </motion.a>
      </div>
    </SectionWrapper>
  );
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

export default function V2Concept3Bubble() {
  const [lang, setLang] = React.useState<Lang>('en');

  const toggleLang = React.useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'fr' : 'en'));
  }, []);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#050a07' }}>
      {/* Fixed animated background — visible through every section */}
      <BubbleBackground
        interactive
        className="fixed inset-0 z-0 bg-gradient-to-br from-zinc-950 via-emerald-950/30 to-zinc-950"
        colors={{
          first: '16,185,129',   // emerald-500
          second: '6,95,70',     // emerald-900
          third: '20,184,166',   // teal-500
          fourth: '4,120,87',    // emerald-800
          fifth: '16,185,129',   // emerald-500
          sixth: '6,78,59',      // emerald-950
        }}
      />

      {/* All page content sits above the fixed background */}
      <div className="relative z-10">
        <HeroSection lang={lang} onToggleLang={toggleLang} />
        <AboutSection lang={lang} />
        <WorkSection lang={lang} />
        <ExperienceSection lang={lang} />
        <SkillsSection lang={lang} />
        <ContactSection lang={lang} />

        <footer className="border-t border-white/5 bg-black/40 py-8 text-center text-xs text-zinc-700">
          &copy; {new Date().getFullYear()} {content.name}
          {' — '}
          {lang === 'en' ? 'Crafted with precision' : 'Conçu avec précision'}
        </footer>
      </div>
    </div>
  );
}
