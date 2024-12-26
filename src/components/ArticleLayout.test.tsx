import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import ArticleLayout from './ArticleLayout'

const mockChildren: string = 'mockChildren'
const mockClassName: string = 'mockClassName'

describe('ArticleLayout', () => {
    it('renders the ArticleLayout with the correct children', () => {
        render(<ArticleLayout>{mockChildren}</ArticleLayout>)

        const titleElement = screen.getByText(mockChildren)
        expect(titleElement).toBeInTheDocument()
    })

    it('ul has the correct CSS classes', () => {
        render(
            <ArticleLayout className={mockClassName}>
                {mockChildren}
            </ArticleLayout>
        )
        const article = screen.getByRole('article')
        expect(article).toHaveClass(
            `p-4 rounded-3xl flex items-center justify-center active-item space-y-6 ${mockClassName}`
        )
    })
})
