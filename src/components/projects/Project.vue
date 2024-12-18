<script setup lang="ts">
import { Work } from '../../data/works/works';

const props = defineProps<{
    project: Work
}>()

</script>

<template>
    <div>
        {{ project.clientName }}
    </div>
</template>