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
const next = projects[(projects.indexOf(project) + 1) % projects.length]!

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
defineOgImage('Terminal', {
    title: project.client,
    description: l(project.summary),
    path: `~/${t('project.breadcrumb')}/${project.slug}`,
})
</script>

<template>
    <article v-if="project">
        <header class="container-page pt-10 sm:pt-14">
            <nav aria-label="Breadcrumb" class="font-mono text-sm text-muted">
                <ol class="flex flex-wrap items-center gap-1.5">
                    <li><NuxtLink :to="paths.home()" class="text-accent hover:underline">~</NuxtLink></li>
                    <li aria-hidden="true">/</li>
                    <li>
                        <NuxtLink :to="paths.section('projects')" class="hover:text-fg hover:underline">
                            {{ t('project.breadcrumb') }}
                        </NuxtLink>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li aria-current="page" class="text-fg">{{ project.slug }}</li>
                </ol>
            </nav>

            <h1 class="mt-6 font-mono text-4xl font-bold tracking-tight sm:text-6xl">{{ project.client }}</h1>
            <p class="mt-5 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{{ l(project.summary) }}</p>

            <dl class="mt-10 grid gap-4 sm:grid-cols-3">
                <div class="card p-5">
                    <dt class="font-mono text-xs text-muted uppercase">{{ t('project.role') }}</dt>
                    <dd class="mt-2 font-medium">{{ l(project.role) }}</dd>
                </div>
                <div class="card p-5">
                    <dt class="font-mono text-xs text-muted uppercase">{{ t('project.period') }}</dt>
                    <dd class="mt-2 font-medium">{{ formatPeriod(project.period, t('projects.present')) }}</dd>
                </div>
                <div class="card p-5">
                    <dt class="font-mono text-xs text-muted uppercase">{{ t('project.stack') }}</dt>
                    <dd class="mt-2 flex flex-wrap gap-1.5">
                        <span v-for="skill in stack" :key="skill.id" class="chip">
                            <Icon :name="skill.icon" class="size-3.5" />
                            {{ skill.label }}
                        </span>
                    </dd>
                </div>
            </dl>
        </header>

        <div class="container-page mt-10">
            <ProjectMedia :media="project.banner" eager :transition-name="`banner-${project.slug}`" />
        </div>

        <div class="container-page mt-20 space-y-24">
            <ProjectSection
                v-for="(section, index) in project.sections"
                :key="index"
                :section="section"
                class="reveal"
            />
        </div>

        <div class="container-page mt-24 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <section class="card flex flex-col justify-between gap-6 p-8 sm:p-10">
                <div>
                    <h2 class="font-mono text-2xl font-bold">{{ t('project.ctaTitle') }}</h2>
                    <p class="mt-3 text-lg text-muted">{{ t('project.ctaBody') }}</p>
                </div>
                <NuxtLink :to="paths.section('contact')" class="btn-primary self-start">
                    {{ t('cta.contact') }}
                    <Icon name="lucide:arrow-right" class="size-4" />
                </NuxtLink>
            </section>

            <NuxtLink
                :to="paths.project(next.slug)"
                class="group card flex flex-col justify-between gap-6 p-8 transition-colors hover:border-accent sm:p-10"
            >
                <span class="font-mono text-sm text-muted">{{ t('project.next') }}</span>
                <span class="flex items-center justify-between gap-4 font-mono text-2xl font-bold">
                    {{ next.client }}
                    <Icon name="lucide:arrow-up-right" class="size-6 text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
            </NuxtLink>
        </div>
    </article>
</template>
