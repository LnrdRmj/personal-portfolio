<script setup lang="ts">

import { useTranslation } from "i18next-vue";
import { ref, watch } from 'vue';
import ContactMe from './common/ContactMe.vue';
const { i18next } = useTranslation();

const language = ref<string>(i18next.language)

watch(language, () => {
    i18next.changeLanguage(language.value).then(console.log).catch(console.log)
})

const visibility = ref(false)

</script>

<template>
    <div class="flex flex-col">
        <div class="bg-black flex justify-between items-center text-white text-xl py-5 px-10 relative z-20">
            <div>
                Leonardo Ramaj
            </div>
            <div class="hidden lg:flex lg:justify-between lg:items-center lg:space-x-20">
                <select name="" id="" class="bg-secondary text-white" v-model="language">
                    <option value="it">IT</option>
                    <option value="en">ENG</option>
                </select>
                <button> {{ $t('headerSection.work') }} </button>
                <button> {{ $t('headerSection.whoAmI') }} </button>
                <button> {{ $t('headerSection.services') }} </button>
                <ContactMe />
            </div>
            <div class="lg:hidden text-white">
                <button @click="visibility = !visibility">Menu</button>
            </div>
        </div>
        <!-- <Transition name="to-from-up"> -->
        <div class="lg:hidden text-white w-full top-full left-0 bg-black z-10 p-12 -mt-[100%] transition-[opacity,transform] duration-[250ms]"
            :class="visibility ? 'translate-y-full opacity-100' : 'opacity-0 translate-y-0'">
            <div class="grid grid-cols-1 space-y-4 items-start 
                size-full 
                border-t border-t-gray-500 
                pt-16 px-6
                text-2xl">
                <button> {{ $t('headerSection.work') }} </button>
                <button> {{ $t('headerSection.services') }} </button>
                <button> {{ $t('headerSection.whoAmI') }} </button>
                <button> {{ $t('headerSection.contacts') }} </button>
            </div>
        </div>
        <!-- </Transition> -->
    </div>
</template>

<style scoped></style>