<script setup lang="ts">

const open = defineModel('open', { required: true })

</script>

<template>
    <Teleport to="html">
        <Transition name="fade">
            <div v-if="open" class="fixed top-0 left-0 w-screen h-screen z-50 bg-black/50 backdrop-blur-xl flex-center"
                @wheel.prevent="" @click="open = false">
                <div @click.stop class="contents">
                    <slot />
                </div>
            </div>
        </Transition>
    </Teleport>
</template>