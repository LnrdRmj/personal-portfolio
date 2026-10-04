import { onMounted, ref, type Ref } from "vue";
import { siteConfigs } from "@/data/config/config";

/** Waits for the async recaptcha script (index.html) to be available. */
function waitForGrecaptcha(): Promise<Grecaptcha> {
    return new Promise((resolve) => {
        function check() {
            if (window.grecaptcha != null) {
                window.grecaptcha.ready(() => resolve(window.grecaptcha!));
                return;
            }
            setTimeout(check, 100);
        }
        check();
    });
}

/**
 * Renders a reCAPTCHA widget into `container` once mounted and resolves the
 * verification state reactively.
 */
export function useRecaptcha(
    container: Ref<HTMLElement | null>,
    onSuccess?: (token: string) => void,
) {
    const isValid = ref(false);

    onMounted(async () => {
        if (container.value == null) return;

        const grecaptcha = await waitForGrecaptcha();
        grecaptcha.render(container.value, {
            sitekey: siteConfigs.recaptchaSiteKey,
            callback: (token) => {
                if (typeof token !== "string" || token.length === 0) return;
                isValid.value = true;
                onSuccess?.(token);
            },
        });
    });

    return { isValid };
}
