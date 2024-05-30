<script setup lang="ts">
defineProps<{
    name: string,
    infos: string[]
}>()
</script>

<template>
    <div class="flex flex-col">
        <div>{{ name }}</div>
        <div v-for="info of infos">{{ info }}</div>
    </div>
</template>