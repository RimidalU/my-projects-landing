import Link from 'next/link'
import clsx from 'clsx'

import { IProject } from '@/models/project.model'

interface IProjectProps {
    projects: IProject[]
    route: string
    className?: string
}
function ProjectList({ projects, route, className }: IProjectProps) {
    return (
        <ul className={clsx('flex flex-col gap-2', className)}>
            {projects.map((project) => (
                <li key={project.img}>
                    <Link href={`/${route}/${project.img}`}>
                        {project.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default ProjectList
