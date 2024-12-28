interface IMainProjectToolsProps {
    mainTools: string[]
}
function MainProjectTools({ mainTools }: IMainProjectToolsProps) {
    return (
        <article>
            <ul className="flex rounded-md border-2">
                {mainTools.map((tool) => (
                    <li key={tool} className="px-2">{`${tool}`}</li>
                ))}
            </ul>
        </article>
    )
}

export default MainProjectTools
