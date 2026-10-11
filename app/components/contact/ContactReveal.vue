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
    <div class="border-t border-accent-fg/40 pt-6">
        <h3 class="text-xl font-bold tracking-[-0.01em]">{{ t('contact.reveal.title') }}</h3>
        <p class="mt-2 max-w-md">{{ t('contact.reveal.body') }}</p>

        <ul v-if="state === 'done' && details" class="mt-6 border-t border-accent-fg/40 text-lg font-semibold">
            <li class="border-b border-accent-fg/40">
                <a :href="`tel:${details.phone.replace(/\s/g, '')}`" class="flex items-center gap-3 py-3 hover:underline">
                    <Icon name="lucide:phone" class="size-5" />
                    <span class="sr-only">{{ t('contact.reveal.phone') }}:</span>
                    <span class="numerals">{{ details.phone }}</span>
                </a>
            </li>
            <li class="border-b border-accent-fg/40">
                <a :href="`mailto:${details.email}`" class="flex items-center gap-3 py-3 break-all hover:underline">
                    <Icon name="lucide:mail" class="size-5 shrink-0" />
                    <span class="sr-only">{{ t('contact.reveal.email') }}:</span>
                    {{ details.email }}
                </a>
            </li>
            <li class="border-b border-accent-fg/40">
                <a :href="details.whatsapp" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 py-3 hover:underline">
                    <Icon name="simple-icons:whatsapp" class="size-5" />
                    {{ t('contact.reveal.whatsapp') }}
                </a>
            </li>
        </ul>

        <button
            v-else-if="state === 'idle'"
            type="button"
            class="btn mt-6 bg-accent-fg text-accent hover:bg-fg hover:text-bg"
            @click="state = 'challenge'"
        >
            <Icon name="lucide:eye" class="size-4" />
            {{ t('contact.reveal.button') }}
        </button>

        <div v-else class="mt-6 space-y-3">
            <!-- Mounted only after the click, so Cloudflare's script never loads for casual visitors. -->
            <NuxtTurnstile ref="turnstile" v-model="token" :options="turnstileOptions" />
            <p v-if="state === 'loading'" role="status">{{ t('contact.reveal.verifying') }}</p>
            <p v-if="state === 'error'" role="alert" class="font-semibold">
                {{ t('contact.reveal.error') }}
                <button type="button" class="ml-1 underline" @click="retry">{{ t('contact.reveal.retry') }}</button>
            </p>
        </div>
    </div>
</template>
