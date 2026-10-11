<script setup lang="ts">
import { profile } from '~/data/profile'

const { t } = useI18n()
const paths = useSitePaths()
const year = new Date().getFullYear()
</script>

<template>
    <footer class="bg-ink text-ink-fg">
        <div class="container-page grid-module gap-y-10 pt-16 pb-10 text-[0.95rem]">
            <p class="col-span-4 max-w-sm text-lg leading-snug sm:col-span-8 lg:col-span-5">{{ t('footer.tagline') }}</p>

            <div class="col-span-2 sm:col-span-4 lg:col-span-3 lg:col-start-7">
                <h2 class="border-b border-ink-fg/25 pb-2 text-sm font-semibold">{{ t('footer.social') }}</h2>
                <ul class="mt-3 space-y-2">
                    <li v-for="social in profile.socials" :key="social.id">
                        <a :href="social.url" target="_blank" rel="me noopener noreferrer" class="inline-flex items-center gap-2.5 hover:underline">
                            <Icon :name="social.icon" class="size-4" />
                            {{ social.label }}
                        </a>
                    </li>
                </ul>
            </div>

            <div class="col-span-2 sm:col-span-4 lg:col-span-3">
                <h2 class="border-b border-ink-fg/25 pb-2 text-sm font-semibold">{{ t('footer.legal') }}</h2>
                <ul class="mt-3 space-y-2">
                    <li>{{ profile.name }}</li>
                    <li class="numerals">{{ t('footer.vat') }} {{ profile.vatNumber }}</li>
                    <li>{{ profile.location.city }} ({{ profile.location.region }})</li>
                    <li><NuxtLink :to="paths.privacy()" class="underline hover:no-underline">{{ t('footer.privacy') }}</NuxtLink></li>
                </ul>
            </div>
        </div>

        <div class="container-page overflow-hidden">
            <p
                class="pb-[0.12em] font-semibold tracking-[-0.055em] whitespace-nowrap"
                style="font-size: calc((min(100vw, 84rem) - 5rem) / 6.35); line-height: 1"
                aria-hidden="true"
            >
                leonardo ramaj
            </p>
        </div>
        <div class="border-t border-ink-fg/25">
            <p class="container-page py-5 text-sm opacity-80">© {{ year }} {{ profile.name }}. {{ t('footer.rights') }}</p>
        </div>
    </footer>
</template>
