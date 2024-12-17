'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getBasePath } from '@/lib/basePath';

function Logo() {
    const basePath = getBasePath();

    return (
        <Link href='/'>
            <div className='relative w-[150px] aspect-[5/1]'>
                <Image
                    src={`${basePath}/images/diametric-dark.png`}
                    alt='Diametric Dark'
                    fill
                    className={`object-contain transition-opacity duration-300 theme-image-dark`}
                />
                <Image
                    src={`${basePath}/images/diametric-light.png`}
                    alt='Diametric Light'
                    fill
                    className={`object-contain transition-opacity duration-300 theme-image-light`}
                />
            </div>
        </Link>
    );
}
export default Logo;
