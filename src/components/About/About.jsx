import React from 'react';
import MyImage from '../../assets/images/my-profile.jpg'

const About = () => {
    return (
        <section id="About" className='flex flex-col justify-center lg:min-h-[calc(100vh-80px)]'>

            <div className='flex md:flex-row flex-col-reverse px-5 md:px-10 lg:px-20 py-12'>
                {/* Left Image Side */}
                <div data-aos="zoom-in-up" data-aos-duration="1000" className='flex-1 flex justify-center items-center md:py-0 py-8'>
                    <img
                        src={MyImage}
                        alt="Kousar-profile-Image"
                        className='size-72 rounded-full border-4 border-primary shadow-lg shadow-primary/50'
                    />
                </div>

                {/* Right Text Side */}
                <div data-aos="zoom-in-up" data-aos-duration="1000" className='flex-1 md:text-start text-center'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-5 text-gray-500'>About <span className='text-primary'>Me</span></h1>
                    <div>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Hello! I'm <span className="text-purple-400 font-semibold">Kousar Ahammed Eshan</span>, a passionate
                            <span className="text-purple-400"> Frontend Developer</span> with a strong love for
                            creating beautiful and functional web applications. My programming journey started from a
                            deep curiosity about how websites work, which turned into a full-time passion.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I enjoy building responsive, user-friendly, and visually appealing websites using modern
                            technologies like <span className="text-purple-400">React</span>, <span className="text-purple-400">Node.js</span>,
                            and <span className="text-purple-400">MongoDB</span>. I’m always eager to learn new tools and
                            frameworks to make my work even better.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Outside of coding, I enjoy playing cricket, exploring new tech gadgets, and love  to
                            getting lost in a good book. My goal is to keep improving and work on projects that make
                            a real impact.
                        </p>
                        <p className="text-gray-300">
                            Let's create something amazing together.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;