import type { Locale, Localized } from '#shared/types/content'

/** Returns a function that picks the current language's value out of a Localized<T>. */
export function useLocalized() {
    const { locale } = useI18n()
    return <T>(value: Localized<T>): T => value[locale.value as Locale]
}
