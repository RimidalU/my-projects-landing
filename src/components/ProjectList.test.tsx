import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { IProject } from '@/models/project.model'
import {
    mockClassName,
    mockProjectList,
    mockRoute,
} from '@/constants/tests.constants'

import ProjectList from './ProjectList'

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
