const PAGE_REVALIDATE = 60 // Per seconds

interface StaticPageProps {
    params: {
        slug: string
    }
}

export { PAGE_REVALIDATE }
export type { StaticPageProps }
