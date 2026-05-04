interface EnvironmentVariables {
  readonly PORT: string
  readonly ENVIRONMENT: 'development' | 'production' | 'test'
  readonly COMMIT_SHA: string
}

// Node.js `process.env` auto-completion
declare namespace NodeJS {
  interface ProcessEnv extends EnvironmentVariables {
    readonly NODE_ENV: EnvironmentVariables['ENVIRONMENT']
  }
}

// Bun `Bun.env` auto-completion
declare namespace Bun {
  interface Env extends EnvironmentVariables {
    readonly NODE_ENV: EnvironmentVariables['ENVIRONMENT']
  }
}

// Bun/vite `import.meta.env` auto-completion
interface ImportMetaEnv extends EnvironmentVariables {
  readonly MODE: EnvironmentVariables['ENVIRONMENT']
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
