import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/tubes-desweb-bermekaran/', // <-- wajib untuk GitHub Pages
  plugins: [vue(), tailwindcss()],
})
