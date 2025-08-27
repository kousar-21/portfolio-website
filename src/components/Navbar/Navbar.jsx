import React from 'react';
import { Link } from 'react-scroll';
import { NavLink, useLocation, useNavigate } from 'react-router';
import Logo from '../Logo/Logo';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

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
        <div id='Home'>
            <div className="navbar bg-gray-800 text-white shadow-2xl px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div>
                        <Logo></Logo>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-5 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary px-6">Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;