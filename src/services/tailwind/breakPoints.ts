import { useWindowSize } from "@vueuse/core";
import { computed } from "vue";

// Adjust these based on tailwind screen sizes. Remember to update if changed in tailwind's theme
const screens = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
};
type ConfigScreenSizes = keyof typeof screens;
type DefaultScreenSize = "default";
type ScreenSizes = DefaultScreenSize | ConfigScreenSizes;

const orderedScreenSizes = getOrderedScreenSizes();

function getOrderedScreenSizes(): ConfigScreenSizes[] {
    return (
        Object.entries(screens)
            .sort((a, b) => {
                return getValueFromPixelString(a[1]) - getValueFromPixelString(b[1]);
            })
            // Map values to keys
            .map((el) => el[0]) as ConfigScreenSizes[]
    );
}

export function useTailwindActiveScreenSize() {
    const { width } = useWindowSize();

    return computed(() => {
        return getActiveTailwindScreenSize(width.value);
    });
}

export function useScreenSizeIsActive(screenSize: ScreenSizes) {
    const activeScreenSize = useTailwindActiveScreenSize();
    return computed(() => {
        const activeScreenSizePosition = orderedScreenSizes.findIndex(
            (el) => el == activeScreenSize.value
        );
        const screenSizePosition = orderedScreenSizes.findIndex((el) => el == screenSize);

        return screenSizePosition == -1
            ? true // Default screen size is always active
            : activeScreenSizePosition >= screenSizePosition;
    });
}

export function getActiveTailwindScreenSize(width: number): ScreenSizes {
    let result: ScreenSizes = "default";
    for (let screenSize of orderedScreenSizes) {
        if (getValueFromPixelString(screens[screenSize]) < width) {
            result = screenSize;
        } else {
            return result;
        }
    }
    return result;
}

// Input is something like: "1200px"
// This method extrapolates the number 1200
function getValueFromPixelString(pixelValue: string) {
    return +pixelValue.substring(0, pixelValue.length - 2);
}
