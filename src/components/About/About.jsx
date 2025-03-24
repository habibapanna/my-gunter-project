import React from 'react';
import { FaArrowRightLong, FaRegStar } from 'react-icons/fa6';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const About = () => {
 // Scroll to Contact section
 const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
};

    return (
        <div>
            <div className='bg-black p-10 flex flex-col lg:flex-row gap-20'>
                <div className='lg:w-1/2'>
                    <h3 className='text-orange-600 font-semibold mb-3'>ABOUT US</h3>
                    <h1 className='text-white text-4xl font-bold'>
                    Leading the way in Creative Digital Agency
                    </h1>

                    {/* Decorative Lines */}
                    <div className='flex gap-1 mt-8 mb-5 text-orange-600'>
                        <span className='border-2 w-8'></span>
                        <span className='border-2 w-2'></span>
                        <span className='border-2 w-3'></span>
                    </div>

                    {/* Services Section */}
                    <div className='flex gap-3'>
                        <span><FaRegStar className='text-4xl text-orange-600' /></span>
                        <div>
                            <h1 className='text-xl font-bold mb-5 text-white'>Best Digital Agency in the World Include :</h1>
<p>
At Imagine Dream World, we provide A-to-Z e-commerce business management, helping brands thrive and scale across platforms like Amazon, Walmart, eBay, Shopify, and F-Commerce (Facebook & Social Commerce). Our comprehensive services ensure seamless operations, increased visibility, and long-term success.
</p>

<div className='right-20 mt-10'>
                        <button onClick={scrollToContact} className=" bg-orange-600 px-6 py-4 text-white font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 shadow-animation">
                            <Link>More About Us</Link> <FaArrowRightLong />
                        </button>
                    </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Images & Button */}
                <div className='lg:w-1/2 right-0 relative group'>
                    <div className="relative grayscale group-hover:grayscale-0 transition duration-300">
                        <img className='object-cover hidden lg:block absolute top-30 -left-10 w-[250px] h-[300px]' src="https://i.ibb.co.com/gMZ2TJn7/pexels-fauxels-3184638.jpg" alt="Decorative" />
                        <img src="https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/about1-1-1.jpg" alt="Main Image" />
                    </div>
                    <motion.img
  className="absolute top-15 left-40"
  src="https://themes.envytheme.com/gunter/wp-content/themes/gunter/assets/img/1.png"
  alt=""
  animate={{
    x: [0, 20, -10, 0], // Moves 20px right and back
  }}
  transition={{
    duration: 5, // Total animation time
    repeat: Infinity, // Infinite loop
    ease: "easeInOut", // Smooth animation
  }}
/>

                    {/* Button with Animated Shadows */}
                    
                </div>
            </div>

            {/* Tailwind Keyframe Styles */}
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
        background: rgba(0, 0, 0, 0.9); /* Solid dark panel */
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





        </div>
    );
};

export default About;
