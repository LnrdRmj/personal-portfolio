<script setup lang="ts">
import { ProjectSection, ProjectSectionToComponent } from '@/services/project/project';

const props = defineProps<{
    section: ProjectSection
}>()

</script>

<template>
    <component :is="ProjectSectionToComponent[section.name]" v-bind="props.section">

    </component>
</template>