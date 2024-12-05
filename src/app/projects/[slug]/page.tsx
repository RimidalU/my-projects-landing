import Link from 'next/link'

import { PROJECTS } from '@/data/projects'
import { PAGE_REVALIDATE, StaticPageProps } from '@/models/common.model'

export const revalidate = PAGE_REVALIDATE

async function getProject(slug: string) {
    return PROJECTS.filter((project) => project.img === slug)[0]
}

export async function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: String(project.img),
    }))
}

export default async function ProjectPage({ params }: StaticPageProps) {
    const { slug } = await params

    const { name, description, github } = await getProject(slug)

    return (
        <>
            <h1>{name}</h1>
            <p>{description}</p>
            {github && (
                <Link href={github} target={'_blank'} aria-label={name}>
                    Project on GitHab Link
                </Link>
            )}
        </>
    )
}
