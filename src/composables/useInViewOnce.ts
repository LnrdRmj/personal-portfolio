import { onMounted, onUnmounted, ref, type Ref } from "vue";

/**
 * Tracks when `target` first enters the viewport (fires once).
 * Resolves immediately when the user prefers reduced motion, so reveal
 * animations degrade to static content.
 */
export function useInViewOnce(target: Ref<HTMLElement | null>, threshold = 0.15) {
    const isInView = ref(false);
    let observer: IntersectionObserver | undefined;

    onMounted(() => {
        if (
            target.value == null ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            isInView.value = true;
            return;
        }

        observer = new IntersectionObserver(
            (entries) => {
                if (!entries[0].isIntersecting) return;
                isInView.value = true;
                observer?.disconnect();
            },
            { threshold },
        );
        observer.observe(target.value);
    });

    onUnmounted(() => observer?.disconnect());

    return { isInView };
}
