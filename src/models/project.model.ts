import { ProjectTool } from './projectTool.model'

type ProjectStatus = 'in progress' | 'completed'

interface IProject {
    name: string
    description: string
    slug: string
    liveDemo?: string
    img: string[]
    tools: ProjectTool[]
    mainTools: ProjectTool[]
    status: ProjectStatus
}

export type { IProject }
