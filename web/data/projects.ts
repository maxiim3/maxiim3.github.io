export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: 'airddm-dashboard',
    title: 'Dashboard Data Visualisation',
    description: 'Interface de visualisation de données pour le suivi des performances commerciales. Charts interactifs, filtres dynamiques, export de rapports.',
    technologies: ['Vue 3', 'D3.js', 'TypeScript', 'Tailwind'],
  },
  {
    id: 'matching-tunnel',
    title: 'Tunnel de Matching Produit',
    description: 'Application B2B de mise en relation entre besoins clients et offres produits. Questionnaire intelligent, scoring algorithme, interface de résultats.',
    technologies: ['Nuxt 3', 'Pinia', 'REST API', 'Tailwind'],
  },
  {
    id: 'ecommerce-shop',
    title: 'Boutique E-commerce',
    description: 'Site e-commerce complet avec gestion de panier, paiement Stripe, système de reviews et interface admin.',
    technologies: ['Vue 3', 'Nuxt', 'Stripe', 'Tailwind'],
  },
  {
    id: 'design-system',
    title: 'Design System Interne',
    description: 'Bibliothèque de composants réutilisables documentée avec Storybook. Tokens de design, composants accessibles, guides d\'utilisation.',
    technologies: ['Vue 3', 'TypeScript', 'Storybook', 'CSS Variables'],
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages Marketing',
    description: 'Collection de landing pages optimisées pour la conversion. A/B testing, animations micro-interactions, formulaires intelligents.',
    technologies: ['Nuxt', 'GSAP', 'Tailwind', 'Analytics'],
  },
  {
    id: 'portfolio',
    title: 'Portfolio Personnel',
    description: 'Ce site ! Généré statiquement avec Nuxt 3, déployé automatiquement sur GitHub Pages.',
    technologies: ['Nuxt 3', 'TypeScript', 'Tailwind', 'GitHub Actions'],
    github: 'https://github.com/maxi/curriculum',
  },
]
