<script setup lang="ts">
import { profile } from '~/data/profile'

const { t } = useI18n()
const l = useLocalized()
</script>

<template>
    <section id="about" class="container-page py-20 lg:py-28">
        <div class="grid-module gap-y-12 border-t border-fg pt-8">
            <div class="col-span-4 sm:col-span-8 lg:col-span-4">
                <h2 class="heading-section">{{ t('about.title') }}</h2>

                <div v-if="profile.portrait" class="mt-10 bg-blue p-5 sm:p-6">
                    <ResponsiveImage
                        :media="profile.portrait"
                        sizes="(min-width: 1024px) 380px, 100vw"
                        class="aspect-4/5 w-full object-cover"
                    />
                </div>
            </div>

            <div class="col-span-4 sm:col-span-8 lg:col-span-7 lg:col-start-6">
                <div class="space-y-6 text-xl leading-snug sm:text-2xl sm:leading-snug">
                    <p v-for="(paragraph, index) in l(profile.bio)" :key="index">{{ paragraph }}</p>
                </div>

                <dl class="mt-12 grid border-t border-fg text-[0.95rem] sm:grid-cols-3">
                    <div class="border-b border-border py-4 sm:border-b-0 sm:pr-6">
                        <dt class="text-muted">{{ t('about.facts.based') }}</dt>
                        <dd class="mt-1 font-semibold">{{ t('about.facts.basedValue') }}</dd>
                    </div>
                    <div class="border-b border-border py-4 sm:border-b-0 sm:pr-6">
                        <dt class="text-muted">{{ t('about.facts.work') }}</dt>
                        <dd class="mt-1 font-semibold">{{ t('about.facts.workValue') }}</dd>
                    </div>
                    <div class="py-4">
                        <dt class="text-muted">{{ t('about.facts.vat') }}</dt>
                        <dd class="numerals mt-1 font-semibold">{{ profile.vatNumber }}</dd>
                    </div>
                </dl>
            </div>
        </div>
    </section>
</template>
