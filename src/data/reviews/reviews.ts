import { I18nValue } from "@/i18n/i18n";

export type Review = {
    companyName: string;
    logo: string;
    review: I18nValue;
    reviewer: string;
    role: I18nValue;
};

const YoomyReview: Review = {
    companyName: "Yoomy",
    logo: "/images/clients/icons/yoomy.svg",
    review: {
        en: "I recently entrusted the creation of my website to Iacopo Pazzaglia and I couldn't be more satisfied with the result! From the beginning, the team was extremely professional, attentive, and responsive to my needs.",
        it: "Ho recentemente affidato la creazione del mio sito web a Iacopo Pazzaglia e non potrei essere più soddisfatto del risultato! Sin dall'inizio, il team è stato estremamente professionale, attento e ricettivo alle mie esigenze.",
    },
    reviewer: "Yoomy Group",
    role: {
        en: "Yoomy team",
        it: "Team di Yoomy",
    },
};

const VoricelReview: Review = {
    companyName: "Voricel",
    logo: "/images/clients/icons/voricel.svg",
    review: {
        en: "Description 2.",
        it: "Descrizione 2.",
    },
    reviewer: "Farid Sanhaji",
    role: {
        en: "Founder of Voricel",
        it: "Fondatore di Voricel",
    },
};

const NaturaeFirenzeReview: Review = {
    companyName: "Naturae Firenze",
    logo: "/images/clients/icons/naturaeFirenze.svg",
    review: {
        en: "Description 3.",
        it: "Descrizione 3.",
    },
    reviewer: "Fabio Canestrini",
    role: {
        en: "Founder of Naturae Firenze",
        it: "Fondatore di Naturae Firenze",
    },
};

const SoftkeysReview: Review = {
    companyName: "Softkeys",
    logo: "/images/clients/icons/softKeys.svg",
    review: {
        en: "Description 4.",
        it: "Descrizione 4 per softkeys.",
    },
    reviewer: "Giulio Rossini",
    role: {
        en: "Owner of Softkeys",
        it: "Proprietario di Softkeys",
    },
};

const IReReview: Review = {
    companyName: "i'Re",
    logo: "/images/clients/icons/ire.svg",
    review: {
        en: "Description 5.",
        it: "Descrizione 5.",
    },
    reviewer: "Ettore Canestrini",
    role: {
        en: "Founder of I'Rè",
        it: "Fondatore di I'Rè",
    },
};

export const reviews: Review[] = [
    YoomyReview,
    VoricelReview,
    NaturaeFirenzeReview,
    SoftkeysReview,
    IReReview,
];
