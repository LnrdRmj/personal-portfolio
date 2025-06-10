<script setup lang="ts">
import { siteConfigs } from '@/data/config/config';
import OutlinedButton from '../buttons/OutlinedButton.vue';
import X from '../icons/x.vue';
import LangChangeAnimation from '../languageChangeAnimation/LangChangeAnimation.vue';
import ContactMethod from './ContactMethod.vue';
import AppCaptchaPhoneNumber from '../phoneNumber/AppCaptchaPhoneNumber.vue';
import AppButton from '../buttons/AppButton.vue';
import { ref } from 'vue';

const emits = defineEmits<{
    close: []
}>()

const phoneCaptchaSuccess = ref(!siteConfigs.captchaForPhoneNumber || false)
function openWhatsappContact() {
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
                            Ehi,<br>
                            Conosciamoci
                        </div>
                        <div class="text-xl mt-5 md:mt-10">
                            Prenota una consulenza gratuita e scopri come migliorare la tua presenza online. Scegli il
                            metodo di
                            contatto che preferisci e mettiamoci in contatto per fissare un appuntamento.
                        </div>
                    </div>
                    <div class="flex flex-col space-y-10">
                        <div></div>
                        <ContactMethod name="Whatsapp" :contact="siteConfigs.contactInfo.phone"
                            :openContact="openWhatsappContact">
                            <template v-slot:contact>
                                <AppCaptchaPhoneNumber @success="phoneCaptchaSuccess = true" />
                            </template>
                            <template v-slot:button>
                                <AppButton class="h-12 text-xl" :disabled="!phoneCaptchaSuccess">
                                    <LangChangeAnimation value="contactMe" />
                                </AppButton>
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