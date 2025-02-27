import { MediaUrl } from "@/components/projects/sections/common/media";
import { createI18ValueFromOne } from "@/i18n/i18n";
import { Project } from "../project";
import { projectSkills } from "../projectSkills";
import YoomyBannerProject from "./assets/yoomyBannerProject.png";
import Yoomy2 from "./assets/yoomy_2.png";
import YoomyImage4 from "./assets/yoomy_image_4.png";

const sampleMedia: MediaUrl = {
    type: "image",
    url: Yoomy2,
};

const sampleMedia2: MediaUrl = {
    type: "image",
    url: YoomyImage4,
};

export const SampleProject: Project = {
    id: 10,
    period: {
        startYear: 2020,
    },
    clientName: "Sample",
    role: {
        en: "Programmer",
        it: "Programmatore",
    },
    skills: [projectSkills.web, projectSkills.devops, projectSkills.team],
    bannerPath: YoomyBannerProject,
    description: {
        en: "Full stack development of a start-up project",
        it: "Sviluppo full-stack di una piattaforma start-up",
    },
    sections: [
        {
            name: "double-image",
            medias: [sampleMedia, sampleMedia],
        },
        {
            name: "double-image-with-text",
            description: createI18ValueFromOne("Double image with text"),
            title: createI18ValueFromOne("title"),
            medias: [sampleMedia, sampleMedia2],
        },
        {
            name: "single-image-with-text",
            description: createI18ValueFromOne("description"),
            title: createI18ValueFromOne("title"),
            media: sampleMedia,
        },
        {
            name: "single-image",
            media: {
                type: "image",
                url: Yoomy2,
            },
        },
        {
            name: "triple-image",
            medias: [sampleMedia, sampleMedia2, sampleMedia],
        },
        {
            name: "with-title",
            title: {
                en: "THE RESULTS?",
                it: "I RISULTATI?",
            },
            description: {
                en: "Yoomy is now in use in various schools in Florence and has well over 1000+ registered users 🎉. The app is expected to grow more and we're on the verge of acquiring new schools with new features.",
                it: "Yoomy è ora utilizzato in diverse scuole di Firenze e conta ben oltre 1000+ utenti registrati 🎉. L'app è destinata a crescere ulteriormente e siamo sul punto di acquisire nuove scuole con nuove funzionalità.",
            },
            child: {
                name: "single-image",
                media: {
                    type: "image",
                    url: YoomyImage4,
                },
            },
        },
    ],
};
