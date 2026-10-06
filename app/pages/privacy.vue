<script setup lang="ts">
import { privacySections, privacyUpdatedAt } from '~/data/privacy'

const { t, locale } = useI18n()
const l = useLocalized()

// Noon UTC so the date doesn't shift a day in other timezones.
const updated = computed(() =>
    new Intl.DateTimeFormat(locale.value, { dateStyle: 'long' }).format(new Date(`${privacyUpdatedAt}T12:00:00Z`)),
)

useSeoMeta({
    title: () => t('privacy.title'),
    description: () => t('seo.privacy.description'),
})
defineOgImage('Terminal', { title: t('privacy.title'), description: t('seo.privacy.description'), path: '~/privacy' })
</script>

<template>
    <div class="container-page py-14 sm:py-20">
        <article class="max-w-3xl">
            <h1 class="font-mono text-4xl font-bold tracking-tight sm:text-5xl">{{ t('privacy.title') }}</h1>
            <p class="mt-4 font-mono text-sm text-muted">{{ t('privacy.updated', { date: updated }) }}</p>

            <section v-for="(section, index) in privacySections" :key="index" class="mt-12">
                <h2 class="heading-prompt text-xl sm:text-2xl">{{ l(section.title) }}</h2>
                <div class="mt-4 space-y-4 leading-relaxed text-muted">
                    <p v-for="(paragraph, pIndex) in l(section.paragraphs)" :key="pIndex">{{ paragraph }}</p>
                </div>
            </section>
        </article>
    </div>
</template>
