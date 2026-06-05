import { defineConfig } from 'astro/config';

// Update `site` to your GitHub Pages URL.
// If deploying to username.github.io/JuliCookbook (project page), keep base: '/JuliCookbook'.
// If using a custom domain, set site to that domain and remove base.
export default defineConfig({
  site: 'https://your-username.github.io',
  base: '/JuliCookbook/',
  output: 'static',
});
