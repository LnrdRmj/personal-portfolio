# Architecture

## Rendering model

`nuxt build` (never `nuxt generate`) with the Nitro `cloudflare_module` preset produces one
Worker plus a folder of static files:

- Every page, in both languages, is **prerendered** at build time (`nitro.prerender.routes` in
  `nuxt.config.ts`). Visitors and crawlers get plain HTML.
- Cloudflare serves matching static files first, without running the Worker.
- Only requests with no static file reach the Worker: `/api/*`, `/v/*` (video ranges) and
  unknown URLs, which render the 404 page.

```
request ─▶ static file in .output/public? ── yes ─▶ served directly (free, cached)
                         │
                         no
                         ▼
                Worker (Nitro): /api/contact, /api/reveal, /v/*, 404 page
```

## Folders

| Path | What lives there |
|---|---|
| `app/pages/` | `index.vue`, `projects/[slug].vue` (localized paths), `privacy.vue` |
| `app/components/` | UI; `home/`, `project/`, `contact/` group the page sections |
| `app/data/` | All site copy as typed TS (profile, skills, projects, privacy) |
| `shared/` | Types and helpers used by both app and server (routes, images, contact schema) |
| `server/api/` | `contact.post.ts`, `reveal.post.ts` |
| `server/routes/v/` | Byte-range proxy for videos (see [content](../content/README.md#videos)) |
| `i18n/locales/` | UI strings (`it.json`, `en.json`) |
| `images/` | Source images; WebP variants are generated into `public/img/` |
| `public/media/` | Re-encoded videos and their posters |

## Why some things look unusual

- **No `@nuxt/image`**: Cloudflare's asset server redirects any URL containing `&`, which every
  ipx URL does. `scripts/build-images.ts` writes plain `name-<width>.webp` files instead.
- **`compatibilityDate` is pinned to 2026-07-15**: later dates break nitropack 2.13's Cloudflare
  output (nitro#4527). Revisit when upgrading Nuxt/Nitro.
- **`autoSubfolderIndex: false`**: writes `/en.html` instead of `/en/index.html`, otherwise
  Cloudflare 307-redirects `/en` to `/en/`.
