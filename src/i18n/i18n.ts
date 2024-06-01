import i18next from 'i18next';
import en from '../i18n/en.json';
import it from '../i18n/it.json';
import LanguageDetector from 'i18next-browser-languagedetector';

export function setup() {
    i18next.use(LanguageDetector).init({
        supportedLngs: ['en', 'it'],
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