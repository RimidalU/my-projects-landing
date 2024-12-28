interface IMaineProjectToolsProps {
    maineTools: string[]
}
function MaineProjectTools({ maineTools }: IMaineProjectToolsProps) {
    return (
        <article>
            <ul className="flex rounded-md border-2">
                {maineTools.map((tool) => (
                    <li key={tool} className="px-2 ">{`${tool}`}</li>
                ))}
            </ul>
        </article>
    )
}

export default MaineProjectTools
