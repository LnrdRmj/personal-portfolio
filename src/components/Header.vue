<script setup lang="ts">

import WhiteArrow from '../assets/white_arrow.svg'
import { useTranslation } from "i18next-vue";
const { i18next } = useTranslation();

</script>

<template>
    <div class="bg-black flex justify-between text-white text-xl py-5 px-10">
        <div>
            Iacopo Pazzaglia
        </div>
        <div class="flex justify-between items-center space-x-20">
            <select name="" id="" class="bg-secondary text-white">
                <option value="en" @click="i18next.changeLanguage('en')">ENG</option>
                <option value="it" @click="i18next.changeLanguage('it')">IT</option>
            </select>
            <button> Work </button>
            <button> Servizi </button>
            <button> Chi sono </button>
            <button class="rounded-full border flex items-center border-primary py-1 px-4">
                <div class="mr-2">
                    Contattami
                </div>
                <div>
                    <img :src="WhiteArrow" alt="" srcset="">
                </div>
            </button>
        </div>
    </div>
</template>