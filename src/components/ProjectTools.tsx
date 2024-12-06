interface IProjectToolsProps {
    tools: string[]
}
function ProjectTools({ tools }: IProjectToolsProps) {
    return (
        <article>
            <h2>Tools Used:</h2>
            <ul>
                {tools.map((tool) => (
                    <li key={tool}>{`🛠️ ${tool}`}</li>
                ))}
            </ul>
        </article>
    )
}

export default ProjectTools
