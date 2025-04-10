import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

function CreativeDesign() {
  const [images, setImages] = useState([]);

  // Fetch images from the backend
  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/creative-designs")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <div className="bg-black min-h-screen py-10 text-white">
      {/* Carousel Section */}
      <section className="md:w-full md:max-w-3xl max-w-sm w-[350px] mx-auto mb-10 px-5">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.imageUrl}
                alt={`Slide ${index}`}
                className="w-full shadow-md h-[300px] lg:h-[400px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="px-5">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">
          Creative Design Services – Elevate Your Brand with Stunning Visuals!
        </h1>
        <p className="max-w-3xl mx-auto text-gray-400 font-normal text-[16px]">
          Looking for eye-catching designs that make your brand stand out? Our creative design services help businesses create visually appealing and high-converting graphics for digital and print marketing.
        </p>
      </section>

      {/* Services Section */}
      <section className="services bg-black px-5 md:px-20 mt-10">
        <h2 className="text-xl lg:text-2xl font-semibold mb-6">Our Creative Design Services:</h2>
        <ul className="space-y-3 text-[16px]">
          {[
            "Logo & Brand Identity Design – Unique, professional branding for businesses.",
            "Social Media Graphics – Engaging posts, ads, and banners for Facebook, Instagram & more.",
            "Website & UI/UX Design – Stunning, user-friendly website layouts.",
            "Product Packaging & Label Design – Attractive designs for private-label products.",
            "Infographics & Marketing Materials – High-quality visuals for presentations & promotions.",
            "Video & Motion Graphics – Professional animations and promotional videos.",
          ].map((service, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-400">
              <FaCheck className="text-amber-500 text-2xl" /> {service}
            </li>
          ))}
        </ul>

        <div className="text-center mt-8">
          <button className="relative bg-purple-600 px-2 py-2 lg:px-6 lg:py-4 text-white font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 shadow-animation text-[16px] lg:text-[18px] cursor-pointer">
            <Link to="/contact">Contact us today for custom design solutions!</Link>
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
