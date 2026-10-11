<script setup lang="ts">
import { methodSteps } from '~/data/method'

const { t } = useI18n()
const l = useLocalized()
</script>

<template>
    <section id="method" class="container-page py-20 lg:py-28">
        <div class="grid-module items-end gap-y-5 border-t border-fg pt-8">
            <h2 class="heading-section col-span-4 sm:col-span-8 lg:col-span-7">{{ t('method.title') }}</h2>
            <p class="col-span-4 text-lg leading-relaxed text-muted sm:col-span-6 lg:col-span-4 lg:col-start-9">
                {{ t('method.intro') }}
            </p>
        </div>

        <!-- Drawn like a product-manual diagram: marks on one axis, each step hung from it. -->
        <ol class="relative mt-16 grid gap-y-10 lg:mt-24 lg:grid-cols-5 lg:gap-x-8">
            <span class="absolute top-0 bottom-0 left-9 w-0.5 bg-fg lg:hidden" aria-hidden="true" />
            <span class="absolute top-14 right-0 left-0 hidden h-0.5 bg-fg lg:block" aria-hidden="true" />

            <li
                v-for="(step, index) in methodSteps"
                :key="step.id"
                class="relative grid grid-cols-[4.5rem_1fr] gap-x-5 lg:block"
            >
                <div class="relative flex h-16 items-center justify-center bg-bg lg:h-28 lg:w-28 lg:bg-transparent">
                    <GeoMark :shape="step.mark" :tone="step.tone" class="size-14 lg:size-28" />
                </div>
                <span class="ml-14 hidden h-10 w-px bg-fg lg:block" aria-hidden="true" />
                <div class="pt-3 lg:pt-4">
                    <h3 class="flex items-baseline gap-2.5 text-xl font-bold tracking-[-0.02em]">
                        <span class="numerals text-base font-semibold text-accent-ink">{{ index + 1 }}</span>
                        {{ l(step.title) }}
                    </h3>
                    <p class="mt-2 max-w-[34ch] leading-relaxed text-muted">{{ l(step.body) }}</p>
                </div>
            </li>
        </ol>
    </section>
</template>
