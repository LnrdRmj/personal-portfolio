<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <section id="contact" class="bg-accent text-accent-fg">
        <div class="container-page grid-module gap-y-12 py-20 lg:py-28">
            <div class="col-span-4 sm:col-span-8 lg:col-span-5">
                <h2 class="display">{{ t('contact.title') }}</h2>
                <p class="mt-8 max-w-md text-lg leading-relaxed">{{ t('contact.intro') }}</p>
                <ContactReveal class="mt-12" />
            </div>
            <ContactForm class="col-span-4 sm:col-span-8 lg:col-span-6 lg:col-start-7" />
        </div>
    </section>
</template>
