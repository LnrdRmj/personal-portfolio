<script setup lang="ts">
    defineProps<{
        description: string;
        skills: string[];
        imageSrc: string;
    }>();
</script>

<template>
    <div class="flex flex-col">
        <div class="rounded-xl sm:rounded-[20px] overflow-hidden aspect-[1.2] sm:aspect-[.8]">
            <img :src="imageSrc" class="object-cover size-full" alt="" />
        </div>
        <div class="mt-5 text-sm font-semibold h-10">
            {{ description }}
        </div>
        <div class="flex flex-col text-sm mt-8 text-stone-700">
            <div v-for="skill of skills">{{ skill }}</div>
        </div>
    </div>
</template>
