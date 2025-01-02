const BASE_GITHUB_URL = 'https://github.com/RimidalU'

const getGitHabRepositoryUrl = (slug: string): string =>
    `${BASE_GITHUB_URL}/${slug}`

const getProjectInterfaceTourVideoUrl = (slug: string): string =>
    `/projects/${slug}/demo.webp`

const getProjectImgUrl = (slug: string, imgName: string): string =>
    `/projects/${slug}/${imgName}`

export {
    getGitHabRepositoryUrl,
    getProjectInterfaceTourVideoUrl,
    getProjectImgUrl,
    BASE_GITHUB_URL,
}
