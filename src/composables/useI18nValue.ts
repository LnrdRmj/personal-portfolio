import { computed, toValue, type ComputedRef, type MaybeRefOrGetter } from "vue";
import type { I18nValue } from "@/i18n/i18n";
import { useCurrentLanguage } from "./useCurrentLanguage";

/**
 * Resolves an I18nValue against the current language, reactively.
 */
export function useI18nValue<T>(value: MaybeRefOrGetter<I18nValue<T>>): ComputedRef<T> {
    const language = useCurrentLanguage();
    return computed(() => toValue(value)[language.value]);
}
