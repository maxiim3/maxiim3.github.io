import type { Content } from './types';

const content: Content = {
  meta: {
    title: 'Max - Front-End Developer Vue/Nuxt',
    description: 'Front-end developer specialized in Vue 3, Nuxt and TypeScript. Expertise in modern and performant web applications.',
    lang: 'en',
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
      role: 'Front-End Developer',
      company: 'Tech Innovators',
      period: 'Jan 2024 - Present',
      description: 'Development of modern web applications with Vue 3 and Nuxt. Implementation of scalable and performant architectures.',
    },
    {
      role: 'Full-Stack Developer',
      company: 'Digital Solutions',
      period: 'Mar 2022 - Dec 2023',
      description: 'Creation of reactive and accessible user interfaces. Migration of legacy projects to Vue 3.',
    },
    {
      role: 'Web Developer',
      company: 'Creative Agency',
      period: 'Jun 2020 - Feb 2022',
      description: 'Development of websites and applications with focus on user experience and performance.',
    },
  ],

  // Note: Sample project data for demonstration. Update with real projects before deployment.
  projects: [
    {
      name: 'Portfolio Vue 3',
      url: 'https://github.com/maxiim3/portfolio-vue3',
      description: 'Modern portfolio site with Vue 3, CSS animations and dark mode.',
    },
    {
      name: 'Dashboard Analytics',
      url: 'https://github.com/maxiim3/analytics-dashboard',
      description: 'Interactive dashboard with Nuxt 3 and data visualizations.',
    },
    {
      name: 'Component Library',
      url: 'https://github.com/maxiim3/vue-components',
      description: 'Reusable Vue 3 component library with TypeScript.',
    },
    {
      name: 'E-commerce Platform',
      url: 'https://github.com/maxiim3/shop-nuxt',
      description: 'Complete e-commerce platform with Nuxt 3, Stripe and Pinia state management.',
    },
  ],

  cv: {
    label: 'Download my CV',
    href: '/cv/cv-en.pdf',
  },
};

export default content;
