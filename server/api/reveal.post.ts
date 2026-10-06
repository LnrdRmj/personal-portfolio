// Phone and email only leave the server after a valid Turnstile check (see docs/security).
export default defineEventHandler(async (event) => {
    const { token } = await readValidatedBody(event, revealSchema.parse)
    await assertHuman(event, token, 'reveal')

    const { contact } = useRuntimeConfig(event)
    const phone = String(contact.phone ?? '')
    if (!phone || !contact.email) {
        throw createError({ statusCode: 503, statusMessage: 'Contact details are not configured' })
    }

    return {
        phone,
        email: contact.email,
        whatsapp: `https://wa.me/${phone.replace(/\D/g, '')}`,
    }
})
