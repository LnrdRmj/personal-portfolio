<script setup lang="ts">
import LangChangeAnimation from "@/components/common/languageChangeAnimation/LangChangeAnimation.vue";
import WorkCard from "./WorkCard.vue";
import { YoomyProject } from "@/data/projects/yoomy/yoomyProject";
import { TrackOneProject } from "@/data/projects/trackone/trackoneProject";
import { NaturaeProject } from "@/data/projects/naturae/naturaeProject";
</script>

<template>
    <div class="flex flex-col">
        <div class="text-2xl font-medium mb-14 uppercase">
            <LangChangeAnimation value="featuredWorks.title" />
        </div>
        <!-- grid-rows-[repeat(auto-fill,minmax(500px,auto))] -->
        <div
            class="flex flex-col space-y-8 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-7 sm:grid-rows-[repeat(5,minmax(200px,auto))]">
            <WorkCard class="col-span-2 row-span-2" variant="big" :project="YoomyProject" />
            <WorkCard class="col-span-1 row-start row-span-1" :project="TrackOneProject" />
            <WorkCard class="col-start-2 col-end-4 row-span-2" variant="big" :project="NaturaeProject" />
            <div>
                <!-- Empty space -->
            </div>
            <WorkCard class="col-span-1 row-start row-span-1" :project="YoomyProject" />
            <WorkCard class="col-span-1 row-start row-span-1" :project="YoomyProject" />
        </div>
    </div>
</template>
