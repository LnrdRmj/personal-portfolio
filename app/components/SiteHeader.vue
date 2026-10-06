<script setup lang="ts">
const { t } = useI18n()
const paths = useSitePaths()
const route = useRoute()

const sections = ['about', 'skills', 'projects', 'contact'] as const
const menuOpen = ref(false)

watch(
    () => route.fullPath,
    () => (menuOpen.value = false),
)
</script>

<template>
    <header class="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
        <div class="container-page flex h-16 items-center gap-3">
            <NuxtLink
                :to="paths.home()"
                class="font-mono text-sm font-bold whitespace-nowrap"
                :aria-label="t('nav.home')"
            >
                <span class="text-accent">~/</span>leonardo-ramaj
            </NuxtLink>

            <nav :aria-label="t('nav.label')" class="ml-auto hidden md:block">
                <ul class="flex items-center font-mono text-sm">
                    <li v-for="id in sections" :key="id">
                        <NuxtLink
                            :to="paths.section(id)"
                            class="rounded-md px-3 py-2 text-muted transition-colors hover:text-fg"
                        >
                            <span class="text-accent">#</span>{{ t(`nav.${id}`) }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="ml-auto flex items-center gap-2 md:ml-3">
                <LangSwitch />
                <ThemeToggle />
                <NuxtLink
                    :to="paths.section('contact')"
                    class="btn-primary hidden px-4 py-2 lg:inline-flex"
                >
                    {{ t('cta.contact') }}
                </NuxtLink>
                <button
                    type="button"
                    class="icon-btn md:hidden"
                    :aria-expanded="menuOpen"
                    aria-controls="mobile-nav"
                    :aria-label="menuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
                    @click="menuOpen = !menuOpen"
                >
                    <Icon :name="menuOpen ? 'lucide:x' : 'lucide:menu'" class="size-5" />
                </button>
            </div>
        </div>

        <nav
            v-show="menuOpen"
            id="mobile-nav"
            :aria-label="t('nav.label')"
            class="border-t border-border md:hidden"
        >
            <ul class="container-page flex flex-col py-3 font-mono">
                <li v-for="id in sections" :key="id">
                    <NuxtLink
                        :to="paths.section(id)"
                        class="block rounded-md py-3 text-muted hover:text-fg"
                        @click="menuOpen = false"
                    >
                        <span class="text-accent">#</span>{{ t(`nav.${id}`) }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
