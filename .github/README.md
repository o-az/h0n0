> [!NOTE] Personal [Hono](https://hono.dev) template. Feel free to use.

## Structure

- In [src/setup.ts](/src/setup.ts) we setup helpers, middlewares, and Hono plugins.
- In [src/index.ts](/src/index.ts) we setup routes.

## Get started

Install dependencies

```shell
# install / update bun to latest
npm install --global bun@latest

# install dependencies
bun install

# run dev
bun dev
```

## Deploy

If you're deploying to Cloudflare Workers:

```shell
# Authenticate with wrangler
bun x wrangler@latest login

# Deploy
bun x wrangler@latest deploy --config='wrangler.json' --keep-vars
```

---

<details>
<summary>
If you're deploying somewhere else check the following:
</summary>

1. Remove Cloudflare Workers specific files:

   ```shell
   rm .dev.vars .dev.vars.example wrangler.json
   ```

2. Uninstall `@cloudflare/workers-types`:

   ```shell
   bun remove @cloudflare/workers-types
   ```

3. Replace `hono/cloudflare-workers` in [src/setup.ts](./src/setup.ts) with the [appropriate adapter](https://hono.dev/docs/helpers/conninfo#conninfo-helper) for your deployment target
4. Remove `@cloudflare/workers-types` from `"types"` array in [tsconfig.json](./tsconfig.json)
5. Check [hono.dev](https://hono.dev/docs/getting-started/basic) for deployment instructions

</details>
