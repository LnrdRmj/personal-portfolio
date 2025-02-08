<script setup lang="ts">
import { Project } from '../../../data/projects/project';
import { getSelectedLanguageFromI18nValue } from '../../../i18n/i18n';
import HeaderCard from './HeaderCard.vue';

defineProps<{
    project: Project
}>()
</script>

<template>
    <div class="size-full max-w-[1920px]">
        <div class="w-full h-full">
            <img :src="project.bannerPath" alt="" class="size-full object-cover">
        </div>
        <div class="flex-center">
            <div class="flex px-20 py-10 max-w-[1200px]">
                <HeaderCard :title="project.clientName"
                    :description="getSelectedLanguageFromI18nValue(project.description)" class="w-1/2" />
                <div class="w-1/2 flex h-full gap-5">
                    <HeaderCard :title="$t('position')" :description="getSelectedLanguageFromI18nValue(project.role)"
                        class="w-1/2" />
                    <HeaderCard :title="$t('periodOfTime')" :description="project.period" class="w-1/2" />
                </div>
            </div>
        </div>
    </div>
</template>