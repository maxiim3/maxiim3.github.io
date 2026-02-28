'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, Download, ChevronDown, Terminal } from 'lucide-react';

import { HexagonBackground } from '@/components/animate-ui/components/backgrounds/hexagon';
import {
  RotatingTextContainer,
  RotatingText,
} from '@/components/animate-ui/primitives/texts/rotating';
import { CountingNumber } from '@/components/animate-ui/primitives/texts/counting-number';
import { content, type Lang } from '@/data/portfolio';
import { cn } from '@/lib/utils';

// ---------------------------------------------------------------------------
// Skill proficiency weights — relative, used to derive progress bar widths
// ---------------------------------------------------------------------------
const SKILL_PROFICIENCY: Record<string, number> = {
  // Frontend
  React: 95,
  TypeScript: 92,
  'Next.js': 85,
  'Tailwind CSS': 90,
  Svelte: 78,
  // Backend
  'Node.js': 88,
  Bun: 82,
  PostgreSQL: 80,
  Redis: 75,
  GraphQL: 77,
  // Tools
  Git: 95,
  Docker: 83,
  AWS: 72,
  Figma: 70,
  Linux: 85,
};

// ---------------------------------------------------------------------------
// Section header — "MODULE: LABEL" sci-fi terminal style
// ---------------------------------------------------------------------------
function ModuleHeader({ label }: { label: string }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <Terminal className="h-4 w-4 text-green-500 shrink-0" />
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-xs tracking-widest uppercase text-green-500">
          MODULE:
        </span>
        <span className="font-mono text-xl font-bold tracking-wider uppercase text-zinc-100">
          {label}
        </span>
      </div>
      {/* decorative line */}
      <div className="flex-1 h-px bg-gradient-to-r from-green-500/40 to-transparent" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Experience card with shine hover effect (CSS-only pseudo approach via
// an absolutely-positioned overlay that slides on group-hover)
// ---------------------------------------------------------------------------
type ExperienceEntry = (typeof content.experience)[number];

function ExperienceCard({ item, lang }: { item: ExperienceEntry; lang: Lang }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 p-6"
    >
      {/* shine overlay — translates from left to right on hover */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 -translate-x-full',
          'bg-gradient-to-r from-transparent via-green-500/8 to-transparent',
          'transition-transform duration-700 ease-in-out group-hover:translate-x-full',
        )}
      />

      <div className="relative z-10">
        {/* top row */}
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-mono text-sm font-semibold text-zinc-100">
              {item.role[lang]}
            </h3>
            <p className="mt-0.5 font-mono text-xs text-green-500">{item.company}</p>
          </div>
          <span className="font-mono text-xs text-zinc-500 whitespace-nowrap">
            {item.period}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-zinc-400">{item.description[lang]}</p>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Skill row — label + animated progress bar
// ---------------------------------------------------------------------------
function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="flex items-center gap-4"
    >
      <span className="w-28 shrink-0 font-mono text-xs text-zinc-400">{name}</span>
      <div className="flex-1 h-px bg-zinc-800 relative">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          style={{ originX: 0, width: `${level}%` }}
          className="absolute inset-y-0 left-0 h-full bg-green-500 origin-left"
        />
      </div>
      <span className="w-8 shrink-0 text-right font-mono text-xs text-zinc-600">
        {level}
      </span>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Journey card
// ---------------------------------------------------------------------------
type JourneyEntry = (typeof content.journey)[number];

function JourneyCard({ item, lang, index }: { item: JourneyEntry; lang: Lang; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.08 }}
      className="group relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-5"
    >
      {/* corner accent */}
      <div className="absolute top-0 left-0 h-8 w-8 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-full border-t-2 border-l-2 border-green-500/50 rounded-tl-lg" />
      </div>

      <p className="mb-1 font-mono text-2xl font-bold text-green-500">{item.year}</p>
      <h3 className="mb-2 font-mono text-sm font-semibold text-zinc-100">{item.title[lang]}</h3>
      <p className="text-xs leading-relaxed text-zinc-400">{item.description[lang]}</p>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Social link with hover glow
// ---------------------------------------------------------------------------
function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className={cn(
        'flex items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 px-5 py-3',
        'text-zinc-400 transition-all duration-200',
        'hover:border-green-500/50 hover:text-green-400',
        'hover:shadow-[0_0_12px_rgba(34,197,94,0.2)]',
      )}
    >
      <Icon className="h-4 w-4" />
      <span className="font-mono text-sm">{label}</span>
    </motion.a>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function Concept4() {
  const [lang, setLang] = React.useState<Lang>('en');

  const roles =
    lang === 'en'
      ? ['Fullstack Developer', 'Software Engineer', 'Problem Solver']
      : ['Développeur Fullstack', 'Ingénieur Logiciel', 'Problem Solver'];

  const heroRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">

      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                 */}
      {/* ------------------------------------------------------------------ */}
      <section ref={heroRef} className="relative h-screen">
        <HexagonBackground
          hexagonSize={60}
          hexagonMargin={2}
          className="h-full w-full !bg-zinc-950 dark [&_[data-slot='hexagon-background']]:bg-zinc-950"
          // Override inner hexagon dark colours so they match zinc-950
          hexagonProps={{
            className: cn(
              'relative',
              '[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]',
              "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-zinc-900 before:opacity-100 before:transition-all before:duration-1000",
              "after:content-[''] after:absolute after:inset-[var(--hexagon-margin)] after:bg-zinc-950",
              'after:[clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]',
              'hover:before:!bg-green-950/60 hover:before:duration-0 hover:after:!bg-zinc-950',
            ),
          }}
        >
          {/* content overlay */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

            {/* blinking cursor prefix */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 flex items-center gap-2 font-mono text-xs text-green-500 tracking-widest uppercase"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              SYSTEM ONLINE — PORTFOLIO v2.0
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mb-3 font-mono text-6xl font-black tracking-tight text-zinc-100 sm:text-7xl lg:text-8xl"
            >
              {content.name}
              <span className="text-green-500">.</span>
            </motion.h1>

            {/* Rotating role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-2 h-10 font-mono text-lg text-zinc-300 sm:text-xl"
            >
              <RotatingTextContainer
                text={roles}
                duration={2500}
                inView={false}
                className="inline-flex items-center"
              >
                <RotatingText className="text-green-400 font-semibold" />
              </RotatingTextContainer>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mb-10 max-w-md text-sm text-zinc-500"
            >
              {content.subtitle[lang]}
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-10 flex gap-8 sm:gap-12"
            >
              <div className="text-center">
                <p className="font-mono text-3xl font-bold text-green-500">
                  <CountingNumber number={content.stats.yearsExp} inView inViewOnce />
                  <span className="text-green-400">+</span>
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  {lang === 'en' ? 'Years Exp.' : 'Ans Exp.'}
                </p>
              </div>
              <div className="w-px bg-zinc-800" />
              <div className="text-center">
                <p className="font-mono text-3xl font-bold text-green-500">
                  <CountingNumber number={content.stats.projects} inView inViewOnce />
                  <span className="text-green-400">+</span>
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  {lang === 'en' ? 'Projects' : 'Projets'}
                </p>
              </div>
              <div className="w-px bg-zinc-800" />
              <div className="text-center">
                <p className="font-mono text-3xl font-bold text-green-500">
                  <CountingNumber number={content.stats.clients} inView inViewOnce />
                  <span className="text-green-400">+</span>
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  {lang === 'en' ? 'Clients' : 'Clients'}
                </p>
              </div>
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center justify-center gap-3"
            >
              {/* Explore */}
              <a
                href="#experience"
                className={cn(
                  'flex items-center gap-2 rounded-lg px-6 py-3',
                  'bg-green-500 text-zinc-950 font-mono text-sm font-bold',
                  'transition-all duration-200 hover:bg-green-400',
                  'shadow-[0_0_20px_rgba(34,197,94,0.35)] hover:shadow-[0_0_28px_rgba(34,197,94,0.55)]',
                )}
              >
                {content.cta.explore[lang]}
                <ChevronDown className="h-4 w-4" />
              </a>

              {/* Download CV */}
              <button
                type="button"
                className={cn(
                  'flex items-center gap-2 rounded-lg border border-green-500/40 px-6 py-3',
                  'bg-transparent text-green-400 font-mono text-sm',
                  'transition-all duration-200',
                  'hover:border-green-500 hover:bg-green-500/10',
                  'hover:shadow-[0_0_14px_rgba(34,197,94,0.25)]',
                )}
              >
                <Download className="h-4 w-4" />
                {content.cta.downloadCV[lang]}
              </button>

              {/* Lang toggle */}
              <button
                type="button"
                onClick={() => setLang((l) => (l === 'en' ? 'fr' : 'en'))}
                className={cn(
                  'rounded-lg border border-zinc-700 px-4 py-3',
                  'font-mono text-xs text-zinc-400 tracking-widest uppercase',
                  'transition-all duration-200 hover:border-zinc-500 hover:text-zinc-200',
                )}
              >
                {lang === 'en' ? 'FR' : 'EN'}
              </button>
            </motion.div>
          </div>
        </HexagonBackground>

        {/* scroll hint */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* EXPERIENCE                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section id="experience" className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <ModuleHeader label={content.sections.experience[lang]} />
          <div className="flex flex-col gap-4">
            {content.experience.map((item) => (
              <ExperienceCard key={item.company} item={item} lang={lang} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SKILLS                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <ModuleHeader label={content.sections.skills[lang]} />

          <div className="grid gap-10 sm:grid-cols-3">
            {/* Frontend */}
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-green-500">
                Frontend
              </p>
              <div className="flex flex-col gap-3">
                {content.skills.frontend.map((skill) => (
                  <SkillBar key={skill} name={skill} level={SKILL_PROFICIENCY[skill] ?? 70} />
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-green-500">
                Backend
              </p>
              <div className="flex flex-col gap-3">
                {content.skills.backend.map((skill) => (
                  <SkillBar key={skill} name={skill} level={SKILL_PROFICIENCY[skill] ?? 70} />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-green-500">
                Tools
              </p>
              <div className="flex flex-col gap-3">
                {content.skills.tools.map((skill) => (
                  <SkillBar key={skill} name={skill} level={SKILL_PROFICIENCY[skill] ?? 70} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* JOURNEY                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <ModuleHeader label={content.sections.journey[lang]} />
          <div className="grid gap-4 sm:grid-cols-2">
            {content.journey.map((item, index) => (
              <JourneyCard key={item.year} item={item} lang={lang} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CONTACT                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <ModuleHeader label={content.sections.contact[lang]} />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 max-w-sm text-sm text-zinc-400"
          >
            {lang === 'en'
              ? 'Open to new opportunities. Let\'s connect and build something great.'
              : 'Ouvert aux nouvelles opportunités. Connectons-nous.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            <SocialLink href={content.socials.github} icon={Github} label="GitHub" />
            <SocialLink href={content.socials.linkedin} icon={Linkedin} label="LinkedIn" />
            <SocialLink href={content.socials.twitter} icon={Twitter} label="Twitter" />
            <SocialLink href="mailto:hello@example.com" icon={Mail} label="Email" />
          </motion.div>

          {/* footer line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20 border-t border-zinc-800/60 pt-8"
          >
            <p className="font-mono text-xs text-zinc-700">
              // {content.name} — {new Date().getFullYear()} — GRID PROTOCOL v1.0
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
