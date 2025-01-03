import clsx from 'clsx'

import ArticleLayout from '@/components/ArticleLayout'
import ProjectLinksList from '@/components/ProjectLinksList'
import ProjectTools from '@/components/ProjectTools'
import { StaticPagePropsParams } from '@/models/common.model'
import { projectsRepository } from '@/repositories/projects.repository'
import {
    getProjectImgUrl,
    getProjectInterfaceTourVideoUrl,
} from '@/utils/path.utils'
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

    const { name, description, liveDemo, tools, img } =
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
                        // className={
                        //     tools.includes(ProjectTool.Flutter)
                        //         ? ''
                        //         : ''
                        // }
                        width={800}
                        height={200}
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
                    <ul
                        className={clsx(
                            'flex flex-row justify-center flex-wrap gap-2',
                            className
                        )}
                    >
                        {img.map((item) => (
                            <li
                                key={item}
                                className={clsx(
                                    'flex justify-center items-center',
                                    className
                                )}
                            >
                                <CustomImage
                                    src={getProjectImgUrl(slug, item)}
                                    alt={`${item} of ${name} project`}
                                    width={400}
                                    height={400}
                                    className="w-full"
                                />
                            </li>
                        ))}
                    </ul>
                </ArticleLayout>
            </section>
        </>
    )
}
