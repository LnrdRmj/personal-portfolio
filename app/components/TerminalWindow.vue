<script setup lang="ts">
defineProps<{ title?: string }>()
</script>

<template>
    <div
        class="overflow-hidden rounded-xl border border-term-border bg-term-bg font-mono text-sm text-term-fg shadow-2xl shadow-black/25"
    >
        <div
            class="flex items-center gap-2 border-b border-term-border bg-term-bar px-4 py-3"
            aria-hidden="true"
        >
            <span class="size-3 rounded-full bg-[#ff5f57]" />
            <span class="size-3 rounded-full bg-[#febc2e]" />
            <span class="size-3 rounded-full bg-[#28c840]" />
            <span v-if="title" class="ml-3 truncate text-xs text-term-muted">{{ title }}</span>
        </div>
        <div class="p-5 leading-relaxed sm:p-6">
            <slot />
        </div>
    </div>
</template>
