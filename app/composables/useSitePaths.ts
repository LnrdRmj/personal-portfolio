/** Localized links to project pages and to the home page's sections. */
export function useSitePaths() {
    const localePath = useLocalePath()

    return {
        home: () => localePath('/'),
        section: (id: string) => ({ path: localePath('/'), hash: `#${id}` }),
        project: (slug: string) => localePath({ name: 'projects-slug', params: { slug } }),
        privacy: () => localePath('/privacy'),
    }
}
