declare namespace Cloudflare {
  interface GlobalProps {
    mainModule: typeof import('../src/main')
  }
  interface Env {
    ASSETS: Fetcher
  }
}
