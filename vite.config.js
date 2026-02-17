import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 1. Minification: 'terser' provides smaller bundles than the default 'esbuild'
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Removes console.logs to save space and improve security
        drop_debugger: true,
      },
    },
    // 2. Chunking Strategy: Splitting node_modules into a separate file
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // This puts all third-party libraries into a 'vendor' chunk
            return 'vendor';
          }
        },
      },
    },
    // 3. Asset Optimization
    assetsInlineLimit: 4096, // Inline small assets (under 4kb) to reduce HTTP requests
    chunkSizeWarningLimit: 1000,
  },
})