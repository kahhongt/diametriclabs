import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useThemeMode() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [systemTheme, setSystemTheme] = useState<'dark' | 'light'>('light');

    useEffect(() => {
        setMounted(true);
        // Check system preference only on client side
        const isDark = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches;
        setSystemTheme(isDark ? 'dark' : 'light');
    }, []);

    return {
        theme: mounted ? theme : systemTheme,
        setTheme,
        mounted,
    };
}
