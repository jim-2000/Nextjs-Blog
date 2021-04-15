import Link from 'next/link'
import Image  from 'next/image'
const Navbar = () => {
    return (
        <nav>
                <Link href="/">
            <div className="logo">
                <Image  width={128} height={77} src="/img/logo.png"  alt="logo" />
                
            </div>
                </Link>
            <Link href="/">
            <a>Home</a>
            </Link>
            <Link href="/about">
            <a>About</a>
            </Link>
            <Link href="/contuct">
            <a>Contuct</a>
            </Link>
        </nav>
    )
}

export default Navbar
