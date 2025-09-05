import React from 'react';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='relative min-h-screen'>
            {/* Page content */}
            <div className="relative z-10">
                <div className="sticky top-0 z-20">
                    <Navbar></Navbar>
                </div>

                <div>
                    <Outlet />
                </div>

                <Footer />
            </div>

        </div>
    );
};

export default MainLayout;