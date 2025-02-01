<script setup lang="ts">
import { Project } from '../../data/projects/project';
import ProjectHeader from './header/ProjectHeader.vue';
import ProjectEvaluator from './projectEvaluator/ProjectEvaluator.vue';

defineProps<{
    project: Project
}>()

</script>

<template>
    <div class="flex flex-col justify-center w-full gap-2">
        <ProjectHeader :project="project" />
        <ProjectEvaluator :sections="project.sections" />
    </div>
</template>