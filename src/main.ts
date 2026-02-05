import { Hono } from 'hono'
import { csrf } from 'hono/csrf'
import { proxy } from 'hono/proxy'
import { timeout } from 'hono/timeout'
import { prettyJSON } from 'hono/pretty-json'

export const app = new Hono<{ Bindings: Env }>()

app.use(csrf())
app.use(prettyJSON())
app.use('*', timeout(5_000))

app
  .get('/', context =>
    context.json({
      routes: ['/', '/cat'],
      version: context.env.APP_VERSION,
    }),
  )
  .get('/cat', async () =>
    proxy('https://api.ai-cats.net/v1/cat', {
      headers: { 'Content-Type': 'image/jpg' },
    }),
  )

export default app satisfies ExportedHandler<Cloudflare.Env>
