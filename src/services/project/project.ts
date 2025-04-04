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
import ImageWithText, {
    Props as ImageWithTextProps,
} from "@/components/projects/sections/imageWithText/ImageWithText.vue";

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

type ImageWithTextSection = {
    name: "single-image-with-text";
} & ImageWithTextProps;

type PrimitiveSections =
    | DoubleImageSection
    | DoubleImageWithTextSection
    | SingleImageSection
    | TripleImagesSection
    | ImageWithTextSection;

export type WithTitleSection = {
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
    "single-image-with-text": ImageWithText,
} satisfies Record<ProjectSection["name"], any>;
