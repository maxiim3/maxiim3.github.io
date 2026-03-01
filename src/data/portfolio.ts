export type Lang = "en" | "fr";

export const content = {
  firstName: "Maxime",
  lastName: "Tamburrini",
  title: {
    en: "Front-end Developer",
    fr: "Développeur Front-end",
  },
  subtitle: {
    en: "I build fast, accessible, and refined web applications — from design systems to complex client-side architectures.",
    fr: "Je conçois des applications web rapides, accessibles et soignées — des design systems aux architectures front-end complexes.",
  },
  about: {
    en: "Front-end developer with 3+ years of experience building modern web applications, within a broader 10-year professional background. I specialize in Vue.js, React, and TypeScript, with a strong focus on design systems, accessibility, and clean architecture. Currently exploring AI-driven development workflows with multi-agent orchestration.",
    fr: "Développeur front-end avec 3+ ans d'expérience dans le développement d'applications web modernes, au sein d'un parcours professionnel de 10 ans. Spécialisé en Vue.js, React et TypeScript, avec un focus sur les design systems, l'accessibilité et l'architecture propre. J'explore actuellement les workflows de développement pilotés par IA avec orchestration multi-agents.",
  },
  cta: {
    explore: { en: "Explore", fr: "Explorer" },
    downloadCV: { en: "Download CV", fr: "Télécharger CV" },
    viewProject: { en: "View project", fr: "Voir le projet" },
    getInTouch: { en: "Get in touch", fr: "Me contacter" },
  },
  sections: {
    about: { en: "About", fr: "À propos" },
    projects: { en: "Selected Work", fr: "Projets sélectionnés" },
    experience: { en: "Experience", fr: "Expérience" },
    skills: { en: "Skills", fr: "Compétences" },
    contact: { en: "Contact", fr: "Contact" },
  },
  projects: [
    {
      title: "Airddm — Grands Comptes",
      tagline: {
        en: "Enterprise front-end for Heineken, Michelin, Bosch",
        fr: "Front-end grands comptes pour Heineken, Michelin, Bosch",
      },
      description: {
        en: "Built and maintained front-end applications for major B2B2C accounts. Created design systems and component libraries with Storybook. Migrated e-commerce platforms from Django to Vue.js. Implemented complex checkout flows with Pinia state management and data visualization with Chart.js.",
        fr: "Développement et maintenance d'applications front-end pour des grands comptes B2B2C. Création de design systems et librairies de composants avec Storybook. Migration de plateformes e-commerce de Django vers Vue.js. Tunnels d'achat avec gestion d'état complexe (Pinia) et dataviz avec Chart.js.",
      },
      tech: ["Vue.js", "Nuxt", "TypeScript", "Pinia", "Storybook", "Chart.js"],
      role: { en: "Front-end Developer", fr: "Développeur Front-end" },
      year: "2024",
      url: "#",
    },
    {
      title: "AI Agent Orchestration",
      tagline: {
        en: "Multi-agent systems for end-to-end web development",
        fr: "Systèmes multi-agents pour le développement web de bout en bout",
      },
      description: {
        en: "Architecting multi-agent systems to drive end-to-end web projects: architecture, specifications, project management, sprints, coding, and reviews. Ensuring rigorous quality standards while maintaining high velocity.",
        fr: "Conception de systèmes multi-agents pour piloter des projets web de bout en bout : architecture, specs, project management, sprints, code et reviews. Qualité rigoureuse et haute vélocité.",
      },
      tech: ["AI Agents", "TypeScript", "React", "Architecture"],
      role: { en: "Independent Developer", fr: "Développeur indépendant" },
      year: "2025",
      url: "#",
    },
    {
      title: "Freelance",
      tagline: {
        en: "End-to-end web development for direct clients",
        fr: "Développement web de A à Z pour clients directs",
      },
      description: {
        en: "Full project lifecycle management — from discovery and UI/UX design to development and deployment. Built with React, Next.js, Vue, and Svelte. Technical strategy consulting and long-term maintenance.",
        fr: "Gestion complète de projets — du recueil du besoin et design UI/UX au développement et déploiement. React, Next.js, Vue et Svelte. Conseil technique et accompagnement post-livraison.",
      },
      tech: ["React", "Next.js", "Vue.js", "Svelte", "TailwindCSS"],
      role: { en: "Freelance Consultant", fr: "Consultant freelance" },
      year: "2022",
      url: "#",
    },
  ],
  experience: [
    {
      role: { en: "Vue.js/Nuxt Front-end Developer", fr: "Développeur Front-end Vue.js/Nuxt" },
      company: "Airddm",
      period: "2024 — Present",
      description: {
        en: "Front-end development for major accounts (Heineken, Michelin, Bosch). Design systems, component libraries (Storybook), code reviews, E2E testing. B2B2C app development, Django to Vue.js migration, complex state management with Pinia.",
        fr: "Développement front-end pour des grands comptes (Heineken, Michelin, Bosch). Design systems, librairies de composants (Storybook), code reviews, testing E2E. Applications B2B2C, migration Django vers Vue.js, gestion d'état complexe avec Pinia.",
      },
    },
    {
      role: { en: "Freelance Consultant", fr: "Consultant freelance" },
      company: "Independent",
      period: "2022 — Present",
      description: {
        en: "Web development for direct clients. Full lifecycle from discovery and UI/UX design to development (React, Next.js, Vue, Svelte) and deployment. Technical strategy and long-term maintenance.",
        fr: "Projets web pour des clients directs. Gestion complète de A à Z — recueil du besoin, design, développement (React, Next.js, Vue, Svelte), déploiement. Conseil technique et accompagnement post-livraison.",
      },
    },
    {
      role: { en: "React Training — 10 Projects", fr: "Formation React — 10 projets" },
      company: "OpenClassrooms",
      period: "2021 — 2023",
      description: {
        en: "Completed 10 projects presented to a jury. Advanced skills in HTML, CSS, JavaScript, Git. React applications, Redux/RTK state management, API integration, data visualization.",
        fr: "10 projets présentés devant un jury en conditions réelles. HTML, CSS, JavaScript et Git approfondis. Applications React, gestion d'état Redux/RTK, intégration d'API, dataviz.",
      },
    },
  ],
  skills: {
    frontend: ["Vue.js", "Nuxt", "React", "Next.js", "Svelte", "TypeScript", "TailwindCSS"],
    backend: ["Node.js", "Bun", "Express.js", "MongoDB", "REST API"],
    tools: ["Git", "Storybook", "Figma", "Pinia", "Redux/RTK", "Chart.js"],
  },
  socials: {
    github: "https://github.com/maxiim3",
    linkedin: "",
    twitter: "",
    email: "mtamburrini@proton.me",
  },
  stats: {
    yearsExp: 3,
    projects: 10,
    clients: 10,
  },
} as const;
