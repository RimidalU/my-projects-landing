import clsx from 'clsx'
import { ReactNode } from 'react'

interface ArticleLayoutLayoutProps {
    children: ReactNode
    className?: string
}

const ArticleLayout = ({ children, className }: ArticleLayoutLayoutProps) => (
    <article
        className={clsx(
            'p-4 rounded-3xl flex items-center justify-center active-item space-y-6',
            className
        )}
    >
        {children}
    </article>
)

export default ArticleLayout
