<script setup lang="ts">

defineProps<{
    title: string,
    description: string
}>()

</script>

<template>
    <div class="flex flex-col">
        <div class="text-2xl uppercase font-semibold">{{ title }}</div>
        <div class="text-xl mt-5 leading-tight" v-html="description"></div>
    </div>
</template>