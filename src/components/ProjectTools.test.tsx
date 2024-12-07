import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import ProjectTools from './ProjectTools'

const mockTools: string[] = ['tool1', 'tool2', 'tool3', 'tool4']

describe('ProjectTools', () => {
    it('renders the tools list title', () => {
        render(<ProjectTools tools={mockTools} />)

        const titleElement = screen.getByText('Tools Used:')
        expect(titleElement).toBeInTheDocument()
    })

    it('renders the tools list with the correct text', () => {
        render(<ProjectTools tools={mockTools} />)

        mockTools.forEach((tool) => {
            expect(screen.getByText(`🛠️ ${tool}`)).toBeInTheDocument()
        })
    })

    it('renders the correct number of tools', () => {
        render(<ProjectTools tools={mockTools} />)

        expect(screen.getAllByRole('listitem')).toHaveLength(mockTools.length)
    })
})
