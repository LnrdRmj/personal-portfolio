<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/landingPage/footer/Footer.vue';
</script>

<template>
    <div class="flex flex-col">
        <div class="fixed w-full z-20 h-20">
            <Header class="w-full h-full"></Header>
        </div>
        <RouterView v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" class="w-full flex-1 min-h-0 mt-20" />
            </transition>
        </RouterView>
        <Footer />
    </div>
</template>

<style>
.standard-responsive-padding {
    @apply px-10 sm:px-20 md:px-32;
}
</style>
