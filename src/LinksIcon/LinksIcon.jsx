import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const LinksIcon = () => {
    return (
        <div className='flex gap-5'>
            <a href="https://www.linkedin.com/in/md-kousar21/" target="_blank"><FaLinkedin className='size-6 rounded-lg hover:text-slate-800 hover:bg-white text-white flex items-center justify-center hover:scale-125 transition duration-300' /></a>
            <a href="https://github.com/kousar-21" target="_blank"><FaGithub className='size-6 rounded-lg hover:text-slate-800 hover:bg-white text-white flex items-center justify-center hover:scale-125 transition duration-300' /></a>
            <a href="https://www.facebook.com/kousar.ahammed.eshan" target="_blank" ><FaFacebook className='size-6 rounded-lg hover:text-slate-800 hover:bg-white text-white flex items-center justify-center hover:scale-125 transition duration-300' /></a>
        </div>
    );
};

export default LinksIcon;