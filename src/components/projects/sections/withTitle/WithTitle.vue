<script setup lang="ts">
import HeaderCard from '../../header/HeaderCard.vue';

export type Props = {
    title: string,
    description: string
}

defineProps<Props>()

</script>

<template>
    <div class="flex flex-col">
        <HeaderCard :title="title" :description="description" class="px-20 mb-10" />
        <slot />
    </div>
</template>