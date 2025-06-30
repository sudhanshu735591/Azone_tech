import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './index.html',                // Points to the root where index.html is
  build: {
    outDir: 'dist',         // Output folder for production build
    emptyOutDir: true,      // Clears the dist folder on each build
  },
})
