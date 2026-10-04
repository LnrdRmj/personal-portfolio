import { ProjectSection } from "@/services/project/project";
import { t } from "i18next";
import { I18nValue } from "../../i18n/i18n";
import { Skill } from "./projectSkills";
import { YoomyProject } from "./yoomy/yoomyProject";
import { TrackOneProject } from "./trackone/trackoneProject";
import { NaturaeProject } from "./naturae/naturaeProject";

export interface Project {
    id: number;
    period: {
        startYear: number;
        endYear?: number;
    };
    clientName: string;
    role: I18nValue;
    skills: Skill[];
    // Banner images must be of 3840x1440 or have the same aspect ratio (2,67)
    bannerPath: string;
    description: I18nValue;
    sections: ProjectSection[];
}

// Resolves with the language active at call time: wrap calls in a computed
// depending on useCurrentLanguage() to make them reactive.
export function getProjectPeriodString(period: Project["period"]) {
    return `${period.startYear} - ${period.endYear ?? t("worksSection.table.toNow")}`;
}

export const works: Project[] = [YoomyProject, TrackOneProject, NaturaeProject];

export const featuredWorks: Project[] = works;

export function getProjectById(id: number): Project | undefined {
    return works.find((work) => work.id === id);
}
