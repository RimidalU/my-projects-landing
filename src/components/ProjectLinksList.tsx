import Link from 'next/link'
import React from 'react'

import { getGitHabRepositoryUrl } from '@/utils/path.utils'

interface IProjectLinksListProps {
    slug: string
    liveDemo: string
}

function ProjectLinksList({ slug, liveDemo }: IProjectLinksListProps) {
    const url = getGitHabRepositoryUrl(slug)

    return (
        <article className="flex flex-col">
            <h2>Links:</h2>
            {slug && (
                <Link href={url} target={'_blank'} className="link">
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

export default ProjectLinksList
