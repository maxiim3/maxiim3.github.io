export type Lang = "en" | "fr";

export const content = {
  firstName: "Maxime",
  lastName: "Tamburrini",
  title: {
    en: "Experienced Front-end Developer — Vue · React · Svelte",
    fr: "Développeur Front-end confirmé — Vue · React · Svelte",
  },
  subtitle: {
    en: "Designing and building fast, accessible web applications and scalable design systems.",
    fr: "Concevoir et développer des applications web rapides, accessibles et des design systems évolutifs.",
  },
  about: {
    en: "Front-end developer with 3 years of experience focused on modern web applications and a 10-year professional background. I design performant, accessible and maintainable interfaces with Vue, React, Svelte and TypeScript. Design systems, clean architecture, accessibility. Before development, I worked as a film sound editor in Paris, then I traveled and worked in permaculture, hospitality and catering. I have been responsible for training and managing teams. I bring to every project my exacting standards, discipline and good humour.",
    fr: "Développeur front-end avec 3 ans d'expérience dédiée aux applications web modernes et un parcours professionnel de 10 ans. Je conçois des interfaces performantes, accessibles et maintenables en Vue, React, Svelte et TypeScript. Design systems, architecture propre, accessibilité. Avant le développement, monteur son cinéma sur Paris, j'ai ensuite voyagé et travaillé dans la permaculture, l'hôtellerie, la restauration. J'ai été amené à former et manager des équipes. J'apporte dans chaque projet mes exigences, ma rigueur et ma bonne humeur.",
  },
  cta: {
    explore: { en: "Explore", fr: "Explorer" },
    downloadCV: { en: "Download CV", fr: "Télécharger le CV" },
    viewProject: { en: "View project", fr: "Voir le projet" },
    getInTouch: { en: "Contact me", fr: "Me contacter" },
  },
  sections: {
    about: { en: "About", fr: "À propos" },
    projects: { en: "Selected projects", fr: "Projets sélectionnés" },
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
        en: "Developed and maintained front-end applications for major B2B2C accounts. Authored component libraries and a design system with Storybook, migrated e-commerce platforms to Vue/Nuxt and implemented complex purchase flows with Pinia. Real-time notification system (WebSockets). Priority: performance, accessibility and maintainability.",
        fr: "Développement et maintenance d'applications front-end pour grands comptes B2B2C. Rédaction de librairies de composants et d'un design system avec Storybook, migration de plateformes e-commerce vers Vue/Nuxt et mise en place de tunnels d'achat complexes avec Pinia. Système de notification temps réel (WebSocket). Priorité : performance, accessibilité et maintenabilité.",
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
        en: "Full branding for a restaurateur",
        fr: "Branding total d'un restaurateur",
      },
      description: {
        en: "I supported an entrepreneur in launching his business. I designed the complete visual identity, graphic assets, website, Google Business listing, deployment and continuous maintenance. The business has since generated several hundred thousand euros in revenue. We will soon collaborate on a new project.",
        fr: "J'ai accompagné un entrepreneur dans sa création d'entreprise. J'ai conçu toute l'identité visuelle, le matériel graphique, le site internet, fiche Google Business, déploiement et suivi continu. L'entreprise a depuis généré plusieurs centaines de milliers d'euros de CA. Nous allons prochainement travailler ensemble sur un nouveau projet.",
      },
      tech: ["Figma", "Illustrator", "React", "Vercel", "Google Business"],
      role: { en: "Full freelance project", fr: "Projet complet freelance" },
      year: "2025",
      url: "https://sestini-pizza.fr",
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
        en: "Front-end for major B2B2C accounts: design systems, component libraries (Storybook), code review and E2E testing. Led migrations from Django to Vue and implemented complex state management with Pinia. Agile/Scrum methodology.",
        fr: "Front-end pour grands comptes B2B2C : design systems, librairies de composants (Storybook), revue de code et tests E2E. Pilotage de migrations de Django vers Vue et implémentation de gestions d'état complexes avec Pinia. Méthodologie Agile/Scrum.",
      },
    },
    {
      role: { en: "Freelance Consultant", fr: "Consultant freelance" },
      company: "Independent",
      period: "2022 – Present",
      description: {
        en: "Web projects for direct clients. Full lifecycle: requirements gathering, UI/UX design, development (React, Vue, Svelte) and deployment. Brand identity, technical advice and post-delivery support.",
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
        en: "10 real-world training projects presented to a jury. Deepened skills in HTML, CSS, JS, Git, React, Redux/RTK and API integrations.",
        fr: "10 projets de formation en conditions réelles présentés devant un jury. Approfondissement HTML, CSS, JS, Git, React, Redux/RTK et intégrations d'API.",
      },
    },
    {
      role: {
        en: "Head Pizzaiolo",
        fr: "Chef Pizzaiolo",
      },
      company: "Mongelli",
      period: "2019 – 2021",
      description: {
        en: "I worked as head chef in a pizzeria. Team management, discipline and rigor. I optimized order management with Python scripts.",
        fr: "J'ai travaillé comme chef de cuisine dans une pizzeria. Management d'équipe, rigueur et discipline. J'ai optimisé la gestion de mes commandes avec des scripts Python.",
      },
    },
    {
      role: {
        en: "Permaculture, travel and seasonal work",
        fr: "Permaculture, voyage et travaux saisonniers",
      },
      company: "Various",
      period: "2014 – 2019",
      description: {
        en: "I had the opportunity to travel in France and the Balkans. I trained in permaculture, hospitality and catering and improved my spoken English and some Slavic languages. Permaculture changed my way of seeing the world and gave me a holistic view of the systems around us. I apply this perspective to the design of my applications.",
        fr: "J'ai eu la chance de voyager en France et dans les Balkans. J'ai pu me former à la permaculture, l'hôtellerie, la restauration et perfectionner mon anglais oral et le serbe. La permaculture a changé ma façon de voir le monde et m'a apporté une vision holistique des systèmes qui nous entourent. J'utilise cette vision dans la conception de mes applications.",
      },
    },
    {
      role: {
        en: "Sound Editor - Sound Designer - Film Post-production",
        fr: "Monteur son - Sound Designer - Post-production cinéma",
      },
      company: "Film Factory",
      period: "2012 – 2014",
      description: {
        en: "I had the chance to work and learn from some of France's leading sound technicians. I created and maintained sound databases, worked on international blockbusters and award-winning feature films. My work also included recording voices, sound effects, editing and synchronisation with the picture.",
        fr: "J'ai pu travailler et apprendre auprès des plus grands techniciens français du son. J'ai créé et maintenu des bases de données sonores, travaillé sur des blockbusters internationaux et des longs-métrages récompensés. Mon travail consistait également en l'enregistrement de voix, de bruitages, d'édition et de synchronisation à l'image.",
      },
    },
    {
      role: {
        en: "Location Sound Recordist",
        fr: "Preneur de son cinéma",
      },
      company: "Various",
      period: "2012 – 2016",
      description: {
        en: "I worked on the sound recording for dozens of short films in France and the Balkans.",
        fr: "J'ai travaillé sur la prise de son de dizaines de court-métrages, en France et dans les Balkans.",
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
    techExp: 3,
    frameworks: 3,
  },
} as const;
