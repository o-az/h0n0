import * as z from 'zod/mini'
import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'
import { cloudflareTest } from '@cloudflare/vitest-pool-workers'

import wranglerJSON from '#wrangler.json' with { type: 'json' }

const enabledSchema = z.stringbool()

const devFlagsSchema = z.object({
  VITE_DEVTOOLS: z.prefault(enabledSchema, 'false'),
  VITE_FORWARD_CONSOLE: z.prefault(enabledSchema, 'false')
})

export default defineConfig(config => {
  const env = loadEnv(config.mode, process.cwd(), '')

  const { data: devFlags, success, error } = devFlagsSchema.safeParse(env)
  if (!success) throw new Error(`Invalid dev flags - ${z.prettifyError(error)}`)

  const devtools = config.mode !== 'production' && devFlags.VITE_DEVTOOLS

  return {
    devtools,
    resolve: {
      tsconfigPaths: true
    },
    test: {
      include: ['**/*.test.{ts,tsx}']
    },
    plugins: [
      cloudflareTest({
        wrangler: {
          configPath: './wrangler.json'
        },
        miniflare: {
          compatibilityFlags: [
            ...wranglerJSON.compatibility_flags,
            'enable_nodejs_fs_module',
            'enable_nodejs_v8_module',
            'enable_nodejs_tty_module',
            'enable_nodejs_process_v2',
            'enable_nodejs_http_modules',
            'enable_nodejs_perf_hooks_module'
          ]
        }
      })
    ]
  }
})
