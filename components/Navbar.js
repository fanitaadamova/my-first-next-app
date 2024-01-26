import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logoCustom.png" width={122} height={77} />
            </div>
            <Link legacyBehavior href="/"><a>Home</a></Link>
            <Link legacyBehavior href="/blog"><a>Blog</a></Link>
            <Link legacyBehavior href="/about"><a>About</a></Link>
            <Link legacyBehavior href="/contact"><a>Contact</a></Link>
        </nav>

    );
}

export default Navbar;