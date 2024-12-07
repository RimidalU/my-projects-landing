interface IProject {
    name: string
    description: string
    img: string
    github: string
    liveDemo: string
    tools: string[]
    //TODO: change  'is done' to 'completed'
    status: 'in progress' | 'is done'
}

export type { IProject }
