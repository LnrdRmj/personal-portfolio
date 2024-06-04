import { useTranslation } from "i18next-vue"

const skills = {
    web: { name: 'WEB', color: '#79F7FF' },
    devops: { name: 'DEVOPS', color: '#A7FF7D' },
    team: { name: 'TEAM', color: '#79F7FF' },
    vue: { name: 'VUE', color: '#A7FF7D' },
    app: { name: 'APP', color: '#FF72E0' },
    react: { name: 'REACT', color: '#CE90FF' },
}

export function getWorks(translationObject: ReturnType<typeof useTranslation>) {
    const t = translationObject.i18next.t
    return [
        {
            period: `2020 - ${t('worksSection.table.toNow')}`,
            clientName: 'Stratos',
            role: 'Programmer',
            skills: [
                skills.web,
                skills.devops,
                skills.team,
            ]
        },
        {
            period: `2022 - ${t('worksSection.table.toNow')}`,
            clientName: 'Yoomy',
            role: 'Fullstack developer',
            skills: [
                skills.web,
                skills.vue,
                skills.app,
            ]
        },
        {
            period: `2024 - ${t('worksSection.table.toNow')}`,
            clientName: 'NGSensors',
            role: 'Web developer',
            skills: [
                skills.web,
                skills.react,
            ]
        },
        {
            period: `2024 - ${t('worksSection.table.toNow')}`,
            clientName: 'Paust Auction',
            role: 'Web developer',
            skills: [
                skills.vue,
                skills.web,
            ]
        },
    ]
}