<script setup lang="ts">
import { Work } from '../../data/works/works';
import ProjectHeader from './header/ProjectHeader.vue';

const props = defineProps<{
    project: Work
}>()

</script>

<template>
    <div class="flex justify-center w-full">
        <ProjectHeader :project="project" />
    </div>
</template>