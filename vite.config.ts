import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    eslint({
      cache: false,
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
      exclude: ['node_modules'],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/baseMixin.scss";`,
      },
    },
  },
  server: {
    port: 8001,
    host: true,
    proxy: {
      '/api': {
        target: 'http://10.12.23.34:8080',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
    extensions: ['.ts', '.js'],
  },
  // build: {
  //   minify: 'terser',
  //   outDir: 'cs-dist',
  //   terserOptions: {
  //     compress: {
  //       drop_console: true,
  //       drop_debugger: true,
  //     },
  //   },
  // },
});
