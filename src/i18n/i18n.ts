import en from '../i18n/en.json';
import it from '../i18n/it.json';
import { createI18n } from 'vue-i18n';

const messages = {
    en,
    it
}

export const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export function changeLocale(locale: keyof typeof messages) {
    i18n.global.locale = locale
    console.log('changed');
    
}