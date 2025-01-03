<script setup lang="ts">
import MediaContainer from '../common/MediaContainer.vue';
import { MediaUrl } from '../common/media';

defineProps<{
    media: MediaUrl
}>()

</script>

<template>
    <MediaContainer :media="media" />
</template>