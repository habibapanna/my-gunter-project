import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { motion } from "framer-motion"; // Import framer-motion
const images = [
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/blog3-1-1-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/blog2-1-1-1-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/project4-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/project-details2-1-1-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/woman-bed-1-1-380x350.jpg" },
];

function PrivateLabelPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordions = [
    { title : "Winning Product Research" , details: "Identify high-demand, low-competition products."},
    {title : "Supplier Sourcing & Quality Control", details: "Design unique logos, packaging, and labels to establish a strong brand identity."},
    {title : "Custom Branding & Packaging", details: "Design unique logos, packaging, and labels to establish a strong brand identity."},
    {title : " Amazon SEO & Listing Optimization", details: " Rank higher with keyword-rich titles, bullet points, and descriptions."},
    {title :  "Inventory & Logistics Management", details: " Seamless FBA storage and shipping."},
    {title : "Amazon PPC & Digital Marketing", details: "Increase visibility and boost sales with targeted ads."},
  ];

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
        <h1 className="text-4xl font-semibold mb-4">Private Label & Branding Services for Amazon FBA</h1>
        <p className="text-gray-500 font-normal text-[16px] max-w-3xl mx-auto">
          Looking to launch your Private Label brand on Amazon FBA? We provide end-to-end solutions to help you create a unique, high-converting brand that stands out.
        </p>
      </section>

      {/* Services Section */}
      <section className="services bg-white px-5 md:px-20 mt-10">
        <h2 className="text-2xl font-semibold  mb-6">Our Private Label & Branding Services</h2>
        
{/* Accordion */}
<div className="space-y-2">
          {accordions.map((accordion, index) => (
            <div key={index} className="border border-gray-100 overflow-hidden">
              <button
                className="w-full flex gap-5 items-center bg-white text-black text-[16px] "
                onClick={() => toggleAccordion(index)}
              >
                <span className="p-2 bg-orange-600 text-white">
                  {openIndex === index ? <FiMinus className="h-5 w-5" /> : <FaPlus className="h-5 w-5" />}
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
                <div className="p-4 text-sm bg-white text-gray-500">{accordion.details}</div>
              </motion.div>
            </div>
          ))}
        </div>

        <p className="mt-10">Create a successful Private Label brand on Amazon & scale your business effortlessly!</p>

        <div className="text-center mt-5">
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
