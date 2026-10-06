<script setup lang="ts">
import type { Section } from '#shared/types/content'

withDefaults(defineProps<{ section: Section; level?: 2 | 3 }>(), { level: 2 })

const l = useLocalized()
</script>

<template>
    <ProjectMedia v-if="section.kind === 'media'" :media="section.media" />

    <div
        v-else-if="section.kind === 'media-grid'"
        class="grid gap-6"
        :class="section.media.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'"
    >
        <ProjectMedia
            v-for="media in section.media"
            :key="media.src"
            :media="media"
            :sizes="section.media.length === 3 ? '(min-width: 768px) 360px, 100vw' : '(min-width: 768px) 540px, 100vw'"
        />
    </div>

    <div v-else-if="section.kind === 'media-with-text'" class="grid items-center gap-10 lg:grid-cols-2">
        <div :class="{ 'lg:order-2': section.textPosition === 'right' }">
            <component :is="`h${level}`" class="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
                {{ l(section.title) }}
            </component>
            <ProjectText :text="section.text" class="mt-5" />
        </div>
        <ProjectMedia :media="section.media" sizes="(min-width: 1024px) 540px, 100vw" />
    </div>

    <div v-else-if="section.kind === 'titled'" class="space-y-10">
        <div class="max-w-3xl">
            <component :is="`h${level}`" class="font-mono text-2xl font-bold tracking-tight sm:text-3xl">
                {{ l(section.title) }}
            </component>
            <ProjectText :text="section.text" class="mt-5" />
        </div>
        <ProjectSection v-if="section.child" :section="section.child" :level="3" />
    </div>
</template>
