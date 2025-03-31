import React, { useEffect, useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsEnvelope } from 'react-icons/bs';
import { HiOutlinePhone } from 'react-icons/hi';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { Link } from 'react-router-dom';

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
            <footer className="bg-black text-white pt-10 relative">
                <div className="border w-[2px] h-16 border-orange-600 bg-orange-600 mx-auto relative">
                    <div className="falling absolute -left-1 w-2 h-8 bg-black animate-falling"></div>
                    <div className="falling absolute -left-1 w-2 h-4 bg-black animate-falling" style={{ animationDelay: "0.5s" }}></div>
                </div>
                <img 
                    src="https://themes.envytheme.com/gunter/wp-content/themes/gunter/assets/img/footer-shape1.png" 
                    alt="footer-shape1" 
                    className="absolute top-20 left-10 transform -translate-x-1/4 translate-y-1/4 w-32"
                />
                <div className="mt-20 text-right border-t border-stone-500 mx-5 pt-4 relative mb-2"></div>
                <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="flex flex-col justify-start">
                        <h3 className="text-2xl font-bold text-white mb-5">Imagine Dream World</h3>
                        <p className="text-sm">Building your dreams with imagination.</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold text-white mb-3">Office Address</h3>
                        <span className='border-2 w-10 border-orange-600 mb-4'></span>
                        <p>House No: 137/24/A</p>
                        <p>Dhanmondi, Dhaka-1209</p>
                        <p>Bangladesh</p>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold text-white mb-3">Announcements & Notices</h3>
                        <span className='border-2 w-10 border-orange-600 mb-4'></span>
                        <ul className="space-y-2 text-sm">
                            {announcements.length > 0 ? (
                                announcements.map((announcement, index) => (
                                    <li key={index}><Link to="/announcements">{announcement.title}</Link></li>
                                ))
                            ) : (
                                <li>Loading announcements...</li>
                            )}
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
                        <span className='border-2 w-10 border-orange-600 mb-4'></span>
                        <div className="mt-4">
                            <p className="flex items-center gap-2 text-sm">
                                <BsEnvelope />
                                <a href="mailto:Contact@Imaginedreamworld.com" className="hover:text-orange-500 transition">
                                    Contact@Imaginedreamworld.com
                                </a>
                            </p>
                            <p className="flex items-center gap-2 text-sm">
                                <HiOutlinePhone /> +8801XXXXXXXXX
                            </p>
                            <p className="flex items-center gap-2 text-sm">
                                <AiOutlineGlobal />
                                <a href="https://imaginedreamworld.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
                                    imaginedreamworld.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <img 
                    src="https://themes.envytheme.com/gunter/wp-content/themes/gunter/assets/img/footer-shape2.png" 
                    alt="footer-shape2" 
                    className="absolute bottom-0 right-10 transform translate-x-1/4 -translate-y-1/4 w-32"
                />
                <div className="relative mt-5 bg-stone-800 text-sm text-center text-stone-400 py-4 flex items-center justify-center">
                    <p>&copy; 2025 Imagine Dream World. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
