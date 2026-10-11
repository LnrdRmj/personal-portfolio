<script setup lang="ts">
import type { TextBlock } from '#shared/types/content'

defineProps<{ text: TextBlock }>()

const l = useLocalized()
</script>

<template>
    <div class="max-w-[65ch] space-y-4 text-lg leading-relaxed text-muted">
        <p v-for="(paragraph, index) in l(text.paragraphs)" :key="index">{{ paragraph }}</p>
        <ul v-if="text.bullets" class="border-t border-border text-base text-fg">
            <li v-for="(bullet, index) in l(text.bullets)" :key="index" class="flex items-baseline gap-3 border-b border-border py-2.5">
                <span class="size-2 shrink-0 translate-y-[-0.1em] bg-accent" aria-hidden="true" />
                <span>{{ bullet }}</span>
            </li>
        </ul>
    </div>
</template>
