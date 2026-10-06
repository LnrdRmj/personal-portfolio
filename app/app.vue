<script setup lang="ts">
// Nuxt SEO already sets lang, canonical and og:locale; i18n adds the hreflang alternates.
const i18nHead = useLocaleHead({ seo: true })

useHead(() => ({
    link: (i18nHead.value.link ?? []).filter((link) => link.rel === 'alternate'),
    meta: (i18nHead.value.meta ?? []).filter((meta) => meta.property === 'og:locale:alternate'),
}))
</script>

<template>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
