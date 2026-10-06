<script setup lang="ts">
const { t, locale } = useI18n()
const colorMode = useColorMode()

type Details = { phone: string; email: string; whatsapp: string }

const state = ref<'idle' | 'challenge' | 'loading' | 'done' | 'error'>('idle')
const token = ref('')
const details = ref<Details | null>(null)
const turnstile = ref<{ reset: () => void } | null>(null)

const turnstileOptions = computed(() => ({
    action: 'reveal',
    theme: colorMode.value === 'dark' ? ('dark' as const) : ('light' as const),
    language: locale.value,
}))

watch(token, async (value) => {
    if (!value) return
    state.value = 'loading'
    try {
        details.value = await $fetch<Details>('/api/reveal', { method: 'POST', body: { token: value } })
        state.value = 'done'
    } catch {
        state.value = 'error'
    }
})

function retry() {
    token.value = ''
    state.value = 'challenge'
    turnstile.value?.reset()
}
</script>

<template>
    <div class="card p-6 sm:p-8">
        <h3 class="flex items-center gap-2 font-mono text-lg font-bold">
            <Icon name="lucide:shield-check" class="size-5 text-accent" />
            {{ t('contact.reveal.title') }}
        </h3>
        <p class="mt-3 text-muted">{{ t('contact.reveal.body') }}</p>

        <ul v-if="state === 'done' && details" class="mt-6 space-y-3 font-mono text-sm">
            <li>
                <a :href="`tel:${details.phone.replace(/\s/g, '')}`" class="group inline-flex items-center gap-3">
                    <Icon name="lucide:phone" class="size-4 text-accent" />
                    <span class="sr-only">{{ t('contact.reveal.phone') }}:</span>
                    <span class="group-hover:underline">{{ details.phone }}</span>
                </a>
            </li>
            <li>
                <a :href="`mailto:${details.email}`" class="group inline-flex items-center gap-3">
                    <Icon name="lucide:mail" class="size-4 text-accent" />
                    <span class="sr-only">{{ t('contact.reveal.email') }}:</span>
                    <span class="group-hover:underline">{{ details.email }}</span>
                </a>
            </li>
            <li>
                <a
                    :href="details.whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group inline-flex items-center gap-3"
                >
                    <Icon name="simple-icons:whatsapp" class="size-4 text-accent" />
                    <span class="group-hover:underline">{{ t('contact.reveal.whatsapp') }}</span>
                </a>
            </li>
        </ul>

        <button v-else-if="state === 'idle'" type="button" class="btn-secondary mt-6" @click="state = 'challenge'">
            <Icon name="lucide:eye" class="size-4" />
            {{ t('contact.reveal.button') }}
        </button>

        <div v-else class="mt-6 space-y-3">
            <!-- Mounted only after the click, so Cloudflare's script never loads for casual visitors. -->
            <NuxtTurnstile ref="turnstile" v-model="token" :options="turnstileOptions" />
            <p v-if="state === 'loading'" role="status" class="text-sm text-muted">
                {{ t('contact.reveal.verifying') }}
            </p>
            <p v-if="state === 'error'" role="alert" class="text-sm text-danger">
                {{ t('contact.reveal.error') }}
                <button type="button" class="ml-1 underline" @click="retry">{{ t('contact.reveal.retry') }}</button>
            </p>
        </div>
    </div>
</template>
