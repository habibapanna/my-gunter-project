import React, { useEffect, useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsEnvelope } from 'react-icons/bs';
import { HiOutlinePhone } from 'react-icons/hi';
import Logo from "../assets/Logo white (1).svg";
import { Fade, Slide } from "react-awesome-reveal";

const Footer = () => {
    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {
        fetch('https://my-gunter-project-server.vercel.app/announcements')
            .then(response => response.json())
            .then(data => setAnnouncements(data.slice(0, 3)))
            .catch(error => console.error('Error fetching announcements:', error));
    }, []);

    return (
        <div>
            <footer className="bg-black text-white relative overflow-hidden">
                <div className="border w-[2px] h-16 border-purple-600 bg-purple-600 mx-auto relative">
                    <div className="falling absolute -left-1 w-2 h-8 bg-black animate-falling"></div>
                    <div className="falling absolute -left-1 w-2 h-4 bg-black animate-falling" style={{ animationDelay: "0.5s" }}></div>
                </div>

                <div className="mt-5 text-right border-t border-stone-500 pt-4 relative mb-2"></div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-5 lg:px-0">
                    <Slide direction="up" triggerOnce>
                        <div className="flex flex-col items-start justify-start">
                            <img className='h-16 lg:h-24' src={Logo} alt="Logo" />
                            <p className="text-sm md:md:text-[16px]">Building your dreams with imagination.</p>
                        </div>
                    </Slide>

                    <Fade direction="up" delay={100} triggerOnce>
                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-white mb-3 ">Office Address</h3>
                            <span className='border-2 w-10 border-amber-500 mb-4'></span>
                            <p className='text-sm md:text-[16px]'>House No: 13</p>
                            <p className='text-sm  '>Ali Pur, Umedpur, Shibchar, Madaripur-7933</p>
                            <p className='text-sm md:text-[16px] '>Bangladesh</p>
                        </div>
                    </Fade>

                    <Fade direction="up" delay={200} triggerOnce>
                        <div className="flex flex-col">
                            <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                            <span className='border-2 w-10 border-amber-500 mb-4'></span>
                            <div className="">
                                <p className="flex items-center gap-2">
                                    <BsEnvelope />
                                    <a href="mailto:Contact@Imaginedreamworld.com" className="hover:text-amber-500 transition md:text-[16px] text-sm ">
                                    rmia99294@gmail.com
                                    </a>
                                </p>
                                <p className="flex items-center gap-2 text-sm md:text-[16px]">
                                    <HiOutlinePhone /> +880 1777368969
                                </p>
                                <p className="flex items-center gap-2 text-sm md:text-[16px]">
                                    <AiOutlineGlobal />
                                    <a href="https://imaginedreamworld.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition">
                                        imaginedreamworld.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>

                <Fade direction="up" delay={300} triggerOnce>
                    <div className="relative mt-5 bg-purple-600 text-sm text-center text-stone-300 py-4 flex items-center justify-center">
                        <p>&copy; 2025 Imagine Dream World. All Rights Reserved.</p>
                    </div>
                </Fade>
            </footer>
        </div>
    );
};

export default Footer;
