import {
    BASE_GITHUB_URL,
    getGitHabRepositoryUrl,
    getProjectInterfaceTourVideoUrl,
} from './path.utils'

describe('app utils', () => {
    const testSlug = 'testSlug'

    it('getGitHabRepositoryUrl util returns correct URL', () => {
        const expectedUrl = `${BASE_GITHUB_URL}/${testSlug}`

        expect(getGitHabRepositoryUrl(testSlug)).toBe(expectedUrl)
    })

    it('getProjectInterfaceTourVideoUrl util returns correct URL', () => {
        const expectedUrl = `/projects/${testSlug}/demo.webp`

        expect(getProjectInterfaceTourVideoUrl(testSlug)).toBe(expectedUrl)
    })
})
