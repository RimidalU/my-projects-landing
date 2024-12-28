import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'

import { IProject } from '@/models/project.model'

import MainProjectTools from './MainProjectTools'

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
                    'flex border-2 px-5 py-1 gap-5 items-center active-item hover:active-hover',
                    className
                )}
                aria-label={`View details of project: ${project.name}`}
            >
                <MainProjectTools mainTools={project.mainTools} />
                {project.name}
            </Link>
        </li>
    )
}

export default ProjectCard
