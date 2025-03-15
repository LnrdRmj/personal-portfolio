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

</script>

<template>
    <div class="flex rounded-3xl overflow-hidden">
        <div class="w-1/3 h-full bg-orange-600">

        </div>
        <div class="flex-1 min-w-0 flex flex-col p-12 bg-primary">
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
                <div class="text-4xl font-bold uppercase mt-20">
                    Ehi,<br>
                    Conosciamoci
                </div>
                <div class="text-xl mt-10">
                    Prenota una consulenza gratuita e scopri come migliorare la tua presenza online. Scegli il metodo di
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
</template>