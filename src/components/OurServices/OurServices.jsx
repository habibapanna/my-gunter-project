import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoCameraOutline, IoGlobeOutline, IoRocketOutline } from 'react-icons/io5';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { MdOutlineDesignServices, MdOutlineWarehouse } from 'react-icons/md';
import { PiChartLine } from 'react-icons/pi';
import { AiOutlineBoxPlot } from 'react-icons/ai';
import { TbUsersGroup } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const services = [
    { title: "Private Label", icon: <IoRocketOutline /> },
    { title: "Retail / Online Arbitrage", icon: <HiOutlineShoppingCart /> },
    { title: "Wholesale FBA / WFS", icon: <MdOutlineWarehouse /> },
    { title: "Web Development", icon: <IoGlobeOutline /> },
    { title: "Shopify", icon: <AiOutlineBoxPlot /> },
    { title: "Creative Design", icon: <MdOutlineDesignServices /> },
    { title: "Digital Marketing", icon: <PiChartLine /> },
    { title: "Product Photography", icon: <IoCameraOutline /> },
    { title: "F-Commerce Service", icon: <TbUsersGroup /> }
];

const OurServices = () => {
    return (
        <div>
            {/* Header Section */}
            <div className='bg-black p-10'>
                <div className='flex justify-between items-center'>
                    <div>
                        <h3 className='text-orange-600 font-semibold'>WHAT WE DO</h3>
                        <h2 className='text-2xl lg:text-4xl font-bold mt-3 text-white'>Our Services</h2>
                        <div className='flex gap-1 mt-8 lg:mb-5 text-orange-600'>
                            <span className='border-2 w-8'></span>
                            <span className='border-2 w-2'></span>
                            <span className='border-2 w-3'></span>
                        </div>
                    </div>
                    
                </div>
            </div>

            {/* Services Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 lg:p-10 bg-black">
                {services.map((service, index) => (
                    <div 
                        key={index} 
                        className="relative flex items-center justify-between bg-stone-900 text-white px-5 py-4 rounded-l-full shadow-md group cursor-pointer overflow-hidden transition-all duration-500 hover:bg-orange-600"
                    >
                        {/* Animated Background Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-orange-600 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                        {/* Left Icon */}
                        <div className="lg:text-2xl text-orange-600 p-4 bg-black group-hover:bg-white rounded-full transition-all duration-500  z-10">
                            {service.icon}
                        </div>

                        {/* Title */}
                        <h3 className="lg:text-lg lg:font-semibold transition-all duration-500 group-hover:text-white z-10">
                            {service.title}
                        </h3>

                        {/* Right Arrow Icon (Moves to Right on Hover) */}
                        <FaArrowRightLong className="text-orange-600 text-xl transition-transform duration-500 group-hover:translate-x-2 group-hover:text-white z-10" />
                    </div>
                ))}
            </div>
            <div className='mt-10'>
                {/* "All Services" Button */}
                <button className="bg-orange-600 px-4 py-2 lg:px-6 lg:py-4 text-white g:font-semibold flex items-center gap-2 overflow-hidden shadow-animation mx-auto">
                        <Link to='/services'>All Services</Link>
                         <FaArrowRightLong />
                    </button>
            </div>
        </div>
    );
};

export default OurServices;
