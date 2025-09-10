import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
// import Galaxy from '../Animations/Galaxy/Galaxy';
import bgImage from '../../assets/images/background-8.jpg'

const Home = () => {
    return (
        <div className='bg-cover bg-center' style={{ backgroundImage: `url(${bgImage})` }}>
            {/* <div className="bg-gray-800 absolute inset-0 -z-10"
                style={{ height: "100%" }}>
                <Galaxy
                    mouseRepulsion={true}
                    mouseInteraction={true}
                    density={1.5}
                    glowIntensity={0.5}
                    saturation={0.8}
                    hueShift={240}
                />
            </div> */}
            <div className=''>
                <div className='flex flex-col justify-center min-h-[calc(100vh-80px)] md:min-h-[calc((100vh-80px)/2)] lg:min-h-[calc(100vh-80px)]'>
                    <Hero></Hero>
                </div>

            </div>
            <div>
                <div className='flex flex-col justify-center min-h-[calc(100vh-80px)] md:min-h-[calc((100vh-80px)/2)] lg:min-h-[calc(100vh-80px)]'>
                    <About></About>
                </div>
                <div className='flex flex-col justify-center min-h-[calc(100vh-80px)]'
                >
                    <Skills></Skills>
                </div>
                <div className='flex flex-col justify-center'>
                    <Projects></Projects>
                </div>
                <div className='flex flex-col justify-center min-h-[calc(100vh - 80px)]' >
                    <Contact></Contact>
                </div>
            </div>


        </div>
    );
};

export default Home;