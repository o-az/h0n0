import { app } from '#setup.ts'
import { proxy } from 'hono/proxy'

app.get('/', context =>
  context.text(`h0n0: https://github.com/o-az/h0n0\n\ncat: ${context.req.url}cat`)
)

app.get('/cat', async () =>
  proxy('https://api.ai-cats.net/v1/cat', {
    headers: { 'Content-Type': 'image/jpg' }
  })
)

export default app satisfies ExportedHandler<Cloudflare.Env>
