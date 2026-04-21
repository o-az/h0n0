interface EnvironmentVariables {
  readonly PORT: string
}

// Node.js `process.env` auto-completion
declare namespace NodeJS {
  interface ProcessEnv extends EnvironmentVariables {
    readonly NODE_ENV: 'development' | 'production' | 'test'
  }
}

// Bun `Bun.env` auto-completion
declare namespace Bun {
  interface Env extends EnvironmentVariables {
    readonly NODE_ENV: 'development' | 'production' | 'test'
  }
}

// Bun/vite `import.meta.env` auto-completion
interface ImportMetaEnv extends EnvironmentVariables {
  readonly MODE: 'development' | 'production' | 'test'
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
