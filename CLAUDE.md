# Leonardo Ramaj — portfolio

Nuxt 4 site deployed to Cloudflare Workers. Every page is prerendered to static HTML; only
`/api/*` and `/v/*` run as Worker code. Italian lives at `/`, English under `/en`.

## Commands

- `npm run dev` — local dev server (generates images first)
- `npm run build` — production build into `.output/`
- `npm run preview` — run the built Worker locally with `wrangler dev`
- `npm run typecheck`

Copy `.env.example` to `.env` before the first run.

## Docs

- [Architecture](docs/architecture/README.md) — rendering model, folders, request flow
- [Content](docs/content/README.md) — editing the bio, skills, projects, translations and media
- [SEO](docs/seo/README.md) — localized routes, meta, sitemap, structured data, OG images
- [Security](docs/security/README.md) — captcha-gated contact details, contact form, secrets
- [Deployment](docs/deployment/README.md) — Cloudflare, env vars, CI, go-live checklist

## Conventions

- All copy is static TypeScript data in `app/data/` (typed by `shared/types/content.ts`) or UI
  strings in `i18n/locales/*.json`. No HTML in either.
- Phone and email never go in the repo or the client bundle: they're Worker secrets.
- Colors come from semantic tokens in `app/assets/css/main.css`; both themes must keep working.
- Look for `TODO(leonardo)` for copy that still needs Leonardo's review.
