import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  // Avoid pre-bundling Astro's CommonJS accessibility helpers on restricted Windows sandboxes.
  vite: { optimizeDeps: { exclude: ['aria-query', 'axobject-query', 'cssesc'] } }
});
