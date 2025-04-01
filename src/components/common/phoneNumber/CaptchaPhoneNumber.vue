<script setup lang="ts">
import { siteConfigs } from '@/data/config/config';
import { createRandomString } from '@/services/strings/stringUtils';
import { onMounted, ref, useTemplateRef } from 'vue';

const emits = defineEmits<{
    success: [string]
}>()

defineProps<{
    phoneNumber: string,
    phoneNumberNoSpace: string,
}>()

const captchaContainer = useTemplateRef('captchaContainer')

onMounted(() => {
    if (captchaContainer.value)
        // @ts-ignore
        grecaptcha?.render(captchaContainer.value, {
            sitekey: '6LeCU_UqAAAAADWDz8xukf9Oz7_pU27yLV6yrvvo'
        })
})


const globalRecaptchaCallbackFuncName = createRandomString(10)
const recaptchaIsValid = ref(false)
// Expose the function above globally for recaptcha button
// @ts-ignore
window[globalRecaptchaCallbackFuncName] = function successfullRecaptcharResponse(responseToken: string) {
    if (responseToken != null && typeof responseToken === "string") {
        recaptchaIsValid.value = true
        emits('success', responseToken)
    }
}
</script>

<template>
    <Transition name="fade" mode="out-in">
        <a v-if="recaptchaIsValid || !siteConfigs.captchaForPhoneNumber" :href="`https://wa.me/${phoneNumberNoSpace}`"
            target="_blank">
            {{ phoneNumber }}
        </a>
        <div v-else :data-callback="globalRecaptchaCallbackFuncName" ref="captchaContainer"></div>
    </Transition>
</template>