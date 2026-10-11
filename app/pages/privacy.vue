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
defineOgImage('Sheet', { title: t('privacy.title'), description: t('seo.privacy.description'), path: 'ramaj.dev' + useSitePaths().privacy() })
</script>

<template>
    <div class="container-page py-14 sm:py-20">
        <div class="grid-module gap-y-10">
            <header class="col-span-4 sm:col-span-8 lg:col-span-4">
                <h1 class="heading-section">{{ t('privacy.title') }}</h1>
                <p class="mt-4 text-[0.95rem] text-muted">{{ t('privacy.updated', { date: updated }) }}</p>
            </header>

            <article class="col-span-4 sm:col-span-8 lg:col-span-7 lg:col-start-6">
                <section v-for="(section, index) in privacySections" :key="index" class="border-t border-fg pt-5 pb-10">
                    <h2 class="text-xl font-bold tracking-[-0.015em]">{{ l(section.title) }}</h2>
                    <div class="mt-3 max-w-[65ch] space-y-4 leading-relaxed text-muted">
                        <p v-for="(paragraph, pIndex) in l(section.paragraphs)" :key="pIndex">{{ paragraph }}</p>
                    </div>
                </section>
            </article>
        </div>
    </div>
</template>
