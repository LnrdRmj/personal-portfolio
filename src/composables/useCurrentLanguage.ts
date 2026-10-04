import i18next from "i18next";
import { readonly, ref } from "vue";

const currentLanguage = ref(i18next.language);

i18next.on("languageChanged", (language) => {
    currentLanguage.value = language;
    document.documentElement.lang = language;
});

/**
 * Reactive current i18next language. Use it as a dependency in computeds that
 * resolve language-dependent values (I18nValue, t() calls in data helpers).
 */
export function useCurrentLanguage() {
    return readonly(currentLanguage);
}
