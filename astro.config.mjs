// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://maxiim3.github.io',

  // No base path - deployed to root domain per architecture decision
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    prefixDefaultLocale: false, // Explicit: FR at /, EN at /en/
  },

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});