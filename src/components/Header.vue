<script setup lang="ts">
import { useTranslation } from "i18next-vue";
import { ref, watch } from "vue";
import ContactMe from "./common/ContactMe.vue";
import LangChangeAnimation from "./common/languageChangeAnimation/LangChangeAnimation.vue";
import { LANDING } from "@/routes/routeNames";
import { siteConfigs } from "@/data/config/config";
const { i18next } = useTranslation();

export type HeaderRoutes = {
    title: string,
    onClick: () => void
}

defineProps<{
    routes: HeaderRoutes[]
}>()

const language = ref<string>(i18next.language);

watch(language, () => {
    i18next.changeLanguage(language.value).then(console.log).catch(console.log);
});

const visibility = ref(false);
</script>

<template>
    <div class="flex flex-col relative">
        <div
            class="bg-black flex justify-between items-center text-white text-base py-5 standard-responsive-padding relative z-20 h-full">
            <RouterLink :to="{ name: LANDING }">{{ siteConfigs.name }}</RouterLink>
            <div class="hidden lg:flex lg:justify-between lg:items-center lg:space-x-20">
                <select name="" id="" class="bg-secondary text-white" v-model="language">
                    <option value="it">IT</option>
                    <option value="en">ENG</option>
                </select>
                <button v-for="route of routes" @click="route.onClick">
                    {{ route.title }}
                </button>
                <ContactMe />
            </div>
            <div class="lg:hidden text-white">
                <button @click="visibility = !visibility">Menu</button>
            </div>
        </div>

        <div class="lg:hidden text-white bg-black absolute top-full left-0 flex flex-col md:flex-row w-full h-screen md:h-fit z-10 py-12 px-8 transition-[opacity,transform] duration-250"
            :class="visibility ? 'translate-y-0 opacity-100' : 'opacity-0 -translate-y-full'">
            <div
                class="flex flex-col w-full md:w-1/3 border-t border-t-gray-500 md:border-none pt-20 px-6 md:pt-0 text-2xl">
                <div class="flex flex-col items-start space-y-4">
                    <select name="" id="" class="bg-secondary text-white" v-model="language">
                        <option value="it">IT</option>
                        <option value="en">ENG</option>
                    </select>
                    <button v-for="route of routes" @click="route.onClick(); visibility = false">
                        {{ route.title }}
                    </button>
                </div>
            </div>
            <div class="bg-gray-500 h-px w-full md:h-auto md:w-px mt-16 mb-10 md:mt-0 md:mb-0"></div>
            <div class="flex flex-col px-6 md:w-2/3">
                <div class="text-2xl">
                    <LangChangeAnimation value="contactMe" />
                </div>
                <div class="mt-5">
                    <LangChangeAnimation value="headerSection.menu.catchPhrase" />
                </div>
                <ContactMe class="w-fit mt-16" />
            </div>
        </div>
    </div>
</template>
