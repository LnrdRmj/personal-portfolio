<script setup lang="ts">
defineProps<{
    selected: boolean,
    imageSrc: string,
    clientName: string,
}>()
</script>

<template>
    <div class="flex justify-center items-center h-20 w-72 p-2 border rounded-lg 
    transition-colors duration-500 
    [&_*]:transition-colors [&_*]:duration-500"
    :class="selected == true ? 'border-white' : 'border-zinc-800 ' ">
        <div class="flex-center bg-zinc-800 p-4 max-h-full rounded-md">
            <!-- <img :src="imageSrc" class="aspect-squar h-7 w-7"/> -->
            <div class="aspect-squar h-7 w-7"
            :class="selected == true ? 'bg-white' : 'bg-zinc-600' "
            :style="{
                mask: `url(${imageSrc}) no-repeat center / contain`,
            }">

            </div>
        </div>
        <div class="capitalize pl-5 font-semibold text-lg flex-1"
        :class="selected == true ? 'text-white' : 'text-zinc-600'">
            {{ clientName }}
        </div>
    </div>
</template>