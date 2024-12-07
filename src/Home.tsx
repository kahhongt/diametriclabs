function Home() {
    return (
        <div className='flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-background dark:bg-dark-background'>
            <h1 className='text-4xl text-primary dark:text-dark-primary font-bold py-10'>
                Welcome to Diametric Labs
            </h1>
            <p className='text-lg text-secondary dark:text-dark-secondary max-w-2xl text-center px-4'>
                We specialize in creating innovative solutions for complex
                problems. Our team of experts is dedicated to delivering
                high-quality results.
            </p>
        </div>
    );
}

export default Home;
