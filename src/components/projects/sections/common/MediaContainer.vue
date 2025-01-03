<script setup lang="ts">
import { MediaUrl } from './media';

const props = defineProps<{
    media: MediaUrl
}>()

const isImage = props.media.type == 'image'
const isVideo = !isImage

</script>

<template>
    <component :is="isImage == true ? 'img' : 'video'" :src="media.url" class="" :autoplay="isVideo" muted loop />
</template>