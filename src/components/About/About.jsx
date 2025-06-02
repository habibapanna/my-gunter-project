import React, { useEffect, useState } from 'react';
import { FaArrowRightLong, FaRegStar } from 'react-icons/fa6';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

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
        return <div className='text-white text-center py-5'>Loading...</div>;
    }

    return (
        <div>
           <div className='bg-black p-5 lg:p-10 flex flex-col lg:flex-row gap-10 lg:gap-20'>
                <div className='lg:w-1/2'>
                    <h1 className='text-white text-2xl lg:text-4xl font-bold'>ABOUT US</h1>
                    <div className='flex gap-1 mt-8 mb-5 text-amber-500'>
                        <span className='border-2 w-8'></span>
                        <span className='border-2 w-2'></span>
                        <span className='border-2 w-3'></span>
                    </div>
                    <div className='flex gap-3'>
                        <span><FaRegStar className='text-2xl lg:text-4xl text-amber-500' /></span>
                        <Fade direction='left'>   <div>
                            <p>{aboutData.description}</p>
                            <div className='right-20 mt-5 lg:mt-10'>
                                <button onClick={scrollToContact} className="hover:bg-purple-500 hover:scale-95 bg-purple-600 px-4 py-2 lg:px-6 lg:py-4 text-white lg:font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 cursor-pointer">
                                    <Link to="/gallery">More About Us</Link> <FaArrowRightLong />
                                </button>
                            </div>
                        </div>
                        </Fade>
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
        </div>
    );
};

export default About;
