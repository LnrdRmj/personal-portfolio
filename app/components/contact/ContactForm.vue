<script setup lang="ts">
const { t, locale } = useI18n()
const colorMode = useColorMode()
const paths = useSitePaths()

type Field = 'name' | 'email' | 'message' | 'token'
const fields: Field[] = ['name', 'email', 'message', 'token']

const form = reactive({ name: '', email: '', message: '', website: '' })
const token = ref('')
const errors = ref<Partial<Record<Field, string>>>({})
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')
const turnstile = ref<{ reset: () => void } | null>(null)
// Turnstile loads only once the visitor starts using the form.
const armed = ref(false)

// The hero's "what do you need?" picker starts the message, unless the visitor already typed one.
const enquiryTopic = useEnquiryTopic()
let prefilled = ''
watch(enquiryTopic, (topic) => {
    if (form.message.trim() && form.message !== prefilled) return
    prefilled = topic ? t('contact.form.prefill', { topic }) : ''
    form.message = prefilled
})

const turnstileOptions = computed(() => ({
    action: 'contact',
    theme: colorMode.value === 'dark' ? ('dark' as const) : ('light' as const),
    language: locale.value,
}))

async function submit() {
    armed.value = true
    const parsed = contactSchema.safeParse({ ...form, token: token.value })
    if (!parsed.success) {
        const invalid = new Set(parsed.error.issues.map((issue) => String(issue.path[0])))
        errors.value = Object.fromEntries(
            fields.filter((field) => invalid.has(field)).map((field) => [field, t(`contact.form.errors.${field}`)]),
        )
        return
    }

    errors.value = {}
    status.value = 'sending'
    try {
        await $fetch('/api/contact', { method: 'POST', body: parsed.data })
        status.value = 'success'
        Object.assign(form, { name: '', email: '', message: '', website: '' })
    } catch {
        status.value = 'error'
    } finally {
        // Tokens are single-use.
        token.value = ''
        turnstile.value?.reset()
    }
}
</script>

<template>
    <form class="relative bg-surface p-6 text-fg sm:p-10" novalidate @submit.prevent="submit" @focusin.once="armed = true">
        <h3 class="text-[1.75rem] leading-tight font-bold tracking-[-0.02em]">{{ t('contact.form.title') }}</h3>

        <div class="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
                <label for="contact-name" class="mb-2 block text-sm font-semibold">{{ t('contact.form.name') }}</label>
                <input
                    id="contact-name"
                    v-model="form.name"
                    name="name"
                    type="text"
                    autocomplete="name"
                    maxlength="100"
                    class="field"
                    :aria-invalid="!!errors.name"
                    :aria-describedby="errors.name ? 'contact-name-error' : undefined"
                />
                <p v-if="errors.name" id="contact-name-error" class="mt-1.5 text-sm text-danger">{{ errors.name }}</p>
            </div>
            <div>
                <label for="contact-email" class="mb-2 block text-sm font-semibold">{{ t('contact.form.email') }}</label>
                <input
                    id="contact-email"
                    v-model="form.email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    maxlength="200"
                    class="field"
                    :aria-invalid="!!errors.email"
                    :aria-describedby="errors.email ? 'contact-email-error' : undefined"
                />
                <p v-if="errors.email" id="contact-email-error" class="mt-1.5 text-sm text-danger">{{ errors.email }}</p>
            </div>
        </div>

        <div class="mt-5">
            <label for="contact-message" class="mb-2 block text-sm font-semibold">{{ t('contact.form.message') }}</label>
            <textarea
                id="contact-message"
                v-model="form.message"
                name="message"
                rows="7"
                maxlength="5000"
                class="field resize-y"
                :placeholder="t('contact.form.messagePlaceholder')"
                :aria-invalid="!!errors.message"
                :aria-describedby="errors.message ? 'contact-message-error' : undefined"
            />
            <p v-if="errors.message" id="contact-message-error" class="mt-1.5 text-sm text-danger">
                {{ errors.message }}
            </p>
        </div>

        <!-- Honeypot: hidden from people and screen readers, bots tend to fill it. -->
        <div class="absolute -left-[9999px] size-px overflow-hidden" aria-hidden="true">
            <label for="contact-website">{{ t('contact.form.honeypot') }}</label>
            <input id="contact-website" v-model="form.website" name="website" type="text" tabindex="-1" autocomplete="off" />
        </div>

        <div v-if="armed" :aria-label="t('contact.form.captcha')" role="group" class="mt-5">
            <NuxtTurnstile ref="turnstile" v-model="token" :options="turnstileOptions" />
            <p v-if="errors.token" class="mt-1.5 text-sm text-danger">{{ errors.token }}</p>
        </div>

        <div class="mt-7 flex flex-wrap items-center gap-x-5 gap-y-4">
            <button type="submit" class="btn-primary" :disabled="status === 'sending'">
                <Icon v-if="status === 'sending'" name="lucide:loader-circle" class="size-4 animate-spin" />
                {{ status === 'sending' ? t('contact.form.sending') : t('contact.form.submit') }}
                <Icon v-if="status !== 'sending'" name="lucide:arrow-right" class="size-4" />
            </button>
            <i18n-t keypath="contact.form.privacy" tag="p" scope="global" class="max-w-xs text-xs leading-relaxed text-muted">
                <template #link>
                    <NuxtLink :to="paths.privacy()" class="link">{{ t('contact.form.privacyLink') }}</NuxtLink>
                </template>
            </i18n-t>
        </div>

        <!-- Outcomes print onto the sheet as a full-width line, not a floating toast. -->
        <p v-if="status === 'success'" role="status" class="mt-6 flex items-center gap-3 border-t border-fg pt-4 font-semibold">
            <Icon name="lucide:check" class="size-5 text-accent-ink" />
            {{ t('contact.form.success') }}
        </p>
        <p v-if="status === 'error'" role="alert" class="mt-6 flex items-center gap-3 border-t border-danger pt-4 font-semibold text-danger">
            <Icon name="lucide:circle-alert" class="size-5" />
            {{ t('contact.form.error') }}
        </p>
    </form>
</template>
