import { I18nValue, createI18ValueFromOne } from "@/i18n/i18n";

export type WorkService = {
    description: I18nValue;
    skills: I18nValue[];
    image: string;
};

import ImagesWorkService1 from "./assets/imageService1.png";
export const workService1: WorkService = {
    description: {
        it: "Descrizione 1 it",
        en: "Description 1 en",
    },
    image: ImagesWorkService1,
    skills: [createI18ValueFromOne("Skill 1")],
};

import ImagesWorkService2 from "./assets/imageService2.png";
export const workService2: WorkService = {
    description: {
        it: "Descrizione 2 it",
        en: "Description 2 en",
    },
    image: ImagesWorkService2,
    skills: [createI18ValueFromOne("Skill 2")],
};

import ImagesWorkService3 from "./assets/imageService3.png";
export const workService3: WorkService = {
    description: {
        it: "Descrizione 3 it",
        en: "Description 3 en",
    },
    image: ImagesWorkService3,
    skills: [createI18ValueFromOne("Skill 3")],
};

export const workServices: WorkService[] = [workService1, workService2, workService3];
