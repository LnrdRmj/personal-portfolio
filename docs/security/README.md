# Security

## Captcha-gated contact details

Phone and email exist only as Worker secrets (`NUXT_CONTACT_PHONE`, `NUXT_CONTACT_EMAIL`).
They are never in the repo, the HTML or the JS bundle.

1. The visitor clicks "Show contact details". Only then does the Cloudflare Turnstile widget
   (and its script) load.
2. The widget's token goes to `POST /api/reveal`.
3. The server verifies it with Cloudflare (`server/utils/turnstile.ts`): success, the expected
   `action`, and the site hostname when `NUXT_TURNSTILE_HOSTNAME` is set.
4. Only then does it return phone, email and a WhatsApp link.

> The phone and email were public in the old site's bundle and are in this repo's git
> history, so scrapers may already have them. The new flow protects them from now on.

## Contact form

`POST /api/contact` (`server/api/contact.post.ts`):

1. Validates with the shared zod schema (`shared/utils/contact.ts`) → 400 on bad input.
2. A filled honeypot field (`website`) gets a silent `200` and nothing is sent.
3. Verifies the Turnstile token (`action: 'contact'`) → 403 on failure.
4. Sends a plain-text email through Resend's HTTP API with `reply_to` set to the visitor.
   `NUXT_RESEND_DRY_RUN=true` logs it instead (dev and previews).

## Secrets and test keys

| Variable | Where it's set |
|---|---|
| `NUXT_TURNSTILE_SECRET_KEY` | Worker secret |
| `NUXT_TURNSTILE_HOSTNAME` | Worker var (your domain) |
| `NUXT_CONTACT_PHONE` / `NUXT_CONTACT_EMAIL` | Worker secrets |
| `NUXT_RESEND_API_KEY` / `NUXT_RESEND_TO` | Worker secrets |

Cloudflare's Turnstile test keys: site key `1x00000000000000000000AA`, secret
`1x0000000000000000000000000000000AA` (always passes) or `2x0000000000000000000000000000000AA`
(always fails, handy to test the 403 path).
