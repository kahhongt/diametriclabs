import Link from 'next/link';
import { Button } from '../ui/button';
import { TbMessageCircle } from 'react-icons/tb';

function Contact() {
    return (
        <div
            id='contact'
            className='flex flex-col items-center justify-center gap-5 text-center'
        >
            <h1 className='text-4xl flex items-center gap-2'>
                <TbMessageCircle />
                Stay in touch
            </h1>
            <p className='text-lg'>We'd love to hear from you!</p>
            <Button>
                <Link href='mailto:hello@diametriclabs.com'>
                    Contact us at hello@diametriclabs.com
                </Link>
            </Button>
        </div>
    );
}
export default Contact;
