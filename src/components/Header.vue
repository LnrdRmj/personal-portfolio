<script setup lang="ts">

import { ref, watch } from 'vue';
import WhiteArrow from '../assets/white_arrow.svg'
import { useTranslation } from "i18next-vue";
const { i18next } = useTranslation();

const language = ref<string>(i18next.language)

watch(language, () => {
    i18next.changeLanguage(language.value).then(console.log).catch(console.log)
})

</script>

<template>
    <div class="bg-black flex justify-between items-center text-white text-xl py-5 px-10">
        <div>
            Iacopo Pazzaglia
        </div>
        <div class="flex justify-between items-center space-x-20">
            <select name="" id="" class="bg-secondary text-white" v-model="language">
                <option value="it">IT</option>
                <option value="en">ENG</option>
            </select>
            <button> {{ $t('headerSection.work') }} </button>
            <button> {{ $t('headerSection.whoAmI') }} </button>
            <button> {{ $t('headerSection.services') }} </button>
            <button class="rounded-full border flex items-center border-primary py-1 px-4">
                <div class="mr-2">
                    {{ $t('contactMe') }}
                </div>
                <div>
                    <img :src="WhiteArrow" alt="" srcset="">
                </div>
            </button>
        </div>
    </div>
</template>