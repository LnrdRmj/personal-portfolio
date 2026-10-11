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
        class="inline-flex h-10 items-center gap-1.5 px-2 sm:px-2.5 text-sm font-semibold uppercase transition-colors hover:bg-fg hover:text-bg"
    >
        <span
            v-for="item in locales"
            :key="item.code"
            :class="item.code === locale ? 'text-current' : 'text-muted'"
        >
            {{ item.code }}
        </span>
    </NuxtLink>
</template>
