<script setup lang="ts">
import HeaderCard from '../../header/HeaderCard.vue';
import { MediaUrl } from '../common/media';
import DoubleImages from '../doubleImages/DoubleImages.vue';

withDefaults(defineProps<{
    medias: [MediaUrl, MediaUrl],
    title: string,
    description: string,
    textPosition?: "left" | "right"
}>(), {
    textPosition: 'right'
})

</script>

<template>
    <div class="flex" :class="textPosition == 'left' ? 'flex-row-reverse' : 'flex-row'">
        <DoubleImages :medias="medias" class="w-1/2" />
        <div class="w-1/2 px-20 pt-32 flex flex-col">
            <HeaderCard :title="title" :description="description" />
        </div>
    </div>
</template>