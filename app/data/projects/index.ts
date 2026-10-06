import type { Project } from '../../../shared/types/content'
import { naturae } from './naturae'
import { trackone } from './trackone'
import { yoomy } from './yoomy'

/** Display order on the home page. */
export const projects: Project[] = [yoomy, trackone, naturae]

export function getProject(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug)
}
