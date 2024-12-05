import Link from 'next/link'

import { PROJECTS } from '@/data/projects'

export default function HomePage() {
    return (
        <>
            <h1>My Projects List</h1>
            <ul>
                {PROJECTS.map((project) => (
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
