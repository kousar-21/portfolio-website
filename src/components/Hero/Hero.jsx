import React from 'react';
import Image from "../../assets/images/kousar-image.png"
import SocialIcon from '../SocialIcon/SocialIcon';
import { ImDownload } from "react-icons/im";
import Typewriter from 'typewriter-effect';


const Hero = () => {
    return (
        <section>

            <div className='flex md:flex-row flex-col px-5 md:px-10 lg:px-20 py-12'>

                {/* Left Side */}
                <div className='flex-1'>
                    <div className='mb-5 md:text-start text-center font-bold'>
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                strings: [
                                    "<span class='text-2xl md:text-3xl lg:text-5xl text-secondary'>Hi, I'm <span class='text-primary'>Kousar Ahammed <br/>Eshan</span></span>",
                                    "<span class='text-2xl md:text-3xl lg:text-5xl text-secondary'>Welcome to my <span class='text-primary'>Portfolio</span></span>",
                                    "<span class='text-xl md:text-3xl lg:text-3xl text-secondary'>Leaving work unfinished guarantees failure,<br/>but <span class='text-primary'>trying again</span> gives it a chance to succeed.</span>"
                                ],
                                cursorClassName: "text-4xl md:text-5xl font-bold text-primary align-baseline"
                            }}

                        />
                    </div>
                    <h3 className='text-2xl md:text-3xl md:text-start text-center font-semibold text-gray-300 mb-6'>FrontEnd Developer</h3>
                    <p className='text-gray-500 mb-6 md:text-start text-center'>Passionate about crafting modern web applications with clean code
                        and innovative designs. <br /> I specialize in building fast, secure, and
                        scalable web solutions using the Frontend.</p>
                    <div className='flex justify-center md:justify-start mb-4 text-gray-300'>
                        <SocialIcon></SocialIcon>
                    </div>
                    {/* Buttons */}
                    <div className='flex justify-center md:justify-start gap-5'>
                        <button className='btn btn-primary px-6 hover:bg-gray-200 hover:text-primary'>Hire Me</button>

                        <a href="https://drive.google.com/uc?export=download&id=1v3labYgXfCYzr9UOr_YYc1fwyAwv4Pit"
                            download="Kousar_Resume.pdf"
                            className='btn btn-outline px-6 text-white hover:text-primary'>
                            <ImDownload />Resume</a>
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