<script setup lang="ts">
import { siteConfigs } from "@/data/config/config";
import EmailIcon from "../../../assets/emailicon.png";
import WhatsappIcon from "../../../assets/whatsappicon.png";
import LangChangeAnimation from "../languageChangeAnimation/LangChangeAnimation.vue";
import { onMounted, ref } from "vue";

onMounted(() => {
    // @ts-ignore
    grecaptcha?.render('recap-container', {
        sitekey: '6LeCU_UqAAAAADWDz8xukf9Oz7_pU27yLV6yrvvo'
    })
})

const globalRecaptchaCallbackFuncName = "recaptchaResponse"
const recaptchaIsValid = ref(false)
// Expose the function above globally for recaptcha button
// @ts-ignore
window[globalRecaptchaCallbackFuncName] = function successfullRecaptcharResponse(responseToken: string) {
    if (responseToken != null && typeof responseToken === "string")
        recaptchaIsValid.value = true
}
</script>

<template>
    <div class="flex flex-col standard-responsive-padding lg:px-36 my-20 md:my-52">
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
        <div class="mt-10">
            <div class="flex">
                <img class="h-4 mt-[5px] mr-2" :src="WhatsappIcon" alt="" />
                <div class="flex flex-col font-semibold">
                    <div class="text-lg">Whatsapp</div>
                    <div>
                        <Transition name="fade" mode="out-in">
                            <a v-if="recaptchaIsValid" :href="`https://wa.me/${siteConfigs.contactInfo.phoneNoSpace}`"
                                target="_blank">
                                {{ siteConfigs.contactInfo.phone }}
                            </a>
                            <div v-else id="recap-container" :data-callback="globalRecaptchaCallbackFuncName">

                            </div>
                        </Transition>
                    </div>
                </div>
            </div>
            <div class="flex mt-6">
                <img class="h-4 mt-[5px] mr-2" :src="EmailIcon" alt="" />
                <div class="flex flex-col font-semibold">
                    <div class="text-lg">Email</div>
                    <div>
                        <a :href="`mailto:${siteConfigs.contactInfo.email}`">{{ siteConfigs.contactInfo.email }}</a>
                    </div>
                </div>
            </div>
        </div>
        <a href="mailto:leonardo.ra14@icloud.com" class="px-8 w-fit rounded-lg mt-20 bg-secondary py-3 text-white text-base lg:text-xl font-semibold
            hover:bg-blue-600 transition-colors">
            <LangChangeAnimation value="contactsSection.bookConsultation" />
        </a>
    </div>
</template>