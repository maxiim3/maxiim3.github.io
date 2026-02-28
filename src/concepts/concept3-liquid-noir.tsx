'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, Download, ChevronDown } from 'lucide-react';

import { BubbleBackground } from '@/components/animate-ui/components/backgrounds/bubble';
import { MorphingText } from '@/components/animate-ui/primitives/texts/morphing';
import { cn } from '@/lib/utils';
import { content, type Lang } from '@/data/portfolio';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type SectionProps = {
  lang: Lang;
};

// ---------------------------------------------------------------------------
// Shared primitives
// ---------------------------------------------------------------------------

/** Thin accent line used in section headings */
function AccentLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'h-px w-16 bg-gradient-to-r from-violet-500 to-pink-500',
        className,
      )}
    />
  );
}

/** Section wrapper — consistent vertical rhythm */
function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn('py-28 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto', className)}
    >
      {children}
    </section>
  );
}

/** Animated section heading */
function SectionHeading({ label }: { label: string }) {
  return (
    <motion.div
      className="mb-16 flex flex-col gap-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <AccentLine />
      <h2 className="text-3xl font-bold text-zinc-50 tracking-tight">{label}</h2>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function HeroSection({ lang, onToggleLang }: SectionProps & { onToggleLang: () => void }) {
  // Morphing text cycles: "Maxi" → English title → French title, looping
  const morphingTexts = ['Maxi', content.title.en, content.title.fr];

  return (
    <BubbleBackground
      interactive
      className="relative min-h-screen w-full"
      // Dark purple / fuchsia colour scheme — ink in water
      colors={{
        first: '88,28,135',   // purple-900
        second: '157,23,77',  // pink-900
        third: '76,29,149',   // violet-900
        fourth: '112,26,117', // fuchsia-900
        fifth: '88,28,135',   // purple-900 again for depth
        sixth: '157,23,77',   // pink-900 again for the interactive blob
      }}
    >
      {/* Overlay to ensure text legibility over the busy background */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero content — centred vertically */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">

        {/* Language toggle */}
        <motion.button
          onClick={onToggleLang}
          className="absolute top-8 right-8 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-sm transition hover:bg-white/10 hover:text-zinc-50"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {lang === 'en' ? 'FR' : 'EN'}
        </motion.button>

        {/* Name / title — signature morphing effect */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Eyebrow label */}
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-400">
            Portfolio
          </span>

          {/* Morphing name / role — the signature feature of this concept */}
          <h1 className="text-6xl font-bold tracking-tight text-zinc-50 md:text-7xl lg:text-8xl">
            <MorphingText
              text={morphingTexts}
              loop
              holdDelay={3000}
              // MorphingText defaults to inView=false, so it starts immediately
            />
          </h1>

          {/* Static subtitle, swaps on lang change */}
          <p className="mt-2 max-w-xl text-base text-zinc-400 md:text-lg">
            {content.subtitle[lang]}
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {[
            { value: `${content.stats.yearsExp}+`, label: lang === 'en' ? 'Years' : 'Ans' },
            { value: `${content.stats.projects}+`, label: lang === 'en' ? 'Projects' : 'Projets' },
            { value: `${content.stats.clients}+`, label: lang === 'en' ? 'Clients' : 'Clients' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                {stat.value}
              </span>
              <span className="text-xs text-zinc-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a
            href="#experience"
            className="rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:from-violet-500 hover:to-pink-500 hover:shadow-violet-800/60"
          >
            {content.cta.explore[lang]}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
          >
            {content.cta.downloadCV[lang]}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
          >
            <ChevronDown size={20} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </BubbleBackground>
  );
}

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

function ExperienceSection({ lang }: SectionProps) {
  return (
    <Section id="experience">
      <SectionHeading label={content.sections.experience[lang]} />

      <div className="flex flex-col gap-5">
        {content.experience.map((job, i) => (
          <motion.div
            key={job.company}
            className={cn(
              // Glass morphism card
              'group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md',
              'transition-all duration-500',
              // Subtle perspective tilt on hover via CSS transform — no library needed
              'hover:[transform:perspective(800px)_rotateX(1.5deg)_rotateY(-1.5deg)] hover:border-white/20 hover:bg-white/8',
            )}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
          >
            {/* Gradient accent glow on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/0 to-pink-500/0 opacity-0 transition-opacity duration-500 group-hover:from-violet-500/5 group-hover:to-pink-500/5 group-hover:opacity-100" />

            <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-zinc-50">
                  {job.role[lang]}
                </h3>
                <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                  {job.company}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-500">
                {job.period}
              </span>
            </div>

            <p className="relative mt-4 text-sm leading-relaxed text-zinc-400">
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

function SkillsSection({ lang }: SectionProps) {
  const categories = [
    { label: 'Frontend', skills: content.skills.frontend },
    { label: 'Backend', skills: content.skills.backend },
    { label: 'Tools', skills: content.skills.tools },
  ] as const;

  return (
    <Section id="skills">
      <SectionHeading label={content.sections.skills[lang]} />

      <div className="flex flex-col gap-10">
        {categories.map((cat, catIdx) => (
          <div key={cat.label} className="flex flex-col gap-4">
            <motion.span
              className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            >
              {cat.label}
            </motion.span>

            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, skillIdx) => (
                <motion.span
                  key={skill}
                  className={cn(
                    'rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-zinc-300',
                    'cursor-default select-none transition-colors duration-200',
                    'hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-zinc-50',
                  )}
                  // Blur-to-sharp reveal — the defining animation of this section
                  initial={{ opacity: 0, filter: 'blur(10px)', y: 8 }}
                  whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.45,
                    delay: catIdx * 0.08 + skillIdx * 0.06,
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
// Journey (Timeline)
// ---------------------------------------------------------------------------

function JourneySection({ lang }: SectionProps) {
  return (
    <Section id="journey">
      <SectionHeading label={content.sections.journey[lang]} />

      <div className="relative flex flex-col gap-0">
        {/* Vertical accent line */}
        <div className="absolute left-[5.5rem] top-0 h-full w-px bg-gradient-to-b from-violet-500/60 via-pink-500/30 to-transparent" />

        {content.journey.map((item, i) => (
          <motion.div
            key={item.year}
            className="relative flex gap-8 pb-12 last:pb-0"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
          >
            {/* Year label */}
            <div className="flex w-16 shrink-0 flex-col items-end pt-0.5">
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">
                {item.year}
              </span>
            </div>

            {/* Timeline dot — sits on the accent line */}
            <div className="relative flex flex-col items-center">
              <div className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 ring-4 ring-[#0a0a0a] shadow-lg shadow-violet-900/50" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1.5 pb-0 pt-0">
              <h3 className="text-base font-semibold text-zinc-100">
                {item.title[lang]}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500">
                {item.description[lang]}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

function ContactSection({ lang }: SectionProps) {
  const socials = [
    { Icon: Github, href: content.socials.github, label: 'GitHub' },
    { Icon: Linkedin, href: content.socials.linkedin, label: 'LinkedIn' },
    { Icon: Twitter, href: content.socials.twitter, label: 'Twitter' },
  ];

  return (
    <Section id="contact" className="pb-36">
      <SectionHeading label={content.sections.contact[lang]} />

      <div className="flex flex-col gap-12">
        {/* Intro copy */}
        <motion.p
          className="max-w-lg text-base leading-relaxed text-zinc-400"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {lang === 'en'
            ? "Let's build something together. Reach out via email or connect on any of the platforms below."
            : 'Construisons quelque chose ensemble. Contactez-moi par email ou connectez-vous sur l\'une des plateformes ci-dessous.'}
        </motion.p>

        {/* Email CTA */}
        <motion.a
          href="mailto:hello@maxi.dev"
          className="group inline-flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Mail size={18} className="text-violet-400 transition group-hover:text-violet-300" />
          <span className="text-sm font-medium text-zinc-300 group-hover:text-zinc-50 transition">
            hello@maxi.dev
          </span>
        </motion.a>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-zinc-50"
            >
              <Icon size={17} strokeWidth={1.75} />
            </a>
          ))}
        </motion.div>

        {/* Download CV */}
        <motion.a
          href="/cv.pdf"
          download
          className="inline-flex w-fit items-center gap-2.5 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:from-violet-500 hover:to-pink-500"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Download size={15} strokeWidth={2} />
          {content.cta.downloadCV[lang]}
        </motion.a>
      </div>
    </Section>
  );
}

// ---------------------------------------------------------------------------
// Divider — thin gradient separator between sections
// ---------------------------------------------------------------------------

function Divider() {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-12 lg:px-24">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Root component
// ---------------------------------------------------------------------------

export default function Concept3() {
  const [lang, setLang] = React.useState<Lang>('en');

  const toggleLang = React.useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'fr' : 'en'));
  }, []);

  return (
    // #0a0a0a base — near-black, not pure black, for depth
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a', color: '#fafafa' }}>

      {/* === HERO — full viewport, BubbleBackground wraps all content === */}
      <HeroSection lang={lang} onToggleLang={toggleLang} />

      {/* === EXPERIENCE === */}
      <ExperienceSection lang={lang} />

      <Divider />

      {/* === SKILLS === */}
      <SkillsSection lang={lang} />

      <Divider />

      {/* === JOURNEY === */}
      <JourneySection lang={lang} />

      <Divider />

      {/* === CONTACT === */}
      <ContactSection lang={lang} />

      {/* Footer */}
      <footer className="pb-10 text-center text-xs text-zinc-700">
        {lang === 'en' ? 'Crafted with precision' : 'Conçu avec précision'} — {new Date().getFullYear()}
      </footer>
    </div>
  );
}
