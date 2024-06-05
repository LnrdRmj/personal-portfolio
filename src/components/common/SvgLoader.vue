<script setup lang="ts">
defineProps<{
    imageSrc: string
}>()
</script>

<template>
    <div
        :style="{
            mask: `url(${imageSrc}) no-repeat center / contain`,
        }">
    </div>
</template>