import { PROJECTS } from '@/data/projects'
import { IProject } from '@/models/project.model'

const createProjectRepository = (projects: IProject[]) => {
    const getAllProjects = () => projects

    const getProjectBySlug = (slug: string) =>
        projects.filter((project) => project.slug === slug)[0]

    return { getAllProjects, getProjectBySlug }
}

const projectsRepository = createProjectRepository(PROJECTS)

export { projectsRepository }
