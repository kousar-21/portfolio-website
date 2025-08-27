import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import img from '../../assets/Images/portfolio-Logo.png'

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-800 text-white">
                <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-700 py-4">

                    {/* Left - Image, Name & Role */}
                    <div className="flex flex-col items-center md:flex-row md:items-start text-center md:text-left">
                        <img
                            src={img}
                            className="w-14 h-14 object-cover rounded-full border-2 border-primary mb-2 mr-3"
                            alt="Kousar Ahammed"
                        />
                        <div>
                            <h3 className="text-xl font-semibold">Kousar Ahammed</h3>
                            <p className="text-gray-400 text-sm">Frontend Developer</p>
                        </div>
                    </div>

                    {/* Middle - Social Links */}
                    <div className="flex gap-6 text-2xl">
                        <a
                            href="https://www.linkedin.com/in/md-kousar21/"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/kousar-21"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.facebook.com/kousar.ahammed.eshan"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <FaFacebook />
                        </a>
                    </div>

                    {/* Right - Copyright */}
                    <div className="text-center md:text-right text-gray-400 text-sm">
                        © {new Date().getFullYear()} Kousar Ahammed. All Rights Reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;