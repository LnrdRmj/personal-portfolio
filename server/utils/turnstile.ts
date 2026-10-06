import type { H3Event } from 'h3'

/** Throws 403 unless Cloudflare confirms the token came from a person, for this action and site. */
export async function assertHuman(event: H3Event, token: string, action: string) {
    const result = await verifyTurnstileToken(token, event)
    const { turnstileHostname } = useRuntimeConfig(event)

    // Test keys return no action or hostname, so each check only applies when there's a value.
    const actionOk = !result.action || result.action === action
    const hostnameOk = !turnstileHostname || result.hostname === turnstileHostname

    if (!result.success || !actionOk || !hostnameOk) {
        throw createError({ statusCode: 403, statusMessage: 'Captcha verification failed' })
    }
}
