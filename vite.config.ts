import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Movie/', // 👈 обязательно для gh-pages
  plugins: [react()],
})
