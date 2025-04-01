<script setup lang="ts">
import { siteConfigs } from "@/data/config/config";
import LangChangeAnimation from "../languageChangeAnimation/LangChangeAnimation.vue";
import AppCaptchaPhoneNumber from "../phoneNumber/AppCaptchaPhoneNumber.vue";
import ChooseContactModal from "../chooseContactModal/ChooseContactModal.vue";
import { ref } from "vue";

const openContactModal = ref(false)

</script>

<template>
    <div class="flex flex-col standard-responsive-padding my-20 md:my-52 max-w-[1000px]">
        <div class="max-w-full bg-gray-400 h-[2px] shrink-0 mb-5" />
        <div class="uppercase text-2xl mb-16">{{ $t("contactsSection.title") }}</div>
        <div class="flex flex-col">
            <div class="text-4xl sm:text-5xl lg:text-6xl font-semibold">
                <LangChangeAnimation value="contactMe" />
            </div>
            <div class="text-lg leading-4 mt-5">
                <LangChangeAnimation value="underTitle.phrase1" /><br />
                <LangChangeAnimation value="underTitle.phrase2" />
            </div>
        </div>
        <div class="flex space-x-10 mt-10">
            <div class="flex">
                <!-- <img class="h-4 mr-2" :src="WhatsappIcon" alt="" /> -->
                <div class="flex flex-col font-semibold">
                    <div class="text-xl">Whatsapp</div>
                    <AppCaptchaPhoneNumber />
                </div>
            </div>
            <div class="max-h-full w-[1px] bg-gray-300 shrink-0" />
            <div class="flex">
                <!-- <img class="h-4 mr-2" :src="EmailIcon" alt="" /> -->
                <div class="flex flex-col font-semibold">
                    <div class="text-xl">Email</div>
                    <div>
                        <a :href="`mailto:${siteConfigs.contactInfo.email}`">{{ siteConfigs.contactInfo.email }}</a>
                    </div>
                </div>
            </div>
        </div>
        <button class="px-8 w-fit rounded-lg mt-20 bg-secondary py-3 text-white text-base lg:text-xl font-semibold
            hover:bg-blue-600 transition-colors" @click="openContactModal = true">
            <LangChangeAnimation value="contactsSection.bookConsultation" />
        </button>
        <ChooseContactModal v-model:open="openContactModal" />
    </div>
</template>