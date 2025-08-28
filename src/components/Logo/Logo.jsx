import React from 'react';
import profileLogo from '../../assets/Images/portfolio-Logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div className='flex items-center gap-3'>
            <Link to='/'><img className='size-16 border-2 border-primary rounded-full' src={profileLogo} alt="Kousar Ahammed" /></Link>
            <Link to='/'><h1 className='font-bold text-2xl md:block hidden'>Kousar</h1></Link>
        </div>
    );
};

export default Logo;