import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { IProject } from '@/models/project.model'

import ProjectCard from './ProjectCard'

const mockProject: IProject = {
    name: 'Example Project',
    description: 'This is an example project.',
    img: 'example-project',
    github: 'https://github.com/example/example-project',
    liveDemo: 'https://example-project.com',
    tools: ['React', 'TypeScript'],
    status: 'in progress',
}

const projectCardMockProps = {
    project: mockProject,
    route: 'gjk',
    className: 'custom-class',
}

describe('ProjectCard', () => {
    const { className, project, route } = projectCardMockProps

    it('has the correct link to current project page', () => {
        render(
            <ProjectCard
                project={projectCardMockProps.project}
                route={projectCardMockProps.route}
                className={projectCardMockProps.className}
            />
        )

        const linkElement = screen.getByText(project.name)

        expect(linkElement).toHaveRole('link')
        expect(linkElement).toHaveAttribute('href', `/${route}/${project.img}`)
        expect(linkElement).toHaveAttribute(
            'aria-label',
            `View details of project: ${project.name}`
        )
        expect(linkElement).toHaveClass(
            `block border-2 px-5 py-1 active-item ${className}`
        )
    })
})
