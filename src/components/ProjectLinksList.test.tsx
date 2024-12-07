import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { getGitHabRepositoryUrl } from '@/utils/path.utils'

import ProjectLinksList from './ProjectLinksList'

const mockSlug: string = 'mockSlug'
const mockGitHabUrl: string = getGitHabRepositoryUrl('mockSlug')

const mockLiveDemoLink: string = 'mockLiveDemoLink'

describe('ProjectLinksList', () => {
    it('renders the project links title', () => {
        render(<ProjectLinksList slug={mockSlug} liveDemo={mockLiveDemoLink} />)

        const titleElement = screen.getByText('Links:')
        expect(titleElement).toBeInTheDocument()
    })

    it('has the correct link to GitHub', () => {
        render(<ProjectLinksList slug={mockSlug} liveDemo={mockLiveDemoLink} />)
        const linkElement = screen.getByRole('link', {
            name: /📎 Project on GitHab/i,
        })
        expect(linkElement).toHaveAttribute('href', mockGitHabUrl)
        expect(linkElement).toHaveAttribute('target', '_blank')
    })

    it('has the correct link to live demo app', () => {
        render(<ProjectLinksList slug={mockSlug} liveDemo={mockLiveDemoLink} />)
        const linkElement = screen.getByRole('link', {
            name: /📽️ Project live Demo/i,
        })
        expect(linkElement).toHaveAttribute('href', mockLiveDemoLink)
        expect(linkElement).toHaveAttribute('target', '_blank')
    })

    it('article has the correct CSS classes', () => {
        render(<ProjectLinksList slug={mockSlug} liveDemo={mockLiveDemoLink} />)
        const footerElement = screen.getByRole('article')
        expect(footerElement).toHaveClass('flex flex-col')
    })
})
