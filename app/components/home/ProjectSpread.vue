<script setup lang="ts">
import type { Project } from '#shared/types/content'
import { getSkill } from '~/data/skills'

const props = defineProps<{ project: Project; index: number }>()

const { t } = useI18n()
const l = useLocalized()
const paths = useSitePaths()

// Spreads differ on purpose, like brochure pages: a lead project set inside its field, then a
// wide spread and a compact one. Field colours match each project page.
const variant = computed(() => (['lead', 'wide', 'compact'] as const)[Math.min(props.index, 2)])
const tone = computed(() => ['bg-yellow text-yellow-fg', 'bg-blue text-blue-fg', 'bg-ink text-ink-fg'][props.index % 3])
const media = computed(() => props.project.cover ?? props.project.banner)
const square = computed(() => media.value.type === 'image' && media.value.width === media.value.height)
const stack = computed(() =>
    props.project.stack
        .map(getSkill)
        .filter((skill) => !!skill)
        .map((skill) => skill.label)
        .join(', '),
)
const specs = computed(() => [
    { label: t('project.role'), value: l(props.project.role), numerals: false },
    { label: t('project.period'), value: formatPeriod(props.project.period, t('projects.present')), numerals: true },
    { label: t('project.stack'), value: stack.value, numerals: false },
])
</script>

<template>
    <!-- Lead: the whole spread is the field, with the copy set on it. -->
    <article
        v-if="variant === 'lead'"
        class="grid-module items-center gap-y-8 p-5 sm:p-10 lg:p-12"
        :class="tone"
        :style="{ viewTransitionName: `field-${project.slug}` }"
    >
        <NuxtLink
            :to="paths.project(project.slug)"
            tabindex="-1"
            aria-hidden="true"
            class="group col-span-4 block overflow-hidden sm:col-span-8 lg:col-span-7"
            :class="square ? 'aspect-[4/3.6]' : ''"
        >
            <ProjectMedia :media="media" sizes="(min-width: 1024px) 720px, 100vw" bare class="size-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.025]" />
        </NuxtLink>
        <div class="col-span-4 sm:col-span-8 lg:col-span-5 lg:pl-4">
            <h3 class="display">{{ project.client }}</h3>
            <p class="mt-6 text-xl leading-snug">{{ l(project.summary) }}</p>
            <dl class="mt-8 border-b border-current/30 text-[0.95rem]">
                <div v-for="spec in specs" :key="spec.label" class="grid grid-cols-[6rem_1fr] gap-4 border-t border-current/30 py-3">
                    <dt class="opacity-75">{{ spec.label }}</dt>
                    <dd class="font-semibold" :class="{ numerals: spec.numerals }">{{ spec.value }}</dd>
                </div>
            </dl>
            <NuxtLink :to="paths.project(project.slug)" class="group/link btn mt-8 bg-ink text-ink-fg hover:bg-accent hover:text-accent-fg">
                {{ t('projects.view') }}
                <span class="sr-only">: {{ project.client }}</span>
                <Icon name="lucide:arrow-right" class="size-4 transition-transform group-hover/link:translate-x-1" />
            </NuxtLink>
        </div>
    </article>

    <!-- Wide and compact: a field beside the copy, at different proportions. -->
    <article v-else class="grid-module gap-y-8" :class="variant === 'wide' ? 'items-end' : 'items-start'">
        <NuxtLink
            :to="paths.project(project.slug)"
            tabindex="-1"
            aria-hidden="true"
            class="group col-span-4 block p-5 sm:col-span-8 sm:p-8"
            :class="[tone, variant === 'wide' ? 'lg:order-2 lg:col-span-8 lg:col-start-5 lg:p-10' : 'lg:col-span-5 lg:p-8']"
            :style="{ viewTransitionName: `field-${project.slug}` }"
        >
            <div class="overflow-hidden">
                <ProjectMedia
                    :media="media"
                    :sizes="variant === 'wide' ? '(min-width: 1024px) 800px, 100vw' : '(min-width: 1024px) 480px, 100vw'"
                    bare
                    class="size-full transition-transform duration-700 ease-out-expo group-hover:scale-[1.025]"
                />
            </div>
        </NuxtLink>

        <div class="col-span-4 sm:col-span-8" :class="variant === 'wide' ? 'lg:order-1 lg:col-span-4' : 'lg:col-span-6 lg:col-start-7'">
            <h3 class="heading-section">{{ project.client }}</h3>
            <p class="mt-5 text-lg leading-relaxed text-muted" :class="{ 'max-w-[40ch]': variant === 'compact' }">
                {{ l(project.summary) }}
            </p>
            <dl
                class="mt-8 border-b border-border text-[0.95rem]"
                :class="{ 'sm:grid sm:grid-cols-3 sm:border-t sm:border-b-0 sm:border-fg': variant === 'compact' }"
            >
                <div
                    v-for="spec in specs"
                    :key="spec.label"
                    class="grid grid-cols-[6rem_1fr] gap-4 border-t border-border py-3"
                    :class="{ 'sm:block sm:border-0 sm:pr-4': variant === 'compact' }"
                >
                    <dt class="text-muted">{{ spec.label }}</dt>
                    <dd class="font-semibold" :class="{ numerals: spec.numerals, 'sm:mt-1': variant === 'compact' }">{{ spec.value }}</dd>
                </div>
            </dl>
            <NuxtLink
                :to="paths.project(project.slug)"
                class="group/link mt-8 inline-flex items-center gap-2 border-b-2 border-fg pb-1 font-semibold transition-colors hover:border-accent hover:text-accent-ink"
            >
                {{ t('projects.view') }}
                <span class="sr-only">: {{ project.client }}</span>
                <Icon name="lucide:arrow-right" class="size-4 transition-transform group-hover/link:translate-x-1" />
            </NuxtLink>
        </div>
    </article>
</template>
