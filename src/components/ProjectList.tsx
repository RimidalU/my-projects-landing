import clsx from 'clsx'

import { IProject } from '@/models/project.model'

import ProjectCard from './ProjectCard'

interface IProjectProps {
    projects: IProject[]
    route: string
    className?: string
}
function ProjectList({ projects, route, className }: IProjectProps) {
    return (
        <ul className={clsx('flex flex-col gap-2', className)}>
            {projects.map((project) => (
                <ProjectCard
                    project={project}
                    route={route}
                    key={project.img}
                />
            ))}
        </ul>
    )
}

export default ProjectList
