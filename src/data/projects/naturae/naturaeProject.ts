import { createI18ValueFromOne } from "@/i18n/i18n";
import { Project } from "../project";
import { projectSkills } from "../projectSkills";

import NaturaeBanner from "./assets/NaturaeProjectBanner.png";

export const NaturaeProject: Project = {
    id: 123478901234789,
    period: {
        startYear: 2024,
        endYear: 2025,
    },
    clientName: "Naturae",
    role: createI18ValueFromOne("Frontend Developer"),
    skills: [projectSkills.web, projectSkills.vue, projectSkills.nuxt],
    bannerPath: NaturaeBanner,
    description: {
        en: "Landing page for the Naturae team",
        it: "Landing page per il team Naturae",
    },
    sections: [],
};
