import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://redeagle48.github.io',
  base: '/truechangefail',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-PT', en: 'en' },
      },
    }),
  ],
});
