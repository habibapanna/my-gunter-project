import React, { useEffect, useState } from 'react';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
    <div className="bg-black py-12 px-10">
      <div className="text-left mb-10">
        <h3 className="text-amber-500 font-semibold">WHAT CLIENT SAYS ABOUT US</h3>
        <h2 className="text-2xl lg:text-4xl font-bold mt-3 text-white">Our Testimonials</h2>
        <div className="flex gap-1 mt-6 mb-5 justify-start">
            <span className="border-2 w-8 border-amber-500"></span>
            <span className="border-2 w-2 border-amber-500"></span>
            <span className="border-2 w-3 border-amber-500"></span>
          </div>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-6 h-[300px] shadow-md hover:shadow-amber-500/20 transition-all duration-300 flex flex-col justify-between">
    <div>
      <BiSolidQuoteAltLeft className="text-4xl text-amber-500 mb-4" />
      <p className="italic text-base lg:text-lg mb-4 line-clamp-4">{item.text}</p>
    </div>
    <div>
      <h3 className="font-semibold text-lg">{item.author}</h3>
      <p className="text-amber-400">{item.position}</p>
    </div>
  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
