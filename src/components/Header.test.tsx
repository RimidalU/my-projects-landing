import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Header from './Header'

const mockUsePathname = jest.fn()

jest.mock('next/navigation', () => ({
    usePathname() {
        return mockUsePathname()
    },
}))

describe('Header', () => {
    it('has the correct link to Home page when not on home page ', () => {
        mockUsePathname.mockImplementation(() => '/some-other-page')

        render(<Header />)
        const linkElement = screen.getByRole('link', {
            name: /To Home/i,
        })
        expect(linkElement).toHaveAttribute('href', '/')
    })
    it('does not has the correct link to Home page when on home page', () => {
        mockUsePathname.mockImplementation(() => '/')
        render(<Header />)

        const linkElement = screen.queryByRole('link', {
            name: /To Home/i,
        })
        expect(linkElement).not.toBeInTheDocument()
    })

    it('has the correct "Download My CV" link', () => {
        mockUsePathname.mockImplementation(() => '/gjk')
        render(<Header />)
        const linkElement = screen.getByText('Download My CV 🪪')

        expect(linkElement).toHaveAttribute(
            'href',
            '/developer/Uladzimir_Stankevich_Full-Stack_Developer_Resume.pdf'
        )
        expect(linkElement).toHaveAttribute('target', '_blank')
        expect(linkElement).toHaveAttribute('aria-label', 'Download CV')
    })

    it('has the correct CSS classes', () => {
        render(<Header />)
        const headerElement = screen.getByRole('banner')
        expect(headerElement).toHaveClass(
            'fixed top-0 w-full pt-5 overflow-hidden text-center backdrop-blur-[6px] flex justify-around'
        )
    })
})
