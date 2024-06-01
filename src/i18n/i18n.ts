import i18next from 'i18next';
import en from '../i18n/en.json';
import it from '../i18n/it.json';

export function setup() {
    i18next.init({
        lng: 'it',
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