import React from 'react';
import myLogo from '../../assets/images/portfolio-Logo.png'
import LinksIcon from '../../LinksIcon/LinksIcon';
const Footer = () => {
    return (
        <footer className="bg-blue-950 text-white flex md:flex-row flex-col justify-between items-center px-5 md:px-10 lg:px-20 py-3">

            <div className='flex items-center gap-3 md:flex-row flex-col md:pb-0 pb-5'>
                <div>
                    <img className='size-16 border-2 border-primary rounded-full' src={myLogo} alt="Kousar Ahammed" />
                </div>
                <div className='md:text-start text-center'>
                    <h1 className='text-xl md:text-base lg:text-xl text-gray-300 font-medium'>Md. Kousar Ahammed Eshan</h1>
                    <h3 className='text-sm text-gray-500'>Frontend Developer</h3>
                </div>
            </div>
            <div className='md:pb-0 pb-5'>
               <LinksIcon></LinksIcon>
            </div>
            <div><p className='text-gray-500 text-base md:text-sm lg:text-lg'v>© {new Date().getFullYear()} Kousar Ahammed. All Rights Reserved.</p></div>


        </footer>
    );
};

export default Footer;