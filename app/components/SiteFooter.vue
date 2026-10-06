<script setup lang="ts">
import { profile } from '~/data/profile'

const { t } = useI18n()
const paths = useSitePaths()
const year = new Date().getFullYear()
</script>

<template>
    <footer class="mt-24 border-t border-border">
        <div class="container-page grid gap-10 py-12 text-sm md:grid-cols-3">
            <div>
                <p class="font-mono font-bold"><span class="text-accent">~/</span>leonardo-ramaj</p>
                <p class="mt-3 max-w-xs text-muted">{{ t('footer.tagline') }}</p>
            </div>

            <div>
                <h2 class="font-mono text-xs tracking-wider text-muted uppercase">
                    {{ t('footer.social') }}
                </h2>
                <ul class="mt-4 space-y-2.5">
                    <li v-for="social in profile.socials" :key="social.id">
                        <a
                            :href="social.url"
                            target="_blank"
                            rel="me noopener noreferrer"
                            class="inline-flex items-center gap-2 transition-colors hover:text-accent"
                        >
                            <Icon :name="social.icon" class="size-4" />
                            {{ social.label }}
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <h2 class="font-mono text-xs tracking-wider text-muted uppercase">
                    {{ t('footer.legal') }}
                </h2>
                <ul class="mt-4 space-y-2.5 text-muted">
                    <li class="text-fg">{{ profile.name }}</li>
                    <li>{{ t('footer.vat') }} {{ profile.vatNumber }}</li>
                    <li>{{ profile.location.city }} ({{ profile.location.region }})</li>
                    <li>
                        <NuxtLink :to="paths.privacy()" class="underline-offset-4 hover:text-accent hover:underline">
                            {{ t('footer.privacy') }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>

        <div class="border-t border-border">
            <p class="container-page py-6 font-mono text-xs text-muted">
                © {{ year }} {{ profile.name }}. {{ t('footer.rights') }}
            </p>
        </div>
    </footer>
</template>
