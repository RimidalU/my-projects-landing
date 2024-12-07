import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import {
    mockClassName,
    mockProjectList,
    mockRoute,
} from '@/constants/tests.constants'

import ProjectCard from './ProjectCard'

const projectCardMockProps = {
    project: mockProjectList[0],
    route: mockRoute,
    className: mockClassName,
}

describe('ProjectCard', () => {
    const { className, project, route } = projectCardMockProps

    it('has the correct link to current project page', () => {
        render(
            <ProjectCard
                project={project}
                route={route}
                className={className}
            />
        )

        const linkElement = screen.getByText(mockProjectList[0].name)

        expect(linkElement).toHaveRole('link')
        expect(linkElement).toHaveAttribute(
            'href',
            `/${mockRoute}/${mockProjectList[0].slug}`
        )
        expect(linkElement).toHaveAttribute(
            'aria-label',
            `View details of project: ${mockProjectList[0].name}`
        )
        expect(linkElement).toHaveClass(
            `block border-2 px-5 py-1 active-item ${mockClassName}`
        )
    })
})
