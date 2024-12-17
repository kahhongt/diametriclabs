'use client';

import Image from 'next/image';
import { useThemeMode } from '@/hooks/useThemeMode';

function Footer() {
    const { theme } = useThemeMode();

    return (
        <div className='flex flex-col items-center justify-center gap-5 py-10'>
            <p className='text-sm text-muted-foreground'>&copy; 2024</p>
            <div className='relative w-[150px] aspect-[5/1]'>
                <Image
                    src='/images/diametric-dark.png'
                    alt='Diametric Dark'
                    fill
                    className='object-contain transition-opacity duration-300 theme-image-dark'
                />
                <Image
                    src='/images/diametric-light.png'
                    alt='Diametric Light'
                    fill
                    className='object-contain transition-opacity duration-300 theme-image-light'
                />
            </div>
        </div>
    );
}
export default Footer;
