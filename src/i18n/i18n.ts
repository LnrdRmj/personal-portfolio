import i18next from 'i18next';
import en from '../i18n/en.json';
import it from '../i18n/it.json';
import LanguageDetector from 'i18next-browser-languagedetector';

const supportedLngs = ['en', 'it'] as const
export type I18nValue<T = string> = Record<(typeof supportedLngs)[number] | string & {}, T>

export function setup() {
    i18next.use(LanguageDetector).init({
        supportedLngs,
        interpolation: {
            escapeValue: false
        },
        fallbackLng: false,
        resources: {
            en: { translation: en },
            it: { translation: it }
        }
    });
}

export function createI18ValueWithFromOne<T>(value: T): I18nValue<T> {
    return {
        en: value,
        it: value,
    }
}