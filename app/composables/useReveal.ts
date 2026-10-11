import type { MaybeRefOrGetter } from 'vue'

/**
 * Plays a one-shot entrance: each element's data-reveal goes 'waiting' → 'play' when it enters view.
 * Without JS or with reduced motion the attribute is never set, so content simply sits at rest.
 */
export function useReveal(
    targets: MaybeRefOrGetter<Element | Element[] | null | undefined>,
    options: IntersectionObserverInit = { threshold: 0.6 },
) {
    let observer: IntersectionObserver | undefined

    onMounted(() => {
        const elements = [toValue(targets)].flat().filter((el): el is HTMLElement => el instanceof HTMLElement)
        if (!elements.length || matchMedia('(prefers-reduced-motion: reduce)').matches) return

        observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                // Already scrolled past (e.g. reload mid-page): settle it rather than leave it hidden.
                if (!entry.isIntersecting && entry.boundingClientRect.top > 0) continue
                ;(entry.target as HTMLElement).dataset.reveal = 'play'
                observer?.unobserve(entry.target)
            }
        }, options)

        for (const el of elements) {
            el.dataset.reveal = 'waiting'
            observer.observe(el)
        }
    })

    onBeforeUnmount(() => observer?.disconnect())
}
