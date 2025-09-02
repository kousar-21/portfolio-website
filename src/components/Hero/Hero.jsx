import React from 'react';
import Image from "../../assets/Images/my-img4.png"
import SocialIcon from '../socialIcon/SocialIcon';
import { ImDownload } from "react-icons/im";
import Typewriter from 'typewriter-effect';
import Waves from '../../assets/Waves/Waves';


const Hero = () => {
    return (
        <section>

            {/* animation */}
            <div className='bg-gray-600' style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1, backgroundColor: '#374151'  }}>
                <Waves
                    lineColor="#fff"
                    backgroundColor="rgba(55, 65, 81, 0.9)"
                    waveSpeedX={0.02}
                    waveSpeedY={0.01}
                    waveAmpX={40}
                    waveAmpY={20}
                    friction={0.9}
                    tension={0.01}
                    maxCursorMove={120}
                    xGap={12}
                    yGap={36}
                />
            </div>



            <div className='flex md:flex-row flex-col px-5 md:px-10 lg:px-20 py-12'>

                {/* Left Side */}
                <div className='flex-1'>
                    <div className='mb-5 md:text-start text-center font-bold'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                strings: [
                                    "<span class='text-2xl md:text-3xl lg:text-5xl'>Hi, I'm <span class='text-primary'>Kousar Ahammed <br/>Eshan</span></span>",
                                    "<span class='text-2xl md:text-3xl lg:text-5xl'>Welcome to my <span class='text-primary'>Portfolio</span></span>",
                                    "<span class='text-xl md:text-3xl lg:text-3xl'>Leaving work unfinished guarantees failure,<br/>but <span class='text-primary'>trying again</span> gives it a chance to succeed.</span>"
                                ],
                                cursorClassName: "text-4xl md:text-5xl font-bold text-primary align-baseline"
                            }}

                        />
                    </div>
                    <h3 className='text-2xl md:text-3xl md:text-start text-center font-semibold text-gray-300 mb-6'>FrontEnd Developer</h3>
                    <p className='text-gray-600 mb-6 md:text-start text-center'>Passionate about crafting modern web applications with clean code
                        and innovative designs. <br /> I specialize in building fast, secure, and
                        scalable web solutions using the Frontend.</p>
                    <div className='flex justify-center md:justify-start mb-4'>
                        <SocialIcon></SocialIcon>
                    </div>
                    {/* Buttons */}
                    <div className='flex justify-center md:justify-start gap-5'>
                        <button className='btn btn-primary px-6 hover:bg-violet-900 hover:text-white'>Hire Me</button>

                        <button className='btn btn-outline px-6 text-white hover:text-primary'><ImDownload />Resume</button>
                    </div>
                </div>

                {/* right side Image */}
                <div className='flex-1 flex justify-center items-center md:pt-0 pt-8'>
                    <img
                        src={Image}
                        alt="Kousar-Ahammed-Eshan"
                        className='size-80 rounded-full border-4 border-primary shadow-lg shadow-primary/50' />
                </div>

            </div>
        </section>
    );
};

export default Hero;