import { I18nValue } from "@/i18n/i18n";

export type Review = {
    companyName: string;
    logo: string;
    review: I18nValue;
    reviewer: string;
    role: I18nValue;
};

// TODO(leonardo): review draft copy — quote redrafted (previous one mentioned "Iacopo Pazzaglia")
export const YoomyReview: Review = {
    companyName: "Yoomy",
    logo: "/images/clients/icons/yoomy.svg",
    review: {
        en: "Leonardo followed the Yoomy platform from the very first line of code to the app stores. Reliable, fast, and always ready to propose the right solution: today the app runs in several schools with over a thousand users.",
        it: "Leonardo ha seguito la piattaforma Yoomy dalla prima riga di codice fino agli store. Affidabile, rapido e sempre pronto a proporre la soluzione giusta: oggi l'app è attiva in diverse scuole con oltre mille utenti.",
    },
    reviewer: "Yoomy Group",
    role: {
        en: "Yoomy team",
        it: "Team di Yoomy",
    },
};

// TODO(leonardo): review draft copy
const VoricelReview: Review = {
    companyName: "Voricel",
    logo: "/images/clients/icons/voricel.svg",
    review: {
        en: "Working with Leonardo was straightforward from day one: clear communication, on-time deliveries, and great attention to detail. He turned our ideas into a result that exceeded expectations.",
        it: "Lavorare con Leonardo è stato semplice fin dal primo giorno: comunicazione chiara, consegne puntuali e grande attenzione ai dettagli. Ha trasformato le nostre idee in un risultato oltre le aspettative.",
    },
    reviewer: "Farid Sanhaji",
    role: {
        en: "Founder of Voricel",
        it: "Fondatore di Voricel",
    },
};

// TODO(leonardo): review draft copy
export const NaturaeFirenzeReview: Review = {
    companyName: "Naturae Firenze",
    logo: "/images/clients/icons/naturaeFirenze.svg",
    review: {
        en: "We needed a showcase website that would truly represent us and be easy to find on Google. Leonardo handled everything — design, SEO, and domain — and the site now brings us new clients.",
        it: "Ci serviva un sito vetrina che ci rappresentasse davvero e fosse facile da trovare su Google. Leonardo si è occupato di tutto — design, SEO e dominio — e oggi il sito ci porta nuovi clienti.",
    },
    reviewer: "Fabio Canestrini",
    role: {
        en: "Founder of Naturae Firenze",
        it: "Fondatore di Naturae Firenze",
    },
};

// TODO(leonardo): review draft copy
const IReReview: Review = {
    companyName: "i'Re",
    logo: "/images/clients/icons/ire.svg",
    review: {
        en: "Professional, responsive, and genuinely invested in the project. Leonardo listened to our needs and delivered exactly what we had in mind — we would gladly work with him again.",
        it: "Professionale, disponibile e davvero coinvolto nel progetto. Leonardo ha ascoltato le nostre esigenze e ha consegnato esattamente ciò che avevamo in mente — lo sceglieremmo di nuovo senza esitazioni.",
    },
    reviewer: "Ettore Canestrini",
    role: {
        en: "Founder of I'Rè",
        it: "Fondatore di I'Rè",
    },
};

export const reviews: Review[] = [YoomyReview, VoricelReview, NaturaeFirenzeReview, IReReview];
