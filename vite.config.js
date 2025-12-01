import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Presentation-ESM/',
  server: {
    port: 3000,
    open: true
  }
})
