import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import LinksIcon from '../../LinksIcon/LinksIcon';
import { Outlet } from 'react-router';
import VantaWavesSection from '../../Components/VantaWave/VantaWavesSection';
import DotGrid from '../../Components/Animations/DotGrid/DotGrid';

const MainLayout = () => {
    return (
        <div className='relative min-h-screen'>
            {/* Fixed Vanta background */}
            {/* <div className="fixed inset-0 -z-10">
                <VantaWavesSection
                    className="h-full"
                    options={{
                        color: 0x06b6d4,   // Tailwind cyan-500
                        waveHeight: 18,
                        waveSpeed: 0.9,
                        shininess: 45,
                        zoom: 0.9,
                    }}
                />
            </div> */}


            {/* DotGrid background */}
            <div className='bg-gray-600' style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
                <DotGrid
                    dotSize={10}
                    gap={15}
                    baseColor="#5227FF"
                    activeColor="#5227FF"
                    proximity={120}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>


            {/* Page content */}
            <div className="relative z-10">
                <div className="sticky top-0 z-20">
                    <Navbar />
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