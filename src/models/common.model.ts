interface StaticPageProps {
    params: {
        slug: string
    }
}

enum ProjectListRouteTypes {
    Projects = 'projects',
    Filter = 'filter',
}

export { ProjectListRouteTypes }
export type { StaticPageProps }
