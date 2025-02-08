import DoubleImages, {
    Props as DoubleImagesProps,
} from "@/components/projects/sections/doubleImages/DoubleImages.vue";
import DoubleImagesWithText, {
    Props as DoubleImagesWithTextProps,
} from "@/components/projects/sections/doubleImagesWithText/DoubleImagesWithText.vue";
import SingleImage, {
    Props as SingleImageProps,
} from "@/components/projects/sections/singleImage/SingleImage.vue";
import TripleImages, {
    Props as TripleImagesProps,
} from "@/components/projects/sections/tripleImages/TripleImages.vue";
import WithTitle, {
    Props as WithTitleProps,
} from "@/components/projects/sections/withTitle/WithTitle.vue";
import { DefineComponent } from "vue";

type DoubleImageSection = {
    name: "double-image";
} & DoubleImagesProps;

type DoubleImageWithTextSection = {
    name: "double-image-with-text";
} & DoubleImagesWithTextProps;

type SingleImageSection = {
    name: "single-image";
} & SingleImageProps;

type TripleImagesSection = {
    name: "triple-image";
} & TripleImagesProps;

type PrimitiveSections =
    | DoubleImageSection
    | DoubleImageWithTextSection
    | SingleImageSection
    | TripleImagesSection;

type WithTitleSection = {
    name: "with-title";
} & WithTitleProps & {
        child: PrimitiveSections;
    };

export type ProjectSection = PrimitiveSections | WithTitleSection;

export const ProjectSectionToComponent = {
    "double-image": DoubleImages,
    "double-image-with-text": DoubleImagesWithText,
    "single-image": SingleImage,
    "triple-image": TripleImages,
    "with-title": WithTitle,
} satisfies Record<ProjectSection["name"], any>;

const example: ProjectSection[] = [
    {
        name: "single-image",
        media: {
            type: "video",
            url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
        },
    },
    {
        name: "with-title",
        description: "Some description",
        title: "Some title",
        child: {
            name: "double-image-with-text",
            title: "Some other title",
            description: "Some more description about this double images",
            medias: [
                {
                    type: "image",
                    url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                },
                {
                    type: "image",
                    url: "https://wallpapercat.com/w/full/9/9/7/2112823-3840x2160-desktop-4k-minimalist-wallpaper-image.jpg",
                },
            ],
        },
    },
];
