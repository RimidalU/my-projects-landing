import Link from 'next/link'

import Footer from '@/components/Footer'
import { PROJECTS } from '@/data/projects'

export default function HomePage() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
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
            </main>
            <Footer />
        </div>
    )
}
