import Link from 'next/link'

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

    const { name, description, github, liveDemo } = getProjectBySlug(slug)

    return (
        <>
            <h1 className="page-title ">{name}</h1>
            <p>{description}</p>
            {github && (
                <Link href={github} target={'_blank'} aria-label={name}>
                    Project on GitHab Link
                </Link>
            )}
            {liveDemo && (
                <Link href={liveDemo} target={'_blank'} aria-label={name}>
                    Project live Demo Link
                </Link>
            )}
        </>
    )
}
