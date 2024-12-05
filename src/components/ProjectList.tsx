import Link from 'next/link'

import { IProject } from '@/models/project.model'

interface IProjectProps {
    projects: IProject[]
    route: string
}
function ProjectList({ projects, route }: IProjectProps) {
    return (
        <ul>
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
