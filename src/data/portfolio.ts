export type Lang = "en" | "fr";

export const content = {
  name: "Maxi",
  title: {
    en: "Fullstack Developer",
    fr: "Développeur Fullstack",
  },
  subtitle: {
    en: "I design and build web applications that are fast, accessible, and pleasant to use.",
    fr: "Je conçois et développe des applications web rapides, accessibles et agréables à utiliser.",
  },
  about: {
    en: "Fullstack developer with 7+ years of experience building modern web applications. I specialize in React ecosystems and Node.js, with a strong focus on performance, DX, and clean architecture. Currently exploring the edges of what's possible with AI-augmented development.",
    fr: "Développeur fullstack avec 7+ ans d'expérience dans la construction d'applications web modernes. Spécialisé dans l'écosystème React et Node.js, avec un focus sur la performance, la DX et l'architecture propre. J'explore actuellement les limites du développement augmenté par l'IA.",
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
      title: "Kōdo",
      tagline: {
        en: "AI-powered code review platform",
        fr: "Plateforme de revue de code augmentée par l'IA",
      },
      description: {
        en: "Built a real-time code review tool that uses LLMs to suggest improvements, detect bugs, and enforce team conventions. Handles 500+ reviews/day with sub-second feedback.",
        fr: "Développement d'un outil de revue de code temps réel utilisant des LLMs pour suggérer des améliorations, détecter des bugs et appliquer les conventions d'équipe. Gère 500+ revues/jour avec un feedback en moins d'une seconde.",
      },
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenAI"],
      role: { en: "Lead Developer", fr: "Lead Développeur" },
      year: "2024",
      url: "#",
    },
    {
      title: "Pulse",
      tagline: {
        en: "Real-time analytics dashboard",
        fr: "Dashboard analytique temps réel",
      },
      description: {
        en: "Designed and shipped a high-performance analytics dashboard processing 2M+ events/day. WebSocket-based real-time updates with sub-100ms latency.",
        fr: "Conception et livraison d'un dashboard analytique haute performance traitant 2M+ événements/jour. Mises à jour temps réel via WebSocket avec une latence inférieure à 100ms.",
      },
      tech: ["Next.js", "D3.js", "Redis", "WebSocket", "AWS"],
      role: { en: "Fullstack Developer", fr: "Développeur Fullstack" },
      year: "2023",
      url: "#",
    },
    {
      title: "Noma",
      tagline: {
        en: "Digital nomad community platform",
        fr: "Plateforme communautaire pour nomades digitaux",
      },
      description: {
        en: "Co-founded and built a platform connecting 10k+ digital nomads worldwide. Features include co-living matching, city guides, and visa tracking.",
        fr: "Co-fondation et développement d'une plateforme connectant 10k+ nomades digitaux. Fonctionnalités : matching co-living, guides ville, et suivi de visas.",
      },
      tech: ["Svelte", "Bun", "PostgreSQL", "Mapbox", "Stripe"],
      role: { en: "Co-founder & CTO", fr: "Co-fondateur & CTO" },
      year: "2022",
      url: "#",
    },
  ],
  experience: [
    {
      role: { en: "Senior Fullstack Developer", fr: "Développeur Fullstack Senior" },
      company: "TechCorp",
      period: "2022 — Present",
      description: {
        en: "Lead a team of 5 engineers building scalable web applications. Drove migration from monolith to microservices, reducing deploy times by 80%.",
        fr: "Direction d'une équipe de 5 ingénieurs développant des applications web scalables. Migration d'un monolithe vers des microservices, réduisant les temps de déploiement de 80%.",
      },
    },
    {
      role: { en: "Fullstack Developer", fr: "Développeur Fullstack" },
      company: "StartupLab",
      period: "2020 — 2022",
      description: {
        en: "Shipped 3 SaaS products from zero to production. Built CI/CD pipelines and established team coding standards.",
        fr: "Livraison de 3 produits SaaS de zéro à la production. Mise en place de pipelines CI/CD et établissement des standards de code.",
      },
    },
    {
      role: { en: "Frontend Developer", fr: "Développeur Frontend" },
      company: "AgenceWeb",
      period: "2018 — 2020",
      description: {
        en: "Built design systems and responsive interfaces for enterprise clients including banking and retail sectors.",
        fr: "Création de design systems et d'interfaces responsives pour des clients grands comptes dans les secteurs bancaire et retail.",
      },
    },
  ],
  skills: {
    frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Svelte"],
    backend: ["Node.js", "Bun", "PostgreSQL", "Redis", "GraphQL"],
    tools: ["Git", "Docker", "AWS", "Figma", "Linux"],
  },
  socials: {
    github: "https://github.com/maxi",
    linkedin: "https://linkedin.com/in/maxi",
    twitter: "https://twitter.com/maxi",
    email: "hello@maxi.dev",
  },
  stats: {
    yearsExp: 7,
    projects: 30,
    clients: 15,
  },
} as const;
