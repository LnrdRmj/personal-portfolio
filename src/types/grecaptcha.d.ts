// Minimal typings for the Google reCAPTCHA v2 explicit-render API
// https://developers.google.com/recaptcha/docs/display

interface GrecaptchaRenderParameters {
    sitekey: string;
    callback?: (responseToken: string) => void;
    "expired-callback"?: () => void;
    "error-callback"?: () => void;
    theme?: "light" | "dark";
    size?: "normal" | "compact";
}

interface Grecaptcha {
    ready(callback: () => void): void;
    render(container: HTMLElement, parameters: GrecaptchaRenderParameters): number;
    reset(widgetId?: number): void;
}

interface Window {
    grecaptcha?: Grecaptcha;
}
