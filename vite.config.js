import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base MUST match the GitHub Pages sub-path. Repo is `portfolio`, so the site
// is served from https://infinteco.github.io/portfolio/ .
// If you rename the repo, change this AND pathSegmentsToKeep in public/404.html.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
