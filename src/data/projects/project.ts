import { I18nValue, createI18ValueWithFromOne } from "../../i18n/i18n";

import i18next from "i18next";
import YoomyBannerProject from "./assets/yoomyBannerProject.png";
import { ProjectSection } from "@/services/project/project";

export type Skill = { name: string; color: string };
const skills: Record<string, Skill> = {
    web: { name: "WEB", color: "#79F7FF" },
    devops: { name: "DEVOPS", color: "#A7FF7D" },
    team: { name: "TEAM", color: "#79F7FF" },
    vue: { name: "VUE", color: "#A7FF7D" },
    app: { name: "APP", color: "#FF72E0" },
    react: { name: "REACT", color: "#CE90FF" },
} as const;

export interface Project {
    id: number;
    period: string;
    clientName: string;
    role: I18nValue;
    skills: Skill[];
    bannerPath: string;
    description: I18nValue;
    sections: ProjectSection[];
}
export function getWorks(): Project[] {
    const { t } = i18next;
    return [
        {
            id: 1,
            period: `2020 - ${t("worksSection.table.toNow")}`,
            clientName: "Yoomy",
            role: {
                en: "Programmer",
                it: "Programmatore",
            },
            skills: [skills.web, skills.devops, skills.team],
            bannerPath: YoomyBannerProject,
            description: {
                en: "Start-up Project for an Application, Development of a Brand Identity<br> suitable for the Target Audience, and Creation of Advertising and Social Media Materials.",
                it: "Progetto Start-up di un'Applicazione, Studio di una Brand Identity<br> adeguata al Target e Realizzazione di Materiale Pubblicitario e Social.",
            },
            sections: [
                {
                    name: "single-image",
                    media: {
                        type: "image",
                        url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                    },
                },
                {
                    name: "with-title",
                    description: "Some description",
                    title: "Some title",
                    child: {
                        name: "double-image-with-text",
                        title: "Some other title",
                        description: "Some more description about this double images",
                        medias: [
                            {
                                type: "image",
                                url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                            },
                            {
                                type: "image",
                                url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                            },
                        ],
                    },
                },
            ],
        },
        {
            id: 2,
            period: `2022 - ${t("worksSection.table.toNow")}`,
            clientName: "Yoomy",
            role: createI18ValueWithFromOne("Fullstack developer"),
            skills: [skills.web, skills.vue, skills.app],
            bannerPath: YoomyBannerProject,
            description: {
                en: "Start-up Project for an Application, Development of a Brand Identity suitable for the Target Audience, and Creation of Advertising and Social Media Materials.",
                it: "Progetto Start-up di un'Applicazione, Studio di una Brand Identity adeguata al Target e Realizzazione di Materiale Pubblicitario e Social.",
            },
            sections: [
                {
                    name: "single-image",
                    media: {
                        type: "video",
                        url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                    },
                },
                {
                    name: "with-title",
                    description: "Some description",
                    title: "Some title",
                    child: {
                        name: "double-image-with-text",
                        title: "Some other title",
                        description: "Some more description about this double images",
                        medias: [
                            {
                                type: "image",
                                url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                            },
                            {
                                type: "image",
                                url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                            },
                        ],
                    },
                },
            ],
        },
        {
            id: 3,
            period: `2024 - ${t("worksSection.table.toNow")}`,
            clientName: "NGSensors",
            role: createI18ValueWithFromOne("Web developer"),
            skills: [skills.web, skills.react],
            bannerPath: YoomyBannerProject,
            description: {
                en: "Start-up Project for an Application, Development of a Brand Identity suitable for the Target Audience, and Creation of Advertising and Social Media Materials.",
                it: "Progetto Start-up di un'Applicazione, Studio di una Brand Identity adeguata al Target e Realizzazione di Materiale Pubblicitario e Social.",
            },
            sections: [
                {
                    name: "single-image",
                    media: {
                        type: "video",
                        url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                    },
                },
                {
                    name: "with-title",
                    description: "Some description",
                    title: "Some title",
                    child: {
                        name: "double-image-with-text",
                        title: "Some other title",
                        description: "Some more description about this double images",
                        medias: [
                            {
                                type: "image",
                                url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                            },
                            {
                                type: "image",
                                url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                            },
                        ],
                    },
                },
            ],
        },
        {
            id: 4,
            period: `2024 - ${t("worksSection.table.toNow")}`,
            clientName: "Paust Auction",
            role: createI18ValueWithFromOne("Web developer"),
            skills: [skills.vue, skills.web],
            bannerPath: YoomyBannerProject,
            description: {
                en: "Start-up Project for an Application, Development of a Brand Identity suitable for the Target Audience, and Creation of Advertising and Social Media Materials.",
                it: "Progetto Start-up di un'Applicazione, Studio di una Brand Identity adeguata al Target e Realizzazione di Materiale Pubblicitario e Social.",
            },
            sections: [
                {
                    name: "single-image",
                    media: {
                        type: "video",
                        url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                    },
                },
                {
                    name: "with-title",
                    description: "Some description",
                    title: "Some title",
                    child: {
                        name: "double-image-with-text",
                        title: "Some other title",
                        description: "Some more description about this double images",
                        medias: [
                            {
                                type: "image",
                                url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                            },
                            {
                                type: "image",
                                url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                            },
                        ],
                    },
                },
            ],
        },
    ];
}
