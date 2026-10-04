<script setup lang="ts">
import { computed } from "vue";
import { getProjectById } from "@/data/projects/project";
import Project from "@components/projects/Project.vue";
import NotFoundPage from "./NotFoundPage.vue";

const props = defineProps<{
    projectId: string;
}>();

const project = computed(() => getProjectById(+props.projectId));
</script>

<template>
    <NotFoundPage v-if="project == null" />
    <Project v-else :project="project" />
</template>
