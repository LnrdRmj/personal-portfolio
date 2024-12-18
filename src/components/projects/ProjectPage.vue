<script setup lang="ts">
import { computed } from "vue";
import { getWorks } from "../../data/works/works";

const props = defineProps<{
    projectId: number;
}>();

const project = computed(() => {
    getWorks();
});
</script>

<template>
    <div>Project Page</div>
</template>
