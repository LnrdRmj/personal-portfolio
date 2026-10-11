# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: companies and startups (product teams, founders) looking for a freelance developer to build or extend a web or mobile product. They arrive mostly from Google or a shared link, scan for proof that Leonardo can ship, and decide whether to get in touch.

Other visitors (local businesses, agencies, recruiters) are welcome but not the design target.

## Product Purpose

The personal portfolio of Leonardo Ramaj, a freelance full-stack developer based in Prato, Italy (VAT registered). It exists to turn a qualified visitor into a conversation: a contact form message, or a call/email/WhatsApp after the anti-bot reveal. Success is inbound project enquiries from companies and startups.

## Positioning

- **End-to-end ownership:** one person carries a project from first idea to launch and beyond: analysis, development, SEO, domain/DNS, maintenance.
- **Made to be found on Google:** SEO is part of the build, not an add-on.
- **AI integration:** helping companies bring AI into their products and workflows is a current offer.

Native mobile delivery (App Store / Play Store via Capacitor/Flutter) is a real capability but not a headline differentiator.

## Operating Context

- Bilingual: Italian is the default at `/`, English under `/en`; every page and project exists in both.
- Visitors evaluate through the home page (bio, skills, projects, contact) and per-project case-study pages.
- Contact paths: a contact form (Turnstile + email via Resend) and phone/email/WhatsApp revealed only after a Turnstile check. Phone and email are never in the repo or client bundle.
- Domain: `ramaj.dev`.

## Capabilities and Constraints

- Nuxt 4, prerendered static pages on Cloudflare Workers; only `/api/*` and `/v/*` run as Worker code.
- All copy is typed static data (`app/data/`, `i18n/locales/*.json`); no HTML in content.
- Light and dark themes must both keep working.
- Out of scope for v1: blog, downloadable CV, FAQ, AI chat.
- Open: the AI skills list and bio copy are awaiting Leonardo's review (`TODO(leonardo)`).

## Brand Commitments

- Name: Leonardo Ramaj. Role: freelance full-stack developer (Sviluppatore full-stack freelance).
- Voice: first person, direct and friendly, plain language for non-technical buyers.

## Evidence on Hand

- Case studies (the only ones): **Yoomy** (school snack ordering app, full-stack, 2020–present), **Trackone** for NGSSensors (IoT logistics monitoring frontend, 2024–2025), **Naturae** (Nuxt business site for a Florence parquet company, 2024–2025). Data in `app/data/projects/`, images in `images/projects/`, videos in `public/media/trackone/`.
- Client names and logos may be shown as proof.
- Testimonials: real client quotes will be collected later. Until then, placeholder testimonials may be drafted, but each must be marked `TODO(leonardo)` and must not ship to production as genuine until Leonardo replaces or approves it.
- Absent and not to be invented: metrics, benchmarks, client counts, pricing, AI case studies, awards.
- Trackone media shows a username Leonardo may want blurred.

## Product Principles

1. Proof over promises: let shipped projects carry the argument.
2. Every page leads somewhere: a visitor should always be one step from getting in touch.
3. Practice what's sold: the site itself must be fast, accessible and well indexed, since that is the pitch.
4. Equal in both languages: Italian and English are first-class, never one translated as an afterthought.
