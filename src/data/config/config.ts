export const configs = {
    language: {
        animationName: "change-language-animation",
        enableAnimation: true,
    },
    site: {
        name: "Leonardo Ramaj",
        contactInfo: {
            email: "leonardo@ramaj.dev",
            phone: "+39 327 955 1219",
            phoneNoSpace: "393279551219",
        },
        // TODO(leonardo): fill in your real profile URLs
        socials: [
            { name: "Linkedin", url: "https://www.linkedin.com/in/leonardo-ramaj" },
            { name: "GitHub", url: "https://github.com/LnrdRmj" },
            { name: "Instagram", url: "https://www.instagram.com/leonardo.ramaj" },
        ],
        fiscalData: {
            VAT: "02610360972",
            address: {
                street: "Via Jacopo da Lentini",
                streetNumber: "17",
                city: "Prato",
                province: "PO",
                postalCode: "59100",
            },
        },
        showTechnologiesSlider: true,
        captchaForPhoneNumber: true,
        recaptchaSiteKey: "6LeCU_UqAAAAADWDz8xukf9Oz7_pU27yLV6yrvvo",
    },
};

export const siteConfigs = configs.site;
