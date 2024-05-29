<script setup lang="ts">
defineProps<{
    selected: boolean,
    imageSrc: string,
    clientName: string,
}>()
</script>

<template>
    <div class="flex justify-center items-center h-20 w-72 p-2 border border-zinc-800 rounded-lg">
        <div class="flex-center bg-zinc-800 p-4 max-h-full rounded-md">
            <img :src="imageSrc" class="aspect-squar h-7 w-7">
        </div>
        <div class="capitalize text-white pl-5 font-semibold text-lg flex-1">
            {{ clientName }}
        </div>
    </div>
</template>