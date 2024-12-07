import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import ProjectLinks from './ProjectLinks'

const mockGithubLink: string = 'mockGithubLink'
const mockLiveDemoLink: string = 'mockLiveDemoLink'

describe('ProjectLinks', () => {
    it('renders the project links title', () => {
        render(
            <ProjectLinks github={mockGithubLink} liveDemo={mockLiveDemoLink} />
        )

        const titleElement = screen.getByText('Links:')
        expect(titleElement).toBeInTheDocument()
    })

    it('has the correct link to GitHub', () => {
        render(
            <ProjectLinks github={mockGithubLink} liveDemo={mockLiveDemoLink} />
        )
        const linkElement = screen.getByRole('link', {
            name: /📎 Project on GitHab/i,
        })
        expect(linkElement).toHaveAttribute('href', mockGithubLink)
        expect(linkElement).toHaveAttribute('target', '_blank')
    })

    it('has the correct link to live demo app', () => {
        render(
            <ProjectLinks github={mockGithubLink} liveDemo={mockLiveDemoLink} />
        )
        const linkElement = screen.getByRole('link', {
            name: /📽️ Project live Demo/i,
        })
        expect(linkElement).toHaveAttribute('href', mockLiveDemoLink)
        expect(linkElement).toHaveAttribute('target', '_blank')
    })

    it('article has the correct CSS classes', () => {
        render(
            <ProjectLinks github={mockGithubLink} liveDemo={mockLiveDemoLink} />
        )
        const footerElement = screen.getByRole('article')
        expect(footerElement).toHaveClass('flex flex-col')
    })
})
