<script setup lang="ts">
    defineProps<{
        selected: boolean;
        imageSrc: string;
        clientName: string;
    }>();
</script>

<template>
    <div
        class="border h-fit w-fit px-2 py-1 rounded-[4px] sm:flex sm:justify-center sm:items-center sm:rounded-lg sm:h-20 sm:w-72 sm:p-2 transition-colors duration-500 [&_*]:transition-colors [&_*]:duration-500"
        :class="selected == true ? 'border-white' : 'border-zinc-800 '"
    >
        <div
            class="bg-zinc-800 hidden p-1 w-fit sm:flex sm:justify-center sm:items-center sm:p-4 sm:max-h-full"
        >
            <!-- <img :src="imageSrc" class="aspect-squar h-7 w-7"/> -->
            <div
                class="aspect-squar h-7 w-7"
                :class="selected == true ? 'bg-white' : 'bg-zinc-600'"
                :style="{
                    mask: `url(${imageSrc}) no-repeat center / contain`,
                }"
            ></div>
        </div>
        <div
            class="capitalize sm:pl-5 font-semibold text-lg flex-1"
            :class="selected == true ? 'text-white' : 'text-zinc-600'"
        >
            {{ clientName }}
        </div>
    </div>
</template>
