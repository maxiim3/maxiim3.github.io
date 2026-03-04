export type Lang = "en" | "fr";

export const content = {
  firstName: "Maxime",
  lastName: "Tamburrini",
  title: {
    en: "Front-end Developer — Vue · React · TypeScript",
    fr: "Développeur Front-end confirmé — Vue · React · Svelte",
  },
  subtitle: {
    en: "Designing and building fast, accessible web apps and scalable design systems.",
    fr: "Concevoir et développer des applications web rapides, accessibles et des design systems évolutifs.",
  },
  about: {
    en: "Front-end developer with 3 years dedicated to modern web applications and a 10-year professional background. I craft performant, accessible and maintainable interfaces with Vue, React, Svelte and TypeScript. Design systems, clean architecture, accessibility. Before development, sound editor in cinema, then hospitality at every level, from the floor to managing a hostel abroad. That same standard, I bring to every project.",
    fr: "Développeur front-end avec 3 ans d'expérience dédiée aux applications web modernes et un parcours professionnel de 10 ans. Je conçois des interfaces performantes, accessibles et maintenables en Vue, React, Svelte et TypeScript. Design systems, architecture propre, accessibilité. Avant le développement, monteur son cinéma sur Paris, j'ai ensuite voyagé et travailler dans la permaculture, l'hotellerie, la restauration. J'ai été amené a former et manager des équipes. J'apporte dans chaque projet mes exigeances, ma rigueur et ma bonne humeur.",
  },
  cta: {
    explore: { en: "Explore", fr: "Explorer" },
    downloadCV: { en: "Download CV", fr: "Télécharger le CV" },
    viewProject: { en: "View project", fr: "Voir le projet" },
    getInTouch: { en: "Get in touch", fr: "Me contacter" },
  },
  sections: {
    about: { en: "About", fr: "À propos" },
    projects: { en: "Selected work", fr: "Projets sélectionnés" },
    experience: { en: "Experience", fr: "Expérience" },
    skills: { en: "Skills", fr: "Compétences" },
    contact: { en: "Contact", fr: "Contact" },
  },
  projects: [
    {
      title: "Airddm — Enterprise Accounts",
      tagline: {
        en: "Front-end for major B2B2C accounts",
        fr: "Front-end pour grands comptes B2B2C",
      },
      description: {
        en: "Built and maintained front-end applications for major enterprise accounts. Authored component libraries and a design system with Storybook, migrated e-commerce flows to Vue/Nuxt and implemented complex checkout state with Pinia. Focus on performance, accessibility and maintainability.",
        fr: "Développement et maintenance d'applications front-end pour grands comptes B2B2C. Rédaction de librairies de composants et d'un design system avec Storybook, migration de plateformes e-commerce vers Vue/Nuxt et mise en place de tunnels d'achat complexes avec Pinia. Système de notification temps réel (Websocket). Priorité : performance, accessibilité et maintenabilité.",
      },
      tech: [
        "Vue.js",
        "Nuxt",
        "TypeScript",
        "Pinia",
        "Storybook",
        "Chart.js",
        "Gitlab",
        "Typesense",
      ],
      role: { en: "Front-end Developer", fr: "Développeur Front-end" },
      year: "2024-now",
    },
    {
      title: "Freelance - Sestini Pizza",
      tagline: {
        en: "Multi-agent workflows to accelerate web delivery",
        fr: "Branding total d'un restaurateur",
      },
      description: {
        en: "Architected and prototyped multi-agent systems to automate parts of the web delivery lifecycle: specs, project management, scaffolding, code generation and review pipelines. Goal: increase velocity without sacrificing code quality.",
        fr: "J'ai accompagné un entrepreneur dans sa création d'entreprise. J'ai conçu toute l'identité visuelle, le matériel graphique, le site internet, fiche Google Business, déploiement et suivi continu. Avec plusieurs centaines de milliers d'euros de CA, nous allons prochainement travailler ensemble sur un nouveau projet.",
      },
      tech: ["Figma", "Illustrator", "React", "Vercel", "Google Business"],
      role: { en: "Personal Project", fr: "Projet complet freelance" },
      year: "2025",
      url: "#",
    },
  ],
  experience: [
    {
      role: {
        en: "Vue/Nuxt Front-end Developer",
        fr: "Développeur Front-end Vue/Nuxt",
      },
      company: "Airddm",
      period: "2024 – Present",
      description: {
        en: "Front-end for major B2B2C accounts: design systems, component libraries (Storybook), code review and E2E testing. Led migrations from Django templates to Vue apps and implemented complex state management with Pinia. Agile/Scrum methodology.",
        fr: "Front-end pour grands comptes B2B2C : design systems, librairies de composants (Storybook), revue de code et tests E2E. Pilotage de migrations de Django vers Vue et implémentation de gestions d'état complexes avec Pinia. Méthodologie Agile/Scrum.",
      },
    },
    {
      role: { en: "Freelance Consultant", fr: "Consultant freelance" },
      company: "Independent",
      period: "2022 – Present",
      description: {
        en: "Web development for direct clients. Full lifecycle from discovery and UI/UX design to development (React, Vue, Svelte) and deployment. Brand identity, technical strategy and long-term maintenance.",
        fr: "Projets web pour des clients directs. Gestion complète : recueil du besoin, design UI/UX, développement (React, Vue, Svelte) et déploiement. Identité visuelle, conseil technique et accompagnement post-livraison.",
      },
    },
    {
      role: {
        en: "React Training — 10 Projects",
        fr: "Formation React — 10 projets",
      },
      company: "OpenClassrooms",
      period: "2021 – 2023",
      description: {
        en: "Completed 10 real-world projects under jury review. Deepened skills in HTML, CSS, JS, Git, React, Redux/RTK and API integrations.",
        fr: "10 projets de formation en conditions réelles présentés devant un jury. Approfondissement HTML, CSS, JS, Git, React, Redux/RTK et intégrations d'API.",
      },
    },
    {
      role: {
        en: "React Training — 10 Projects",
        fr: "Chef Pizzaiolo",
      },
      company: "Mongelli",
      period: "2019 – 2021",
      description: {
        en: "Completed 10 real-world projects under jury review. Deepened skills in HTML, CSS, JS, Git, React, Redux/RTK and API integrations.",
        fr: "J'ai travaillé comme chef de cuisine dans une pizzeria. Management d'équipe, rigueur et discipline. J'ai optimisé la gestion de mes commandes avec des script python",
      },
    },
    {
      role: {
        en: "React Training — 10 Projects",
        fr: "Permaculture, voyage et travaux saisonniers",
      },
      company: "Divers",
      period: "2014 – 2019",
      description: {
        en: "Completed 10 real-world projects under jury review. Deepened skills in HTML, CSS, JS, Git, React, Redux/RTK and API integrations.",
        fr: "J'ai eu la chance de voyager en France et dans les Balkans. J'ai peu me former à la permaculture, l'hotellerie, la restauration et perfectionner mon parlé en anglais et dans les langues slaves. La Permaculture a changé ma façon de voir le monde et m'a apporté une vision holistiques des systèmes qui nous entoure. J'utilise cette vision dans la conception de mes applications.",
      },
    },
    {
      role: {
        en: "React Training — 10 Projects",
        fr: "Monteur son - Sound Designer - Post production cinéma",
      },
      company: "Film Factory",
      period: "2012 - 2014",
      description: {
        en: "Completed 10 real-world projects under jury review. Deepened skills in HTML, CSS, JS, Git, React, Redux/RTK and API integrations.",
        fr: "J'ai pu travailler et apprendre auprès des plus grands technicien français du son. J'ai créer et maintenu des bases de données sonores, travailler sur des blockbusters internationaux et des longs-métrages récompensés. Mon travai consistait également en l'enregistrement de voix, de bruitages, d'édition et de synchronisation à l'image.",
      },
    },
    {
      role: {
        en: "React Training — 10 Projects",
        fr: "Preneur de son cinéma",
      },
      company: "Film Factory",
      period: "2012 - 2016",
      description: {
        en: "Completed 10 real-world projects under jury review. Deepened skills in HTML, CSS, JS, Git, React, Redux/RTK and API integrations.",
        fr: "J'ai travailler sur la prise de son de dizaines de court-métrages, en France et dans les Balkans.",
      },
    },
  ],
  skills: {
    frontend: [
      "Vue.js",
      "Nuxt",
      "React",
      "Next.js",
      "Svelte",
      "TypeScript",
      "TailwindCSS",
      "SASS",
      "DDD",
    ],
    backend: ["Node.js", "Bun", "Express.js", "MongoDB", "SQL", "REST API"],
    tools: [
      "Git - Github - Gitlab",
      "Storybook",
      "Figma",
      "Docker",
      "MacOS-Linux",
      "Pinia",
      "Redux/RTK",
      "Chart.js",
      "Typesense/Algolia",
    ],
  },
  socials: {
    github: "https://github.com/maxiim3",
    linkedin: "https://www.linkedin.com/in/maximetamburrini/?locale=en",
    twitter: "https://x.com/maxiim3_dev",
    nostr:
      "https://primal.net/p/nprofile1qqsptgvcnskys0mvduv09hdpqvuf0gqrv605f87zlkj05takeyssjqqsflez7",
    email: "mtamburrini@proton.me",
  },
  stats: {
    yearsExp: 10,
    projects: 3,
    clients: 3,
  },
} as const;
