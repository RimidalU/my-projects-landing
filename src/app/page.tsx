import Link from 'next/link'

import { getAllProjects } from '@/repositories/projects.repository'

export default function HomePage() {
    const projects = getAllProjects()

    return (
        <>
            <h1>My Projects List</h1>
            <ul>
                {projects.map((project) => (
                    <li key={project.img}>
                        <Link href={`/projects/${project.img}`}>
                            {project.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
