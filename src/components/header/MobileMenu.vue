<script setup lang="ts">
import ContactMe from "@components/common/ContactMe.vue";
import LangChangeAnimation from "@components/common/languageChangeAnimation/LangChangeAnimation.vue";
import LanguageSelect from "@components/common/LanguageSelect.vue";
import type { HeaderRoute } from "./headerRoutes";

defineProps<{
    routes: HeaderRoute[],
    visible: boolean,
}>()

const emit = defineEmits<{
    close: []
}>()
</script>

<template>
    <div class="lg:hidden text-white bg-black absolute top-full left-0 flex flex-col md:flex-row w-full h-screen md:h-fit z-10 py-12 px-8 transition-[opacity,transform] duration-250"
        :class="visible ? 'translate-y-0 opacity-100' : 'opacity-0 -translate-y-full pointer-events-none'">
        <div class="flex flex-col w-full md:w-1/3 border-t border-t-gray-500 md:border-none pt-20 px-6 md:pt-0 text-2xl">
            <div class="flex flex-col items-start space-y-4">
                <LanguageSelect />
                <button v-for="route of routes" :key="route.title" class="focus-ring"
                    @click="route.onClick(); emit('close')">
                    {{ route.title }}
                </button>
            </div>
        </div>
        <div class="bg-gray-500 h-px w-full md:h-auto md:w-px mt-16 mb-10 md:mt-0 md:mb-0"></div>
        <div class="flex flex-col px-6 md:w-2/3">
            <div class="text-2xl font-display font-bold">
                <LangChangeAnimation value="contactMe" />
            </div>
            <div class="mt-5 text-white/70">
                <LangChangeAnimation value="headerSection.menu.catchPhrase" />
            </div>
            <ContactMe class="w-fit mt-16" />
        </div>
    </div>
</template>
