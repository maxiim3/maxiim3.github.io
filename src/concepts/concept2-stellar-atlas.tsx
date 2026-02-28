import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ChevronDown,
  Terminal,
} from 'lucide-react';

import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';
import {
  TypingText,
  TypingTextCursor,
} from '@/components/animate-ui/primitives/texts/typing';
import { CountingNumber } from '@/components/animate-ui/primitives/texts/counting-number';
import { cn } from '@/lib/utils';
import { content, type Lang } from '@/data/portfolio';

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------

function HeroSection({ lang, onLangToggle }: { lang: Lang; onLangToggle: () => void }) {
  return (
    // Relative container so children can position against it
    <section className="relative h-screen w-full overflow-hidden bg-[#030712]">
      {/* Fullscreen star canvas — absolute, no children */}
      <GravityStarsBackground
        starsCount={100}
        mouseGravity="attract"
        mouseInfluence={150}
        gravityStrength={100}
        className="absolute inset-0 text-cyan-500"
      />

      {/* Radial fade overlay so the centre is more readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, transparent 20%, #030712 100%)',
        }}
      />

      {/* Content overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Terminal badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 font-mono text-xs text-zinc-400 backdrop-blur-sm"
        >
          <Terminal size={12} className="text-cyan-500" />
          <span>stellar-atlas@portfolio:~$</span>
        </motion.div>

        {/* Name / typing headline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 font-mono text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl"
        >
          <span className="text-cyan-500 select-none">&gt;&nbsp;</span>
          <TypingText
            text={['Maxi', 'Développeur Fullstack', 'Fullstack Developer']}
            loop
            duration={80}
            holdDelay={1800}
            className="text-zinc-100"
          >
            <TypingTextCursor style={{ backgroundColor: '#06b6d4' }} />
          </TypingText>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-12 max-w-xl font-mono text-sm text-zinc-400 sm:text-base"
        >
          {content.subtitle[lang]}
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 flex gap-10"
        >
          {[
            { value: content.stats.yearsExp, suffix: '+ yrs' },
            { value: content.stats.projects, suffix: '+ proj' },
            { value: content.stats.clients, suffix: '+ clients' },
          ].map((stat) => (
            <div key={stat.suffix} className="text-center">
              <div className="font-mono text-2xl font-bold text-cyan-500 sm:text-3xl">
                <CountingNumber
                  number={stat.value}
                  inView
                  transition={{ stiffness: 60, damping: 30 }}
                  delay={700}
                />
                <span>{stat.suffix}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded border border-cyan-500 bg-cyan-500/10 px-5 py-2.5 font-mono text-sm text-cyan-400 transition-colors hover:bg-cyan-500/20"
          >
            {content.cta.explore[lang]}
            <ChevronDown size={14} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded border border-zinc-700 bg-zinc-900/50 px-5 py-2.5 font-mono text-sm text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
          >
            <Download size={14} />
            {content.cta.downloadCV[lang]}
          </a>
          {/* Language toggle */}
          <button
            onClick={onLangToggle}
            className="rounded border border-zinc-700 bg-zinc-900/50 px-3 py-2.5 font-mono text-xs text-zinc-400 transition-colors hover:border-zinc-500 hover:text-zinc-200"
          >
            {lang === 'en' ? 'FR' : 'EN'}
          </button>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section wrapper — shared styles
// ---------------------------------------------------------------------------

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-12 font-mono text-xs font-semibold uppercase tracking-widest text-zinc-500">
      <span className="text-cyan-500">// </span>
      {children}
    </h2>
  );
}

// ---------------------------------------------------------------------------
// Experience Section
// ---------------------------------------------------------------------------

