<script setup lang="ts">
import { getProject, projects } from '~/data/projects'
import { getSkill } from '~/data/skills'

// Keep in sync with shared/utils/routes.ts.
definePageMeta({
    i18n: { paths: { it: '/progetti/[slug]', en: '/projects/[slug]' } },
})

const route = useRoute()
const site = useSiteConfig()
const { t } = useI18n()
const l = useLocalized()
const paths = useSitePaths()

const project = getProject(String(route.params.slug))
if (!project) {
    throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true })
}

const stack = project.stack.map(getSkill).filter((skill) => !!skill)
const index = projects.indexOf(project)
const next = projects[(index + 1) % projects.length]!
// Same field colour as the project's spread on the home page, so the two read as one piece.
const tones = ['bg-yellow text-yellow-fg', 'bg-blue text-blue-fg', 'bg-ink text-ink-fg']
const tone = tones[index % 3]
const nextTone = tones[(index + 1) % 3]

useSeoMeta({
    title: () => `${project.client} · ${l(project.role)}`,
    description: () => l(project.summary),
})
useSchemaOrg([
    defineWebPage(),
    defineBreadcrumb({
        itemListElement: [
            { name: 'Leonardo Ramaj', item: paths.home() },
            { name: t('projects.title'), item: `${paths.home()}#projects` },
            { name: project.client },
        ],
    }),
    {
        '@type': 'CreativeWork',
        name: project.client,
        description: l(project.summary),
        image: imageUrl(project.banner.src, imageWidths(project.banner.width).at(-1)!),
        dateCreated: String(project.period.start),
        creator: { '@id': `${site.url.replace(/\/$/, '')}/#identity` },
        keywords: stack.map((skill) => skill.label).join(', '),
    },
])
defineOgImage('Sheet', {
    title: project.client,
    description: l(project.summary),
    path: `ramaj.dev${paths.project(project.slug)}`,
})
</script>

<template>
    <article v-if="project">
        <header class="container-page pt-10 sm:pt-14">
            <nav aria-label="Breadcrumb" class="text-[0.95rem] text-muted">
                <ol class="flex flex-wrap items-center gap-2">
                    <li><NuxtLink :to="paths.home()" class="link">Leonardo Ramaj</NuxtLink></li>
                    <li aria-hidden="true">/</li>
                    <li><NuxtLink :to="paths.section('projects')" class="link">{{ t('project.breadcrumb') }}</NuxtLink></li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" class="text-fg">{{ project.client }}</li>
                </ol>
            </nav>

            <div class="grid-module mt-10 gap-y-8 lg:mt-14">
                <h1 class="display col-span-4 sm:col-span-8 lg:col-span-7">{{ project.client }}</h1>
                <p class="col-span-4 self-end text-lg leading-relaxed text-muted sm:col-span-8 sm:text-xl sm:leading-relaxed lg:col-span-5">
                    {{ l(project.summary) }}
                </p>
            </div>

            <dl class="mt-12 grid border-t border-fg text-[0.95rem] sm:grid-cols-3">
                <div class="border-b border-border py-4 sm:border-0 sm:pr-6">
                    <dt class="text-muted">{{ t('project.role') }}</dt>
                    <dd class="mt-1 font-semibold">{{ l(project.role) }}</dd>
                </div>
                <div class="border-b border-border py-4 sm:border-0 sm:pr-6">
                    <dt class="text-muted">{{ t('project.period') }}</dt>
                    <dd class="numerals mt-1 font-semibold">{{ formatPeriod(project.period, t('projects.present')) }}</dd>
                </div>
                <div class="py-4">
                    <dt class="text-muted">{{ t('project.stack') }}</dt>
                    <dd class="mt-1 font-semibold">{{ stack.map((skill) => skill.label).join(', ') }}</dd>
                </div>
            </dl>
        </header>

        <div class="container-page mt-4">
            <div class="p-6 sm:p-10 lg:p-14" :class="tone" :style="{ viewTransitionName: `field-${project.slug}` }">
                <ProjectMedia :media="project.banner" eager bare />
            </div>
        </div>

        <div class="container-page mt-20 space-y-24 lg:mt-28 lg:space-y-32">
            <ProjectSection v-for="(section, index) in project.sections" :key="index" :section="section" />
        </div>

        <div class="container-page mt-24 grid-module gap-y-6 lg:mt-32">
            <section class="col-span-4 flex flex-col justify-between gap-10 bg-accent p-8 text-accent-fg sm:col-span-8 sm:p-10 lg:col-span-7">
                <div>
                    <h2 class="heading-section">{{ t('project.ctaTitle') }}</h2>
                    <p class="mt-5 max-w-md text-lg leading-relaxed">{{ t('project.ctaBody') }}</p>
                </div>
                <NuxtLink :to="paths.section('contact')" class="btn self-start bg-accent-fg text-accent hover:bg-fg hover:text-bg">
                    {{ t('cta.contact') }}
                    <Icon name="lucide:arrow-right" class="size-4" />
                </NuxtLink>
            </section>

            <NuxtLink
                :to="paths.project(next.slug)"
                class="group col-span-4 flex items-end justify-between gap-6 p-8 sm:col-span-8 sm:p-10 lg:col-span-5"
                :class="nextTone"
            >
                <span class="heading-section">
                    <span class="font-normal">{{ t('project.next') }}:</span> {{ next.client }}
                </span>
                <Icon name="lucide:arrow-up-right" class="size-12 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </NuxtLink>
        </div>
    </article>
</template>
