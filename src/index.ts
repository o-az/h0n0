import { app } from '#setup.ts'
import { proxy } from 'hono/proxy'

app.get('/', (_context) => _context.json({ message: 'Hello, World!' }))

export default app
