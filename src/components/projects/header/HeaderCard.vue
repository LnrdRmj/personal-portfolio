<script setup lang="ts">

const props = defineProps<{
    title: string,
    description: string
}>()

</script>

<template>
    <div class="flex flex-col">
        <div class="text-xl uppercase font-semibold">{{ title }}</div>
        <div class="text-lg mt-5 leading-tight" v-html="description"></div>
    </div>
</template>