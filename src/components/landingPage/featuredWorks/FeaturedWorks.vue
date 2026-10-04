<script setup lang="ts">
import LangChangeAnimation from "@/components/common/languageChangeAnimation/LangChangeAnimation.vue";
import WorkCard from "./WorkCard.vue";
import { featuredWorks } from "@/data/projects/project";

// Bento layout slot for each featured work, by position
const gridLayouts = [
    { class: "col-span-2 row-span-2", variant: "big" },
    { class: "col-span-1 row-span-1", variant: "small" },
    { class: "col-start-2 col-end-4 row-span-2", variant: "big" },
] as const;
</script>

<template>
    <div class="flex flex-col">
        <h2 class="font-display text-3xl md:text-4xl font-bold tracking-tight mb-14 uppercase">
            <LangChangeAnimation value="featuredWorks.title" />
        </h2>
        <div
            class="flex flex-col space-y-8 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-7 sm:grid-rows-[repeat(4,minmax(200px,320px))]">
            <WorkCard v-for="(work, index) of featuredWorks" :key="work.id"
                :class="gridLayouts[index % gridLayouts.length].class"
                :variant="gridLayouts[index % gridLayouts.length].variant" :project="work" />
        </div>
    </div>
</template>
