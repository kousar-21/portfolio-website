import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import LinksIcon from '../../LinksIcon/LinksIcon';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <div className='sticky top-0 z-10'><Navbar></Navbar></div>
            <div className='min-h-[calc(100vh-100px-68px)]'>
                this is main layout
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;