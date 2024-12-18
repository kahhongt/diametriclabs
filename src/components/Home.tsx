import { BiLogoTelegram } from 'react-icons/bi';
import About from './About';
import Contact from './Contact';

function Home() {
    return (
        <main className='flex flex-col gap-28'>
            <section className='min-h-screen flex flex-col items-center justify-center bg-background dark:bg-dark-background gap-4 p-8'>
                <img
                    src='/images/solaris-dark.png'
                    alt='Diametric Labs'
                    className='h-48 w-auto hidden dark:block object-contain'
                />
                <img
                    src='/images/solaris-light.png'
                    alt='Diametric Labs'
                    className='h-48 w-auto dark:hidden object-contain'
                />
                <h1 className='text-4xl text-primary dark:text-dark-primary font-bold py-10 text-center max-w-6xl '>
                    We are conducting a large-scale experiment on AI-assisted
                    personal decision making.
                </h1>
                <p className='text-lg text-secondary dark:text-dark-secondary max-w-4xl text-center px-4 mb-8'>
                    To facilitate this experiment, we are building Solaris, a
                    multi-platform decision-making agent that operates across
                    various messaging applications globally.
                </p>
                <a href='https://t.me/diametricbot' target='_blank'>
                    <button className='bg-accent text-primary dark:bg-dark-primary dark:text-dark-background rounded-lg px-6 py-3 flex items-center gap-3 text-lg'>
                        <BiLogoTelegram className="text-xl" /> Get started for free on Telegram
                    </button>
                </a>
            </section>
            <About />
            <Contact />
        </main>
    );
}

export default Home;
