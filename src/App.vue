<script setup lang="ts">
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/landingPage/footer/Footer.vue';
import { computed } from 'vue';

const route = useRoute()
const noRouteAnimation = computed(() => route.query['noRouteAnimation'] === null)

</script>

<template>
    <div class="flex flex-col">
        <div class="fixed w-full z-20 h-16">
            <Header class="w-full h-full"></Header>
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
