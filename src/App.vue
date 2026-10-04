<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { t } from 'i18next';
import Header from '@components/header/Header.vue';
import Footer from '@components/landingPage/footer/Footer.vue';
import { useCurrentLanguage } from '@/composables/useCurrentLanguage';
import type { HeaderRoute } from '@components/header/headerRoutes';

const route = useRoute()
const noRouteAnimation = computed(() => route.query['noRouteAnimation'] === null)

const language = useCurrentLanguage()

function scrollToSection(selector: string, block: ScrollLogicalPosition) {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block })
}

const headerRoutes = computed<HeaderRoute[]>(() => {
    void language.value; // re-resolve titles on language change
    return [
        {
            title: t('headerSection.services'),
            onClick: () => scrollToSection('#service-container', 'start'),
        },
        {
            title: t('headerSection.work'),
            onClick: () => scrollToSection('#works-container', 'center'),
        },
        {
            title: t('headerSection.whoAmI'),
            onClick: () => scrollToSection('#whoami-container', 'center'),
        },
    ]
})

</script>

<template>
    <div class="flex flex-col">
        <div class="fixed w-full z-20 h-16">
            <Header :routes="headerRoutes" class="w-full h-full"></Header>
        </div>
        <RouterView v-slot="{ Component }">
            <transition :name="noRouteAnimation ? 'no-animation' : 'fade'"
                :mode="noRouteAnimation ? 'default' : 'out-in'">
                <component :is="Component" class="w-full flex-1 min-h-0 mt-16 router-transition-duration" />
            </transition>
        </RouterView>
        <Footer />
    </div>
</template>
