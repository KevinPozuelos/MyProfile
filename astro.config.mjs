// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// SITE y BASE_PATH los inyecta el workflow de GitHub Pages (actions/configure-pages),
// así el sitio funciona igual en <usuario>.github.io o en <usuario>.github.io/<repo>.
const site = process.env.SITE ?? 'https://kevinpozuelos.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
