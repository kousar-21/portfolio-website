import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Logo from '../Logo/Logo';
import { CgArrowTopRight } from "react-icons/cg";
import { Link } from 'react-scroll';

const Navbar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleHomeClick = () => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate("/");
        }
    };
    const links = <>
        <li><button onClick={handleHomeClick}>Home</button></li>
        <li><Link to="About" smooth={true} duration={500} offset={-70}>
            About
        </Link></li>
        <li><Link to="Skills" smooth={true} duration={500} offset={-70}>
            Skills
        </Link></li>
        <li><Link to="Projects" smooth={true} duration={500} offset={-70}>
            Projects
        </Link></li>
        <li><Link to="Contacts" smooth={true} duration={500} offset={-70}>
            Contacts
        </Link></li>
    </>

    return (
        <div id='Home' className="navbar bg-blue-950 text-white shadow-sm px-5 md:px-10 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden px-0 pr-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 text-black dark:text-gray-200 rounded-box z-1 mt-3 w-52 pr-2 shadow">
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
                <a href='https://drive.google.com/file/d/1v3labYgXfCYzr9UOr_YYc1fwyAwv4Pit/view?usp=sharing' target='_blank' className="btn bg-primary text-white hover:bg-gray-200 hover:text-primary border-none flex items-center">Resume <CgArrowTopRight size={16} /></a>
            </div>
        </div>
    );
};

export default Navbar;