'use client';

import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { BiLogoTelegram } from 'react-icons/bi';
import { IoArrowDown } from 'react-icons/io5';
import { useThemeMode } from '@/hooks/useThemeMode';

function Intro() {
    const { theme } = useThemeMode();

    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <div className='relative w-full max-w-[600px] aspect-[2/1]'>
                <Image
                    src='/images/solaris-dark.png'
                    alt='Solaris Dark'
                    fill
                    className={`object-contain transition-opacity duration-300 theme-image-dark`}
                />
                <Image
                    src='/images/solaris-light.png'
                    alt='Solaris Light'
                    fill
                    className={`object-contain transition-opacity duration-300 theme-image-light`}
                />
            </div>
            <h1 className='text-4xl text-center'>
                Make decisions with Solaris for greater clarity and confidence
            </h1>
            <p className='text-center text-lg'>
                Solaris, a multi-platform decision-making agent that operates
                across various messaging applications globally
            </p>
            <div className='flex gap-5'>
                <Button variant='outline'>
                    <Link href='#about' className='flex items-center gap-2'>
                        Learn more <IoArrowDown />
                    </Link>
                </Button>
                <Button>
                    <Link
                        href='https://t.me/diametricbot'
                        className='flex items-center gap-2'
                    >
                        <BiLogoTelegram />
                        Get started for free
                    </Link>
                </Button>
            </div>
        </div>
    );
}
export default Intro;
