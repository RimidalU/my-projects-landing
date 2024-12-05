import { PROJECTS } from '@/data/projects'

const getAllProjects = () => PROJECTS
const getProjectBySlug = (slug: string) =>
    PROJECTS.filter((project) => project.img === slug)[0]

export { getAllProjects, getProjectBySlug }
