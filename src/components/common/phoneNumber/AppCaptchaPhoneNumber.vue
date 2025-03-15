<script setup lang="ts">
import { siteConfigs } from '@/data/config/config';
import CaptchaPhoneNumber from './CaptchaPhoneNumber.vue';

const emits = defineEmits<{
    success: [string]
}>()

</script>

<template>
    <CaptchaPhoneNumber :phoneNumber="siteConfigs.contactInfo.phone"
        :phoneNumberNoSpace="siteConfigs.contactInfo.phoneNoSpace" @success="emits('success', $event)" />
</template>