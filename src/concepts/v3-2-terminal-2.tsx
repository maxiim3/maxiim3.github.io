import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { content, type Lang } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// ─── Typing effect hook ──────────────────────────────────────────────────────
function useTypingEffect(text: string, speed = 45, delay = 0) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

// ─── Blinking cursor ─────────────────────────────────────────────────────────
function Cursor({ visible = true }: { visible?: boolean }) {
  if (!visible) return null;
  return (
    <span
      className="inline-block animate-[blink_1s_step-end_infinite] text-[#e0def4]"
      aria-hidden="true"
    >
      █
    </span>
  );
}

// ─── Staggered line reveal ───────────────────────────────────────────────────
function Line({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={cn("font-mono text-sm leading-relaxed", className)}
    >
      {children}
    </motion.div>
  );
}

// ─── Command prompt ──────────────────────────────────────────────────────────
function Cmd({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <Line delay={delay} className="mt-10 mb-4">
      <span className="text-[#eb6f92] select-none">{">"} </span>
      <span className="text-white">{children}</span>
    </Line>
  );
}

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
    <section id={id} className={cn("px-4 sm:px-6 py-16", className)}>
      <div className="mx-auto max-w-3xl">{children}</div>
    </section>
  );
}

// ─── Scanlines overlay ───────────────────────────────────────────────────────
function Scanlines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      aria-hidden="true"
      style={{
        background:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
      }}
    />
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function V3Terminal2() {
  const [lang, setLang] = useState<Lang>("en");
  const t = (obj: { en: string; fr: string }) => obj[lang];

  const heroName = useTypingEffect(content.name, 80, 600);
  const heroTitle = useTypingEffect(t(content.title), 40, 1200);

  const skillCategories = [
    { key: "frontend" as const, label: "frontend/" },
    { key: "backend" as const, label: "backend/" },
    { key: "tools" as const, label: "tools/" },
  ];

  const socialLinks = [
    { icon: Github, href: content.socials.github, label: "GitHub" },
    { icon: Linkedin, href: content.socials.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: content.socials.twitter, label: "Twitter" },
    { icon: Mail, href: `mailto:${content.socials.email}`, label: "Email" },
  ];

  return (
    <div className="relative min-h-screen bg-[#191724] font-mono text-[#e0def4] selection:bg-[#c4a7e7]/20" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <Scanlines />

      {/* ── Global blink keyframe ────────────────────────────────────── */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      {/* ── Nav ──────────────────────────────────────────────────────── */}
      <header className="fixed top-0 right-0 left-0 z-40 border-b border-[#e0def4]/10 bg-[#191724]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2 text-sm text-[#e0def4]/70">
            <Terminal className="h-4 w-4" />
            <span>maxi@portfolio:~$</span>
          </div>
          <nav aria-label="Language" className="flex gap-1">
            {(["en", "fr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-current={lang === l ? "true" : undefined}
                className={cn(
                  "px-2 py-1 text-xs uppercase transition-colors",
                  lang === l
                    ? "bg-[#c4a7e7] text-[#191724]"
                    : "text-[#e0def4]/50 hover:text-[#e0def4]"
                )}
              >
                {l}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* ── Hero ────────────────────────────────────────────────────── */}
        <Section id="hero" className="pt-32 pb-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 text-sm text-[#e0def4]/50">
              <span className="select-none">{"> "}</span>
              <span className="text-[#eb6f92]">whoami</span>
            </div>
            <h1 className="mb-2 text-4xl text-white sm:text-5xl">
              {heroName.displayed}
              <Cursor visible={!heroName.done} />
            </h1>
            <div className="text-base text-[#e0def4]">
              {heroName.done && (
                <>
                  {heroTitle.displayed}
                  <Cursor visible={!heroTitle.done} />
                </>
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="mt-8 text-sm leading-relaxed text-[#e0def4]/70"
          >
            <span className="select-none text-[#e0def4]/40">{"> "}</span>
            {t(content.subtitle)}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-[#e0def4]/30 px-4 py-2 text-sm text-[#e0def4] transition-colors hover:bg-[#e0def4]/10"
            >
              {t(content.cta.explore)}
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#e0def4]/50 transition-colors hover:text-[#e0def4]"
            >
              <Download className="h-3.5 w-3.5" />
              {t(content.cta.downloadCV)}
            </a>
          </motion.div>
        </Section>

        {/* ── About ──────────────────────────────────────────────────── */}
        <Section id="about">
          <Cmd>{`cat ${lang === "en" ? "about" : "a-propos"}.txt`}</Cmd>
          <Line delay={0.15} className="text-[#e0def4]/80">
            {t(content.about)}
          </Line>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
            {[
              { value: `${content.stats.yearsExp}+`, label: lang === "en" ? "years" : "ans" },
              { value: `${content.stats.projects}+`, label: lang === "en" ? "projects" : "projets" },
              { value: `${content.stats.clients}+`, label: "clients" },
            ].map((stat, i) => (
              <Line key={stat.label} delay={0.25 + i * 0.1}>
                <span className="text-white">{stat.value}</span>
                <span className="ml-2 text-[#e0def4]/50">{stat.label}</span>
              </Line>
            ))}
          </div>
        </Section>

        {/* ── Projects ───────────────────────────────────────────────── */}
        <Section id="projects">
          <Cmd>ls projects/</Cmd>
          <div className="space-y-10">
            {content.projects.map((project, i) => {
              const idx = String(i + 1).padStart(2, "0");
              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="group border-l border-[#e0def4]/15 pl-4"
                >
                  <div className="mb-1 flex items-baseline gap-3">
                    <span className="text-[#eb6f92] text-xs select-none">[{idx}]</span>
                    <h3 className="text-base text-white">{project.title}</h3>
                    <span className="text-xs text-[#e0def4]/40">{project.year}</span>
                  </div>
                  <Line delay={0.05} className="text-[#e0def4]/60 mb-2">
                    {t(project.tagline)}
                  </Line>
                  <Line delay={0.1} className="text-[#e0def4]/50 text-xs leading-relaxed">
                    {t(project.description)}
                  </Line>
                  <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs text-[#e0def4]/30">
                        {tech}
                      </span>
                    ))}
                    <span className="text-xs text-[#e0def4]/20">|</span>
                    <span className="text-xs text-[#eb6f92]/60">{t(project.role)}</span>
                  </div>
                  <a
                    href={project.url}
                    className="mt-3 inline-flex items-center gap-1 text-xs text-[#e0def4]/40 transition-colors hover:text-[#e0def4]"
                  >
                    {t(content.cta.viewProject)}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </Section>

        {/* ── Experience ──────────────────────────────────────────────── */}
        <Section id="experience">
          <Cmd>cat experience.log</Cmd>
          <div className="space-y-8">
            {content.experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
                  <h3 className="text-sm text-white">{t(exp.role)}</h3>
                  <span className="text-xs text-[#e0def4]/40">@ {exp.company}</span>
                  <span className="text-xs text-[#eb6f92]/70">{exp.period}</span>
                </div>
                <Line delay={0.08} className="mt-2 text-[#e0def4]/50 text-xs leading-relaxed">
                  <span className="select-none text-[#e0def4]/20">{"> "}</span>
                  {t(exp.description)}
                </Line>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── Skills ──────────────────────────────────────────────────── */}
        <Section id="skills">
          <Cmd>skills --list</Cmd>
          <div className="space-y-6">
            {skillCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: catIdx * 0.12 }}
              >
                <div className="mb-2 text-xs text-[#eb6f92]/70">{cat.label}</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {content.skills[cat.key].map((skill, skillIdx) => (
                    <Line
                      key={skill}
                      delay={catIdx * 0.1 + skillIdx * 0.04}
                      className="text-[#e0def4]/70 text-xs"
                    >
                      <span className="select-none text-[#e0def4]/25">- </span>
                      {skill}
                    </Line>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* ── Contact ─────────────────────────────────────────────────── */}
        <Section id="contact">
          <Cmd>{t(content.sections.contact).toLowerCase()}</Cmd>
          <Line delay={0.1} className="text-[#e0def4]/60 mb-6">
            <span className="select-none text-[#e0def4]/20">{"> "}</span>
            {lang === "en"
              ? "Open for freelance projects and interesting collaborations."
              : "Ouvert aux projets freelance et aux collaborations intéressantes."}
          </Line>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.08 }}
                  className="flex items-center gap-2 border border-[#e0def4]/15 px-3 py-2 text-xs text-[#e0def4]/60 transition-colors hover:border-[#e0def4]/40 hover:text-[#e0def4]"
                  aria-label={link.label}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{link.label}</span>
                </motion.a>
              );
            })}
          </div>
          <Line delay={0.5} className="mt-6 text-[#e0def4]/40">
            <a
              href={`mailto:${content.socials.email}`}
              className="transition-colors hover:text-[#e0def4]"
            >
              {content.socials.email}
            </a>
          </Line>
        </Section>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="border-t border-[#e0def4]/10 px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 text-center text-xs text-[#e0def4]/30">
          <span>
            {"> "}exit 0
          </span>
          <span>
            &copy; {new Date().getFullYear()} {content.name}. All rights reserved.
          </span>
          <span className="text-[#e0def4]/15">
            PID 1 — uptime {content.stats.yearsExp}y — 0 errors
          </span>
        </div>
      </footer>
    </div>
  );
}
