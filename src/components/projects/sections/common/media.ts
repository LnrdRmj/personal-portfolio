export type MediaUrl = {
    url: string;
    type: "video" | "image";
};

import PlaceholderImage from "@/assets/placeholderImage.png";
import PlaceholderVideo from "@/assets/PlaceholderVideo.mp4";

export const placeholderVideoMedia: MediaUrl = {
    url: PlaceholderVideo,
    type: "video",
};
export const placeholderImageMedia: MediaUrl = {
    url: PlaceholderImage,
    type: "image",
};
