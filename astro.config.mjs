// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://upgrade-solutions.github.io',
  integrations: [react()],
  output: 'server',
  devToolbar: { enabled: false }
})