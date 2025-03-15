<script setup lang="ts">
import { siteConfigs } from '@/data/config/config';
import CaptchaPhoneNumber from './CaptchaPhoneNumber.vue';

</script>

<template>
    <CaptchaPhoneNumber :phoneNumber="siteConfigs.contactInfo.phone"
        :phoneNumberNoSpace="siteConfigs.contactInfo.phoneNoSpace" />
</template>