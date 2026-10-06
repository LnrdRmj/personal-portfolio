<script setup lang="ts">
const { t } = useI18n()
const colorMode = useColorMode()

const order = ['system', 'light', 'dark'] as const
type Preference = (typeof order)[number]
const icons: Record<Preference, string> = {
    system: 'lucide:monitor',
    light: 'lucide:sun',
    dark: 'lucide:moon',
}

// Prerendered HTML can't know the stored preference, so render "system" until mounted.
const mounted = ref(false)
onMounted(() => (mounted.value = true))

const preference = computed<Preference>(() =>
    mounted.value && order.includes(colorMode.preference as Preference)
        ? (colorMode.preference as Preference)
        : 'system',
)

function cycle() {
    colorMode.preference = order[(order.indexOf(preference.value) + 1) % order.length]!
}
</script>

<template>
    <button
        type="button"
        class="icon-btn"
        :aria-label="t('theme.toggle', { mode: t(`theme.${preference}`) })"
        :title="t('theme.toggle', { mode: t(`theme.${preference}`) })"
        @click="cycle"
    >
        <Icon :name="icons[preference]" class="size-4.5" />
    </button>
</template>
