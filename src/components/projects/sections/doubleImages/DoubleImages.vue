<script setup lang="ts">
import MediaContainer from '../common/MediaContainer.vue';
import { MediaUrl } from '../common/media';

defineProps<{
    medias: [MediaUrl, MediaUrl]
}>()

</script>

<template>
    <div class="flex gap-2">
        <MediaContainer v-for="media in medias" :media="media" class="w-1/2 object-cover h-full" />
    </div>
</template>