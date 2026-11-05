import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Dev server: serve /about as about.html, like Vercel's cleanUrls.
    {
      name: 'clean-urls',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const [path, query] = req.url.split('?')
          if (/^\/[\w-]+$/.test(path) && existsSync(resolve(__dirname, `${path.slice(1)}.html`))) {
            req.url = `${path}.html${query ? `?${query}` : ''}`
          }
          next()
        })
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy.html'),
        terms: resolve(__dirname, 'terms.html'),
        about: resolve(__dirname, 'about.html'),
        deleteAccount: resolve(__dirname, 'delete-account.html'),
        acceptInvite: resolve(__dirname, 'accept-invite.html'),
        join: resolve(__dirname, 'join.html'),
        residents: resolve(__dirname, 'residents.html'),
        estateManagers: resolve(__dirname, 'estate-managers.html'),
        securityTeams: resolve(__dirname, 'security-teams.html'),
        serviceProviders: resolve(__dirname, 'service-providers.html'),
        propertyDevelopers: resolve(__dirname, 'property-developers.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
