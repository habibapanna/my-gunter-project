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
  { title: "Private Label", details: "Private Label is your path to brand uniqueness. Starting from sourcing, design, to packaging, we manage products that truly stand out.", icon: <IoRocketOutline />, path: "private-label" },
  { title: "Retail / Online Arbitrage", details: "Maximize your retail arbitrage success! We handle product identification, competitive pricing, and marketplace listing to boost your profits and expand your market presence.", icon: <HiOutlineShoppingCart />, path: "retail-arbitrage" },
  { title: "Wholesale FBA / WFS", details: "Managing inventory and fulfillment is now super easy! We handle product sourcing, stock management, and order fulfillment to optimize workflows and maximize revenue.", icon: <MdOutlineWarehouse />, path: "wholesale-fba" },
  { title: "Web Development", details: "75% of consumers judge a business's credibility based on its website. Our developers build responsive, scalable, and user-friendly websites to enhance online presence.", icon: <IoGlobeOutline />, path: "web-development" },
  { title: "Shopify", details: "We create and manage custom Shopify stores, optimizing design and functionality to enhance user experiences. Your brand's next level of success is just a launch away!", icon: <AiOutlineBoxPlot />, path: "shopify" },
  { title: "Creative Design", details: "Your brand deserves to stand out! Our industry-leading designer crafts custom graphic designs that capture attention, tell your story, and enhance your brand's visual identity.", icon: <MdOutlineDesignServices />, path: "creative-design" },
  { title: "Digital Marketing", details: "We optimize your digital presence through targeted SEO strategies. Improve search rankings and drive organic traffic to increase conversion rate. ", icon: <PiChartLine />, path: "digital-marketing" },
  { title: "Product Photography", details: "Bring your products to life with our expert photography and videography. We capture every detail and compelling imagery that sets your brand apart and captivate your audience.", icon: <IoCameraOutline />, path: "product-photography" },
  { title: "F-Commerce Service", details: "Ensure lightning-fast deliveries with our professional inventory management, storage solutions, and fulfillment processes. Efficient warehouse support equals higher customer satisfaction.", icon: <TbUsersGroup />, path: "f-commerce-service" },
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
                        <h2 className='text-2xl lg:text-4xl font-bold mt-3 text-white mb-3'>We Offer Dynamic  E-Commerce Services to Power Your Brand</h2>
                        <p>Transform your brand with our professional e-commerce solutions on any leading platform like Amazon, Shopify, and Walmart. Optimize your sales operations, increase visibility, and ensure long-term growth.
                        </p>
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
                   {service.details}
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
          className='px-6 py-3 hover:bg-purple-500  bg-purple-600 text-white font-semibold transition duration-300 hover:scale-95 cursor-pointer'
        >
          {showAll ? 'View Less' : 'View All Services'}
        </button>
      </div>
    </div>
  );
};

export default ServiceCards;
