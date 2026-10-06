# SEO

Built on [Nuxt SEO](https://nuxtseo.com) (`@nuxtjs/seo`) and `@nuxtjs/i18n`.

## URLs and languages

- Italian is the default at `/`; English is under `/en` (`prefix_except_default`).
- Project pages have localized paths: `/progetti/<slug>` and `/en/projects/<slug>`, declared in
  `definePageMeta` of `app/pages/projects/[slug].vue` and mirrored in `shared/utils/routes.ts`.
- There's no browser-language redirect: each language has its own indexable URL.
- Each page gets exactly one canonical (Nuxt SEO) plus `it`, `en` and `x-default` hreflang
  alternates (`useLocaleHead` in `app/app.vue`).

## Indexing switch

`NUXT_SITE_ENV` at build time decides indexing. Anything but `production` makes `robots.txt`
disallow everything and adds `noindex` meta and headers. Keep it `staging` until the real
domain is live, so the `workers.dev` URL never gets indexed.

## What each page emits

- Title and description from `useSeoMeta` (texts in `i18n/locales/*.json` → `seo.*`, or the
  project's `summary`).
- Structured data: a `Person` identity (configured in `nuxt.config.ts` → `schemaOrg`) on every
  page; `ProfilePage` on home; `CreativeWork` + `BreadcrumbList` on projects.
- An OG image per page and language, rendered at build time from
  `app/components/OgImage/Terminal.takumi.vue` (`ogImage.zeroRuntime`, so no runtime cost).
- `/sitemap.xml` with hreflang alternates and image entries (`sitemap` in `nuxt.config.ts`).

## Checking a build

```bash
npm run build
grep -E 'canonical|hreflang|ld\+json|og:image' .output/public/progetti/yoomy.html
```

After launch: verify the domain in Google Search Console and submit `/sitemap.xml`.
