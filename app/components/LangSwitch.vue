<script setup lang="ts">
const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const other = computed(() => locales.value.find((item) => item.code !== locale.value)!)
</script>

<template>
    <NuxtLink
        :to="switchLocalePath(other.code)"
        :hreflang="other.language"
        :aria-label="t('lang.switchTo', { language: other.name })"
        :title="t('lang.switchTo', { language: other.name })"
        class="inline-flex h-9 items-center rounded-lg border border-border bg-surface px-2.5 font-mono text-xs transition-colors hover:border-accent"
    >
        <template v-for="(item, index) in locales" :key="item.code">
            <span v-if="index > 0" class="px-1 text-muted" aria-hidden="true">/</span>
            <span :class="item.code === locale ? 'font-bold text-fg' : 'text-muted'">
                {{ item.code }}
            </span>
        </template>
    </NuxtLink>
</template>
