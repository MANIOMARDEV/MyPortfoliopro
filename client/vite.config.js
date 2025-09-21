import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portfolio-mern/',
  preview: {
    allowedHosts: ['myportfoliopro-18.onrender.com'],
    port: 4173, // optional, can be changed if you want
  },
})
