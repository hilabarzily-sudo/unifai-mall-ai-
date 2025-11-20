import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    strictPort: false, // Allow alternative port if 5174 is taken
    open: false, // Don't auto-open browser (Electron will open)
    host: 'localhost',
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5174,
      overlay: true,
    },
    cors: true,
    watch: {
      usePolling: false,
      ignored: ['**/node_modules/**', '**/dist/**'],
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          supabase: ['@supabase/supabase-js'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@services': path.resolve(__dirname, './src/services'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  optimizeDeps: {
    exclude: ['electron'],
  },
})

