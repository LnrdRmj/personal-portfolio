<script setup lang="ts">
import { ProjectSection } from '@/services/project/project';
import SectionEvaluator from './SectionEvaluator.vue';

defineProps<{
    sections: ProjectSection[]
}>()

</script>

<template>
    <div class="flex flex-col gap-2">
        <div v-for="section of sections">
            <SectionEvaluator :section="section" class="w-full" />
        </div>
    </div>
</template>