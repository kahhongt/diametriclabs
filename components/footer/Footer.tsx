'use client';

import Image from 'next/image';
import { getBasePath } from '@/lib/basePath';

function Footer() {
    const basePath = getBasePath();

    return (
        <div className='flex flex-col items-center justify-center gap-5 py-10'>
            <p className='text-sm text-muted-foreground'>&copy; 2024</p>
            <div className='relative w-[150px] aspect-[5/1]'>
                <Image
                    src={`${basePath}/images/diametric-dark.png`}
                    alt='Diametric Dark'
                    fill
                    className='object-contain transition-opacity duration-300 theme-image-dark'
                />
                <Image
                    src={`${basePath}/images/diametric-light.png`}
                    alt='Diametric Light'
                    fill
                    className='object-contain transition-opacity duration-300 theme-image-light'
                />
            </div>
        </div>
    );
}
export default Footer;
