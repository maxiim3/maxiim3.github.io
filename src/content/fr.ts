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
      role: 'Développeur Front-End',
      company: 'Tech Innovators',
      period: 'Jan 2024 - Présent',
      description: 'Développement d\'applications web modernes avec Vue 3 et Nuxt. Mise en place d\'architectures scalables et performantes.',
    },
    {
      role: 'Développeur Full-Stack',
      company: 'Digital Solutions',
      period: 'Mar 2022 - Déc 2023',
      description: 'Création d\'interfaces utilisateur réactives et accessibles. Migration de projets legacy vers Vue 3.',
    },
    {
      role: 'Développeur Web',
      company: 'Creative Agency',
      period: 'Jun 2020 - Fév 2022',
      description: 'Développement de sites web et applications avec focus sur l\'expérience utilisateur et la performance.',
    },
  ],

  // Note: Sample project data for demonstration. Update with real projects before deployment.
  projects: [
    {
      name: 'Portfolio Vue 3',
      url: 'https://github.com/maxiim3/portfolio-vue3',
      description: 'Site portfolio moderne avec Vue 3, animations CSS et mode sombre.',
    },
    {
      name: 'Dashboard Analytics',
      url: 'https://github.com/maxiim3/analytics-dashboard',
      description: 'Tableau de bord interactif avec Nuxt 3 et visualisations de données.',
    },
    {
      name: 'Component Library',
      url: 'https://github.com/maxiim3/vue-components',
      description: 'Bibliothèque de composants Vue 3 réutilisables avec TypeScript.',
    },
    {
      name: 'E-commerce Platform',
      url: 'https://github.com/maxiim3/shop-nuxt',
      description: 'Plateforme e-commerce complète avec Nuxt 3, Stripe et gestion d\'état Pinia.',
    },
  ],

  cv: {
    label: 'Télécharger mon CV',
    href: '/cv/cv-fr.pdf',
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
      // TODO(M1): These results were inferred by the dev agent — verify and replace with real metrics
      results: [
        { metric: 'Livraison', value: 'Site bilingue complet déployé' },
        { metric: 'Clients référencés', value: '9 grandes marques internationales' },
      ],
      impact:
        "Le client a ensuite internalisé la gestion en migrant vers Webflow, conservant la direction artistique et la structure. Il a depuis ouvert ses propres studios.",
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
