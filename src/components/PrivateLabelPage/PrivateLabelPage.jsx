import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";

function PrivateLabelPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [images, setImages] = useState([]);

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
    fetch('https://my-gunter-project-server.vercel.app/private-labels')
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen pt-10 pb-20">
      {/* Carousel */}
      <section className="mx-auto px-5 mb-10 relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="rounded-lg overflow-hidden"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={img.imageUrl}
                  alt={`Slide ${index}`}
                  className="w-full h-[300px] lg:h-[400px] object-cover brightness-90 hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="px-5 text-center mb-14">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl lg:text-4xl font-bold mb-4 text-purple-600"
        >
          Private Label & Branding Services for Amazon FBA
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 max-w-3xl mx-auto text-[16px] lg:text-lg"
        >
          Looking to launch your Private Label brand on Amazon FBA? We provide end-to-end solutions to help you create a unique, high-converting brand that stands out.
        </motion.p>
      </section>

      {/* Services */}
      <section className="px-5 md:px-20">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-white">Our Services</h2>
        <div className="space-y-3">
          {accordions.map((accordion, index) => (
            <div key={index} className="bg-[#111] border border-[#222] rounded-md">
              <button
  className={`w-full flex justify-between items-center p-3 lg:p-4 text-left transition-colors duration-300 ${
    openIndex === index ? 'bg-purple-600' : 'hover:bg-purple-600'
  }`}
  onClick={() => toggleAccordion(index)}
>

                <span className="text-white lg:text-xl text-sm font-bold">{accordion.title}</span>
                <span className="text-purple-600">
                  {openIndex === index ? <FiMinus /> : <FaPlus />}
                </span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden px-4 pb-4 text-sm lg:text-[16px] text-gray-300"
              >
                {accordion.details}
              </motion.div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-amber-400 text-lg lg:text-xl"
        >
          Create a successful Private Label brand on Amazon & scale your business effortlessly!
        </motion.p>

        <div className="text-center mt-6">
          <Link to='/contact'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 shadow-animation text-white font-semibold px-6 py-3 shadow-lg transition-all duration-300 cursor-pointer"
            >
              Contact Us Today
            </motion.button>
          </Link>
        </div>
      </section>
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
