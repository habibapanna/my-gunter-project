import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { IoMdPlay } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

const Testimonials = () => {
  const sliderRef = useRef(null);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch testimonials data from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://my-gunter-project-server.vercel.app/testimonials');
        const data = await response.json();
        setTestimonials(data); // Store fetched data in state
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    nextArrow: null,
    prevArrow: null,
  };

  return (
    <div className='bg-black py-12 px-5'>
      <div className='flex flex-col-reverse lg:flex-row gap-10 items-center'>
        <div className='w-full lg:w-1/2 relative mt-24 lg:mt-0'>
          {/* Dynamically load the image from the latest testimonial */}
          {testimonials.length > 0 && testimonials[0].image ? (
  <img 
    className='relative transition-all duration-500 grayscale hover:grayscale-0 w-full lg:h-full h-[400px] object-cover' 
    src={testimonials[0].image}  // Use the first testimonial image
    alt="Testimonial Image" 
  />
) : null}

          <motion.img
            className="absolute w-[100px] -top-10 left-10"
            src="https://themes.envytheme.com/gunter/wp-content/themes/gunter/assets/img/1.png"
            alt="Motion Image"
            animate={{
              x: [0, 20, -10, 0], 
            }}
            transition={{
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut", 
            }}
          />
        </div>

        <div className='w-full lg:w-1/2 relative text-left'>
          <h3 className="text-amber-500 font-semibold">WHAT CLIENT SAYS ABOUT US</h3>
          <h2 className="text-2xl lg:text-4xl font-bold mt-3 text-white">Our Testimonials</h2>
          <div className="flex gap-1 mt-8 mb-5">
            {[...Array(testimonials.length)].map((_, index) => (
              <span key={index} className={`border-2 w-5 transition-all duration-500 ${currentIndex >= index ? 'border-amber-500' : 'border-white'}`}></span>
            ))}
          </div>

          <Slider ref={sliderRef} {...settings} className="autoplay">
            {testimonials.map((item, index) => (
              <div key={index} className='text-white'>
                <BiSolidQuoteAltLeft className='text-2xl lg:text-7xl mt-5 mb-5 text-white' />
                <p className='text-lg lg:text-xl italic'>{item.text}</p>
                <h3 className='font-bold mt-5 text-lg lg:text-xl'>{item.author}</h3>
                <h3 className='text-amber-500'>{item.position}</h3>
              </div>
            ))}
          </Slider>

          {/* Custom Arrows */}
          <button 
            className="absolute left-0 -bottom-16 text-white hover:text-amber-500 p-2"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FaArrowLeftLong className='text-lg lg:text-2xl cursor-pointer' />
          </button>
          <button 
            className="absolute right-0 -bottom-16 text-white hover:text-amber-500 p-2"
            onClick={() => sliderRef.current.slickNext()}
          >
            <FaArrowRightLong className='text-lg lg:text-2xl cursor-pointer' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
