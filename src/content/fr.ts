import type { Content } from './types';

const content: Content = {
  meta: {
    title: 'Max - Développeur Front-End Vue/Nuxt',
    description: 'Développeur front-end spécialisé en Vue 3, Nuxt et TypeScript. Expertise en applications web modernes et performantes.',
    lang: 'fr',
  },

  links: [
    {
      label: 'Profil GitHub',
      url: 'https://github.com/maxiim3',
      icon: 'github',
    },
    {
      label: 'Profil LinkedIn',
      url: 'https://www.linkedin.com/in/max-graux',
      icon: 'linkedin',
    },
    {
      label: 'Contacter par email',
      url: 'mailto:max@maxgraux.dev',
      icon: 'email',
    },
  ],

  skills: {
    expertise: [
      'Vue 3',
      'Nuxt 3',
      'TypeScript',
      'Composition API',
      'Pinia',
      'Vite',
      'TailwindCSS',
    ],
    experience: [
      'React',
      'JavaScript ES6+',
      'HTML5/CSS3',
      'REST APIs',
      'Git',
      'Responsive Design',
      'Accessibility (WCAG)',
    ],
    curiosity: [
      'Astro',
      'Svelte',
      'Web Components',
      'WebAssembly',
      'Rust',
    ],
  },

  experience: [
    {
      role: 'Développeur Front-End Vue.js / Nuxt',
      company: 'Airddm (CDI)',
      period: 'Fév 2024 - Présent',
      description: 'Grands comptes (Heineken, Michelin, Bosch). Design système avec Storybook, testing e2e, architecture front-end. Application B2B2C from scratch, migration Django → Vue.js, state management Pinia, dataviz Chart.js.',
    },
    {
      role: 'Développeur Front-End Freelance',
      company: 'Indépendant',
      period: '2022 - Présent',
      description: 'Clients directs, gestion complète de A à Z : recueil du besoin, design, maquettes, développement et déploiement. React, Next.js, Vue, Svelte.',
    },
    {
      role: 'Formation & Parcours',
      company: 'OpenClassrooms + Hackathon',
      period: '2021 - 2023',
      description: '10 projets React présentés devant jury. Hackathon Montpellier 2023 (app livrée en 24h). Avant : 10 ans de parcours pluridisciplinaire — musique, ingénierie son, restauration, 4 pays.',
    },
  ],

  projects: [
    {
      name: 'Calcul TJM',
      url: 'https://calcul-tjm.fr',
      description: 'Simulateur de revenus freelance : comparaison micro-entreprise, SASU et EURL en temps réel.',
    },
    {
      name: 'Polishable',
      url: 'https://polishable.app',
      description: 'Extension navigateur pour le shipping d\'apps web : screenshots, icônes et analyse PWA.',
    },
    {
      name: 'Sestini Pizza',
      url: 'https://www.sestini-pizza.fr',
      description: 'Site vitrine Next.js — case study complète : branding, SEO, Google Business.',
    },
    {
      name: 'Jamais 203',
      url: 'https://prod203-next-app-maxiim3s-projects.vercel.app/en',
      description: 'Site agence de production audiovisuelle — direction artistique sombre et cinématique, bilingue FR/EN.',
    },
  ],

  cv: {
    label: 'Télécharger mon CV',
    href: '/cv/cv-fr.pdf',
  },

  narrative: {
    title: 'Mon Parcours',
    paragraphs: [
      "Avant le code, j'ai passé 15 ans dans la musique — batteur et ingénieur du son. J'ai travaillé en restauration, vécu dans plusieurs pays, appris quatre langues. Chaque étape m'a appris à comprendre des systèmes complexes, à collaborer avec des profils différents, et à livrer un résultat concret sous contrainte.",
      "En devenant développeur, j'ai gardé cette approche : comprendre le contexte avant de coder, penser produit avant de penser feature. Je ne suis pas un exécutant technique. Je suis quelqu'un qui comprend un business, identifie ce dont il a besoin, et le construit — de l'identité visuelle à l'architecture frontend.",
      "J'ai accompagné un restaurateur de zéro à 250 000 € de chiffre d'affaires en concevant l'intégralité de sa marque et de sa présence digitale. J'ai conçu le site d'une agence de production musicale dont les clients incluent Balenciaga, Disneyland Paris et Warner Music. En parallèle, je conçois des applications autour de la gouvernance collective et de la permaculture.",
      "Ce que j'apporte : une vision transversale, une exécution rigoureuse, et la capacité de faire le lien entre technique, design et stratégie.",
    ],
  },

  caseStudies: [
    {
      slug: 'sestini-pizza',
      title: 'De zéro à 250k EUR de CA : branding complet et présence digitale pour un food truck artisanal',
      context:
        'Pizzaiolo lançant une activité pizza au feu de bois en camion à Villeneuve-lès-Maguelone. Aucune présence existante.',
      role: "Direction complète de l'identité de marque et de la présence digitale. Seul intervenant.",
      deliverables: [
        'Logo et charte graphique',
        'Print (flyers, cartes de visite, carte de fidélité, tampon)',
        'Covering camion',
        'Site web Next.js + TailwindCSS + Vercel',
        'SEO + Google Business',
      ],
      results: [
        { metric: "Chiffre d'affaires", value: '0 → 250 000 EUR en 3 ans' },
        { metric: 'Avis Google', value: '100 avis · note 4,8/5' },
        { metric: 'Clientèle', value: 'Base client récurrente établie' },
        { metric: 'Expansion', value: 'Ouverture d\'un restaurant en dur' },
      ],
      stack: ['Next.js', 'TailwindCSS', 'Vercel', 'Cloudinary', 'Google Business'],
      link: { label: 'Voir le site', url: 'https://www.sestini-pizza.fr' },
      screenshots: [],
    },
    {
      slug: 'jamais-203-productions',
      title:
        'Site vitrine bilingue pour une agence de production audiovisuelle travaillant avec des marques internationales',
      context:
        'Agence de production musicale et audiovisuelle ayant travaillé avec Balenciaga, Canal+, Disneyland Paris, Coca-Cola, Warner Music France, Citroën, Puy du Fou, FFF et Crédit Agricole.',
      role: "Conception, design et développement complet — de la direction artistique au déploiement.",
      deliverables: [
        'Site bilingue FR/EN Next.js + Vercel',
        'Back-office administrateur',
        'Direction artistique sombre et cinématique',
        'Galerie de références clients',
      ],
      results: [
        { metric: 'Clients', value: 'Balenciaga, Canal+, Disneyland Paris, Coca-Cola, Warner Music, Citroën...' },
        { metric: 'Impact', value: 'Client autonome — migration Webflow, ouverture de studios de production' },
      ],
      stack: ['Next.js', 'TailwindCSS', 'Vercel', 'Admin custom'],
      link: {
        label: 'Voir le projet',
        url: 'https://prod203-next-app-maxiim3s-projects.vercel.app/en',
      },
      screenshots: [],
    },
  ],
};

export default content;
