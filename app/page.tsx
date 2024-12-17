import Intro from '@/components/intro/Intro';
import About from '@/components/about/About';
function HomePage() {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-80'>
            <Intro />
            <About />
        </div>
    );
}
export default HomePage;
