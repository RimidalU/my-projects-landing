import Link from 'next/link'
import React from 'react'

import { IProject } from '@/models/project.model'

interface IProjectCardProps {
    project: IProject
    route: string
}

function ProjectCard({ project, route }: IProjectCardProps) {
    return (
        <li>
            <Link
                href={`/${route}/${project.img}`}
                aria-label={`View details of project: ${project.name}`}
            >
                {project.name}
            </Link>
        </li>
    )
}

export default ProjectCard
