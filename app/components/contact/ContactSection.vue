<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <section id="contact" class="container-page py-20">
        <h2 class="heading-prompt reveal">{{ t('contact.title') }}</h2>
        <p class="reveal mt-4 max-w-2xl text-lg text-muted">{{ t('contact.intro') }}</p>

        <div class="mt-10 grid items-start gap-6 lg:grid-cols-[1fr_1.5fr]">
            <ContactReveal />
            <ContactForm />
        </div>
    </section>
</template>
