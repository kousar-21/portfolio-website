import React from 'react';
import { FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section className='px-5 md:px-10 lg:px-20 py-10'>
            <h1 className='text-3xl md:text-4xl text-center text-gray-500 font-bold mb-7'>Connect <span className='text-primary'>with Me</span></h1>
            <div className='flex md:flex-row flex-col-reverse'>
                {/* contact info */}
                <div className='flex-1 flex justify-center items-center md:pt-0 pt-5'>
                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-gray-500">Get in Touch</h2>
                        <p className="text-gray-300">
                            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>

                        <div className="space-y-2 text-gray-600">
                            <p className="flex items-center justify-center md:justify-start gap-2">
                                <FaEnvelope className="text-green-400" /> kousarahammed5@gmail.com
                            </p>
                            <p className="flex items-center justify-center md:justify-start gap-2">
                                <FaWhatsapp className="text-green-400" /> +8801521514220
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className='flex items-center justify-center md:justify-start gap-5 text-gray-500'>
                            <a href="https://www.linkedin.com/in/md-kousar21/" target="_blank"><FaLinkedin className='size-6 hover:text-green-400' /></a>
                            <a href="https://github.com/kousar-21" target="_blank"><FaGithub className='size-6 hover:text-green-400' /></a>
                            <a href="https://www.facebook.com/kousar.ahammed.eshan" target="_blank" ><FaFacebook className='size-6 hover:text-green-400' /></a>
                        </div>
                    </div>
                </div>

                {/* form side */}
                <div className='flex-1'>
                    <form
                        // onSubmit={sendEmail}
                        className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-md mx-auto w-full"
                    >
                        <div className="mb-4">
                            <label className="block mb-2 text-gray-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 text-gray-300">Message</label>
                            <textarea
                                name="message"
                                rows="4"
                                required
                                className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-green-400"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;