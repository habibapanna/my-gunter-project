import React, { useEffect, useState } from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import Marquee from 'react-fast-marquee';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

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

  return (
    <div className="bg-black px-10">
      <div className="text-left mb-10">
        <h3 className="text-amber-500 font-semibold">WHAT CLIENT SAYS ABOUT US</h3>
        <h2 className="text-2xl lg:text-4xl font-bold mt-3 text-white">Our Testimonials</h2>
        <div className="flex gap-1 mt-6 mb-5 justify-start">
          <span className="border-2 w-8 border-amber-500"></span>
          <span className="border-2 w-2 border-amber-500"></span>
          <span className="border-2 w-3 border-amber-500"></span>
        </div>
      </div>

      {/* Marquee goes here */}
      <Marquee
        direction="left"
        speed={20}
        pauseOnHover={true}
        gradient={false}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[350px] h-[300px] mx-4 flex flex-col justify-between bg-white/10 backdrop-blur-md border border-white/20 text-white p-6 shadow-md hover:shadow-amber-500/20 transition-all duration-300"
          >
            <BiSolidQuoteAltLeft className="text-4xl text-amber-500 mb-2" />
            <p className="italic text-base lg:text-lg flex-1">{item.text}</p>
            <div>
              <h3 className="font-semibold text-lg mt-4">{item.author}</h3>
              <p className="text-amber-400">{item.position}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Testimonials;
