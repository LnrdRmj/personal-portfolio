<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue';

const slider = ref<HTMLElement | null>(null)
let autoScrollInterval: number | null

let strings = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])

let fullyHiddenObserver: IntersectionObserver
// Add 100px to the left margin of the slider
const rootMargin = '0px 0px 0px 100px'

onMounted(() => {
    autoScrollInterval = setInterval(() => {
        if (slider.value == null) return

        slider.value.scrollLeft += 0.5
    }, 20)

    createFullyHiddenObserver(loopFirstChildCallback)
})

function createFullyHiddenObserver(callback: IntersectionObserverCallback): void{
    fullyHiddenObserver = new IntersectionObserver(callback, {
        root: slider.value,
        rootMargin: rootMargin,
    })
    fullyHiddenObserver.observe(slider.value!.children[0])
}

function loopFirstChildCallback(thresholds: IntersectionObserverEntry[], observer: IntersectionObserver){
    // If the first child is visible
    if (thresholds[0].isIntersecting) return
    fullyHiddenObserver.unobserve(slider.value!.children[0])

    let tmpCopy: string[] = JSON.parse(JSON.stringify(strings.value))
    let firstElement = strings.value[0]
    tmpCopy.shift()
    tmpCopy.push(firstElement)
    strings.value = tmpCopy
    
    var style = window.getComputedStyle(slider.value!.children[0]);
    // Shift the scroll back of the component width (without forgetting the left margin)
    slider.value!.scrollLeft -= slider.value!.children[0].clientWidth + parseInt(style.marginLeft)
    nextTick(() => {
        fullyHiddenObserver.observe(slider.value!.children[0])
    })
}

onUnmounted(() => {
    if (autoScrollInterval != null){
        clearInterval(autoScrollInterval)
        fullyHiddenObserver.disconnect()
    }
})

</script>

<template>
    <div class="bg-secondary px-10 py-20">
        <div class="flex overflow-x-scroll" ref="slider">
            <!-- <div class="h-64 w-64 shrink-0 bg-green-200"/> -->
            <div class="flex-center ml-4 h-64 w-64 shrink-0 bg-green-200" v-for="(string, i) of strings" :key="string" :style="{ opacity: +string / 10}">
                {{ string }}
            </div>
        </div>
    </div>
</template>