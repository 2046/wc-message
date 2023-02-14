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
      name: 'wcmessage',
      formats: ['umd', 'es', 'cjs'],
      entry: './src/main.ts'
    }
  }
})
