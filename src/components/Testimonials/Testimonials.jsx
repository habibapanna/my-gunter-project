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
  const [showVideo, setShowVideo] = useState(false); // Video modal state
  const sliderRef = useRef(null); // <-- Add useRef for the slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    nextArrow: <></>, // Hides default arrows
    prevArrow: <></>, 
  };

  return (
    <div className='bg-black py-12 px-5'>
      <div className='flex flex-col lg:flex-row gap-10 items-center'>
        <div className='w-full lg:w-1/2 relative'>
        <img 
  className='relative transition-all duration-500 grayscale hover:grayscale-0 w-full' 
  src="https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/women-1-1.jpg" 
  alt="" 
/>
<motion.img
  className="absolute -top-10 left-10"
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
          <button onClick={() => setShowVideo(true)}className="flex items-center gap-3 text-white font-semibold group transition duration-300 absolute top-70 bg-orange-600 hover:bg-white rounded-full right-10 px-3 py-2">
              <span className="w-12 h-12 flex justify-center items-center border-2 border-orange-600 rounded-full text-orange-600 transition duration-300 bg-white group-hover:bg-orange-600 group-hover:text-white group-hover:border-white">
                <IoMdPlay className="text-2xl" />
              </span>
              <span className="transition duration-300 group-hover:text-orange-500">
                Watch Video
              </span>
            </button>
        </div>
         {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[70%] lg:w-[50%]">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-6 -right-6 text-white text-3xl hover:text-orange-600 transition"
            >
              <IoClose />
            </button>
            <iframe
              className="w-full h-72 md:h-96 lg:h-[450px] rounded-lg"
              src="https://www.youtube.com/embed/waBuau8T4mY?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
        <div className='w-full lg:w-1/2 relative text-left'>
          <h3 className="text-orange-600 font-semibold">WHAT CLIENT SAYS ABOUT US</h3>
          <h2 className="text-4xl font-bold mt-3 text-white">Our Testimonials</h2>
          <div className="flex gap-1 mt-8 mb-5">
            {[...Array(3)].map((_, index) => (
              <span key={index} className={`border-2 w-5 transition-all duration-500 ${currentIndex >= index ? 'border-orange-600' : 'border-white'}`}></span>
            ))}
          </div>

          {/* Slider with Ref */}
          <Slider ref={sliderRef} {...settings} className="autoplay">
            {testimonials.map((item, index) => (
              <div key={index} className='text-white'>
                <BiSolidQuoteAltLeft className='text-7xl mt-5 mb-5 text-white' />
                <p className='text-xl italic'>{item.text}</p>
                <h3 className='font-bold mt-5 text-xl'>{item.author}</h3>
                <h3 className='text-orange-600'>{item.position}</h3>
              </div>
            ))}
          </Slider>

          {/* Custom Arrows */}
          <button 
            className="absolute left-0 -bottom-16 text-white hover:text-orange-600 p-2"
            onClick={() => sliderRef.current.slickPrev()} // Fix: Use sliderRef correctly
          >
            <FaArrowLeftLong className='text-2xl' />
          </button>
          <button 
            className="absolute right-0 -bottom-16 text-white hover:text-orange-600 p-2"
            onClick={() => sliderRef.current.slickNext()} // Fix: Use sliderRef correctly
          >
            <FaArrowRightLong className='text-2xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
