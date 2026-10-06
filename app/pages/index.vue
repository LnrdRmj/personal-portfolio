<script setup lang="ts">
const { t } = useI18n()

// The home title already contains the name, so skip the "| Leonardo Ramaj" template.
useHead({ titleTemplate: '%s' })
useSeoMeta({
    title: () => t('seo.home.title'),
    description: () => t('seo.home.description'),
})
useSchemaOrg([defineWebPage({ '@type': 'ProfilePage' })])
defineOgImage('Terminal', { title: 'Leonardo Ramaj', description: t('seo.home.description') })
</script>

<template>
    <div>
        <HomeHeroSection />
        <HomeAboutSection />
        <HomeSkillsSection />
        <HomeProjectsSection />
        <ContactSection />
    </div>
</template>
