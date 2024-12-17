import { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

function ModeToggle() {
    const [isDark, setIsDark] = useState(() => {
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
        <button
            onClick={toggleMode}
            className='p-2 rounded-lg bg-background text-primary dark:bg-dark-background dark:text-dark-primary border-none'
        >
            {isDark ? (
                <FiSun className='w-5 h-5' />
            ) : (
                <FiMoon className='w-5 h-5' />
            )}
        </button>
    );
}

export default ModeToggle;
