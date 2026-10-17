import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false
  },
  build: {
    // Target modern browsers to reduce polyfill bundle size
    target: 'es2020',
    // Raise chunk size warning threshold (our CSS is intentionally chunked)
    chunkSizeWarningLimit: 400,
    rollupOptions: {
      output: {
        // Separate large third-party code into its own chunk for better caching
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
        }
      }
    }
  }
});
