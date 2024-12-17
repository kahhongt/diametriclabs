'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useThemeMode } from '@/hooks/useThemeMode';

function Logo() {
    const { theme } = useThemeMode();

    return (
        <Link href='/'>
            <div className='relative w-[150px] aspect-[5/1]'>
                <Image
                    src='/images/diametric-dark.png'
                    alt='Diametric Dark'
                    fill
                    className={`object-contain transition-opacity duration-300 theme-image-dark`}
                />
                <Image
                    src='/images/diametric-light.png'
                    alt='Diametric Light'
                    fill
                    className={`object-contain transition-opacity duration-300 theme-image-light`}
                />
            </div>
        </Link>
    );
}
export default Logo;
