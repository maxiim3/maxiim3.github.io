import type { Content } from './types';

const content: Content = {
  meta: {
    title: 'Max - Front-End Developer Vue/Nuxt',
    description: 'Front-end developer specialized in Vue 3, Nuxt and TypeScript. Expertise in modern and performant web applications.',
    lang: 'en',
  },

  links: [
    {
      label: 'GitHub Profile',
      url: 'https://github.com/maxiim3',
      icon: 'github',
    },
    {
      label: 'LinkedIn Profile',
      url: 'https://www.linkedin.com/in/max-graux',
      icon: 'linkedin',
    },
    {
      label: 'Contact by email',
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

  caseStudies: [
    {
      slug: 'sestini-pizza',
      title: 'From zero to €250k revenue: full branding & digital presence for an artisan food truck',
      context:
        'A pizzaiolo launching a wood-fired pizza truck in Villeneuve-lès-Maguelone with zero existing presence.',
      role: 'End-to-end ownership of brand identity and digital presence. Sole contributor.',
      deliverables: [
        'Logo and brand guidelines',
        'Print materials (flyers, business cards, loyalty card, stamp)',
        'Truck wrap design',
        'Website built with Next.js + TailwindCSS + Vercel',
        'SEO + Google Business setup',
      ],
      results: [
        { metric: 'Revenue', value: '€0 → €250,000 over 3 years' },
        { metric: 'Google reviews', value: '100 reviews · 4.8/5 rating' },
        { metric: 'Customer base', value: 'Established loyal repeat clientele' },
        { metric: 'Expansion', value: 'Opened a brick-and-mortar restaurant' },
      ],
      stack: ['Next.js', 'TailwindCSS', 'Vercel', 'Cloudinary', 'Google Business'],
      link: { label: 'View website', url: 'https://www.sestini-pizza.fr' },
      screenshots: [],
    },
    {
      slug: 'jamais-203-productions',
      title:
        'Bilingual showcase website for an audiovisual production agency working with international brands',
      context:
        'A music and audiovisual production agency with credits including Balenciaga, Canal+, Disneyland Paris, Coca-Cola, Warner Music France, Citroën, Puy du Fou, FFF, and Crédit Agricole.',
      role: 'Full ownership from artistic direction to deployment — design, development, and delivery.',
      deliverables: [
        'Bilingual FR/EN website with Next.js + Vercel',
        'Custom admin back-office',
        'Dark, cinematic art direction',
        'Client references gallery',
      ],
      // TODO(M1): These results were inferred by the dev agent — verify and replace with real metrics
      results: [
        { metric: 'Delivery', value: 'Complete bilingual site shipped' },
        { metric: 'Featured clients', value: '9 major international brands' },
      ],
      impact:
        'The client later brought management in-house by migrating to Webflow, preserving the art direction and structure. They have since opened their own studios.',
      stack: ['Next.js', 'TailwindCSS', 'Vercel', 'Admin custom'],
      link: {
        label: 'View project',
        url: 'https://prod203-next-app-maxiim3s-projects.vercel.app/en',
      },
      screenshots: [],
    },
  ],
};

export default content;
