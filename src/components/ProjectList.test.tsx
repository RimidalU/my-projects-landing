import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { IProject } from '@/models/project.model'

import ProjectList from './ProjectList'

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

describe('ProjectList', () => {
    it('has list of projects', () => {
        jest.mock('./ProjectCard', () => {
            return function MockedProjectCard({
                mockProject,
            }: {
                mockProject: IProject
            }) {
                return <li>{mockProject.name}</li>
            }
        })

        render(
            <ProjectList
                projects={mockProjectList}
                route={mockRoute}
                className={mockClassName}
            />
        )

        const list = screen.getByRole('list')

        expect(list).toBeInTheDocument()

        expect(screen.getByText('Example Project')).toBeInTheDocument()
        expect(screen.getByText('New Project')).toBeInTheDocument()
    })

    it('ul has the correct CSS classes', () => {
        render(
            <ProjectList
                projects={mockProjectList}
                route={mockRoute}
                className={mockClassName}
            />
        )
        const list = screen.getByRole('list')
        expect(list).toHaveClass(`flex flex-col gap-2 ${mockClassName}`)
    })
})
