<script setup lang="ts">
import { projects } from '~/data/projects'

const { t } = useI18n()
</script>

<template>
    <section id="projects" class="container-page py-20">
        <h2 class="heading-prompt reveal">{{ t('projects.title') }}</h2>
        <p class="reveal mt-4 max-w-2xl text-lg text-muted">{{ t('projects.intro') }}</p>

        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
        </div>
    </section>
</template>
