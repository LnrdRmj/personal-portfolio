<script setup lang="ts">
import { ref } from "vue";
import ContactMe from "@components/common/ContactMe.vue";
import LanguageSelect from "@components/common/LanguageSelect.vue";
import MobileMenu from "./MobileMenu.vue";
import { LANDING } from "@/routes/routeNames";
import { siteConfigs } from "@/data/config/config";
import type { HeaderRoute } from "./headerRoutes";

defineProps<{
    routes: HeaderRoute[]
}>()

const menuVisible = ref(false);
</script>

<template>
    <div class="flex flex-col relative">
        <nav
            class="bg-black flex justify-between items-center text-white text-base py-5 standard-responsive-padding relative z-20 h-full">
            <RouterLink :to="{ name: LANDING }" class="font-display font-bold focus-ring">
                {{ siteConfigs.name }}
            </RouterLink>
            <div class="hidden lg:flex lg:justify-between lg:items-center lg:space-x-20">
                <LanguageSelect />
                <button v-for="route of routes" :key="route.title" class="focus-ring" @click="route.onClick">
                    {{ route.title }}
                </button>
                <ContactMe />
            </div>
            <div class="lg:hidden text-white">
                <button class="focus-ring" :aria-expanded="menuVisible" @click="menuVisible = !menuVisible">
                    Menu
                </button>
            </div>
        </nav>

        <MobileMenu :routes="routes" :visible="menuVisible" @close="menuVisible = false" />
    </div>
</template>
