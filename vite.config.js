import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
      },
    },
  },
})
