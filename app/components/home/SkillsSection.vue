<script setup lang="ts">
import { skillGroups } from '~/data/skills'

const { t } = useI18n()
</script>

<template>
    <section id="skills" class="container-page py-20 lg:py-28">
        <div class="grid-module items-end gap-y-5 border-t border-fg pt-8">
            <h2 class="heading-section col-span-4 sm:col-span-8 lg:col-span-6">{{ t('skills.title') }}</h2>
            <p class="col-span-4 text-lg leading-relaxed text-muted sm:col-span-6 lg:col-span-4 lg:col-start-9">
                {{ t('skills.intro') }}
            </p>
        </div>

        <div class="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            <div
                v-for="group in skillGroups"
                :key="group.id"
                :class="group.id === 'ai' ? 'bg-yellow px-5 pt-5 pb-3 text-yellow-fg' : ''"
            >
                <h3 class="border-b border-current pb-3 text-lg font-bold tracking-[-0.01em]">
                    {{ t(`skills.groups.${group.id}`) }}
                </h3>
                <ul>
                    <li
                        v-for="skill in group.items"
                        :key="skill.id"
                        class="flex items-center gap-3 border-b py-2.5 last:border-0"
                        :class="group.id === 'ai' ? 'border-yellow-fg/25' : 'border-border'"
                    >
                        <Icon :name="skill.icon" class="size-4 shrink-0 opacity-70" />
                        {{ skill.label }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
