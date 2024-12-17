import { TbMessageCircle } from 'react-icons/tb';

function Contact() {
    return (
        <div
            id='contact'
            className='flex flex-col items-center justify-center gap-5 text-center p-8'
        >
            <h1 className='text-4xl flex items-center gap-2'>
                <TbMessageCircle />
                Stay in touch
            </h1>
            <p className='text-lg'>We&apos;d love to hear from you!</p>
            <a href='mailto:hello@diametriclabs.com'>
                <button className='bg-accent text-primary dark:bg-dark-primary dark:text-dark-background rounded-lg px-4 py-2 flex items-center gap-2'>
                    Contact us at hello@diametriclabs.com
                </button>
            </a>
        </div>
    );
}
export default Contact;
