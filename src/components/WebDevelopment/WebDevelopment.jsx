import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";

const images = [
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/blog3-1-1-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/blog2-1-1-1-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/project4-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/project-details2-1-1-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/woman-bed-1-1-380x350.jpg" },
];

const services = [
  "Custom Website Design & Development – Modern, mobile-friendly & high-speed websites.",
  "E-Commerce Website Development – Shopify, WooCommerce, Magento & more.",
  "SEO & Speed Optimization – Improve ranking and performance on Google.",
  "UI/UX Design & Branding – Engaging, visually appealing layouts.",
  "Web App Development – Scalable solutions for startups & enterprises.",
  "Website Maintenance & Security – Regular updates & protection against cyber threats."
];

function WebDevelopment() {
  return (
    <div className="bg-white min-h-screen py-10 text-black">
      {/* Carousel Section */}
      <section className="w-full max-w-3xl mx-auto mb-10">
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
      <section className="">
        <h1 className="text-4xl font-bold mb-4">Web Development Services</h1>
        <p className="text-[16px] text-gray-500 font-normal max-w-3xl mx-auto">
          Need a fast, responsive, and SEO-optimized website? We specialize in custom web development for businesses, eCommerce, and personal brands, ensuring a user-friendly experience and maximum conversions.
        </p>
      </section>

      {/* Services Section */}
      <section className="services bg-white px-5 md:px-20 mt-10">
        <h2 className="text-2xl font-semibold mb-6">Our Web Development Services</h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-4 text-[16px] text-gray-500">
              <FaCheck className="text-orange-500 text-2xl" />
              {service}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="relative bg-orange-600 px-6 py-4 text-white font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 shadow-animation text-[18px]">
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

export default WebDevelopment;
