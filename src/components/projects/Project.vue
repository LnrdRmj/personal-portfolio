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
        <ProjectHeader :project="project" />
        <div class="flex-center w-full">
            <ProjectEvaluator :sections="project.sections" class="max-w-[1200px]" />
        </div>
        <ContactMeSection class="lg:px-64" id="landingContactMeSection" />
    </div>
</template>