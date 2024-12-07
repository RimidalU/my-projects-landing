import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

import { IProject } from '@/models/project.model'

interface IProjectCardProps {
    project: IProject
    route: string
    className?: string
}

function ProjectCard({ project, route, className }: IProjectCardProps) {
    return (
        <li>
            <Link
                href={`/${route}/${project.slug}`}
                className={clsx(
                    'block border-2 px-5 py-1 active-item',
                    className
                )}
                aria-label={`View details of project: ${project.name}`}
            >
                {project.name}
            </Link>
        </li>
    )
}

export default ProjectCard
