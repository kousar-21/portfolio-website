import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const LinksIcon = () => {
    return (
        <div className='flex gap-5'>
            <a href="https://www.linkedin.com/in/md-kousar21/" target="_blank"><FaLinkedin className='size-6' /></a>
            <a href="https://github.com/kousar-21" target="_blank"><FaGithub className='size-6' /></a>
            <a href="https://www.facebook.com/kousar.ahammed.eshan" target="_blank" ><FaFacebook className='size-6' /></a>
        </div>
    );
};

export default LinksIcon;