import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaDiamond } from "react-icons/fa6";

const images = [
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/blog3-1-1-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/blog2-1-1-1-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/project4-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/project-details2-1-1-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/woman-bed-1-1-380x350.jpg" },
];

const services = [
  "SEO (Search Engine Optimization) – Rank higher on Google, Amazon, and Shopify.",
  "Social Media Marketing – Grow your brand on Facebook, Instagram, TikTok & LinkedIn.",
  "PPC Advertising (Google & Social Ads) – Drive targeted traffic with high-ROI campaigns.",
  "Email Marketing & Automation – Convert leads into loyal customers.",
  "Content Marketing & Blogging – Engage your audience with high-quality content.",
  "eCommerce & Amazon Marketing – Optimize product listings & boost sales."
];

function DigitalMarketing() {
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
        <h1 className="text-4xl font-bold mb-4">Digital Marketing Services – Grow Your Brand & Boost Sales!</h1>
        <p className="text-[16px] text-gray-500 max-w-3xl mx-auto font-normal">
          Want to scale your business and reach the right audience? Our expert digital marketing services help you increase brand visibility, website traffic, and conversions through SEO, social media, PPC, and content marketing.
        </p>
      </section>

      {/* Services Section */}
      <section className="services bg-white px-5 md:px-20 mt-10">
        <h2 className="text-2xl font-semibold mb-6">Our Digital Marketing Services:</h2>
        <ul className="space-y-4 text-[16px] text-gray-500">
          {services.map((service, index) => (
            <motion.li 
              key={index} 
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FaDiamond className="text-orange-600" /> {service}
            </motion.li>
          ))}
        </ul>

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

export default DigitalMarketing;
