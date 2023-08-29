import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const vitePluginFaviconsInject = require('vite-plugin-favicons-inject');
export default defineConfig({
  plugins: [react()],vitePluginFaviconsInject('./src/assets/logo.svg')
})

