<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const { t } = useI18n()
const paths = useSitePaths()
const route = useRoute()

const notFound = computed(() => props.error.statusCode === 404)
const title = computed(() => (notFound.value ? t('error.notFoundTitle') : t('error.genericTitle')))

useSeoMeta({ title, robots: 'noindex' })

function goHome() {
    clearError({ redirect: paths.home() })
}
</script>

<template>
    <NuxtLayout>
        <section class="container-page py-20 sm:py-28">
            <div class="max-w-2xl">
                <TerminalWindow :title="`exit ${error.statusCode}`">
                    <p class="wrap-anywhere">
                        <span class="text-term-accent">~</span>
                        <span class="text-term-muted"> $ </span>cd {{ route.path }}
                    </p>
                    <p class="mt-1 text-[#ff7b72] wrap-anywhere">
                        bash: cd: {{ route.path }}: {{ notFound ? t('error.notFound') : t('error.generic') }}
                    </p>
                </TerminalWindow>

                <h1 class="mt-10 font-mono text-4xl font-bold tracking-tight">
                    <span class="text-accent">{{ error.statusCode }}</span> · {{ title }}
                </h1>
                <button type="button" class="btn-primary mt-8" @click="goHome">
                    <Icon name="lucide:arrow-left" class="size-4" />
                    {{ t('error.home') }}
                </button>
            </div>
        </section>
    </NuxtLayout>
</template>
