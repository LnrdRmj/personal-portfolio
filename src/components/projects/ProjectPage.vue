<script setup lang="ts">
import { computed } from "vue";
import { getWorks } from "../../data/projects/project";
import MissingProject from "./MissingProject.vue";
import Project from "./Project.vue";

const props = defineProps<{
    projectId: string;
}>();

const project = computed(() => {
    return getWorks().find(work => work.id == +props.projectId);
});
</script>

<template>
    <MissingProject v-if="project == null" />
    <Project v-else :project="project" />
</template>
