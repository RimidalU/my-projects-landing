import ProjectLinksList from '@/components/ProjectLinksList'
import ProjectTools from '@/components/ProjectTools'
import { StaticPagePropsParams } from '@/models/common.model'
import { projectsRepository } from '@/repositories/projects.repository'

export const revalidate = 60

export async function generateStaticParams() {
    const projects = await projectsRepository.getAllProjects()

    return projects.map((project) => ({
        slug: String(project.slug),
    }))
}

export default async function ProjectPage({
    params,
}: {
    params: StaticPagePropsParams
}) {
    const { slug } = await params

    const { name, description, liveDemo, tools } =
        projectsRepository.getProjectBySlug(slug)

    return (
        <>
            <h1 className="page-title">{name}</h1>
            <p>{description}</p>

            <ProjectLinksList slug={slug} liveDemo={liveDemo} />

            {tools && <ProjectTools tools={tools} />}
        </>
    )
}
