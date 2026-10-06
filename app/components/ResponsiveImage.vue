<script setup lang="ts">
import type { Media } from '#shared/types/content'

const props = defineProps<{
    media: Media
    /** Standard `sizes` attribute, e.g. "(min-width: 1024px) 540px, 100vw". */
    sizes: string
    eager?: boolean
    /** Shared with another page's image so it morphs on navigation. */
    transitionName?: string
}>()

const l = useLocalized()

// Variants come from scripts/build-images.ts; plain URLs avoid Cloudflare re-encoding redirects.
const widths = computed(() => imageWidths(props.media.width))
const srcset = computed(() =>
    widths.value.map((width) => `${imageUrl(props.media.src, width)} ${width}w`).join(', '),
)
const fallback = computed(() => {
    const width = widths.value.findLast((w) => w <= 1088) ?? widths.value[0]!
    return imageUrl(props.media.src, width)
})
</script>

<template>
    <img
        :src="fallback"
        :srcset="srcset"
        :sizes="sizes"
        :width="media.width"
        :height="media.height"
        :alt="l(media.alt)"
        :loading="eager ? 'eager' : 'lazy'"
        :fetchpriority="eager ? 'high' : undefined"
        decoding="async"
        :style="transitionName ? { viewTransitionName: transitionName } : undefined"
    />
</template>
