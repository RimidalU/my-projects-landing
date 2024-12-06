import type { Metadata } from 'next'

import localFont from 'next/font/local'

import './globals.css'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
})
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
})

export const metadata: Metadata = {
    title: 'My Projects',
    description: 'List of My Projects',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="items-center justify-items-center min-h-screen pb-20 gap-16">
                    <Header />
                    <main className="flex flex-col gap-8 items-center sm:items-start p-16 sm:p-20">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
