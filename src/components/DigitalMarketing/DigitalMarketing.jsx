import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaDiamond } from "react-icons/fa6";

const services = [
  "SEO (Search Engine Optimization) – Rank higher on Google, Amazon, and Shopify.",
  "Social Media Marketing – Grow your brand on Facebook, Instagram, TikTok & LinkedIn.",
  "PPC Advertising (Google & Social Ads) – Drive targeted traffic with high-ROI campaigns.",
  "Email Marketing & Automation – Convert leads into loyal customers.",
  "Content Marketing & Blogging – Engage your audience with high-quality content.",
  "eCommerce & Amazon Marketing – Optimize product listings & boost sales."
];

function DigitalMarketing() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/digital-marketing")
      .then((res) => res.json())
      .then((data) => {
        setImages(data); // Make sure the API returns an array of objects with `imageUrl`
      })
      .catch((err) => console.error("Error fetching digital marketing images:", err));
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
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">Digital Marketing Services – Grow Your Brand & Boost Sales!</h1>
        <p className="text-[16px] text-gray-400 max-w-3xl mx-auto font-normal">
          Want to scale your business and reach the right audience? Our expert digital marketing services help you increase brand visibility, website traffic, and conversions through SEO, social media, PPC, and content marketing.
        </p>
      </section>

      {/* Services Section */}
      <section className="services bg-black px-5 md:px-20 mt-10">
        <h2 className="text-xl lg:text-2xl font-semibold mb-6">Our Digital Marketing Services:</h2>
        <ul className="space-y-4 text-[16px] text-gray-400">
          {services.map((service, index) => (
            <motion.li 
              key={index} 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FaDiamond className="text-amber-500" /> {service}
            </motion.li>
          ))}
        </ul>

        <div className="text-center mt-8">
          <button className="relative bg-purple-600 px-2 py-2 lg:px-6 lg:py-4 text-white font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 shadow-animation text-[16px] lg:text-[18px] cursor-pointer">
            <Link to='/contact'>Contact us today for expert guidance!</Link>
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

export default DigitalMarketing;
