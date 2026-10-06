import type { H3Event } from 'h3'
import type { ContactPayload } from '#shared/utils/contact'

/** Sends the contact message to Leonardo through Resend's HTTP API (fetch works on Workers). */
export async function sendContactEmail(event: H3Event, message: ContactPayload) {
    const { resend } = useRuntimeConfig(event)

    const subject = `Portfolio: ${message.name}`
    const text = [`Name: ${message.name}`, `Email: ${message.email}`, '', message.message].join('\n')

    if (resend.dryRun) {
        console.info('[contact] dry run, email not sent', { subject, replyTo: message.email, text })
        return
    }

    if (!resend.apiKey || !resend.to) {
        throw createError({ statusCode: 503, statusMessage: 'Email delivery is not configured' })
    }

    try {
        await $fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: { Authorization: `Bearer ${resend.apiKey}` },
            body: {
                from: resend.from,
                to: [resend.to],
                reply_to: message.email,
                subject,
                text,
            },
        })
    } catch (error) {
        console.error('[contact] Resend request failed', error)
        throw createError({ statusCode: 502, statusMessage: 'Email delivery failed' })
    }
}
