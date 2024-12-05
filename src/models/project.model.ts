interface IProject {
    name: string
    description: string
    img: string
    github: string
    liveDemo: string
    tools: string[]
    status: 'in progress' | 'is done'
}

export type { IProject }
