<script setup lang="ts">
import { Work } from '../../data/works/works';

const props = defineProps<{
    project: Work
}>()

</script>

<template>
    <div class="flex justify-center w-full">
        <div class="size-full max-w-1920">
            <div class="w-full h-full">
                <img :src="project.bannerPath" alt="" class="size-full object-cover">
            </div>
            {{ project.clientName }}
        </div>
    </div>
</template>