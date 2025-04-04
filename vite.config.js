// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom'  // Add DOM environment
  },
  build: {
    lib: {
      entry: './main.js',
      name: 'Greeter',
      formats: ['umd'],
      fileName: 'compiled-greeter-component'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
