<script setup lang="ts">
import IconVue from './icons/ICON_VUE.svg';
import IconFlutter from './icons/ICON_FLUTTER.svg';
import IconGit from './icons/ICON_GIT.svg';
import IconJava from './icons/ICON_JAVA.svg';
import IconJS from './icons/ICON_JS.svg';
import IconNode from './icons/ICON_NODE.svg';
import IconTailwind from './icons/ICON_TAILWIND.svg';
import IconTypescript from './icons/ICON_TYPESCRIPT.svg';
import IconLaravel from './icons/ICON_LARAVEL.svg';
import IconDocker from './icons/ICON_DOCKER.svg';
import IconFirebase from './icons/ICON_FIREBASE.svg';

import { nextTick, onMounted, onUnmounted, ref } from 'vue';

type Technology = {
    imageSrc: string,
    label: string
}

const technologies = ref<Technology[]>([
    {
        imageSrc: IconJS,
        label: 'JavaScript',
    },
    {
        imageSrc: IconTypescript,
        label: 'TypeScript',
    },
    {
        imageSrc: IconVue,
        label: 'Vue',
    },
    {
        imageSrc: IconTailwind,
        label: 'Tailwind CSS',
    },
    {
        imageSrc: IconNode,
        label: 'Node.js',
    },
    {
        imageSrc: IconLaravel,
        label: 'Laravel',
    },
    {
        imageSrc: IconFirebase,
        label: 'Firebase',
    },
    {
        imageSrc: IconDocker,
        label: 'Docker',
    },
    {
        imageSrc: IconFlutter,
        label: 'Flutter',
    },
    {
        imageSrc: IconGit,
        label: 'Git',
    },
    {
        imageSrc: IconJava,
        label: 'Java',
    },
])

const slider = ref<HTMLElement | null>(null)
let autoScrollInterval: number | null

let fullyHiddenObserver: IntersectionObserver
// Add 100px to the left margin of the slider
const rootMargin = '0px 0px 0px 100px'

const scrollingSpeed = ref(0.5)

function updateScrollLeft() {
    if (slider.value == null) return
    slider.value.scrollLeft += scrollingSpeed.value
}

onMounted(() => {
    // requestAnimationFrame(() => {
        
    //     let repeatFunction = () => {
    //         updateScrollLeft()
    //         requestAnimationFrame(repeatFunction)
    //     }
    //     requestAnimationFrame(repeatFunction)
    // })

    setInterval(() => {
        updateScrollLeft()
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

    // Move first element to the back
    let tmpCopy: Technology[] = JSON.parse(JSON.stringify(technologies.value))
    let firstElement = technologies.value[0]
    tmpCopy.shift()
    tmpCopy.push(firstElement)
    technologies.value = tmpCopy
    
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
        <div class="w-full bg-zinc-800 h-[2px] shrink-0 mb-5"/>
        <div class="uppercase font-normal text-white text-2xl mb-[80px]">{{ $t('technolgiesSection.title') }}</div>
        <div class="flex overflow-x-scroll hide-scrollbar" ref="slider"
            @mouseenter="scrollingSpeed = 0"
            @mouseleave="scrollingSpeed = .5"
            style="transform: translate3d(0, 0, 0)">
            <!-- <div class="h-64 w-64 shrink-0 bg-green-200"/> -->
            <div class="flex-center flex-col ml-4 h-64 w-64 shrink-0" v-for="(technology, i) of technologies" :key="i">
                <img :src="technology.imageSrc" class="size-24 mb-5"/>
                <div class="text-white text-2xl font-semibold"> {{ technology.label }} </div>
            </div>
        </div>
    </div>
</template>