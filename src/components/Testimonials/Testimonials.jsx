import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { IoMdPlay } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, facere debitis expedita dolor aliquam ipsum vitae.",
    author: "Brand Camus",
    position: "Founder at Google"
  },
  {
    text: "This is another great testimonial about the service and quality provided by the company.",
    author: "Jane Doe",
    position: "CEO at Microsoft"
  },
  {
    text: "A fantastic experience! I would highly recommend their services to anyone looking for quality and dedication.",
    author: "John Smith",
    position: "Manager at Apple"
  }
];

const Testimonials = () => {
  const sliderRef = useRef(null); // <-- Add useRef for the slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    nextArrow: null, // Hides default arrows
    prevArrow: null, 
  };

  return (
    <div className='bg-black py-12 px-5'>
      <div className='flex flex-col-reverse lg:flex-row gap-10 items-center'>
        <div className='w-full lg:w-1/2 relative mt-24 lg:mt-0'>
        <img 
  className='relative transition-all duration-500 grayscale hover:grayscale-0 w-full  lg:h-full h-[400px] object-cover' 
  src="https://i.ibb.co.com/7JgrTGQ3/pexels-ron-lach-9604304.jpg" 
  alt="" 
/>
<motion.img
  className="absolute w-[100px] -top-10 left-10"
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
        </div>

        <div className='w-full lg:w-1/2 relative text-left'>
          <h3 className="text-orange-600 font-semibold">WHAT CLIENT SAYS ABOUT US</h3>
          <h2 className=" text-2xl lg:text-4xl font-bold mt-3 text-white">Our Testimonials</h2>
          <div className="flex gap-1 mt-8 mb-5">
            {[...Array(3)].map((_, index) => (
              <span key={index} className={`border-2 w-5 transition-all duration-500 ${currentIndex >= index ? 'border-orange-600' : 'border-white'}`}></span>
            ))}
          </div>

          {/* Slider with Ref */}
          <Slider ref={sliderRef} {...settings} className="autoplay">
            {testimonials.map((item, index) => (
              <div key={index} className='text-white'>
                <BiSolidQuoteAltLeft className='text-2xl lg:text-7xl mt-5 mb-5 text-white' />
                <p className='text-lg lg:text-xl italic'>{item.text}</p>
                <h3 className='font-bold mt-5 text-lg lg:text-xl'>{item.author}</h3>
                <h3 className='text-orange-600'>{item.position}</h3>
              </div>
            ))}
          </Slider>

          {/* Custom Arrows */}
          <button 
            className="absolute left-0 -bottom-16 text-white hover:text-orange-600 p-2"
            onClick={() => sliderRef.current.slickPrev()} // Fix: Use sliderRef correctly
          >
            <FaArrowLeftLong className='text-lg lg:text-2xl' />
          </button>
          <button 
            className="absolute right-0 -bottom-16 text-white hover:text-orange-600 p-2"
            onClick={() => sliderRef.current.slickNext()} // Fix: Use sliderRef correctly
          >
            <FaArrowRightLong className='text-lg lg:text-2xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
