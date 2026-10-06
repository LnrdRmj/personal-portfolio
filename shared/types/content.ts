export type Locale = 'it' | 'en'

/** A value translated into every site language. */
export type Localized<T = string> = Record<Locale, T>

export interface Media {
    type: 'image' | 'video'
    /**
     * Image: id of the source file under images/ without extension (e.g. projects/yoomy/banner).
     * Video: its URL, served through the /v/ range route (e.g. /v/trackone/devices.mp4).
     */
    src: string
    alt: Localized
    width: number
    height: number
    /** Videos only: a still frame shown before playback. */
    poster?: string
}

export interface TextBlock {
    paragraphs: Localized<string[]>
    bullets?: Localized<string[]>
}

export type Section =
    | { kind: 'media'; media: Media }
    | { kind: 'media-grid'; media: Media[] }
    | {
          kind: 'media-with-text'
          media: Media
          title: Localized
          text: TextBlock
          textPosition?: 'left' | 'right'
      }
    | { kind: 'titled'; title: Localized; text: TextBlock; child?: Section }

export interface Project {
    slug: string
    client: string
    period: { start: number; end?: number }
    role: Localized
    /** One sentence, also used as the meta description. */
    summary: Localized
    stack: string[]
    banner: Media
    sections: Section[]
}

export interface Skill {
    id: string
    label: string
    /** Iconify name, e.g. simple-icons:vuedotjs */
    icon: string
}

export interface SkillGroup {
    id: 'languages' | 'frameworks' | 'tools' | 'ai'
    items: Skill[]
}

export interface SocialLink {
    id: string
    label: string
    url: string
    icon: string
}
