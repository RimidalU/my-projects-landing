const PAGE_REVALIDATE = 60 // Per seconds

interface StaticPageProps {
    params: {
        slug: string
    }
}

enum ProjectListRouteTypes {
    Projects = 'projects',
    Filter = 'filter',
}

export { PAGE_REVALIDATE, ProjectListRouteTypes }
export type { StaticPageProps }
