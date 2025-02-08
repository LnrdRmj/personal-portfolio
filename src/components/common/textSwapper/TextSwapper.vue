<script setup lang="ts">

const props = withDefaults(defineProps<{
    text1: string,
    text2: string,
    flip: boolean,
    animationName?: string,
    animation?: boolean
}>(), {
    animation: true,
    animationName: 'text-swapper'
})

</script>

<template>

    <Transition :name="animation ? animationName : ''" mode="out-in">
        <div v-if="flip">
            {{ flip ? text1 : text2 }}
        </div>
        <div v-else>
            {{ flip ? text2 : text1 }}
        </div>
    </Transition>

</template>

<style scoped>
/* Blurs the content of the text */
.text-swapper-enter-active,
.text-swapper-leave-active {
    transition: opacity 0.5s, filter 0.5s;
}

.text-swapper-enter-from,
.text-swapper-leave-to {
    filter: blur(10px);
}
</style>