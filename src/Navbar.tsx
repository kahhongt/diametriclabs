import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useState, useEffect } from 'react';

function Navbar() {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage and system preference
        if (
            localStorage.theme === 'dark' ||
            (!localStorage.theme &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark');
            return true;
        }
        document.documentElement.classList.remove('dark');
        return false;
    });

    const toggleMode = () => {
        setIsDark(!isDark);
        if (!isDark) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    };

    return (
        <nav className='bg-background dark:bg-dark-background text-primary dark:text-dark-primary w-full'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between h-16'>
                    <div className='flex'>
                        <Link
                            to='/'
                            className='flex items-center text-2xl font-bold text-primary dark:text-dark-primary'
                        >
                            Diametric Labs
                        </Link>
                    </div>
                    <div className='flex space-x-8 justify-center items-center'>
                        <Link
                            to='/'
                            className='text-secondary dark:text-dark-secondary hover:text-accent dark:hover:text-dark-accent px-3 py-2 text-sm font-medium'
                        >
                            Home
                        </Link>
                        <Link
                            to='/about'
                            className='text-secondary dark:text-dark-secondary hover:text-accent dark:hover:text-dark-accent px-3 py-2 text-sm font-medium'
                        >
                            About
                        </Link>
                        <button
                            onClick={toggleMode}
                            className='p-2 rounded-lg text-primary dark:text-dark-primary border-none'
                        >
                            {isDark ? (
                                <FiSun className='w-5 h-5' />
                            ) : (
                                <FiMoon className='w-5 h-5' />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
