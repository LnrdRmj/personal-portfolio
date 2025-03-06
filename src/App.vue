<script setup lang="ts">
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/landingPage/footer/Footer.vue';
import { computed } from 'vue';
import { useTranslation } from 'i18next-vue';

const route = useRoute()
const noRouteAnimation = computed(() => route.query['noRouteAnimation'] === null)

const { t } = useTranslation()

const headerRoute = [
    {
        title: t('headerSection.services'),
        onClick: () => { document.querySelector('#service-container')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' }) },
    },
    {
        title: t('headerSection.work'),
        onClick: () => { document.querySelector('#works-container')?.scrollIntoView({ behavior: 'smooth', block: 'center' }) },
    },
    {
        title: t('headerSection.whoAmI'),
        onClick: () => { document.querySelector('#whoami-container')?.scrollIntoView({ behavior: 'smooth', block: 'center' }) },
    },
]

</script>

<template>
    <div class="flex flex-col size-full">
        <div class="w-full z-20 h-16">
            <Header :routes="headerRoute" class="w-full h-full"></Header>
        </div>
        <div class="flex flex-col min-h-0 flex-1 overflow-y-scroll">
            <div class="size-full bg-red-400">
                <RouterView v-slot="{ Component }">
                    <transition :name="noRouteAnimation ? 'no-animation' : 'fade'"
                        :mode="noRouteAnimation ? 'default' : 'out-in'">
                        <component :is="Component" class="w-full flex-1 min-h-0 router-transition-duration" />
                    </transition>
                </RouterView>
                <Footer />
            </div>
        </div>
    </div>
</template>
