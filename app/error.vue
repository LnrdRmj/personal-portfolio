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
        <section class="container-page py-16 sm:py-24">
            <div class="grid-module items-end gap-y-10">
                <!-- The status code set as a composition, one colour per digit. -->
                <p
                    class="col-span-4 flex font-bold tracking-[-0.06em] sm:col-span-8 lg:col-span-7"
                    style="font-size: clamp(8rem, 28vw, 22rem); line-height: 0.8"
                    aria-hidden="true"
                >
                    <span
                        v-for="(digit, index) in String(error.statusCode).split('')"
                        :key="index"
                        :class="['text-accent', 'text-blue', 'text-yellow'][index % 3]"
                    >{{ digit }}</span>
                </p>
                <div class="col-span-4 sm:col-span-8 lg:col-span-5">
                    <h1 class="heading-section">{{ title }}</h1>
                    <p class="mt-5 text-lg leading-relaxed text-muted">
                        {{ notFound ? t('error.notFound') : t('error.generic') }}
                    </p>
                    <p class="mt-2 text-sm break-all text-muted">{{ route.path }}</p>
                    <button type="button" class="btn-ink mt-8" @click="goHome">
                        <Icon name="lucide:arrow-left" class="size-4" />
                        {{ t('error.home') }}
                    </button>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>
