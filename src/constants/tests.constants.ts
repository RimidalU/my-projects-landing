import { IProject } from '@/models/project.model'
import { ProjectTool } from '@/models/projectTool.model'

const mockProjectList: IProject[] = [
    {
        name: 'Example Project',
        description: 'This is an example project.',
        slug: 'example-project',
        liveDemo: 'https://example-project.com',
        tools: [ProjectTool.React, ProjectTool.TypeScript],
        mainTools: [ProjectTool.React],
        status: 'in progress',
        img: ['1.png'],
    },
    {
        name: 'New Project',
        description: 'This is a new project that showcases advanced features.',
        slug: 'new-project',
        liveDemo: 'https://new-project.com',
        tools: [ProjectTool.Leaflet, ProjectTool.Jest],
        mainTools: [ProjectTool.React],
        status: 'completed',
        img: ['1.png'],
    },
]

const mockClassName: string = 'mockClassName'
const mockRoute: string = 'mockRoute'

export { mockProjectList, mockClassName, mockRoute }
