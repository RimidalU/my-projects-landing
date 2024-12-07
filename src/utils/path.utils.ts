const BASE_GITHUB_URL = 'https://github.com/RimidalU'

const getGitHabRepositoryUrl = (slug: string): string =>
    `${BASE_GITHUB_URL}/${slug}`

export { getGitHabRepositoryUrl }
