<script setup lang="ts">
import { useTemplateRef } from "vue";
import { useInViewOnce } from "@/composables/useInViewOnce";

const props = withDefaults(defineProps<{
    /** Stagger delay in milliseconds */
    delay?: number
}>(), {
    delay: 0,
})

const container = useTemplateRef('container')
const { isInView } = useInViewOnce(container)
</script>

<template>
    <div ref="container" class="transition-[opacity,translate] duration-700 ease-out"
        :class="isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'"
        :style="{ transitionDelay: `${props.delay}ms` }">
        <slot />
    </div>
</template>
