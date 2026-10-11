<script setup lang="ts">
const { t } = useI18n()
const paths = useSitePaths()
const route = useRoute()

const sections = ['about', 'projects', 'method', 'skills'] as const
const menuOpen = ref(false)

watch(
    () => route.fullPath,
    () => (menuOpen.value = false),
)
</script>

<template>
    <header class="sticky top-0 z-40 border-b border-border bg-bg">
        <div class="container-page flex h-18 items-center gap-3 sm:gap-6">
            <NuxtLink :to="paths.home()" class="text-[1.2rem] font-semibold tracking-[-0.04em] whitespace-nowrap sm:text-[1.35rem]" :aria-label="t('nav.home')">
                leonardo ramaj
            </NuxtLink>

            <nav :aria-label="t('nav.label')" class="ml-auto hidden md:block">
                <ul class="flex items-center gap-1 text-[0.95rem]">
                    <li v-for="id in sections" :key="id">
                        <NuxtLink :to="paths.section(id)" class="px-3 py-2 text-muted transition-colors hover:text-fg">
                            {{ t(`nav.${id}`) }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="ml-auto flex items-center gap-1 md:ml-0">
                <LangSwitch />
                <ThemeToggle class="hidden sm:inline-flex" />
                <!-- Visible at every width: the primary action has to be on the first phone screen. -->
                <NuxtLink :to="paths.section('contact')" class="btn-primary ml-1 px-3 py-2.5 text-sm whitespace-nowrap sm:ml-2 sm:px-5 sm:text-[0.95rem]">
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

        <nav v-show="menuOpen" id="mobile-nav" :aria-label="t('nav.label')" class="border-t border-border md:hidden">
            <ul class="container-page py-2">
                <li v-for="id in [...sections, 'contact']" :key="id" class="border-b border-border last:border-0">
                    <NuxtLink
                        :to="paths.section(id)"
                        class="flex items-center justify-between py-4 text-2xl font-semibold tracking-[-0.02em]"
                        @click="menuOpen = false"
                    >
                        {{ t(`nav.${id}`) }}
                        <Icon name="lucide:arrow-right" class="size-5 text-muted" />
                    </NuxtLink>
                </li>
                <li class="flex items-center justify-between py-3 text-muted sm:hidden">
                    {{ t('theme.label') }}
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    </header>
</template>
