import * as v from 'valibot'
import { proxy } from 'hono/proxy'
import { HTTPException } from 'hono/http-exception'

import { app } from '#setup.ts'

app.get('/', (context) => context.text(`h0n0: https://github.com/o-az/h0n0\n\ncat: ${context.req.url}cat`))

const catSchema = v.array(
  v.object({
    id: v.string(),
    url: v.string(),
    width: v.number(),
    height: v.number(),
  }),
)

app.get('/cat', async () => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search')

  const data = v.safeParse(catSchema, await response.json())
  if (data.issues) throw new HTTPException(400, { message: 'Invalid cat data' })

  const [cat] = data.output
  if (!cat) throw new HTTPException(400, { message: 'cat response is empty' })

  return proxy(cat.url, {
    headers: { 'Content-Type': 'image/jpeg' },
  })
})

export default app
