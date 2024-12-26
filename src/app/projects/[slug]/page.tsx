import clsx from 'clsx'

import ArticleLayout from '@/components/ArticleLayout'
import ProjectLinksList from '@/components/ProjectLinksList'
import ProjectTools from '@/components/ProjectTools'
import { StaticPagePropsParams } from '@/models/common.model'
import { projectsRepository } from '@/repositories/projects.repository'
import { getProjectInterfaceTourVideoUrl } from '@/utils/path.utils'
import CustomImage from '@/components/CustomImage'

export const revalidate = 60

export async function generateStaticParams() {
    const projects = await projectsRepository.getAllProjects()

    return projects.map((project) => ({
        slug: String(project.slug),
    }))
}

export default async function ProjectPage({
    params,
}: {
    params: StaticPagePropsParams
}) {
    const { slug } = await params
    const className = ''

    const { name, description, liveDemo, tools } =
        projectsRepository.getProjectBySlug(slug)

    return (
        <>
            <h1 className="page-title">{name}</h1>
            <section
                aria-label={`Project ${name} info`}
                className={clsx(
                    'w-full grid grid-cols-12 gap-4 justify-center',
                    className
                )}
            >
                <ArticleLayout className="col-span-full xl:col-span-7 row-span-2 flex-col">
                    <p>Project interface tour</p>
                    <CustomImage
                        src={getProjectInterfaceTourVideoUrl(slug)}
                        alt="Description of image"
                        className="w-full"
                        width={800}
                        height={600}
                    />
                </ArticleLayout>

                <ArticleLayout className="col-span-full xl:col-span-5 flex-col">
                    <p>{description}</p>
                </ArticleLayout>

                <ArticleLayout className="col-span-full xl:col-span-5 flex-col">
                    <ProjectLinksList slug={slug} liveDemo={liveDemo} />
                </ArticleLayout>

                <ArticleLayout className="col-span-full flex-col">
                    {tools && <ProjectTools tools={tools} />}
                </ArticleLayout>

                <ArticleLayout className="col-span-full flex-col">
                    {'Images'}
                </ArticleLayout>
            </section>
        </>
    )
}
