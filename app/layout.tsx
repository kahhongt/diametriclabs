import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import Navbar from '@/components/navbar/Navbar';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import Contact from '@/components/contact/Contact';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Diametric Labs',
    description: 'Generated by create next app',
    icons: {
        icon: '/images/dark-round-logo.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head>
                <link rel='icon' href='/images/dark-round-logo.png' />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                function getTheme() {
                                    const stored = localStorage.getItem('theme');
                                    if (stored === 'light' || stored === 'dark') return stored;
                                    
                                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                    return prefersDark ? 'dark' : 'light';
                                }
                                
                                document.documentElement.classList.add(getTheme());
                            })()
                        `,
                    }}
                />
            </head>
            <body className={inter.className}>
                <Providers>
                    <Navbar />
                    <main className='container py-10'>{children}</main>
                    <Contact />
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}