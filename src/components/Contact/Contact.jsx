import React from 'react';
import { FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <section id="Contacts" className='px-5 md:px-10 lg:px-20 py-10'>
            <h1 data-aos="zoom-in-up" data-aos-duration="1000" className='text-3xl md:text-4xl text-center text-gray-500 font-bold mb-7'>Connect <span className='text-primary'>with Me</span></h1>
            <div className='flex md:flex-row flex-col-reverse gap-5'>
                {/* contact info */}

                <div data-aos="zoom-in-up" data-aos-duration="1000" className='flex-1 flex justify-center items-center text-center p-6 rounded-2xl bg-slate-600/5 backdrop-blur-md border border-slate-800/10'>
                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-500">Get in Touch</h2>
                        <p className="text-slate-800">
                            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="space-y-2 text-gray-400">
                            <p className="flex items-center justify-center text-slate-600 md:justify-start gap-2 ">
                                <FaEnvelope className="text-slate-800 size-6" /> kousarahammed5@gmail.com
                            </p>
                            <p className="flex items-center justify-center text-slate-600 md:justify-start gap-2">
                                <FaWhatsapp className="text-slate-800 size-6" /> +8801521514220
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className='flex items-center justify-center md:justify-start gap-5 text-gray-400'>
                            <a href="https://www.linkedin.com/in/md-kousar21/" target="_blank"><FaLinkedin className='size-6 rounded-lg hover:text-slate-900 text-slate-600 flex items-center justify-center hover:scale-125 transition duration-300' /></a>
                            <a href="https://github.com/kousar-21" target="_blank"><FaGithub className='size-6 rounded-lg hover:text-slate-900 text-slate-600 flex items-center justify-center hover:scale-125 transition duration-300' /></a>
                            <a href="https://www.facebook.com/kousar.ahammed.eshan" target="_blank" ><FaFacebook className='size-6 rounded-lg hover:text-slate-900 text-slate-600 flex items-center justify-center hover:scale-125 transition duration-300' /></a>
                        </div>
                    </div>
                </div>


                {/* form side */}
                <div data-aos="zoom-in-up" data-aos-duration="1000" className='flex-1'>
                    <ContactForm></ContactForm>
                </div>
            </div>
        </section>
    );
};

export default Contact;