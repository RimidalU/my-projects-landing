import { getAllProjects } from '@/repositories/projects.repository'
import ProjectList from '@/components/ProjectList'
import { ProjectListRouteTypes } from '@/models/common.model'

export default function HomePage() {
    const projects = getAllProjects()

    return (
        <>
            <h1 className="page-title">My Projects List</h1>
            <ProjectList
                projects={projects}
                route={ProjectListRouteTypes.Projects}
            />
        </>
    )
}
