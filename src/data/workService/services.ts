import { I18nValue, createI18ValueFromOne } from "@/i18n/i18n";

export type WorkService = {
    description: I18nValue;
    skills: I18nValue[];
    image: string;
};

import ImagesWorkService1 from "./assets/imageService1.png";
export const workService1: WorkService = {
    description: {
        it: "Rebranding aziendale che comprende la creazione di Palette colori, strategia Social Network e linea di Merchandising.",
        en: "Corporate rebranding including the creation of color palettes, social network strategy, and a merchandising line.",
    },
    image: ImagesWorkService1,
    skills: [
        createI18ValueFromOne("Flussi Utente (UX)"),
        createI18ValueFromOne("Website Design (UI)"),
        createI18ValueFromOne("Figma"),
        createI18ValueFromOne("Responsive / Mobile"),
        createI18ValueFromOne("Gestione"),
    ],
};

import ImagesWorkService2 from "./assets/imageService2.png";
export const workService2: WorkService = {
    description: {
        it: "Sviluppo di un’identità visiva conforme ai valori distintivi dell’azienda.",
        en: "Development of a visual identity in line with the company's distinctive values.",
    },
    image: ImagesWorkService2,
    skills: [
        createI18ValueFromOne("Logo"),
        createI18ValueFromOne("Palette colori"),
        createI18ValueFromOne("Figma"),
        createI18ValueFromOne("Responsive / Mobile"),
        createI18ValueFromOne("Gestione"),
    ],
};

import ImagesWorkService3 from "./assets/imageService3.png";
export const workService3: WorkService = {
    description: {
        it: "Realizzazione di contenuti multimediali per elevare la presenza sul mercato dell’azienda.",
        en: "Creation of multimedia content to enhance the company's market presence.",
    },
    image: ImagesWorkService3,
    skills: [
        createI18ValueFromOne("Animazione 3D"),
        createI18ValueFromOne("Pubblicità"),
        createI18ValueFromOne("Immagini"),
        createI18ValueFromOne("Social Network"),
        createI18ValueFromOne("Merchandising"),
    ],
};

export const workServices: WorkService[] = [workService1, workService2, workService3];
