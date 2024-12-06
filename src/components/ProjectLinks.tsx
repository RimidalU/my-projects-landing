import Link from 'next/link'
import React from 'react'

interface IProjectLinksProps {
    github: string
    liveDemo: string
}
function ProjectLinks({ github, liveDemo }: IProjectLinksProps) {
    return (
        <article className="flex flex-col">
            <h2>Links:</h2>
            {github && (
                <Link href={github} target={'_blank'} className="link">
                    📎 Project on GitHab
                </Link>
            )}
            {liveDemo && (
                <Link href={liveDemo} target={'_blank'} className="link">
                    📽️ Project live Demo
                </Link>
            )}
        </article>
    )
}

export default ProjectLinks
