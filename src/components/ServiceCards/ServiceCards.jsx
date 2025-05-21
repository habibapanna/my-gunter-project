import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoRocketOutline, IoGlobeOutline, IoCameraOutline } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineWarehouse, MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineBoxPlot } from "react-icons/ai";
import { PiChartLine } from "react-icons/pi";
import { TbUsersGroup } from "react-icons/tb";

const allServices = [
  { title: "Private Label", icon: <IoRocketOutline />, path: "private-label" },
  { title: "Retail / Online Arbitrage", icon: <HiOutlineShoppingCart />, path: "retail-arbitrage" },
  { title: "Wholesale FBA / WFS", icon: <MdOutlineWarehouse />, path: "wholesale-fba" },
  { title: "Web Development", icon: <IoGlobeOutline />, path: "web-development" },
  { title: "Shopify", icon: <AiOutlineBoxPlot />, path: "shopify" },
  { title: "Creative Design", icon: <MdOutlineDesignServices />, path: "creative-design" },
  { title: "Digital Marketing", icon: <PiChartLine />, path: "digital-marketing" },
  { title: "Product Photography", icon: <IoCameraOutline />, path: "product-photography" },
  { title: "F-Commerce Service", icon: <TbUsersGroup />, path: "f-commerce-service" },
];

const cardVariants = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0, opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 }
  }
};

const ServiceCards = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? allServices : allServices.slice(0, 6);

  return (
    <div className='bg-black'>
        <div className='flex justify-between items-center p-10'>
                    <div>
                        <h3 className='text-amber-500 font-semibold'>WHAT WE DO</h3>
                        <h2 className='text-2xl lg:text-4xl font-bold mt-3 text-white'>Our Services</h2>
                        <div className='flex gap-1 mt-8 lg:mb-5 text-amber-500'>
                            <span className='border-2 w-8'></span>
                            <span className='border-2 w-2'></span>
                            <span className='border-2 w-3'></span>
                        </div>
                    </div>
                </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 px-5 lg:px-10'>
        {displayedServices.map((service, index) => {
          const isDark = ["Private Label", "Wholesale FBA / WFS", "Shopify"].includes(service.title);
          const isSpecial = ["Digital Marketing", "F-Commerce Service"].includes(service.title);

          return (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
              className="bg-black p-1 rounded-xl"
            >
              <Link
                to={`/${service.path}`}
                className={`relative flex flex-col h-full p-5 lg:p-10
                  ${isSpecial ? 'bg-stone-900 hover:bg-purple-600 group' :
                  isDark ? 'bg-stone-900 hover:bg-purple-600 group' : 'bg-purple-600'}
                  backdrop-blur-md opacity-95 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]`}
              >
                <div className={`${(isDark || isSpecial) ? 'text-amber-500 group-hover:text-white' : 'text-white'} text-3xl lg:text-5xl mb-5 transition-colors duration-500`}>
                  {service.icon}
                </div>
                <h1 className='text-xl lg:text-2xl font-bold mb-3 text-white transition-colors duration-500'>{service.title}</h1>
                <div className={`${(isDark || isSpecial) ? 'text-amber-500 group-hover:text-white' : 'text-white'} flex gap-1 mb-5 transition-colors duration-500`}>
                  <span className='border-2 w-8'></span>
                  <span className='border-2 w-2'></span>
                  <span className='border-2 w-3'></span>
                </div>
                <p className='mb-10 text-white transition-colors duration-500'>
                  Explore our premium {service.title} service and learn how we can help you scale.
                </p>
                <img className='absolute bottom-1 right-21' src="https://themes.envytheme.com/gunter/wp-content/themes/gunter/assets/img/dot.png" alt="" />
                <img className='absolute bottom-1 right-1' src="https://themes.envytheme.com/gunter/wp-content/themes/gunter/assets/img/white-dot.png" alt="" />
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className='text-center mt-10'>
        <button
          onClick={() => setShowAll(!showAll)}
          className='px-6 py-3 shadow-animation bg-purple-600 text-white font-semibold hover:bg-purple-700 transition duration-300 cursor-pointer'
        >
          {showAll ? 'View Less' : 'View All Services'}
        </button>

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
    </div>
  );
};

export default ServiceCards;
