import React, { useState, useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoCameraOutline, IoGlobeOutline, IoRocketOutline } from 'react-icons/io5';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { MdOutlineDesignServices, MdOutlineWarehouse } from 'react-icons/md';
import { PiChartLine } from 'react-icons/pi';
import { AiOutlineBoxPlot } from 'react-icons/ai';
import { TbUsersGroup } from 'react-icons/tb';
import { Link, useLocation } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const services = [
  { title: "Private Label", icon: <IoRocketOutline />, path: "private-label" },
  { title: "Retail / Online Arbitrage", icon: <HiOutlineShoppingCart />, path: "retail-arbitrage" },
  { title: "Wholesale FBA / WFS", icon: <MdOutlineWarehouse />, path: "wholesale-fba" },
  { title: "Web Development", icon: <IoGlobeOutline />, path: "web-development" },
  { title: "Shopify", icon: <AiOutlineBoxPlot />, path: "shopify" },
  { title: "Creative Design", icon: <MdOutlineDesignServices />, path: "creative-design" },
  { title: "Digital Marketing", icon: <PiChartLine />, path: "digital-marketing" },
  { title: "Product Photography", icon: <IoCameraOutline />, path: "product-photography" },
  { title: "F-Commerce Service", icon: <TbUsersGroup />, path: "f-commerce-service" }
];

const OurServices = () => {
  const location = useLocation();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Set selected service based on the current path
    const currentService = services.find(service => location.pathname.includes(service.path));
    if (currentService) setSelectedService(currentService.path);
  }, [location]);

  return (
    <div className="p-4 bg-stone-900 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-stone-800">
      <Fade cascade damping={0.1} triggerOnce>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <Link
              to={`/${service.path}`}
              key={index}
              className="no-underline"
            >
              <div
                className={`flex flex-col items-center justify-between text-center border border-amber-500 bg-black py-4 transition duration-300 group h-30 w-full ${
                  selectedService === service.path || location.pathname.includes(service.path)
                    ? 'bg-purple-600 border-none'
                    : 'hover:bg-purple-600 hover:border-none'
                }`}
                onClick={() => setSelectedService(service.path)} // Set selected service on click
              >
                <div className='flex items-center gap-2'>
                  <div className="text-2xl text-amber-500 bg-stone-800 group-hover:bg-white group-hover:text-purple-600 p-3 rounded-full transition mb-3">
                    {service.icon}
                  </div>
                  <div>
                    <FaArrowRightLong className="text-amber-500 text-lg group-hover:text-white transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
                <h3 className="text-white group-hover:text-white font-medium text-sm sm:text-base mb-2">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default OurServices;
