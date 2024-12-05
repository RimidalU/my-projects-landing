import Link from 'next/link'
import { use } from 'react'

import { PROJECTS } from '@/data/projects'
import { PAGE_REVALIDATE, StaticPageProps } from '@/models/common.model'

export const revalidate = PAGE_REVALIDATE

async function getProject(slug: string) {
    return PROJECTS.filter((project) => (project.img = slug))[0]
}

export default function ProjectPage({ params }: StaticPageProps) {
    const { name, description, github } = use(getProject(params.slug))

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
