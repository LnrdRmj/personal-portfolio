export default defineEventHandler(async (event) => {
    const message = await readValidatedBody(event, contactSchema.parse)

    // Only bots fill the hidden field: answer "ok" so they don't retry, but send nothing.
    if (message.website) {
        return { ok: true }
    }

    await assertHuman(event, message.token, 'contact')
    await sendContactEmail(event, message)
    return { ok: true }
})
