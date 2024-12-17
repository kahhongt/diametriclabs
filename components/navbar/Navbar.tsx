import ModeToggle from './ModeToggle';
import Logo from './Logo';
import Link from 'next/link';

function Navbar() {
    return (
        <nav className='border-b'>
            <div className='container flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
                <Logo />
                <div className='flex gap-5 items-center'>
                    <Link href='https://t.me/diametricbot'>Telegram Bot</Link>
                    <Link href='#about'>About</Link>
                    <Link href='#contact'>Contact</Link>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
