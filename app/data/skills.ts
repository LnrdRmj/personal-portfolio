// Relative imports only: nuxt.config.ts imports this file, where ~ aliases don't resolve.
import type { Skill, SkillGroup } from '../../shared/types/content'

export const skillGroups: SkillGroup[] = [
    {
        id: 'languages',
        items: [
            { id: 'javascript', label: 'JavaScript', icon: 'simple-icons:javascript' },
            { id: 'typescript', label: 'TypeScript', icon: 'simple-icons:typescript' },
            { id: 'php', label: 'PHP', icon: 'simple-icons:php' },
            { id: 'java', label: 'Java', icon: 'simple-icons:openjdk' },
            { id: 'dart', label: 'Dart', icon: 'simple-icons:dart' },
        ],
    },
    {
        id: 'frameworks',
        items: [
            { id: 'vue', label: 'Vue', icon: 'simple-icons:vuedotjs' },
            { id: 'nuxt', label: 'Nuxt', icon: 'simple-icons:nuxt' },
            { id: 'react', label: 'React', icon: 'simple-icons:react' },
            { id: 'nodejs', label: 'Node.js', icon: 'simple-icons:nodedotjs' },
            { id: 'laravel', label: 'Laravel', icon: 'simple-icons:laravel' },
            { id: 'symfony', label: 'Symfony', icon: 'simple-icons:symfony' },
            { id: 'flutter', label: 'Flutter', icon: 'simple-icons:flutter' },
            { id: 'capacitor', label: 'Capacitor', icon: 'simple-icons:capacitor' },
            { id: 'tailwind', label: 'Tailwind CSS', icon: 'simple-icons:tailwindcss' },
        ],
    },
    {
        id: 'tools',
        items: [
            { id: 'git', label: 'Git', icon: 'simple-icons:git' },
            { id: 'docker', label: 'Docker', icon: 'simple-icons:docker' },
            { id: 'firebase', label: 'Firebase', icon: 'simple-icons:firebase' },
            { id: 'leaflet', label: 'Leaflet', icon: 'simple-icons:leaflet' },
            { id: 'jest', label: 'Jest', icon: 'simple-icons:jest' },
            {
                id: 'search-console',
                label: 'Google Search Console',
                icon: 'simple-icons:googlesearchconsole',
            },
        ],
    },
    {
        // TODO(leonardo): keep only the AI tools you actually use with clients.
        id: 'ai',
        items: [
            { id: 'claude', label: 'Claude API', icon: 'simple-icons:claude' },
            { id: 'openai', label: 'OpenAI API', icon: 'simple-icons:openai' },
            { id: 'mcp', label: 'Model Context Protocol', icon: 'simple-icons:modelcontextprotocol' },
            { id: 'claude-code', label: 'Claude Code', icon: 'simple-icons:claudecode' },
            { id: 'copilot', label: 'GitHub Copilot', icon: 'simple-icons:githubcopilot' },
        ],
    },
]

const skillsById = new Map<string, Skill>(
    skillGroups.flatMap((group) => group.items.map((skill) => [skill.id, skill] as const)),
)

export function getSkill(id: string): Skill | undefined {
    return skillsById.get(id)
}

/** Every icon the data references; the icon module can't discover these by scanning templates. */
export const skillIconNames = skillGroups.flatMap((group) => group.items.map((skill) => skill.icon))
