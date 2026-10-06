<script setup lang="ts">
import type { TextBlock } from '#shared/types/content'

defineProps<{ text: TextBlock }>()

const l = useLocalized()
</script>

<template>
    <div class="space-y-4 text-lg leading-relaxed text-muted">
        <p v-for="(paragraph, index) in l(text.paragraphs)" :key="index">{{ paragraph }}</p>
        <ul v-if="text.bullets" class="space-y-2 font-mono text-base">
            <li v-for="(bullet, index) in l(text.bullets)" :key="index" class="flex gap-3">
                <span class="text-accent" aria-hidden="true">→</span>
                <span>{{ bullet }}</span>
            </li>
        </ul>
    </div>
</template>
