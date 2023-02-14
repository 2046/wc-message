import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      customElement: true
    }
  })],
  build: {
    minify: true,
    lib: {
      entry: './src/main.ts',
      formats: ['iife']
    }
  }
})
