import type { Content } from './types';

const content: Content = {
  meta: {
    title: 'Max - Développeur Front-End Vue/Nuxt',
    description: 'Développeur front-end spécialisé en Vue 3, Nuxt et TypeScript. Expertise en applications web modernes et performantes.',
    lang: 'fr',
  },

  links: [
    {
      label: 'GitHub',
      url: 'https://github.com/maxiim3',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/max-graux',
      icon: 'linkedin',
    },
    {
      label: 'Email',
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
};

export default content;
