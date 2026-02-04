import { Hono } from 'hono'
import { proxy } from 'hono/proxy'

const catApp = new Hono<{ Bindings: Cloudflare.Env }>()

catApp.get('/cat', async () =>
  proxy('https://api.ai-cats.net/v1/cat', {
    headers: { 'Content-Type': 'image/jpg' },
  }),
)

export { catApp }
