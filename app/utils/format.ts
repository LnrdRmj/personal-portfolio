export function formatPeriod(period: { start: number; end?: number }, presentLabel: string) {
    return `${period.start}–${period.end ?? presentLabel}`
}

/** A stable git-style short hash, used as decoration in the hero terminal. */
export function shortHash(input: string) {
    let hash = 0x811c9dc5
    for (const char of input) {
        hash ^= char.charCodeAt(0)
        hash = Math.imul(hash, 0x01000193)
    }
    return (hash >>> 0).toString(16).padStart(8, '0').slice(0, 7)
}
