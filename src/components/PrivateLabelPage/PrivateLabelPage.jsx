import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { motion } from "framer-motion"; // Import framer-motion

function PrivateLabelPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [images, setImages] = useState([]); // State to store images fetched from API

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordions = [
    { title: "Winning Product Research", details: "Identify high-demand, low-competition products." },
    { title: "Supplier Sourcing & Quality Control", details: "Design unique logos, packaging, and labels to establish a strong brand identity." },
    { title: "Custom Branding & Packaging", details: "Design unique logos, packaging, and labels to establish a strong brand identity." },
    { title: "Amazon SEO & Listing Optimization", details: "Rank higher with keyword-rich titles, bullet points, and descriptions." },
    { title: "Inventory & Logistics Management", details: "Seamless FBA storage and shipping." },
    { title: "Amazon PPC & Digital Marketing", details: "Increase visibility and boost sales with targeted ads." },
  ];

  useEffect(() => {
    // Fetch data from the backend
    fetch('https://my-gunter-project-server.vercel.app/private-labels')
      .then((response) => response.json())
      .then((data) => {
        setImages(data); // Store the fetched images in the state
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []); // Run this effect only once when the component mounts

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
              <img src={img.imageUrl} alt={`Slide ${index}`} className="w-full shadow-md h-[300px] lg:h-[400px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="px-5">
        <h1 className="text-2xl lg:text-4xl font-semibold mb-4">Private Label & Branding Services for Amazon FBA</h1>
        <p className="text-gray-400 font-normal text-[16px] max-w-3xl mx-auto">
          Looking to launch your Private Label brand on Amazon FBA? We provide end-to-end solutions to help you create a unique, high-converting brand that stands out.
        </p>
      </section>

      {/* Services Section */}
      <section className="services bg-black px-5 md:px-20 mt-10">
        <h2 className="text-xl lg:text-2xl font-semibold mb-6">Our Private Label & Branding Services</h2>

        {/* Accordion */}
        <div className="space-y-2">
          {accordions.map((accordion, index) => (
            <div key={index} className="border border-stone-800 overflow-hidden ">
              <button
                className="w-full flex gap-1 lg:gap-5 items-center bg-black text-white text-[16px]"
                onClick={() => toggleAccordion(index)}
              >
                <span className="p-1 lg:p-3 bg-purple-600 text-white font-normal">
                  {openIndex === index ? <FiMinus className="h-3 w-3 lg:h-5 lg:w-5" /> : <FaPlus className="h-3 w-3 lg:h-5 lg:w-5" />}
                </span>
                {accordion.title}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="p-2 lg:p-4 text-sm bg-black text-gray-400 font-normal lg:font-semibold">{accordion.details}</div>
              </motion.div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-amber-500 text-lg lg:text-xl">Create a successful Private Label brand on Amazon & scale your business effortlessly!</p>

        <div className="text-center mt-5">
          <button className="relative bg-purple-600 px-2 py-2 lg:px-6 lg:py-4 text-white lg:font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 shadow-animation text-sm lg:text-[18px] cursor-pointer">
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
              background: rgba(0, 0, 0, 0.9); /* Solid dark panel */
              transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
              opacity: 0;
          }

          /* Left panel (rises from bottom) */
          .shadow-animation::before {
              left: 0;
              bottom: -100%;
          }

          /* Right panel (falls from top) */
          .shadow-animation::after {
              right: 0;
              top: -100%;
          }

          /* Hover Effect */
          .shadow-animation:hover::before {
              transform: translateY(-100%);
              opacity: 1;
          }

          .shadow-animation:hover::after {
              transform: translateY(100%);
              opacity: 1;
          }

          /* Panels Disappear After a While */
          .shadow-animation:hover::before,
          .shadow-animation:hover::after {
              animation: panelDisappear 1s ease-in-out forwards;
          }

          @keyframes panelDisappear {
              0% {
                  opacity: 1;
              }
              70% {
                  opacity: 1;
              }
              100% {
                  opacity: 0;
                  transform: translateY(0);
              }
          }
        `}
      </style>
    </div>
  );
}

export default PrivateLabelPage;
