<script setup lang="ts">

defineProps<{
    containerClass?: string
}>()
const open = defineModel('open', { required: true })

</script>

<template>
    <Teleport to="html">
        <Transition name="fade">
            <div v-if="open" class="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50 backdrop-blur-xl flex-center"
                :class="containerClass" @wheel.prevent="" @click="open = false" @touchmove.prevent>
                <div @click.stop @touchstart1="console.log(`touch start`)" class="contents">
                    <slot />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>