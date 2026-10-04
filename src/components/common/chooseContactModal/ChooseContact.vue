<script setup lang="ts">
import { siteConfigs } from '@/data/config/config';
import OutlinedButton from '../buttons/OutlinedButton.vue';
import X from '../icons/x.vue';
import LangChangeAnimation from '../languageChangeAnimation/LangChangeAnimation.vue';
import ContactMethod from './ContactMethod.vue';
import CaptchaPhoneNumber from '../phoneNumber/CaptchaPhoneNumber.vue';
import AppButton from '../buttons/AppButton.vue';
import { ref } from 'vue';

const emits = defineEmits<{
    close: []
}>()

const phoneCaptchaSuccess = ref(!siteConfigs.captchaForPhoneNumber)
function openWhatsappContact() {
    if (!phoneCaptchaSuccess.value) return
    window.open(`https://wa.me/${siteConfigs.contactInfo.phoneNoSpace}`, '_blank')
}

function openEmail() {
    window.open(`mailto:${siteConfigs.contactInfo.email}`, '_blank')
}

const barClassList = 'w-full md:w-1/3 h-30 md:h-full'
const contentClassList = 'flex-1 md:min-w-0 min-h-0'

</script>

<template>
    <div class="relative">

        <div
            class="absolute top-0 left-0 size-full flex flex-col md:flex-row rounded-3xl overflow-hidden -z-10 animate-bg-zoom">
            <div class="bg-orange-600" :class="[barClassList]">

            </div>
            <div class="bg-primary" :class="[contentClassList]">

            </div>
        </div>

        <div class="flex flex-col md:flex-row rounded-3xl overflow-hidden z-10">
            <div class="" :class="[barClassList]">

            </div>
            <div class="p-5 md:p-12" :class="[contentClassList]">
                <div class="flex flex-col size-full animate-little-slidefromleft">
                    <div class="w-full flex justify-between">
                        <div>
                            <!-- Logo or (name and surname) -->
                        </div>
                        <OutlinedButton @click="emits('close')">
                            <LangChangeAnimation value="close" class="capitalize text-xl" />
                            <template v-slot:icon>
                                <X class="stroke-black group-hover:stroke-white"></X>
                            </template>
                        </OutlinedButton>
                    </div>
                    <div class="flex flex-col">
                        <div class="text-2xl md:text-4xl font-bold uppercase mt-10 md:mt-20">
                            <LangChangeAnimation value="contactModal.letsMeet" />
                        </div>
                        <div class="text-xl mt-5 md:mt-10">
                            <LangChangeAnimation value="contactModal.bookConsultation" class="whitespace-pre-line" />
                        </div>
                    </div>
                    <div class="flex flex-col space-y-10">
                        <div></div>
                        <ContactMethod name="Whatsapp" :contact="siteConfigs.contactInfo.phone"
                            :openContact="openWhatsappContact">
                            <template v-slot:contact>
                                <CaptchaPhoneNumber @success="phoneCaptchaSuccess = true" />
                            </template>
                            <template v-slot:button>
                                <!-- Desktop: the captcha lives in the contact slot, only the CTA is here -->
                                <AppButton class="h-12 text-xl hidden md:flex" :disabled="!phoneCaptchaSuccess">
                                    <LangChangeAnimation value="contactMe" />
                                </AppButton>
                                <!-- Mobile: the contact slot is hidden, the captcha replaces the CTA until solved -->
                                <div class="md:hidden">
                                    <Transition name="fade" mode="out-in">
                                        <CaptchaPhoneNumber v-if="!phoneCaptchaSuccess"
                                            @success="phoneCaptchaSuccess = true" />
                                        <AppButton v-else class="h-12 text-xl">
                                            <LangChangeAnimation value="contactMe" />
                                        </AppButton>
                                    </Transition>
                                </div>
                            </template>
                        </ContactMethod>
                        <ContactMethod name="Email" :contact="siteConfigs.contactInfo.email" :openContact="openEmail" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
:root {
    --modal-animation-duration: .3s;
}

@keyframes little-slidefromleft {
    0% {
        transform: translateX(-100px);
    }

    100% {
        transform: translateX(0);
    }
}

.animate-little-slidefromleft {
    animation: little-slidefromleft var(--modal-animation-duration);
}

@keyframes bg-zoom {
    0% {
        transform: scale(0.8);
    }

    100% {
        transform: scale(1);
    }
}

.animate-bg-zoom {
    animation: bg-zoom var(--modal-animation-duration);
}
</style>