interface IProjectToolsProps {
    tools: string[]
}
function ProjectTools({ tools }: IProjectToolsProps) {
    return (
        <article>
            <h2>🛠️ Tools Used:</h2>
            <ul className="flex">
                {tools.map((tool) => (
                    <li key={tool} className="px-2">{`${tool}`}</li>
                ))}
            </ul>
        </article>
    )
}

export default ProjectTools
