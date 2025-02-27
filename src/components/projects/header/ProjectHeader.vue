<script setup lang="ts">
import { useTranslation } from 'i18next-vue';
import { Project } from '../../../data/projects/project';
import { createI18ValueFromOne } from '../../../i18n/i18n';
import HeaderCard from './HeaderCard.vue';

const { t } = useTranslation()

const props = defineProps<{
    project: Project
}>()

function buildProjectPeriod() {
    return `${props.project.period.startYear} - ${props.project.period.endYear ?? t('worksSection.table.toNow')}`
}

</script>

<template>
    <div class="size-full max-w-[1920px]">
        <div class="w-full h-full">
            <img :src="project.bannerPath" alt="" style="view-transition-name: project-header"
                class="size-full object-cover">
        </div>
        <div class="flex-center">
            <div class="flex flex-col md:flex-row gap-5 md:gap-0 px-5 md:px-20 py-10 max-w-[1200px] w-full">
                <HeaderCard :title="createI18ValueFromOne(project.clientName)" :description="project.description"
                    class="md:w-1/2" />
                <div class="md:w-1/2 flex flex-col md:flex-row h-full gap-5">
                    <HeaderCard :title="$t('position')" :description="project.role" class="w-1/2" />
                    <HeaderCard :title="$t('periodOfTime')" :description="buildProjectPeriod()" class="w-1/2" />
                </div>
            </div>
        </div>
    </div>
</template>