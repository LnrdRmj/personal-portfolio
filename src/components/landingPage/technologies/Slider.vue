<script setup lang="ts">
import IconVue from "./icons/ICON_VUE.svg";
import IconFlutter from "./icons/ICON_FLUTTER.svg";
import IconGit from "./icons/ICON_GIT.svg";
import IconJava from "./icons/ICON_JAVA.svg";
import IconJS from "./icons/ICON_JS.svg";
import IconNode from "./icons/ICON_NODE.svg";
import IconTailwind from "./icons/ICON_TAILWIND.svg";
import IconTypescript from "./icons/ICON_TYPESCRIPT.svg";
import IconLaravel from "./icons/ICON_LARAVEL.svg";
import IconDocker from "./icons/ICON_DOCKER.svg";
import IconFirebase from "./icons/ICON_FIREBASE.svg";

import LangChangeAnimation from "@/components/common/languageChangeAnimation/LangChangeAnimation.vue";

type Technology = {
    imageSrc: string;
    label: string;
};

const technologies: Technology[] = [
    { imageSrc: IconJS, label: "JavaScript" },
    { imageSrc: IconTypescript, label: "TypeScript" },
    { imageSrc: IconVue, label: "Vue" },
    { imageSrc: IconTailwind, label: "Tailwind CSS" },
    { imageSrc: IconNode, label: "Node.js" },
    { imageSrc: IconLaravel, label: "Laravel" },
    { imageSrc: IconFirebase, label: "Firebase" },
    { imageSrc: IconDocker, label: "Docker" },
    { imageSrc: IconFlutter, label: "Flutter" },
    { imageSrc: IconGit, label: "Git" },
    { imageSrc: IconJava, label: "Java" },
];
</script>

<template>
    <div class="bg-secondary px-10 py-20">
        <div class="w-full bg-zinc-800 h-[2px] shrink-0 mb-5" />
        <h2 class="uppercase font-display font-bold tracking-tight text-white text-2xl md:text-3xl mb-[80px]">
            <LangChangeAnimation value="technolgiesSection.title" />
        </h2>
        <div class="marquee overflow-hidden">
            <div class="marquee-track flex w-max">
                <!-- Track is rendered twice so the -50% translation loops seamlessly -->
                <div v-for="clone of 2" :key="clone" class="flex" :aria-hidden="clone === 2">
                    <div class="flex-center flex-col ml-4 h-64 w-64 shrink-0" v-for="technology of technologies"
                        :key="technology.label">
                        <img :src="technology.imageSrc" :alt="technology.label" class="size-24 mb-5" />
                        <div class="text-white text-2xl font-semibold">{{ technology.label }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes marquee {
    to {
        transform: translateX(-50%);
    }
}

.marquee-track {
    animation: marquee 40s linear infinite;
}

.marquee:hover .marquee-track {
    animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
    .marquee-track {
        animation: none;
    }

    .marquee {
        overflow-x: auto;
    }
}
</style>
