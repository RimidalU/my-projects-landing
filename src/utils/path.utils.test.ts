import { BASE_GITHUB_URL, getGitHabRepositoryUrl } from './path.utils'

describe('app utils', () => {
    const testSlug = 'testSlug'

    it('getGitHabRepositoryUrl util returns correct URL', () => {
        const expectedUrl = `${BASE_GITHUB_URL}/${testSlug}`

        expect(getGitHabRepositoryUrl(testSlug)).toBe(expectedUrl)
    })
})
