<script setup lang="ts">
import type { Project } from '#shared/types/content'
import { getSkill } from '~/data/skills'

const props = defineProps<{ project: Project }>()

const { t } = useI18n()
const l = useLocalized()
const paths = useSitePaths()

const stack = computed(() => props.project.stack.map(getSkill).filter((skill) => !!skill))
</script>

<template>
    <article class="group card reveal overflow-hidden transition-colors hover:border-accent">
        <NuxtLink :to="paths.project(project.slug)" class="flex h-full flex-col">
            <div class="aspect-[8/3] overflow-hidden border-b border-border bg-surface-2">
                <!-- Same view-transition name as the project page banner, so it morphs on navigation. -->
                <ResponsiveImage
                    :media="project.banner"
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                    :transition-name="`banner-${project.slug}`"
                    class="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>
            <div class="flex flex-1 flex-col p-5">
                <p class="font-mono text-xs text-muted">
                    {{ formatPeriod(project.period, t('projects.present')) }} · {{ l(project.role) }}
                </p>
                <h3 class="mt-2 font-mono text-xl font-bold">{{ project.client }}</h3>
                <p class="mt-2 flex-1 text-sm leading-relaxed text-muted">{{ l(project.summary) }}</p>
                <ul class="mt-4 flex flex-wrap gap-1.5">
                    <li v-for="skill in stack" :key="skill.id" class="chip">
                        <Icon :name="skill.icon" class="size-3.5" />
                        {{ skill.label }}
                    </li>
                </ul>
                <span class="mt-5 inline-flex items-center gap-1.5 font-mono text-sm text-accent">
                    {{ t('projects.view') }}
                    <Icon
                        name="lucide:arrow-right"
                        class="size-4 transition-transform group-hover:translate-x-1"
                    />
                </span>
            </div>
        </NuxtLink>
    </article>
</template>
