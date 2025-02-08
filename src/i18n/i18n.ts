import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./en";
import it from "./en";

export type Translations = typeof en;

const supportedLngs = ["en", "it"] as const;
export type I18nValue<T = string> = Record<(typeof supportedLngs)[number] | (string & {}), T>;

export function setup() {
    i18next.use(LanguageDetector).init({
        supportedLngs,
        interpolation: {
            escapeValue: false,
        },
        fallbackLng: false,
        resources: {
            en: { translation: en },
            it: { translation: it },
        },
    });
}

export function createI18ValueWithFromOne<T>(value: T): I18nValue<T> {
    return {
        en: value,
        it: value,
    };
}

export function getSelectedLanguageFromI18nValue<T>(value: I18nValue<T>): T {
    return value[i18next.language];
}
