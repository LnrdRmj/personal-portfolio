<script setup lang="ts">
// Rendered to PNG at build time (zero runtime), so styles are inline and fonts come from @nuxt/fonts.
withDefaults(defineProps<{ title?: string; description?: string; path?: string }>(), {
    title: 'Leonardo Ramaj',
    description: '',
    path: '',
})
</script>

<template>
    <div class="flex h-full w-full" style="background-color: #f3f3f0; color: #141414; font-family: 'Archivo'">
        <div class="flex h-full flex-col justify-between" style="width: 800px; padding: 64px 64px 56px">
            <div class="flex flex-col" style="gap: 28px">
                <div style="font-size: 84px; font-weight: 700; line-height: 1; letter-spacing: -0.035em">{{ title }}</div>
                <div style="font-size: 30px; line-height: 1.4; color: #55554f; line-clamp: 3; overflow: hidden; text-overflow: ellipsis">
                    {{ description }}
                </div>
            </div>
            <div class="flex items-end justify-between" style="border-top: 3px solid #141414; padding-top: 24px">
                <div style="font-size: 40px; font-weight: 600; letter-spacing: -0.04em">leonardo ramaj</div>
                <div class="flex items-end" style="gap: 14px">
                    <div style="width: 36px; height: 36px; border-radius: 9999px; background-color: #1f4e8c" />
                    <div style="width: 34px; height: 34px; background-color: #e3a823" />
                    <div style="width: 40px; height: 20px; border-radius: 40px 40px 0 0; background-color: #c8381f" />
                    <div style="width: 40px; height: 14px; margin-bottom: 11px; background-color: #141414" />
                </div>
            </div>
        </div>
        <div class="flex h-full flex-col justify-between" style="flex-grow: 1; background-color: #c8381f; color: #ffffff; padding: 64px 48px 56px">
            <div style="width: 220px; height: 220px; border-radius: 9999px; background-color: #ffffff" />
            <div style="font-size: 26px; line-height: 1.35">{{ path || 'ramaj.dev' }}</div>
        </div>
    </div>
</template>
