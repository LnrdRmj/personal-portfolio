import i18next from 'i18next';
import I18NextVue from 'i18next-vue';
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