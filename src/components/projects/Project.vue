<script setup lang="ts">
import { Work } from '../../data/works/works';
import ProjectHeader from './header/ProjectHeader.vue';
import DoubleImages from './sections/doubleImages/DoubleImages.vue';
import PlaceholderImage from '../../assets/placeholderImage.png'
import PlaceholderVideo from '../../assets/PlaceholderVideo.mp4'

const props = defineProps<{
    project: Work
}>()

</script>

<template>
    <div class="flex flex-col justify-center w-full">
        <ProjectHeader :project="project" />
        <DoubleImages class="h-[600px]" :medias="[
            {
                url: PlaceholderImage,
                type: 'image'
            },
            {
                url: PlaceholderVideo,
                type: 'video'
            }
        ]" />
    </div>
</template>