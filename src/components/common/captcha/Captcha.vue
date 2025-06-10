<script setup lang="ts">
import { createRandomString } from '@/services/strings/stringUtils'
import { onMounted, ref, useTemplateRef } from 'vue'

const emits = defineEmits<{
    success: [string]
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
    <div :data-callback="globalRecaptchaCallbackFuncName" ref="captchaContainer">

    </div>
</template>