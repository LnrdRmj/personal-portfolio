<script setup lang="ts">
import { ProjectSection, ProjectSectionToComponent, WithTitleSection } from '@/services/project/project';

const props = defineProps<{
    section: ProjectSection
}>()

const isWithTitleSection = props.section.name == 'with-title'

</script>

<template>
    <component :is="ProjectSectionToComponent[section.name]" v-bind="section"
        :class="(section.fluid == true) ? 'h-fit' : isWithTitleSection ? '' : 'md:h-project-section'">
        <SectionEvaluator v-if="isWithTitleSection" :section="(section as WithTitleSection).child!"></SectionEvaluator>
    </component>
</template>