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
  ExternalLink,
} from 'lucide-react';

import { GradientBackground } from '@/components/animate-ui/components/backgrounds/gradient';
import { cn } from '@/lib/utils';
import { content, type Lang } from '@/data/portfolio';

// ---------------------------------------------------------------------------
// Shared animation presets
// ---------------------------------------------------------------------------

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-72px' } as const,
  transition: { duration: 0.6, ease: 'easeOut' },
};

const fadeLeft = {
  initial: { opacity: 0, x: -28 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-72px' } as const,
  transition: { duration: 0.55, ease: 'easeOut' },
};

// ---------------------------------------------------------------------------
// Section wrapper — glass panel that reads over the fixed gradient
// ---------------------------------------------------------------------------

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        // Glass panel — never solid, lets gradient breathe through
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
// Section heading — amber accent line + label
// ---------------------------------------------------------------------------

function SectionHeading({ label }: { label: string }) {
  return (
    <motion.div
      className="mb-16 flex flex-col gap-4"
      {...fadeUp}
    >
      {/* Amber accent line — thin, warm, deliberate */}
      <div className="h-px w-14 bg-amber-500/70" />
      <h2 className="text-2xl font-light tracking-wide text-zinc-100 sm:text-3xl">
        {label}
      </h2>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Stat item used in hero and about
// ---------------------------------------------------------------------------

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-2xl font-extralight tabular-nums text-amber-400">
        {value}
      </span>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

type HeroProps = {
  lang: Lang;
  onToggleLang: () => void;
};

function HeroSection({ lang, onToggleLang }: HeroProps) {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Overlay — adds a touch of depth on top of the gradient */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />

      {/* Language toggle — top right */}
      <motion.button
        onClick={onToggleLang}
        className={cn(
          'absolute top-7 right-7 z-20 rounded-full',
          'border border-white/15 bg-black/30 backdrop-blur-sm',
          'px-4 py-1.5 text-xs font-medium tracking-widest text-zinc-400',
          'transition hover:border-amber-500/40 hover:text-amber-300',
        )}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {lang === 'en' ? 'FR' : 'EN'}
      </motion.button>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">

        {/* Eyebrow */}
        <motion.span
          className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Portfolio
        </motion.span>

        {/* Name — the centrepiece. Font-extralight for that luxury feel */}
        <motion.h1
          className="text-6xl font-extralight leading-none tracking-tight text-zinc-50 md:text-8xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        >
          {content.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-lg font-light text-zinc-300 sm:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
        >
          {content.title[lang]}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="max-w-lg text-sm leading-relaxed text-zinc-500 sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {content.subtitle[lang]}
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        >
          <Stat
            value={`${content.stats.yearsExp}+`}
            label={lang === 'en' ? 'Years' : 'Ans'}
          />
          <Stat
            value={`${content.stats.projects}+`}
            label={lang === 'en' ? 'Projects' : 'Projets'}
          />
          <Stat
            value={`${content.stats.clients}+`}
            label={lang === 'en' ? 'Clients' : 'Clients'}
          />
        </motion.div>

        {/* CTA row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <a
            href="#about"
            className={cn(
              'flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium',
              'bg-amber-500 text-zinc-950 transition',
              'hover:bg-amber-400',
            )}
          >
            {content.cta.explore[lang]}
            <ChevronDown className="h-4 w-4" />
          </a>

          <a
            href="/cv.pdf"
            download
            className={cn(
              'flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium',
              'border border-white/15 bg-black/30 text-zinc-300 backdrop-blur-sm transition',
              'hover:border-amber-500/40 hover:text-amber-300',
            )}
          >
            <Download className="h-4 w-4" />
            {content.cta.downloadCV[lang]}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-9 left-1/2 z-10 -translate-x-1/2 text-zinc-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
        >
          <ChevronDown size={20} strokeWidth={1.25} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

function AboutSection({ lang }: { lang: Lang }) {
  return (
    <Section id="about">
      <SectionHeading label={content.sections.about[lang]} />

      <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_auto]">
        {/* Bio text */}
        <motion.p
          className="max-w-xl text-base leading-relaxed text-zinc-300"
          {...fadeLeft}
        >
          {content.about[lang]}
        </motion.p>

        {/* Stats column */}
        <motion.div
          className="flex flex-row gap-10 md:flex-col md:gap-8 md:items-end"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-72px' }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.1 }}
        >
          <Stat
            value={`${content.stats.yearsExp}+`}
            label={lang === 'en' ? 'Years' : 'Ans'}
          />
          <Stat
            value={`${content.stats.projects}+`}
            label={lang === 'en' ? 'Projects' : 'Projets'}
          />
          <Stat
            value={`${content.stats.clients}+`}
            label={lang === 'en' ? 'Clients' : 'Clients'}
          />
        </motion.div>
      </div>
    </Section>
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
        'group relative flex flex-col rounded-2xl overflow-hidden',
        // Glass card
        'border border-white/8 bg-black/50 backdrop-blur-md',
        'transition-all duration-500',
        'hover:border-amber-500/25 hover:bg-black/60',
      )}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
    >
      {/* Amber accent line at top of card — the signature touch */}
      <div className="h-px w-full bg-amber-500/50 group-hover:bg-amber-500/80 transition-colors duration-500" />

      <div className="flex flex-1 flex-col gap-4 p-7">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-light tracking-wide text-zinc-50">
              {project.title}
            </h3>
            <p className="text-sm text-amber-400/80">
              {project.tagline[lang]}
            </p>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
            className="mt-0.5 shrink-0 rounded-full border border-white/10 p-2 text-zinc-500 transition hover:border-amber-500/40 hover:text-amber-400"
          >
            <ExternalLink size={14} strokeWidth={1.75} />
          </a>
        </div>

        {/* Description */}
        <p className="flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description[lang]}
        </p>

        {/* Footer row */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/5">
          {/* Tech pills — amber tinted */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={cn(
                  'rounded-full px-3 py-0.5 text-xs font-medium',
                  'border border-amber-500/20 bg-amber-500/8 text-amber-300/80',
                )}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Year */}
          <span className="text-xs tabular-nums text-zinc-600">
            {project.year}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsSection({ lang }: { lang: Lang }) {
  return (
    <Section id="projects">
      <SectionHeading label={content.sections.projects[lang]} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} lang={lang} index={i} />
        ))}
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

function ExperienceSection({ lang }: { lang: Lang }) {
  return (
    <Section id="experience">
      <SectionHeading label={content.sections.experience[lang]} />

      <div className="flex flex-col gap-5">
        {content.experience.map((job, i) => (
          <motion.div
            key={job.company}
            className={cn(
              'group rounded-2xl border border-white/8 bg-black/40 p-7 backdrop-blur-md',
              'transition-all duration-400',
              'hover:border-amber-500/20 hover:bg-black/50',
            )}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
          >
            {/* Role + company + period */}
            <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
              <div className="flex flex-col gap-0.5">
                <h3 className="text-base font-light text-zinc-100">
                  {job.role[lang]}
                </h3>
                <span className="text-sm text-amber-400/80">
                  {job.company}
                </span>
              </div>

              <span
                className={cn(
                  'shrink-0 rounded-full border border-white/8 bg-white/5 px-3 py-1',
                  'text-xs tabular-nums text-zinc-500',
                )}
              >
                {job.period}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-zinc-400">
              {job.description[lang]}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------

function SkillsSection({ lang }: { lang: Lang }) {
  const categories = [
    { label: { en: 'Frontend', fr: 'Frontend' }, skills: content.skills.frontend },
    { label: { en: 'Backend', fr: 'Backend' }, skills: content.skills.backend },
    { label: { en: 'Tools', fr: 'Outils' }, skills: content.skills.tools },
  ] as const;

  return (
    <Section id="skills">
      <SectionHeading label={content.sections.skills[lang]} />

      <div className="flex flex-col gap-10">
        {categories.map((cat, catIdx) => (
          <div key={cat.label.en} className="flex flex-col gap-4">
            {/* Category label */}
            <motion.span
              className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.08 }}
            >
              {cat.label[lang]}
            </motion.span>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill, skillIdx) => (
                <motion.span
                  key={skill}
                  className={cn(
                    'rounded-full border border-white/10 bg-white/5 px-4 py-1.5',
                    'text-sm font-light text-zinc-300',
                    'cursor-default select-none transition-colors duration-200',
                    'hover:border-amber-500/30 hover:bg-amber-500/8 hover:text-zinc-100',
                  )}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.4,
                    delay: catIdx * 0.07 + skillIdx * 0.05,
                    ease: 'easeOut',
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
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
    <Section id="contact" className="pb-0">
      <SectionHeading label={content.sections.contact[lang]} />

      <div className="flex flex-col gap-10">
        {/* Tagline */}
        <motion.p
          className="max-w-md text-base leading-relaxed text-zinc-400"
          {...fadeUp}
        >
          {lang === 'en'
            ? "Available for freelance and full-time opportunities. Let's build something worth remembering."
            : "Disponible pour des missions freelance et des postes en CDI. Construisons quelque chose qui en vaut la peine."}
        </motion.p>

        {/* Email */}
        <motion.a
          href={`mailto:${content.socials.email}`}
          className={cn(
            'group inline-flex w-fit items-center gap-3',
            'rounded-2xl border border-white/8 bg-black/40 backdrop-blur-md px-6 py-4',
            'transition-all duration-300 hover:border-amber-500/30 hover:bg-black/50',
          )}
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
        >
          <Mail
            size={17}
            className="text-amber-500/70 transition group-hover:text-amber-400"
          />
          <span className="text-sm font-light text-zinc-300 transition group-hover:text-zinc-100">
            {content.socials.email}
          </span>
        </motion.a>

        {/* Socials */}
        <motion.div
          className="flex items-center gap-3"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-full',
                'border border-white/10 bg-white/5 text-zinc-400',
                'transition hover:border-amber-500/30 hover:bg-amber-500/8 hover:text-amber-300',
              )}
            >
              <Icon size={16} strokeWidth={1.75} />
            </a>
          ))}
        </motion.div>

        {/* Download CV */}
        <motion.a
          href="/cv.pdf"
          download
          className={cn(
            'inline-flex w-fit items-center gap-2.5 rounded-full px-6 py-3',
            'bg-amber-500 text-zinc-950 text-sm font-medium',
            'transition hover:bg-amber-400',
          )}
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
        >
          <Download size={15} strokeWidth={2} />
          {content.cta.downloadCV[lang]}
        </motion.a>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Thin divider — lets gradient show between sections
// ---------------------------------------------------------------------------

function Divider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
  );
}

// ---------------------------------------------------------------------------
// Root
// ---------------------------------------------------------------------------

export default function V2Concept4Gradient() {
  const [lang, setLang] = React.useState<Lang>('en');

  const toggleLang = React.useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'fr' : 'en'));
  }, []);

  return (
    <div className="relative min-h-screen text-zinc-100" style={{ backgroundColor: '#0c0a09' }}>

      {/* Fixed animated gradient background — visible through all sections */}
      <GradientBackground
        className="fixed inset-0 z-0"
        gradientColors="linear-gradient(135deg, #0c0a09, #451a03, #0c0a09, #78350f, #0c0a09)"
        transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity }}
      />

      {/* All content sits above the fixed background */}
      <div className="relative z-10">

        {/* Hero — no section wrapper, full viewport against the raw gradient */}
        <HeroSection lang={lang} onToggleLang={toggleLang} />

        {/* About */}
        <AboutSection lang={lang} />

        <Divider />

        {/* Selected Work */}
        <ProjectsSection lang={lang} />

        <Divider />

        {/* Experience */}
        <ExperienceSection lang={lang} />

        <Divider />

        {/* Skills */}
        <SkillsSection lang={lang} />

        <Divider />

        {/* Contact */}
        <ContactSection lang={lang} />

        {/* Footer */}
        <footer
          className={cn(
            'border-t border-white/5 bg-black/40 backdrop-blur-md',
            'py-8 text-center',
          )}
        >
          <p className="text-xs text-zinc-700">
            &copy; {new Date().getFullYear()} {content.name}.{' '}
            {lang === 'en' ? 'Crafted with precision.' : 'Conçu avec précision.'}
          </p>
        </footer>
      </div>
    </div>
  );
}
