<script setup lang="ts">
import { ProjectSection, ProjectSectionToComponent } from '@/services/project/project';

defineProps<{
    section: ProjectSection
}>()

</script>

<template>
    <component :is="ProjectSectionToComponent[section.name]" v-bind="section" class="">
        <SectionEvaluator v-if="section.name == 'with-title'" :section="section.child"></SectionEvaluator>
    </component>
</template>