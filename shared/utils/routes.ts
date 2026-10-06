// Must mirror the paths declared in definePageMeta of app/pages/projects/[slug].vue.
export function projectPaths(slug: string) {
    return { it: `/progetti/${slug}`, en: `/en/projects/${slug}` }
}

/** Sitemap entries with hreflang alternates; the module can't derive these for meta-defined paths. */
export function projectSitemapEntries(slug: string) {
    const { it, en } = projectPaths(slug)
    const alternatives = [
        { hreflang: 'it-IT', href: it },
        { hreflang: 'en-US', href: en },
        { hreflang: 'x-default', href: it },
    ]
    return [
        { loc: it, alternatives },
        { loc: en, alternatives },
    ]
}
