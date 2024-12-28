import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import MainProjectTools from './MainProjectTools'

const mockTools: string[] = ['tool1', 'tool2', 'tool3', 'tool4']

describe('MainProjectTools', () => {
    it('the maine tools list has the correct CSS classes', () => {
        render(<MainProjectTools mainTools={mockTools} />)

        const element = screen.getByRole('list')
        expect(element).toHaveClass(`flex rounded-md border-2`)

        const listItems = screen.getAllByRole('listitem')
        listItems.forEach((item) => {
            expect(item).toHaveClass('px-2')
        })
    })

    it('renders the tools list with the correct text', () => {
        render(<MainProjectTools mainTools={mockTools} />)

        mockTools.forEach((tool) => {
            expect(screen.getByText(`${tool}`)).toBeInTheDocument()
        })
    })

    it('renders the correct number of tools', () => {
        render(<MainProjectTools mainTools={mockTools} />)

        expect(screen.getAllByRole('listitem')).toHaveLength(mockTools.length)
    })
})
