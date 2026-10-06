// Shared by scripts/build-images.ts (which writes the files) and ResponsiveImage.vue (which links them).
export const IMAGE_WIDTHS = [384, 640, 768, 1088, 1536, 2176]

/** Widths generated for an image: every standard width up to its own, never upscaled. */
export function imageWidths(originalWidth: number): number[] {
    const widths = IMAGE_WIDTHS.filter((width) => width <= originalWidth)
    return widths.length ? widths : [originalWidth]
}

/** URL of one generated variant; `id` is the source path under images/ without extension. */
export function imageUrl(id: string, width: number) {
    return `/img/${id}-${width}.webp`
}
