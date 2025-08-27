import React from 'react';
import myLogo from '../../assets/Images/portfolio-Logo.png'
import LinksIcon from '../../LinksIcon/LinksIcon';
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white flex justify-between items-center px-5 md:px-10 lg:px20 py-3">

            <div className='flex items-center gap-3 md:flex-row flex-col'>
                <div>
                    <img className='size-16 border-2 border-primary rounded-full' src={myLogo} alt="Kousar Ahammed" />
                </div>
                <div>
                    <h1 className='text-xl font-medium'>Md. Kousar Ahammed Eshan</h1>
                    <h3 className='text-sm'>Frontend Developer</h3>
                </div>
            </div>
            <div>
               <LinksIcon></LinksIcon>
            </div>
            <div><p>© {new Date().getFullYear()} Kousar Ahammed. All Rights Reserved.</p></div>


        </footer>
    );
};

export default Footer;