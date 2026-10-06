<script setup lang="ts">
import type { Media } from '#shared/types/content'

const props = defineProps<{
    media: Media
    /** Standard `sizes` attribute; defaults to the full content width. */
    sizes?: string
    eager?: boolean
    /** Shared with the matching ProjectCard image so the banner morphs between pages. */
    transitionName?: string
}>()

const { t } = useI18n()
const l = useLocalized()

const video = ref<HTMLVideoElement>()
const reducedMotion = ref(false)
let observer: IntersectionObserver | undefined

// Screen recordings play muted while visible; with reduced motion they wait for the controls.
onMounted(() => {
    if (props.media.type !== 'video' || !video.value) return
    reducedMotion.value = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion.value) return

    observer = new IntersectionObserver(
        ([entry]) => {
            if (entry?.isIntersecting) video.value?.play().catch(() => {})
            else video.value?.pause()
        },
        { threshold: 0.4 },
    )
    observer.observe(video.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
    <figure class="overflow-hidden rounded-xl border border-border bg-surface-2">
        <ResponsiveImage
            v-if="media.type === 'image'"
            :media="media"
            :sizes="sizes ?? '(min-width: 1152px) 1088px, 100vw'"
            :eager="eager"
            :transition-name="transitionName"
            class="h-auto w-full"
        />
        <video
            v-else
            ref="video"
            :poster="media.poster"
            :width="media.width"
            :height="media.height"
            :aria-label="l(media.alt)"
            :controls="reducedMotion"
            muted
            playsinline
            loop
            preload="none"
            class="h-auto w-full"
        >
            <source :src="media.src" type="video/mp4" />
            {{ t('project.videoFallback') }}
        </video>
    </figure>
</template>
