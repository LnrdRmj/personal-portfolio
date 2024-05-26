<script setup lang="ts">
import Header from './components/Header.vue'

</script>

<template>
    <div class="flex flex-col w-full h-full overflow-scroll">
        <div class="flex flex-col h-screen w-full shrink-0">
            <Header></Header>
            <div class="bg-green-500 text-8xl h-full w-full flex-center font-bold">
                Ciao
            </div>
        </div>
        <div class="bg-red-500 h-32 w-full shrink-0">
            ciao
        </div>
    </div>
</template>