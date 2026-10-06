<script setup lang="ts">
import { skillGroups } from '~/data/skills'

const { t } = useI18n()
</script>

<template>
    <section id="skills" class="container-page py-20">
        <h2 class="heading-prompt reveal">{{ t('skills.title') }}</h2>
        <p class="reveal mt-4 max-w-2xl text-lg text-muted">{{ t('skills.intro') }}</p>

        <div class="mt-10 grid gap-5 md:grid-cols-2">
            <article
                v-for="group in skillGroups"
                :key="group.id"
                class="card reveal p-6"
                :class="{ 'border-accent/60 bg-accent/[0.03]': group.id === 'ai' }"
            >
                <header class="flex items-start justify-between gap-4">
                    <div>
                        <p class="font-mono text-xs text-muted" aria-hidden="true">
                            ~/skills/{{ group.id }}
                        </p>
                        <h3 class="mt-1 text-lg font-semibold">{{ t(`skills.groups.${group.id}`) }}</h3>
                    </div>
                    <span
                        v-if="group.id === 'ai'"
                        class="rounded-md bg-accent px-2 py-0.5 font-mono text-xs font-semibold text-accent-fg"
                    >
                        {{ t('skills.new') }}
                    </span>
                </header>
                <ul class="mt-5 flex flex-wrap gap-2">
                    <li v-for="skill in group.items" :key="skill.id" class="chip text-sm text-fg">
                        <Icon :name="skill.icon" class="size-4 text-muted" />
                        {{ skill.label }}
                    </li>
                </ul>
            </article>
        </div>
    </section>
</template>
