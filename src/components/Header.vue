<script setup lang="ts">
import { useTranslation } from "i18next-vue";
import { ref, watch } from "vue";
import ContactMe from "./common/ContactMe.vue";
import LangChangeAnimation from "./common/languageChangeAnimation/LangChangeAnimation.vue";
const { i18next } = useTranslation();

const language = ref<string>(i18next.language);

watch(language, () => {
    i18next.changeLanguage(language.value).then(console.log).catch(console.log);
});

const visibility = ref(false);
</script>

<template>
    <div class="flex flex-col relative">
        <div class="bg-black flex justify-between items-center text-white text-xl py-5 px-10 relative z-20">
            <div>Iacopo Pazzaglia</div>
            <div class="hidden lg:flex lg:justify-between lg:items-center lg:space-x-20">
                <select name="" id="" class="bg-secondary text-white" v-model="language">
                    <option value="it">IT</option>
                    <option value="en">ENG</option>
                </select>
                <button>
                    <LangChangeAnimation value="headerSection.work" />
                </button>
                <button>
                    <LangChangeAnimation value="headerSection.whoAmI" />
                </button>
                <button>
                    <LangChangeAnimation value="headerSection.services" />
                </button>
                <ContactMe />
            </div>
            <div class="lg:hidden text-white">
                <button @click="visibility = !visibility">Menu</button>
            </div>
        </div>
        <div class="lg:hidden text-white bg-black absolute top-full left-0 flex flex-col md:flex-row w-full h-screen md:h-fit z-10 py-12 px-8 transition-[opacity,transform] duration-[250ms]"
            :class="visibility ? 'translate-y-0 opacity-100' : 'opacity-0 -translate-y-full'">
            <div
                class="flex flex-col w-full md:w-1/3 border-t border-t-gray-500 md:border-none pt-20 px-6 md:pt-0 text-2xl">
                <div class="flex flex-col items-start space-y-4">
                    <button>{{ $t("headerSection.work") }}</button>
                    <button>{{ $t("headerSection.services") }}</button>
                    <button>{{ $t("headerSection.whoAmI") }}</button>
                    <button>{{ $t("headerSection.contacts") }}</button>
                </div>
            </div>
            <div class="bg-gray-500 h-[1px] w-full md:h-auto md:w-[1px] mt-16 mb-10 md:mt-0 md:mb-0"></div>
            <div class="flex flex-col px-6 md:w-2/3">
                <div class="text-2xl">{{ $t("contactMe") }}!</div>
                <div class="mt-5">
                    {{ $t("headerSection.menu.catchPhrase") }}
                </div>
                <ContactMe class="w-fit mt-16" />
            </div>
        </div>
    </div>
</template>
