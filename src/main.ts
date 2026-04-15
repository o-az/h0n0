import { Hono } from 'hono'
import { csrf } from 'hono/csrf'
import { ulid } from '@std/ulid'
import { proxy } from 'hono/proxy'
import { showRoutes } from 'hono/dev'
import { timeout } from 'hono/timeout'
import { requestId } from 'hono/request-id'
import { prettyJSON } from 'hono/pretty-json'

export const app = new Hono<{ Bindings: Cloudflare.Env }>()

app.use(csrf())
app.use(prettyJSON())
app.use('*', timeout(5_000))
app.use(
  requestId({
    headerName: 'X-H0N0-Request-ID',
    generator: () => ulid()
  })
)

app
  .get('/', context =>
    context.json({
      routes: ['/', '/cat'],
      version: context.env.APP_VERSION
    })
  )
  .get('/cat', async () =>
    proxy('https://api.ai-cats.net/v1/cat', {
      headers: { 'Content-Type': 'image/jpg' }
    })
  )

if (process.env.NODE_ENV === 'development') showRoutes(app)

export default app satisfies ExportedHandler<Cloudflare.Env>
