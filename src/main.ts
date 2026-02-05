import { Hono } from 'hono'
import { csrf } from 'hono/csrf'
import { timeout } from 'hono/timeout'
import { prettyJSON } from 'hono/pretty-json'
import { HTTPException } from 'hono/http-exception'
import { getConnInfo } from 'hono/cloudflare-workers'

import wranglerJSON from '#wrangler.json' with { type: 'json' }

export const app = new Hono<{ Bindings: Env }>()

app.use(csrf())
app.use(prettyJSON())
app.use('*', timeout(5_000))

app.get('/', context =>
  context.json({
    routes: ['/', '/cat'],
    version: context.env.APP_VERSION,
  }),
)

export default app satisfies ExportedHandler<Cloudflare.Env>
