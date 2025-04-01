<script setup lang="ts">
import { Project } from '../../data/projects/project';
import ContactMeSection from '../common/contactMeSection/ContactMeSection.vue';
import ProjectHeader from './header/ProjectHeader.vue';
import ProjectEvaluator from './projectEvaluator/ProjectEvaluator.vue';

defineProps<{
    project: Project
}>()

</script>

<template>
    <div class="flex flex-col justify-center w-full gap-2">
        <ProjectHeader :project="project" class="w-full" />
        <div class="flex-center w-full">
            <ProjectEvaluator :sections="project.sections" class="max-w-[1200px]" />
        </div>
        <div class="w-full flex-center">
            <ContactMeSection class="w-full max-w-[1000px]" id="landingContactMeSection" />
        </div>
    </div>
</template>