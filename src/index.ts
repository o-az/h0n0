import { proxy } from 'hono/proxy'

import { app } from '#setup.ts'

app.get('/', context => context.json({
  routes: [
    '/',
    '/cat'
  ],
  version: context.env.APP_VERSION
}))

app.get('/cat', async () =>
  proxy('https://api.ai-cats.net/v1/cat', {
    headers: { 'Content-Type': 'image/jpg' }
  })
)

export default app satisfies ExportedHandler<Cloudflare.Env>
