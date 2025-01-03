<script setup lang="ts">
import { Work } from '../../../data/works/works';
import { getSelectedLanguageFromI18nValue } from '../../../i18n/i18n';
import HeaderCard from './HeaderCard.vue';

const props = defineProps<{
    project: Work
}>()
</script>

<template>
    <div class="size-full max-w-[1920px]">
        <div class="w-full h-full">
            <img :src="project.bannerPath" alt="" class="size-full object-cover">
        </div>
        <div class="flex px-20 py-10">
            <HeaderCard :title="project.clientName" :description="getSelectedLanguageFromI18nValue(project.description)"
                class="w-1/2" />
            <div class="w-1/2 flex">
                <HeaderCard :title="$t('position')" description="Co-Owner / Creative Director" class="w-1/2" />
                <HeaderCard :title="$t('periodOfTime')" description="2021 - Ora" class="w-1/2" />
            </div>
        </div>
    </div>
</template>