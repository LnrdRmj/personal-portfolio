<script setup lang="ts">
import { LANDING } from "@/routes/routeNames";
import LangChangeAnimation from "@components/common/languageChangeAnimation/LangChangeAnimation.vue";
</script>

<template>
    <div class="bg-primary min-h-dvh flex-center">
        <div class="flex flex-col items-center text-center px-6 -mt-16">
            <div class="font-display font-bold text-8xl md:text-9xl tracking-tight">404</div>
            <h1 class="font-display font-bold text-2xl md:text-3xl mt-6">
                <LangChangeAnimation value="notFound.title" />
            </h1>
            <p class="text-secondary/70 mt-4 max-w-prose">
                <LangChangeAnimation value="notFound.message" />
            </p>
            <RouterLink :to="{ name: LANDING }"
                class="mt-10 px-8 py-3 rounded-lg bg-secondary text-white font-semibold hover:bg-secondary/80 focus-ring transition-colors">
                <LangChangeAnimation value="notFound.backHome" />
            </RouterLink>
        </div>
    </div>
</template>
