import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/baseMixin.scss";`
      }
    }
  },
  server: {
    port: 8001,
    host: true,
    proxy: {
      '/api': {
        target: 'http://10.12.23.34:8080',
        changeOrigin: true,
      },
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    minify: 'terser',
    outDir: 'cs-dist',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
