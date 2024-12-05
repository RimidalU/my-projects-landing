import Link from 'next/link'
import { use } from 'react'

import Footer from '@/components/Footer'
import { PROJECTS } from '@/data/projects'

export const revalidate = 60

interface ProjectProps {
    params: {
        slug: string
    }
}

async function getProject(slug: string) {
    return PROJECTS.filter((project) => (project.img = slug))[0]
}

export default function ProjectPage({ params }: ProjectProps) {
    const { name, description, github } = use(getProject(params.slug))

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1>{name}</h1>
                <p>{description}</p>
                {github && (
                    <Link href={github} target={'_blank'} aria-label={name}>
                        Project on GitHab Link
                    </Link>
                )}
            </main>
            <Footer />
        </div>
    )
}
