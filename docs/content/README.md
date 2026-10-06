# Content

All copy is static and typed. Text that differs per language is a `Localized<T>`
(`{ it: ..., en: ... }`); TypeScript won't compile if a language is missing.

| What | Where |
|---|---|
| Name, job title, bio, socials, VAT | `app/data/profile.ts` |
| Skills (languages, frameworks, tools, AI) | `app/data/skills.ts` |
| Projects | `app/data/projects/*.ts`, order in `app/data/projects/index.ts` |
| Privacy notice | `app/data/privacy.ts` |
| Buttons, headings, form labels, SEO titles | `i18n/locales/it.json` and `en.json` |

Phone and email are not content: they're secrets (see [security](../security/README.md)).

## Add a project

1. Put its images in `images/projects/<slug>/` (PNG/JPG, kebab-case names).
2. Create `app/data/projects/<slug>.ts` exporting a `Project`, and add it to `index.ts`.
3. Image `src` is the path under `images/` without extension, e.g. `projects/acme/banner`.
   Give every image `alt` in both languages plus its real `width` and `height`.
4. Build: the new pages (`/progetti/<slug>`, `/en/projects/<slug>`) are prerendered and added
   to the sitemap automatically.

Sections are a small union (`shared/types/content.ts`): `media`, `media-grid`,
`media-with-text` and `titled` (a heading plus text, optionally wrapping another section).
Text is `paragraphs` and optional `bullets` — no HTML.

## Add a skill

Add `{ id, label, icon }` to a group in `app/data/skills.ts`. `icon` is an Iconify name from
[simple-icons](https://icones.js.org/collection/simple-icons) (e.g. `simple-icons:vuedotjs`).
Projects reference skills by `id` in their `stack`.

## Images

`npm run images` (run automatically before `dev` and `build`) turns every file in `images/`
into WebP variants at the widths in `shared/utils/images.ts`, written to `public/img/`
(gitignored). `<ResponsiveImage>` builds the matching `srcset`.

## Videos

Screen recordings live in `public/media/<slug>/`. Encode new ones with:

```bash
scripts/encode-video.sh input.mov public/media/<slug>/<name>.mp4
```

It makes an H.264 file (plays in every browser) plus a `.webp` poster. Keep each file under
25 MiB (Cloudflare's per-file limit). In data, reference videos as `/v/<slug>/<name>.mp4`:
the `/v/` route adds the byte-range support iOS Safari needs, which Cloudflare's static
assets don't provide.
