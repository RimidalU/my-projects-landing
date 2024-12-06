import ProjectLinks from '@/components/ProjectLinks'
import { PAGE_REVALIDATE, StaticPageProps } from '@/models/common.model'
import {
    getAllProjects,
    getProjectBySlug,
} from '@/repositories/projects.repository'

export const revalidate = PAGE_REVALIDATE

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

            {tools && (
                <article>
                    <h2>Tools Used:</h2>
                    <ul>
                        {tools.map((tool) => (
                            <li key={tool}>{`🛠️ ${tool}`}</li>
                        ))}
                    </ul>
                </article>
            )}
        </>
    )
}
