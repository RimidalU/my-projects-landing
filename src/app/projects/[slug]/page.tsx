import ProjectLinks from '@/components/ProjectLinks'
import ProjectTools from '@/components/ProjectTools'
import { StaticPageProps } from '@/models/common.model'
import {
    getAllProjects,
    getProjectBySlug,
} from '@/repositories/projects.repository'

export const revalidate = 60

export async function generateStaticParams() {
    const projects = getAllProjects()

    return projects.map((project) => ({
        slug: String(project.img),
    }))
}

export default async function ProjectPage({ params }: StaticPageProps) {
    const { slug } = await params

    const { name, description, github, liveDemo, tools } =
        getProjectBySlug(slug)

    return (
        <>
            <h1 className="page-title">{name}</h1>
            <p>{description}</p>

            <ProjectLinks github={github} liveDemo={liveDemo} />

            {tools && <ProjectTools tools={tools} />}
        </>
    )
}
