<script setup lang="ts">
import { useTranslation } from 'i18next-vue';
import { ref } from 'vue';

const props = withDefaults(defineProps<{
    value: string,
    animationName?: string,
    animation: boolean
}>(), {
    animation: true
})

const { i18next, t } = useTranslation()

var currentTranslatedText = ref(t(props.value));
var oldTranslatedText = ref(currentTranslatedText.value);

const flip = ref(false)
i18next.on("languageChanged", (lng) => {
    flip.value = !flip.value
    oldTranslatedText.value = currentTranslatedText.value
    currentTranslatedText.value = t(props.value)
})

</script>

<template>

    <Transition :name="animation ? (animationName ?? 'blur') : ''" mode="out-in">
        <div v-if="flip">
            {{ flip ? oldTranslatedText : currentTranslatedText }}
        </div>
        <div v-else>
            {{ flip ? currentTranslatedText : oldTranslatedText }}
        </div>
    </Transition>

</template>

<style scoped>
.blur-enter-active,
.blur-leave-active {
    transition: opacity 0.3s, filter 0.3s;
}

.blur-enter-from,
.blur-leave-to {
    filter: blur(10px);
}
</style>