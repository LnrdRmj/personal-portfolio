import { z } from 'zod'

export const contactSchema = z.object({
    // Single line: the name ends up in the email subject.
    name: z
        .string()
        .trim()
        .min(2)
        .max(100)
        .regex(/^[^\r\n]*$/),
    email: z.email().max(200),
    message: z.string().trim().min(10).max(5000),
    // Honeypot: hidden from people, so anything here means a bot. Checked after parsing.
    website: z.string().max(200).optional(),
    token: z.string().min(1).max(4096),
})

export type ContactPayload = z.infer<typeof contactSchema>

export const revealSchema = z.object({
    token: z.string().min(1).max(4096),
})
