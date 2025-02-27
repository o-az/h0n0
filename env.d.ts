interface Env {
  readonly PORT: number
  readonly ENVIRONMENT: 'development' | 'production'
  readonly LOGGING?: 'verbose' | 'normal' | 'silent' | undefined
  /**
   * Cloudflare Workers.
   * @example
   * ```ts
   * readonly DB: D1Database
   * readonly KV: KVNamespace
   * ```
   */
}

// Node.js `process.env` auto-completion
declare namespace NodeJS {
  interface ProcessEnv extends Env {}
}

// Bun/vite `import.meta.env` auto-completion
interface ImportMetaEnv extends Env {}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
