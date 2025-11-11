import React from 'react';
import profileLogo from '../../assets/images/portfolio-Logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div className='flex items-center gap-3'>
            <Link to='/'><img className='size-16 rounded-full' src={profileLogo} alt="Kousar Ahammed" /></Link>
            <Link to='/'><h1 className='text-2xl font-bold text-slate-900 md:block hidden'>Kousar</h1></Link>
        </div>
    );
};

export default Logo;