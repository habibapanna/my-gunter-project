import React from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BsEnvelope } from 'react-icons/bs';
import { HiOutlinePhone } from 'react-icons/hi';
import { MdKeyboardArrowUp } from 'react-icons/md';

const Footer = () => {
    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <footer className="bg-black text-white py-10 relative">
                {/* Falling animation on the border */}
                <div className="border w-[2px] h-16 border-orange-600 bg-orange-600 mx-auto mt-10 mb-12 relative">
                    <div className="falling absolute -left-1 w-2 h-4 bg-black animate-falling"></div>
                    <div className="falling absolute -left-1 w-2 h-4 bg-black animate-falling" style={{ animationDelay: "0.5s" }}></div>
                </div>

                {/* Top Left Image */}
                <img 
                    src="https://themes.envytheme.com/gunter/wp-content/themes/gunter/assets/img/footer-shape1.png" 
                    alt="footer-shape1" 
                    className="absolute top-20 left-10 transform -translate-x-1/4 translate-y-1/4 w-32"
                />

                <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Project Name (First Column) */}
                    <div className="flex flex-col justify-start">
                        <h3 className="text-2xl font-bold text-white mb-5">Imagine Dream World</h3>
                        <p className="text-sm">Building your dreams with imagination.</p>
                    </div>

                    {/* Office Address (Second Column) */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold text-white mb-3">Office Address</h3>
                        <span className='border-2 w-10 border-orange-600 mb-4'></span>
                        <p>House No: 137/24/A</p>
                        <p>Dhanmondi, Dhaka-1209</p>
                        <p>Bangladesh</p>
                        
                    </div>

                    {/* Announcements & Notices (Third Column) */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold text-white mb-3">Announcements & Notices</h3>
                        <span className='border-2 w-10 border-orange-600 mb-4'></span>
                        <ul className="space-y-2 text-sm">
                            <li>📢 New Event Coming Soon!</li>
                            <li>🚀 Website Maintenance on March 30</li>
                            <li>🎉 Special Offers for Our Members</li>
                        </ul>
                    </div>

                    {/* Contact Section Link (Fourth Column) */}
                    {/* Contact Section Link (Fourth Column) */}
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

                {/* Bottom Right Image */}
                <img 
                    src="https://themes.envytheme.com/gunter/wp-content/themes/gunter/assets/img/footer-shape2.png" 
                    alt="footer-shape2" 
                    className="absolute bottom-0 right-10 transform translate-x-1/4 -translate-y-1/4 w-32"
                />

                {/* Footer Bottom */}
                <div className="mt-12 text-right border-t border-gray-700 pt-4 relative">
                    {/* Scroll to Top Button */}
                    <div 
    onClick={scrollToTop} 
    className="absolute text-2xl left-[50%] ml-[-24px] -top-10 w-10 h-10 flex items-center justify-center rounded-full bg-orange-600 text-white cursor-pointer shadow-animation overflow-hidden"
>
    <MdKeyboardArrowUp className="text-white" />
</div>
                    <p className="text-sm">&copy; 2025 Imagine Dream World. All Rights Reserved.</p>
                </div>
                {/* Tailwind Keyframe Styles */}
                <style>
{`
  .shadow-animation {
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }

  .shadow-animation:hover {
    transform: scale(1.1);
  }

  .shadow-animation::before,
  .shadow-animation::after {
    content: '';
    position: absolute;
    width: 50%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2); /* Shadow effect */
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
    opacity: 0;
  }

  /* Left panel (rises from bottom) */
  .shadow-animation::before {
    left: 0;
    bottom: -100%;
  }

  /* Right panel (falls from top) */
  .shadow-animation::after {
    right: 0;
    top: -100%;
  }

  /* Hover Effect */
  .shadow-animation:hover::before {
    transform: translateY(-100%);
    opacity: 1;
  }

  .shadow-animation:hover::after {
    transform: translateY(100%);
    opacity: 1;
  }

  /* Panels Disappear After a While */
  .shadow-animation:hover::before,
  .shadow-animation:hover::after {
    animation: panelDisappear 1s ease-in-out forwards;
  }

  @keyframes panelDisappear {
    0% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(0);
    }
  }
`}
</style>

            </footer>
        </div>
    );
};

export default Footer;
