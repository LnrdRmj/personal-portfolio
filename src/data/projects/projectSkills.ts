export type Skill = { name: string; color: string };

export const projectSkills = {
    web: { name: "WEB", color: "#79F7FF" },
    devops: { name: "DEVOPS", color: "#A7FF7D" },
    team: { name: "TEAM", color: "#79F7FF" },
    vue: { name: "VUE", color: "#A7FF7D" },
    nuxt: { name: "NUXT", color: "#00DC82" },
    app: { name: "APP", color: "#FF72E0" },
    react: { name: "REACT", color: "#CE90FF" },
    docker: { name: "DOCKER", color: "#2496ED" },
} satisfies Record<string, Skill>;
