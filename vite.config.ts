import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/hustletech-site/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['./src/utils/index.ts'],
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.VITE_PORT || '5174'),
    open: false,
    cors: true,
    hmr: {
      host: '0.0.0.0',
      port: parseInt(process.env.VITE_PORT || '5174')
    }
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PREVIEW_PORT || '5175'),
    cors: true
  }
})
