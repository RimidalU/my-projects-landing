import ProjectList from '@/components/ProjectList'
import { ProjectListRouteTypes } from '@/models/common.model'
import { projectsRepository } from '@/repositories/projects.repository'

export default function HomePage() {
    const projects = projectsRepository.getAllProjects()

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
