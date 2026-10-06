<script setup lang="ts">
import { profile } from '~/data/profile'

const { t } = useI18n()
const l = useLocalized()

const facts = ['based', 'work', 'focus'] as const
</script>

<template>
    <section id="about" class="container-page reveal py-20">
        <h2 class="heading-prompt">{{ t('about.title') }}</h2>
        <div class="mt-8 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div class="space-y-5 text-lg leading-relaxed text-muted">
                <p v-for="(paragraph, index) in l(profile.bio)" :key="index">{{ paragraph }}</p>
            </div>
            <dl class="card self-start p-6 font-mono text-sm">
                <div v-for="fact in facts" :key="fact" class="flex flex-wrap gap-x-2 py-1.5">
                    <dt class="text-link">{{ t(`about.facts.${fact}`) }}:</dt>
                    <dd class="text-fg">{{ t(`about.facts.${fact}Value`) }}</dd>
                </div>
            </dl>
        </div>
    </section>
</template>