function ExperienceSection({ lang }: { lang: Lang }) {
  return (
    <section id="experience" className="relative z-10 bg-[#030712] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>{content.sections.experience[lang]}</SectionHeading>

        {/* Horizontal scroll on small screens, grid on large */}
        <div className="grid gap-6 sm:grid-cols-3">
          {content.experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700"
            >
              {/* Period tag */}
              <span className="mb-3 inline-block font-mono text-xs text-cyan-500/70">
                {exp.period}
              </span>
              <h3 className="mb-1 font-mono text-sm font-semibold text-zinc-100">
                {exp.role[lang]}
              </h3>
              <p className="mb-3 font-mono text-xs text-zinc-500">{exp.company}</p>
              <p className="text-sm leading-relaxed text-zinc-400">
                {exp.description[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Skills Section
// ---------------------------------------------------------------------------

const SKILL_CATEGORIES: Array<{
  key: keyof typeof content.skills;
  label: { en: string; fr: string };
}> = [
  { key: 'frontend', label: { en: 'Frontend', fr: 'Frontend' } },
  { key: 'backend', label: { en: 'Backend', fr: 'Backend' } },
  { key: 'tools', label: { en: 'Tools', fr: 'Outils' } },
];

function SkillTag({ name }: { name: string }) {
  return (
    <span className="rounded border border-zinc-800 bg-zinc-900/50 px-3 py-1 font-mono text-xs text-zinc-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-400">
      {name}
    </span>
  );
}

function SkillsSection({ lang }: { lang: Lang }) {
  return (
    <section id="skills" className="relative z-10 bg-[#030712] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>{content.sections.skills[lang]}</SectionHeading>

        <div className="space-y-10">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
            >
              <p className="mb-3 font-mono text-xs text-zinc-600">
                {cat.label[lang]}
              </p>
              <div className="flex flex-wrap gap-2">
                {(content.skills[cat.key] as readonly string[]).map((skill) => (
                  <SkillTag key={skill} name={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Journey Section — vertical timeline
// ---------------------------------------------------------------------------

function JourneySection({ lang }: { lang: Lang }) {
  return (
    <section id="journey" className="relative z-10 bg-[#030712] px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeading>{content.sections.journey[lang]}</SectionHeading>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[34px] top-0 h-full w-px bg-zinc-800" />

          <div className="space-y-10">
            {content.journey.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex gap-6"
              >
                {/* Year badge */}
                <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center">
                  <div className="absolute inset-0 rounded border border-zinc-800 bg-zinc-900" />
                  <span className="relative font-mono text-xs font-bold text-cyan-500">
                    {item.year}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-3">
                  <h3 className="mb-1 font-mono text-sm font-semibold text-zinc-100">
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
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Contact Section
// ---------------------------------------------------------------------------

const SOCIAL_LINKS: Array<{
  href: string;
  label: string;
  Icon: React.ElementType;
}> = [
  { href: content.socials.github, label: 'GitHub', Icon: Github },
  { href: content.socials.linkedin, label: 'LinkedIn', Icon: Linkedin },
  { href: content.socials.twitter, label: 'Twitter', Icon: Twitter },
];

function ContactSection({ lang }: { lang: Lang }) {
  return (
    <section id="contact" className="relative z-10 bg-[#030712] px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <SectionHeading>{content.sections.contact[lang]}</SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Social icons */}
          <div className="flex gap-4">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
              >
                <Icon size={16} />
              </a>
            ))}
            <a
              href="mailto:hello@maxi.dev"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Download CV */}
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded border border-cyan-500/40 bg-cyan-500/10 px-5 py-2.5 font-mono text-sm text-cyan-400 transition-colors hover:bg-cyan-500/20"
          >
            <Download size={14} />
            {content.cta.downloadCV[lang]}
          </a>
        </motion.div>

        {/* Footer line */}
        <p className="mt-16 font-mono text-xs text-zinc-700">
          {content.name} — {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Root export
// ---------------------------------------------------------------------------

export default function Concept2() {
  const [lang, setLang] = useState<Lang>('en');
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'fr' : 'en'));

  return (
    <div className={cn('min-h-screen bg-[#030712]')}>
      <HeroSection lang={lang} onLangToggle={toggleLang} />
      <ExperienceSection lang={lang} />
      <SkillsSection lang={lang} />
      <JourneySection lang={lang} />
      <ContactSection lang={lang} />
    </div>
  );
}
