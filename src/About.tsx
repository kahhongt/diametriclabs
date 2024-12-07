function About() {
    return (
        <div className='flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-background dark:bg-dark-background p-8'>
            <h2 className='text-3xl text-primary dark:text-dark-primary font-bold mb-6'>
                About Diametric Labs
            </h2>
            <div className='max-w-2xl text-secondary dark:text-dark-secondary space-y-4'>
                <p>
                    Diametric Labs is at the forefront of technological
                    innovation, specializing in developing cutting-edge
                    solutions for modern challenges.
                </p>
                <p>
                    Our team combines expertise in various domains to deliver
                    exceptional results that exceed expectations.
                </p>
            </div>
        </div>
    );
}

export default About;
