type StaticPagePropsParams = Promise<{ slug: string }>

enum ProjectListRouteTypes {
    Projects = 'projects',
    Filter = 'filter',
}

export { ProjectListRouteTypes }
export type { StaticPagePropsParams }
