import { IProject } from '@/models/project.model'

const mockProjectList: IProject[] = [
    {
        name: 'Example Project',
        description: 'This is an example project.',
        img: 'example-project',
        github: 'https://github.com/example/example-project',
        liveDemo: 'https://example-project.com',
        tools: ['React', 'TypeScript'],
        status: 'in progress',
    },
    {
        name: 'New Project',
        description: 'This is a new project that showcases advanced features.',
        img: 'new-project',
        github: 'https://github.com/example/new-project',
        liveDemo: 'https://new-project.com',
        tools: ['Vue', 'JavaScript'],
        status: 'is done',
    },
]

const mockClassName: string = 'mockClassName'
const mockRoute: string = 'mockRoute'

export { mockProjectList, mockClassName, mockRoute }
