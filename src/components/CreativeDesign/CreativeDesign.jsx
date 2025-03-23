import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

const images = [
  { image: "https://i.ibb.co.com/xKQ9c4V1/pexels-tima-miroshnichenko-6913241.jpg" },
  { image: "https://i.ibb.co.com/9jTZcz6/pexels-ketut-subiyanto-4623471.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/project4-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/project-details2-1-1-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/woman-bed-1-1-380x350.jpg" },
];

function CreativeDesign() {
  return (
    <div className="bg-white min-h-screen py-10 text-black">
      {/* Carousel Section */}
      <section className="w-full md:max-w-3xl max-w-[400px] mx-auto mb-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img.image} alt={`Slide ${index}`} className="w-full shadow-md h-[400px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className=" px-5">
        <h1 className="text-4xl font-bold mb-4">Creative Design Services – Elevate Your Brand with Stunning Visuals!</h1>
        <p className="max-w-3xl mx-auto text-gray-500 font-normal text-[16px]">
          Looking for eye-catching designs that make your brand stand out? Our creative design services help businesses create visually appealing and high-converting graphics for digital and print marketing.
        </p>
      </section>

      {/* Services Section */}
      <section className="services bg-white px-5 md:px-20 mt-10">
        <h2 className="text-2xl font-semibold mb-6">Our Creative Design Services:</h2>
        <ul className="space-y-3 text-[16px]">
          {[
            "Logo & Brand Identity Design – Unique, professional branding for businesses.",
            "Social Media Graphics – Engaging posts, ads, and banners for Facebook, Instagram & more.",
            "Website & UI/UX Design – Stunning, user-friendly website layouts.",
            "Product Packaging & Label Design – Attractive designs for private-label products.",
            "Infographics & Marketing Materials – High-quality visuals for presentations & promotions.",
            "Video & Motion Graphics – Professional animations and promotional videos.",
          ].map((service, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700">
              <FaCheck className="text-orange-600 text-2xl" /> {service}
            </li>
          ))}
        </ul>

        <div className="text-center mt-8">
          <button className="relative bg-orange-600 px-6 py-4 text-white font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 shadow-animation text-[18px]">
            <Link to='/contact'>Contact us today for custom design solutions!</Link>
          </button>
        </div>
      </section>
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
}

export default CreativeDesign;