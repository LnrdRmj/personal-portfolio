export function formatPeriod(period: { start: number; end?: number }, presentLabel: string) {
    return `${period.start}–${period.end ?? presentLabel}`
}
