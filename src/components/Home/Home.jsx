import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import ImagesWaves2 from '../../assets/Images/background-2.jpg'
import ImageWaves from '../../assets/Images/background-1.jpg';
import ImageWaves3 from '../../assets/Images/background-3.jpg';
import ImageWaves5 from '../../assets/Images/background-5.jpg';

const Home = () => {
    return (
        <div>
            <div className=''>
                <div className='flex flex-col justify-center min-h-[calc(100vh-80px)] md:min-h-[calc((100vh-80px)/2)] lg:min-h-[calc(100vh-80px)] h-screen w-full bg-cover bg-center'
                    style={{ backgroundImage: `url(${ImageWaves})` }}>
                    <Hero></Hero>
                </div>

            </div>
            <div className='w-full bg-cover bg-center' style={{ backgroundImage: `url(${ImagesWaves2})` }}>
                <div className='flex flex-col justify-center min-h-[calc(100vh-80px)] md:min-h-[calc((100vh-80px)/2)] lg:min-h-[calc(100vh-80px)]'>
                    <About></About>
                </div>
                <div className='flex flex-col justify-center min-h-[calc(100vh-80px)]'
                >
                    <Skills></Skills>
                </div>
                <div className='flex flex-col justify-center min-h-[calc(100vh-80px)]'>
                    <Projects></Projects>
                </div>
                <div className='flex flex-col justify-center min-h-[calc(100vh - 120px - 120px)]' >
                    <Contact></Contact>
                </div>
            </div>


        </div>
    );
};

export default Home;