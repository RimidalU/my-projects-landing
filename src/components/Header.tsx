import Link from 'next/link'

function Header() {
    return (
        <header className="fixed top-0 w-full pt-5 overflow-hidden text-center backdrop-blur-[6px] flex justify-around">
            <Link href={'/'} className="link">
                ↩️ To Home
            </Link>
            <Link
                href={
                    '/developer/Uladzimir_Stankevich_Back-End_Developer_Resume.pdf'
                }
                className="link"
                target="_blank"
                aria-label="Download CV"
            >
                Download CV 🪪
            </Link>
        </header>
    )
}

export default Header
