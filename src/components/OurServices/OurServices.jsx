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
    { title: "Private Label", icon: <IoRocketOutline />, path: "private-label" },
    { title: "Retail / Online Arbitrage", icon: <HiOutlineShoppingCart />, path: "retail-arbitrage" },
    { title: "Wholesale FBA / WFS", icon: <MdOutlineWarehouse />, path: "wholesale-fba" },
    { title: "Web Development", icon: <IoGlobeOutline />, path: "web-development" },
    { title: "Shopify", icon: <AiOutlineBoxPlot />, path: "shopify" },
    { title: "Creative Design", icon: <MdOutlineDesignServices />, path: "creative-design" },
    { title: "Digital Marketing", icon: <PiChartLine />, path: "digital-marketing" },
    { title: "Product Photography", icon: <IoCameraOutline />, path: "product-photography" },
    { title: "F-Commerce Service", icon: <TbUsersGroup />, path: "f-commerce-service" }
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
                    <Link to={`/services/${service.path}`} key={index} className="no-underline">
                        <div 
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
                    </Link>
                ))}
            </div>

            <div className='mt-10'>
                {/* "All Services" Button */}
                <button className="shadow-animation bg-orange-600 px-4 py-2 lg:px-6 lg:py-4 text-white font-semibold flex items-center gap-2 overflow-hidden shadow-animation mx-auto">
                    <Link to='/services' className="no-underline text-white">All Services</Link>
                    <FaArrowRightLong />
                </button>
            </div>

            <style>
                {`
                .shadow-animation {
                    position: relative;
                    overflow: hidden;
                }

                .shadow-animation::before,
                .shadow-animation::after {
                    content: '';
                    position: absolute;
                    width: 50%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
                    opacity: 0;
                }

                .shadow-animation::before {
                    left: 0;
                    bottom: -100%;
                }

                .shadow-animation::after {
                    right: 0;
                    top: -100%;
                }

                .shadow-animation:hover::before {
                    transform: translateY(-100%);
                    opacity: 1;
                }

                .shadow-animation:hover::after {
                    transform: translateY(100%);
                    opacity: 1;
                }

                .shadow-animation:hover::before,
                .shadow-animation:hover::after {
                    animation: panelDisappear 1s ease-in-out forwards;
                }

                @keyframes panelDisappear {
                    0% { opacity: 1; }
                    70% { opacity: 1; }
                    100% { opacity: 0; transform: translateY(0); }
                }
                `}
            </style>
        </div>
    );
};

export default OurServices;
