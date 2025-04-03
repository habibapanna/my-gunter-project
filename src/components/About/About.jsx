import React, { useEffect, useState } from 'react';
import { FaArrowRightLong, FaRegStar } from 'react-icons/fa6';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const About = () => {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        fetch("https://my-gunter-project-server.vercel.app/about")
            .then(res => res.json())
            .then(data => setAboutData(data[0])) // Assuming there's only one about section
            .catch(error => console.error("Error fetching about data:", error));
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!aboutData) {
        return <div className='text-white text-center py-10'>Loading...</div>;
    }

    return (
        <div>
            <div className='bg-black p-5 lg:p-10 flex flex-col lg:flex-row gap-10 lg:gap-20'>
                <div className='lg:w-1/2'>
                    <h3 className='text-orange-600 font-semibold mb-3'>ABOUT US</h3>
                    <h1 className='text-white text-2xl lg:text-4xl font-bold'>{aboutData.title}</h1>
                    <div className='flex gap-1 mt-8 mb-5 text-orange-600'>
                        <span className='border-2 w-8'></span>
                        <span className='border-2 w-2'></span>
                        <span className='border-2 w-3'></span>
                    </div>
                    <div className='flex gap-3'>
                        <span><FaRegStar className='text-2xl lg:text-4xl text-orange-600' /></span>
                        <div>
                            <h1 className='text-lg lg:text-xl font-semibold mb-5 text-white'>{aboutData.title}</h1>
                            <p>{aboutData.description}</p>
                            <div className='right-20 mt-5 lg:mt-10'>
                                <button onClick={scrollToContact} className="shadow-animation bg-orange-600 px-4 py-2 lg:px-6 lg:py-4 text-white lg:font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 shadow-animation">
                                    <Link>More About Us</Link> <FaArrowRightLong />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 right-0 relative group'>
                    <div className="relative grayscale group-hover:grayscale-0 transition duration-300">
                        <img className='object-cover hidden lg:block absolute top-30 -left-10 w-[250px] h-[300px]' src={aboutData.image1} alt="Decorative" />
                        <img src={aboutData.image2} alt="Main Image" />
                    </div>
                    <motion.img
                        className="absolute top-15 left-40"
                        src="https://themes.envytheme.com/gunter/wp-content/themes/gunter/assets/img/1.png"
                        alt=""
                        animate={{ x: [0, 20, -10, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
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

export default About;
