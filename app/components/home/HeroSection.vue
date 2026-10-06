<script setup lang="ts">
import { profile } from '~/data/profile'
import { projects } from '~/data/projects'

const { t } = useI18n()
const l = useLocalized()
const paths = useSitePaths()
</script>

<template>
    <section class="container-page grid items-center gap-12 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.15fr_1fr]">
        <div>
            <p class="chip">
                <span class="size-2 rounded-full bg-accent" aria-hidden="true" />
                {{ t('hero.location') }}
            </p>

            <!-- The prompt is decoration; the h1 carries the real name and role. -->
            <p class="mt-8 font-mono text-muted" aria-hidden="true">
                <span class="text-accent">$</span> <span class="animate-type inline-block">whoami</span>
            </p>
            <h1 class="mt-3">
                <span class="block font-mono text-4xl font-bold tracking-tight sm:text-6xl">
                    {{ profile.name
                    }}<span class="animate-blink text-accent" aria-hidden="true">_</span>
                </span>
                <span class="mt-4 block text-xl font-medium text-fg sm:text-2xl">
                    {{ l(profile.jobTitle) }}
                </span>
            </h1>
            <p class="mt-6 max-w-xl text-lg leading-relaxed text-muted">{{ t('hero.lead') }}</p>

            <div class="mt-9 flex flex-wrap gap-3">
                <NuxtLink :to="paths.section('contact')" class="btn-primary">
                    {{ t('hero.primary') }}
                    <Icon name="lucide:arrow-right" class="size-4" />
                </NuxtLink>
                <NuxtLink :to="paths.section('projects')" class="btn-secondary">
                    {{ t('hero.secondary') }}
                </NuxtLink>
            </div>
        </div>

        <TerminalWindow title="leonardo@prato: ~" :aria-label="t('hero.terminalLabel')" role="region">
            <p>
                <span class="text-term-accent">~</span>
                <span class="text-term-muted"> $ </span>git log --oneline
            </p>
            <ul class="mt-3 space-y-1.5">
                <li
                    v-for="(project, index) in projects"
                    :key="project.slug"
                    class="animate-line"
                    :style="{ animationDelay: `${0.9 + index * 0.18}s` }"
                >
                    <NuxtLink
                        :to="paths.project(project.slug)"
                        class="group flex gap-3 rounded px-1 -mx-1 hover:bg-white/5"
                    >
                        <span class="shrink-0 text-term-string">{{ shortHash(project.slug) }}</span>
                        <span class="min-w-0">
                            <span class="text-term-link group-hover:underline">{{ project.slug }}:</span>
                            {{ l(project.role).toLowerCase() }}
                            <span class="text-term-muted">
                                ({{ formatPeriod(project.period, t('projects.present')) }})
                            </span>
                        </span>
                    </NuxtLink>
                </li>
            </ul>
            <p class="animate-line mt-3" :style="{ animationDelay: `${0.9 + projects.length * 0.18}s` }">
                <span class="text-term-accent">~</span>
                <span class="text-term-muted"> $ </span>
                <span class="animate-blink text-term-accent" aria-hidden="true">▋</span>
            </p>
        </TerminalWindow>
    </section>
</template>
