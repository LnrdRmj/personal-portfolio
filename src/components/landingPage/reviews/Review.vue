<script setup lang="ts">
defineProps<{
    review: string,
    name: string,
    role: string,
}>()
</script>

<template>
    <div class="flex flex-col">
        <div class="flex-1 text-white text-2xl">
            {{ $t(review) }}
        </div>
        <div class="w-full bg-gray-700 h-[2px] shrink-0 mt-[50px] mb-4"/>
        <div class="flex">
            <div class="size-16 rounded-lg bg-white"/>
            <div class="flex flex-col justify-center ml-5">
                <div class="text-white text-lg">{{ name }}</div>
                <div class="text-gray-500 text-sm">{{ $t(role) }}</div>
            </div>
        </div>
    </div>
</template>