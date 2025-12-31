import { defineConfig, loadEnv } from 'vite'
import { cloudflare } from '@cloudflare/vite-plugin'

export default defineConfig(config => {
  const env = loadEnv(config.mode, process.cwd(), '')

  return {
    plugins: [cloudflare()],
    server: {
      port: Number(env.PORT ?? 6969),
    },
    build: {
      rolldownOptions: {
        output: {
          minify: {
            compress:
              config.mode === 'production'
                ? { dropConsole: true, dropDebugger: true }
                : undefined,
          },
        },
      },
    },
  }
})
