<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { siteConfigs } from '@/data/config/config';
import { useRecaptcha } from '@/composables/useRecaptcha';

const emits = defineEmits<{
    success: [string]
}>()

const captchaContainer = useTemplateRef('captchaContainer')
const { isValid } = useRecaptcha(captchaContainer, (token) => emits('success', token))
</script>

<template>
    <Transition name="fade" mode="out-in">
        <a v-if="isValid || !siteConfigs.captchaForPhoneNumber" class="focus-ring"
            :href="`https://wa.me/${siteConfigs.contactInfo.phoneNoSpace}`" target="_blank" rel="noopener">
            {{ siteConfigs.contactInfo.phone }}
        </a>
        <div v-else ref="captchaContainer"></div>
    </Transition>
</template>
