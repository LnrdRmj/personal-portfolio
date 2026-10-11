<script setup lang="ts">
import type { MethodStep } from '#shared/types/content'

defineProps<{ shape: MethodStep['mark']; tone: MethodStep['tone'] }>()

const fills: Record<MethodStep['tone'], string> = {
    red: 'text-accent',
    blue: 'text-blue',
    yellow: 'text-yellow',
    ink: 'text-fg',
}
</script>

<template>
    <!-- Decorative: the step's title always sits next to it. -->
    <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false" :class="fills[tone]">
        <circle v-if="shape === 'circle'" cx="20" cy="20" r="20" fill="currentColor" />
        <rect v-else-if="shape === 'square'" x="2" y="2" width="36" height="36" fill="currentColor" />
        <path v-else-if="shape === 'half'" d="M0 30a20 20 0 0 1 40 0Z" fill="currentColor" />
        <path v-else-if="shape === 'triangle'" d="M20 1 40 37H0Z" fill="currentColor" />
        <rect v-else x="0" y="13" width="40" height="14" fill="currentColor" />
    </svg>
</template>
