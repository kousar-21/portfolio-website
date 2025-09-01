import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <div className=''>
                <div className='flex flex-col justify-center min-h-[calc(100vh-80px)] md:min-h-[calc((100vh-80px)/2)] lg:min-h-[calc(100vh-80px)] '>
                    <Hero></Hero>
                </div>
                <div className='flex flex-col justify-center min-h-[calc(100vh-80px)] md:min-h-[calc((100vh-80px)/2)] lg:min-h-[calc(100vh-80px)] ' >
                    <About></About>
                </div>
            </div>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;