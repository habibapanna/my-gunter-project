import React, { useEffect, useState } from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right
  const cardsPerPage = 6;

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://my-gunter-project-server.vercel.app/testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const handleNext = () => {
    const nextIndex = currentIndex + cardsPerPage;
    if (nextIndex < testimonials.length) {
      setDirection(1);
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - cardsPerPage;
    if (prevIndex >= 0) {
      setDirection(-1);
      setCurrentIndex(prevIndex);
    }
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsPerPage);

  const cardVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction > 0 ? 100 : -100,
    }),
    center: {
      opacity: 1,
      x: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
    }),
  };

  return (
   <div>
   <div className="bg-black py-16 px-5 lg:px-10 relative overflow-hidden">
   <Fade direction='up'> <div className="text-left mb-12">
        <h3 className="text-amber-500 font-semibold tracking-wide">WHAT CLIENTS SAY ABOUT US</h3>
        <h2 className="text-2xl lg:text-4xl font-bold mt-3 text-white">Real Stories, Real Success: Hear from Our Satisfied Clients
        </h2>
        <div className="flex gap-1 mt-6 mb-5">
          <span className="border-2 w-8 border-amber-500"></span>
          <span className="border-2 w-2 border-amber-500"></span>
          <span className="border-2 w-3 border-amber-500"></span>
        </div>
      </div></Fade>

      {/* Cards Grid with Animation */}
      <div className="relative">
  <AnimatePresence mode="wait" custom={direction}>
    <motion.div
      key={currentIndex}
      custom={direction}
      variants={cardVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
    >

            {visibleTestimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md text-white p-6 h-[184px] lg:h-[240px] rounded shadow-lg flex flex-col justify-center items-center text-center relative transition duration-300"
              >
                <BiSolidQuoteAltLeft className="text-xl text-amber-500 mb-4" />
                <p className="italic text-sm mb-4">{item.text}</p>
                <h3 className="font-semibold">{item.author}</h3>
                <p className="text-amber-500 text-sm">{item.position}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrow Buttons */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-purple-600 hover:bg-amber-500 text-white hover:text-black p-2 mt-19 transition duration-300 ${
          currentIndex === 0 && 'opacity-30 cursor-not-allowed'
        }`}
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={handleNext}
        disabled={currentIndex + cardsPerPage >= testimonials.length}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 text-white hover:text-black p-2 mt-19 bg-purple-600 hover:bg-amber-500 transition duration-300 ${
          currentIndex + cardsPerPage >= testimonials.length && 'opacity-30 cursor-not-allowed'
        }`}
      >
        <FaArrowRight />
      </button>
    </div>
   </div>
  );
};

export default Testimonials;
