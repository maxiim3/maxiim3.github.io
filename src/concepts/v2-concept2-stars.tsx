import { useState } from 'react';
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

import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';
import { content, type Lang } from '@/data/portfolio';
import { cn } from '@/lib/utils';

// ─── Accent ──────────────────────────────────────────────────────────────────
const ACCENT = '#06b6d4'; // cyan-500

// ─── Shared animation preset ─────────────────────────────────────────────────
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' },
};

// ─── Skill pill ───────────────────────────────────────────────────────────────
function SkillPill({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span
      className={cn(
        'inline-block rounded border px-3 py-1 text-xs font-mono whitespace-nowrap transition-colors',
        accent
          ? 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300'
          : 'border-zinc-700/60 bg-zinc-900/50 text-zinc-300 hover:border-cyan-500/30 hover:text-cyan-400',
      )}
    >
      {label}
    </span>
  );
}

// ─── Tech pill (project cards) ────────────────────────────────────────────────
function TechPill({ label }: { label: string }) {
  return (
    <span className="inline-block rounded border border-cyan-500/30 bg-cyan-500/8 px-2.5 py-0.5 font-mono text-[11px] text-cyan-400">
      {label}
    </span>
  );
}

// ─── Section heading — terminal comment style ─────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-10 text-2xl font-medium text-zinc-100 md:text-3xl">
      <span className="mr-2 font-mono text-cyan-500 opacity-60">//</span>
      {children}
    </h2>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ lang, onLangChange }: { lang: Lang; onLangChange: (l: Lang) => void }) {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center px-6 text-center">
      {/* Language toggle */}
      <div className="absolute right-6 top-6 z-20 flex gap-1">
        {(['en', 'fr'] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => onLangChange(l)}
            className={cn(
              'rounded px-3 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors',
              lang === l
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-zinc-500 hover:text-zinc-300',
            )}
          >
            {l}
          </button>
        ))}
      </div>

      {/* Terminal prompt badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex items-center gap-2 rounded-full border border-zinc-800/80 bg-black/50 px-4 py-1.5 backdrop-blur-sm"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
        <span className="font-mono text-xs text-zinc-500">portfolio:~$ ready</span>
      </motion.div>

      {/* Name — monospace, large */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mb-4 font-mono text-6xl font-light tracking-tight text-zinc-100 md:text-8xl"
      >
        <span style={{ color: ACCENT }}>&gt; </span>
        {content.name}
        <span className="ml-1 inline-block h-[1em] w-[3px] translate-y-[6px] animate-pulse bg-cyan-500 align-middle" />
      </motion.h1>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-4 font-mono text-base text-cyan-400/80 tracking-wide md:text-lg"
      >
        {content.title[lang]}
      </motion.p>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="mb-10 max-w-lg text-base leading-relaxed text-zinc-400"
      >
        {content.subtitle[lang]}
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-10 flex gap-8"
      >
        {[
          { value: `${content.stats.yearsExp}+`, label: lang === 'en' ? 'Years exp.' : 'Ans exp.' },
          { value: `${content.stats.projects}+`, label: lang === 'en' ? 'Projects' : 'Projets' },
          { value: `${content.stats.clients}+`, label: lang === 'en' ? 'Clients' : 'Clients' },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1">
            <span className="font-mono text-2xl font-bold text-cyan-400">{stat.value}</span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="#about"
          className={cn(
            'inline-flex items-center gap-2 rounded border border-cyan-500 bg-cyan-500/10 px-5 py-2.5',
            'font-mono text-sm text-cyan-400 transition-colors hover:bg-cyan-500/20',
          )}
        >
          {content.cta.explore[lang]}
          <ChevronDown size={14} />
        </a>
        <a
          href="/cv.pdf"
          download
          className={cn(
            'inline-flex items-center gap-2 rounded border border-zinc-700 bg-black/40 px-5 py-2.5',
            'font-mono text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100',
          )}
        >
          <Download size={14} />
          {content.cta.downloadCV[lang]}
        </a>
      </motion.div>

      {/* Scroll caret */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <ChevronDown size={20} className="text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────
function About({ lang }: { lang: Lang }) {
  return (
    <section
      id="about"
      className="bg-black/40 backdrop-blur-md border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div {...fadeUp}>
          <SectionHeading>{content.sections.about[lang]}</SectionHeading>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-[1fr_220px]">
          {/* Bio */}
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="text-base leading-relaxed text-zinc-300"
          >
            {content.about[lang]}
          </motion.p>

          {/* Stats card */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className="flex flex-row gap-4 md:flex-col"
          >
            {[
              {
                value: `${content.stats.yearsExp}+`,
                label: lang === 'en' ? 'Years experience' : 'Ans d\'expérience',
              },
              {
                value: `${content.stats.projects}+`,
                label: lang === 'en' ? 'Projects shipped' : 'Projets livrés',
              },
              {
                value: `${content.stats.clients}+`,
                label: lang === 'en' ? 'Clients worked with' : 'Clients accompagnés',
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded border border-zinc-800/60 bg-zinc-900/30 p-4 text-center flex-1"
              >
                <div className="font-mono text-2xl font-bold text-cyan-400">{stat.value}</div>
                <div className="mt-1 text-xs text-zinc-500 leading-snug">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── SELECTED WORK ────────────────────────────────────────────────────────────
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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.1 }}
      className={cn(
        'group relative rounded-lg border-t-2 bg-zinc-900/40 backdrop-blur-sm',
        'border-t-cyan-500 border-x border-b border-zinc-800/60 p-6',
        'transition-colors hover:border-zinc-700/60 hover:bg-zinc-900/60',
      )}
    >
      {/* Header row */}
      <div className="mb-3 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium text-zinc-100">{project.title}</h3>
          <p className="mt-0.5 font-mono text-xs text-cyan-400/80">{project.tagline[lang]}</p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title}`}
          className="shrink-0 rounded border border-zinc-700/60 p-1.5 text-zinc-500 transition-colors hover:border-cyan-500/40 hover:text-cyan-400"
        >
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-zinc-400">{project.description[lang]}</p>

      {/* Tech pills */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <TechPill key={t} label={t} />
        ))}
      </div>

      {/* Footer metadata */}
      <div className="flex items-center justify-between text-xs font-mono text-zinc-600">
        <span>{project.role[lang]}</span>
        <span style={{ color: ACCENT }}>{project.year}</span>
      </div>
    </motion.div>
  );
}

function SelectedWork({ lang }: { lang: Lang }) {
  return (
    <section
      id="work"
      className="bg-black/40 backdrop-blur-md border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div {...fadeUp}>
          <SectionHeading>{content.sections.projects[lang]}</SectionHeading>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {content.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} lang={lang} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── EXPERIENCE ───────────────────────────────────────────────────────────────
function Experience({ lang }: { lang: Lang }) {
  return (
    <section
      id="experience"
      className="bg-black/40 backdrop-blur-md border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div {...fadeUp}>
          <SectionHeading>{content.sections.experience[lang]}</SectionHeading>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical guide line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-800"
            aria-hidden="true"
          />

          <div className="space-y-8">
            {content.experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
                className="flex gap-6"
              >
                {/* Timeline dot */}
                <div className="relative mt-1.5 shrink-0">
                  <div
                    className="h-3.5 w-3.5 rounded-full border-2 border-zinc-800 bg-zinc-950"
                    style={{ boxShadow: `0 0 0 2px #030712, 0 0 8px ${ACCENT}40` }}
                  />
                  {/* Cyan center dot for current role */}
                  {i === 0 && (
                    <div
                      className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-zinc-100">
                        {exp.role[lang]}
                      </h3>
                      <span className="font-mono text-xs" style={{ color: ACCENT }}>
                        {exp.company}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-zinc-600 tabular-nums">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-400">{exp.description[lang]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────
const SKILL_CATEGORIES: Array<{
  key: keyof typeof content.skills;
  label: { en: string; fr: string };
}> = [
  { key: 'frontend', label: { en: 'Frontend', fr: 'Frontend' } },
  { key: 'backend', label: { en: 'Backend', fr: 'Backend' } },
  { key: 'tools', label: { en: 'Tools', fr: 'Outils' } },
];

function Skills({ lang }: { lang: Lang }) {
  return (
    <section
      id="skills"
      className="bg-black/40 backdrop-blur-md border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div {...fadeUp}>
          <SectionHeading>{content.sections.skills[lang]}</SectionHeading>
        </motion.div>

        <div className="space-y-8">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                {cat.label[lang]}
              </p>
              <div className="flex flex-wrap gap-2">
                {(content.skills[cat.key] as readonly string[]).map((skill) => (
                  <SkillPill key={skill} label={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
const SOCIAL_LINKS: Array<{ href: string; label: string; Icon: React.ElementType }> = [
  { href: content.socials.github, label: 'GitHub', Icon: Github },
  { href: content.socials.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: content.socials.twitter, label: 'Twitter', Icon: Twitter },
];

function Contact({ lang }: { lang: Lang }) {
  return (
    <section
      id="contact"
      className="bg-black/40 backdrop-blur-md border-t border-white/5 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div {...fadeUp}>
          <SectionHeading>{content.sections.contact[lang]}</SectionHeading>
        </motion.div>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mb-10 text-base leading-relaxed text-zinc-300"
        >
          {lang === 'en'
            ? 'Available for freelance and full-time opportunities.'
            : 'Disponible pour des missions freelance et des postes en CDI.'}
        </motion.p>

        {/* Email CTA */}
        <motion.a
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          href={`mailto:${content.socials.email}`}
          className={cn(
            'mb-10 inline-flex items-center gap-3 rounded border border-cyan-500/30 bg-cyan-500/8',
            'px-6 py-3 font-mono text-sm text-cyan-400 transition-colors hover:bg-cyan-500/15',
          )}
        >
          <Mail size={16} />
          {content.socials.email}
        </motion.a>

        {/* Social + Download row */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3"
        >
          {SOCIAL_LINKS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded border border-zinc-800 bg-zinc-900/40 text-zinc-400 transition-colors hover:border-cyan-500/40 hover:text-cyan-400"
            >
              <Icon size={16} />
            </a>
          ))}

          {/* Divider */}
          <div className="h-6 w-px bg-zinc-800 mx-1" />

          {/* Download CV */}
          <a
            href="/cv.pdf"
            download
            className={cn(
              'inline-flex items-center gap-2 rounded border border-cyan-500/40 bg-cyan-500/10',
              'px-5 py-2.5 font-mono text-sm text-cyan-400 transition-colors hover:bg-cyan-500/20',
            )}
          >
            <Download size={14} />
            {content.cta.downloadCV[lang]}
          </a>
        </motion.div>

        {/* Footer */}
        <p className="mt-16 font-mono text-xs text-zinc-700">
          {content.name} &mdash; {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function Concept2() {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Fixed star field — stays behind all content while scrolling */}
      <div className="fixed inset-0 z-0 text-cyan-500">
        <GravityStarsBackground
          starsCount={120}
          mouseGravity="attract"
          mouseInfluence={150}
          gravityStrength={80}
          starsSize={2.5}
          glowIntensity={18}
          glowAnimation="spring"
          className="w-full h-full"
        />
      </div>

      {/* All content sits above the fixed canvas */}
      <div className="relative z-10">
        <Hero lang={lang} onLangChange={setLang} />
        <About lang={lang} />
        <SelectedWork lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} />
        <Contact lang={lang} />
      </div>
    </div>
  );
}
