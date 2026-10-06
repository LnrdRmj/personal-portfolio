# Deployment

The site runs on **Cloudflare Workers** (free plan, commercial use allowed). GitHub Actions
deploys `personal` to production and every pull request to its own preview.

## Domain and email (ramaj.dev)

The domain stays registered at Hostinger, and its mailboxes stay on **Hostinger email**. Only
its **DNS moves to Cloudflare**: a Worker custom domain only works on a domain whose
nameservers are Cloudflare's.

1. **Move DNS without breaking email**: Cloudflare dashboard → *Add a domain* → `ramaj.dev` →
   Free plan. Before switching, make sure Cloudflare has every mail record from Hostinger's DNS
   zone (hPanel → *Emails → DNS settings* lists them); the import can miss some:
   - MX records (Hostinger's `mx1`/`mx2`)
   - the SPF TXT on the root (`v=spf1 include:...hostinger...`)
   - DKIM records (`*._domainkey`) and any `autodiscover`/`autoconfig` records
   Mail-related CNAMEs must be **DNS only** (grey cloud). Then in hPanel → *Domains → ramaj.dev
   → Nameservers* set the two Cloudflare gives you. Activation takes minutes, at most 24 h.
   Do **not** enable Cloudflare Email Routing: it would replace Hostinger's MX records.
2. **Send form mail from the domain**: Resend → *Domains → Add domain* → `ramaj.dev`. Add the
   records it lists (DKIM on its own selector, MX + SPF on the `send` subdomain) to Cloudflare
   DNS. They don't touch Hostinger's root MX/SPF. If there's no `_dmarc` record yet, add TXT
   `_dmarc` = `v=DMARC1; p=none;` (never two).
3. Once Resend shows the domain as verified, the form sends as `portfolio@ramaj.dev`
   (`NUXT_RESEND_FROM` in `wrangler.jsonc`) to your Hostinger address (`NUXT_RESEND_TO`).
4. Send a test email to your Hostinger address from outside, and one from it, to confirm
   mail still works after the switch.

## One-time setup

1. **Cloudflare**: create an API token with the "Edit Cloudflare Workers" template.
2. **Turnstile**: in the Cloudflare dashboard add a widget (managed mode) for `ramaj.dev` and
   the `workers.dev` host. Note the site key and secret.
3. **Resend**: create an API key (and verify the domain as above).
4. **GitHub repo → Settings → Secrets and variables → Actions**:
   - Secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
   - Variables: `NUXT_SITE_URL` = `https://ramaj.dev`, `NUXT_SITE_ENV` (`staging` until
     launch, then `production`), `NUXT_PUBLIC_TURNSTILE_SITE_KEY`
5. **Worker secrets** (once, from your machine after `npx wrangler login`):

   ```bash
   npx wrangler secret put NUXT_TURNSTILE_SECRET_KEY
   npx wrangler secret put NUXT_TURNSTILE_HOSTNAME  # ramaj.dev
   npx wrangler secret put NUXT_CONTACT_PHONE       # keep the leading "+"
   npx wrangler secret put NUXT_CONTACT_EMAIL       # your Hostinger address
   npx wrangler secret put NUXT_RESEND_API_KEY
   npx wrangler secret put NUXT_RESEND_TO           # your Hostinger address
   ```

## Workflows

- `.github/workflows/deploy.yml`: push to `personal` → build → `wrangler deploy`.
- `.github/workflows/preview.yml`: PR → build (noindex, test captcha) → `wrangler preview`
  → comment with the URL; deleted when the PR closes. Worker Previews are in open beta.

Manual deploy from your machine: `npm run deploy`. The first deploy fails until `ramaj.dev` is
active on Cloudflare, because of the custom domain route in `wrangler.jsonc`.

## Build-time vs runtime values

`NUXT_SITE_URL`, `NUXT_SITE_ENV` and `NUXT_PUBLIC_TURNSTILE_SITE_KEY` are baked into the
prerendered HTML, so changing them needs a rebuild. Everything else is read by the Worker at
runtime and changes with `wrangler secret put`.

## Go-live checklist

- [ ] `ramaj.dev` active on Cloudflare, Hostinger email still working, Resend domain verified.
- [ ] Deploy; the Worker takes over `ramaj.dev` (replace any old A/CNAME record for the apex
      if Cloudflare reports a conflict).
- [ ] Set `NUXT_SITE_ENV=production`, then redeploy.
- [ ] Send a test message through the form and check it arrives.
- [ ] Check video playback on iOS Safari.
- [ ] Verify the domain in Google Search Console and submit `/sitemap.xml`.
- [ ] Disable the old Firebase Hosting site (`personal-portfolio-8010d`), which still serves
      the previous version.
