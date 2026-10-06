<script setup lang="ts">
// Rendered to PNG at build time (zero runtime), so styles are inline and fonts come from @nuxt/fonts.
withDefaults(defineProps<{ title?: string; description?: string; path?: string }>(), {
    title: 'Leonardo Ramaj',
    description: '',
    path: '~',
})
</script>

<template>
    <div
        class="flex h-full w-full flex-col"
        style="background-color: #0a0c0f; color: #e6edf3; padding: 56px; font-family: 'JetBrains Mono'"
    >
        <div
            class="flex h-full w-full flex-col"
            style="border: 2px solid #2a313c; border-radius: 28px; background-color: #0d1117; overflow: hidden"
        >
            <div
                class="flex items-center"
                style="gap: 14px; padding: 22px 30px; background-color: #161b22; border-bottom: 2px solid #2a313c"
            >
                <div style="width: 18px; height: 18px; border-radius: 9999px; background-color: #ff5f57" />
                <div style="width: 18px; height: 18px; border-radius: 9999px; background-color: #febc2e" />
                <div style="width: 18px; height: 18px; border-radius: 9999px; background-color: #28c840" />
                <span style="margin-left: 16px; font-size: 22px; color: #8b98a8">leonardo@prato: ~</span>
            </div>
            <div class="flex flex-col" style="flex-grow: 1; padding: 48px 56px; gap: 22px">
                <div style="font-size: 28px; color: #8b98a8">
                    <span style="color: #7cf29a">{{ path }}</span>&nbsp;$ whoami
                </div>
                <div style="font-size: 76px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em">
                    {{ title }}<span style="color: #7cf29a">_</span>
                </div>
                <div
                    style="font-size: 30px; color: #8b98a8; line-height: 1.45; line-clamp: 3; overflow: hidden; text-overflow: ellipsis"
                >
                    {{ description }}
                </div>
            </div>
            <div style="padding: 0 56px 40px; font-size: 24px; color: #7cf29a">
                Leonardo Ramaj · full-stack developer
            </div>
        </div>
    </div>
</template>
