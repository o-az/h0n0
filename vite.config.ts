import { defineConfig } from 'vite'
import { cloudflare } from '@cloudflare/vite-plugin'

export default defineConfig({
  plugins: [cloudflare()],
  server: {
    port: Number(process.env.PORT) || 6969
  }
})
