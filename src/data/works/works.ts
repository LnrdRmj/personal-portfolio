import { useTranslation } from "i18next-vue";
import { I18nValue, createI18ValueWithFromOne } from "../../i18n/i18n";

import YoomyBannerProject from "./assets/yoomyBannerProject.png";
import i18next from "i18next";

export type Skill = { name: string; color: string };
const skills: Record<string, Skill> = {
    web: { name: "WEB", color: "#79F7FF" },
    devops: { name: "DEVOPS", color: "#A7FF7D" },
    team: { name: "TEAM", color: "#79F7FF" },
    vue: { name: "VUE", color: "#A7FF7D" },
    app: { name: "APP", color: "#FF72E0" },
    react: { name: "REACT", color: "#CE90FF" },
} as const;

export interface Work {
    id: number;
    period: string;
    clientName: string;
    role: I18nValue;
    skills: Skill[]; // Skills array uses the Skill type
    bannerPath: string;
}
export function getWorks(): Work[] {
    const { t } = i18next;
    return [
        {
            id: 1,
            period: `2020 - ${t("worksSection.table.toNow")}`,
            clientName: "Stratos",
            role: {
                en: "Programmer",
                it: "Programmatore",
            },
            skills: [skills.web, skills.devops, skills.team],
            bannerPath: YoomyBannerProject,
        },
        {
            id: 2,
            period: `2022 - ${t("worksSection.table.toNow")}`,
            clientName: "Yoomy",
            role: createI18ValueWithFromOne("Fullstack developer"),
            skills: [skills.web, skills.vue, skills.app],
            bannerPath: YoomyBannerProject,
        },
        {
            id: 3,
            period: `2024 - ${t("worksSection.table.toNow")}`,
            clientName: "NGSensors",
            role: createI18ValueWithFromOne("Web developer"),
            skills: [skills.web, skills.react],
            bannerPath: YoomyBannerProject,
        },
        {
            id: 4,
            period: `2024 - ${t("worksSection.table.toNow")}`,
            clientName: "Paust Auction",
            role: createI18ValueWithFromOne("Web developer"),
            skills: [skills.vue, skills.web],
            bannerPath: YoomyBannerProject,
        },
    ];
}
