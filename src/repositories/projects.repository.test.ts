import { mockProjectList } from '@/constants/tests.constants'

import { projectsRepository } from './projects.repository'

jest.mock('@/data/projects', () => ({
    PROJECTS: mockProjectList,
}))

describe('projectsRepository', () => {
    describe('getAllProjects', () => {
        it('should return all projects', () => {
            const allProjects = projectsRepository.getAllProjects()
            expect(allProjects).toEqual(mockProjectList)
        })
    })

    describe('getProjectBySlug', () => {
        it('should return the correct project for a valid slug', () => {
            const project = projectsRepository.getProjectBySlug(
                mockProjectList[0].img
            )
            expect(project).toEqual(mockProjectList[0])
        })

        it('should return undefined for an invalid slug', () => {
            const project = projectsRepository.getProjectBySlug('invalid-slug')
            expect(project).toBeUndefined()
        })
    })
})
