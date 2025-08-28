import React from 'react';
import { Link } from 'react-router';
import Logo from '../Logo/Logo';
import { CgArrowTopRight } from "react-icons/cg";

const Navbar = () => {


    const links = <>
    <li><Link>Home</Link></li>
    <li><Link>About</Link></li>
    <li><Link>Skills</Link></li>
    <li><Link>Projects</Link></li>
    <li><Link>Contact</Link></li>
    </>

    return (
        <div className="navbar bg-gray-800 text-white shadow-sm px-5 md:px-10 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-1 mt-3 w-52 pr-2 shadow">
                        {/* links */}
                        {links}
                    </ul>
                </div>
                <div>
                    <Logo></Logo>
                </div>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1"> 
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-primary text-white border-none flex items-center">Resume <CgArrowTopRight size={16} /></a>
            </div>
        </div>
    );
};

export default Navbar;