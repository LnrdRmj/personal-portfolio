<script setup lang="ts">
import { projects } from '~/data/projects'

const { t } = useI18n()
</script>

<template>
    <section id="projects" class="container-page py-20 lg:py-28">
        <div class="grid-module items-end gap-y-5 border-t border-fg pt-8">
            <h2 class="heading-section col-span-4 sm:col-span-8 lg:col-span-6">{{ t('projects.title') }}</h2>
            <p class="col-span-4 text-lg leading-relaxed text-muted sm:col-span-6 lg:col-span-4 lg:col-start-9">
                {{ t('projects.intro') }}
            </p>
        </div>

        <div class="mt-16 space-y-24 lg:mt-20 lg:space-y-32">
            <HomeProjectSpread v-for="(project, index) in projects" :key="project.slug" :project="project" :index="index" />
        </div>
    </section>
</template>
