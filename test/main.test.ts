import { app } from '#main.ts'

import { env } from 'cloudflare:workers'
import { describe, it, expect } from 'vitest'

const CAT_PROXY_URL = 'api.ai-cats.net/v1/cat'

describe('App root route', () => {
  it('Should return 200', async () => {
    const response = await app.request('/', {}, env)

    expect(response.status).toBe(200)
    expect(await response.json()).toEqual({
      routes: ['/', '/cat'],
      version: env.APP_VERSION
    })
  })
})

describe('App cat proxy route', () => {
  it(`Should proxy to ${CAT_PROXY_URL}`, async () => {
    const response = await app.request('/cat', {}, env)

    expect(response.status).toBe(200)
    expect(response.headers.get('Content-Type')).oneOf([
      'image/gif',
      'image/jpg',
      'image/png',
      'image/jpeg'
    ])
  })
})

// describe('App type definitions', () => {
//   test('Should have correct type definitions', () => {
//     expectTypeOf(app).toEqualTypeOf<ExportedHandler<Cloudflare.Env>>()
//   })
// })
