import React from 'react';
import logoImage from '../../assets/Images/portfolio-Logo.png'
import { NavLink } from 'react-router';

const Logo = () => {
    return (
        <div className='flex items-center gap-3'>
            <NavLink to="/"><img className='size-16' src={logoImage} alt="Portfolio-Logo" /></NavLink>
            <NavLink to="/"><h1 className='text-2xl font-bold'>Kousar</h1></NavLink>
        </div>
    );
};

export default Logo;