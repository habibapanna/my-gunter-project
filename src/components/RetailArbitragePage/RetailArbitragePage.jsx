import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck, FaDiamond, FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { motion } from "framer-motion"; // Import framer-motion

const images = [
  { image: "https://i.ibb.co.com/Cp0zrKNt/pexels-pixabay-264502.jpg" },
  { image: "https://i.ibb.co.com/ZzkzGzmh/pexels-romanp-16170.jpg" },
  { image: "https://i.ibb.co.com/spVZ56ZF/pexels-pixabay-325876.jpg" },
  { image: "https://i.ibb.co.com/XZqdQZ8k/pexels-timothy-paule-ii-614774-2002717.jpg" },
  { image: "https://i.ibb.co.com/QvDtqBmB/pexels-aden-ardenrich-181745-581344.jpg" },
];

function RetailArbitragePage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [retailImages, setRetailImages] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/retails")
      .then((res) => res.json())
      .then((data) => setRetailImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordions = [
    { title: "Product Sourcing from Top Retailers", details: "Find profitable products from stores like Walmart, Target, Home Depot, and online marketplaces." },
    { title: "Amazon & Walmart Ungating Assistance", details: "Get approval for restricted brands & categories." },
    { title: "Profit Analysis & Pricing Strategy", details: "Ensure high-margin products with advanced price tracking." },
    { title: "FBA Prep & Logistics", details: "We handle labeling, packaging, and fast shipping to Amazon/Walmart warehouses." },
    { title: "Amazon SEO & Listing Optimization", details: "Boost rankings with keyword-rich titles, bullet points, and descriptions." },
    { title: "Repricing & Sales Growth Strategy", details: "Stay competitive with automated repricing tools." },
  ];

  const steps = [
    { step: "Source from Wholesale Suppliers", details: "Purchase products in bulk from authorized distributors (no retail store violations)." },
    { step: "Use a Prep Center", details: "Ship items to a third-party prep center for repackaging & labeling before final delivery." },
    { step: "Sell on Amazon & Walmart", details: "List & sell products under your own brand or as a third-party seller." },
    { step: "Ship to Customer", details: "The prep center ships directly to the end customer, ensuring compliance with Amazon & Walmart policies." },
  ];

  return (
    <div className="bg-black min-h-screen py-10 text-white max-w-3xl mx-auto">
      {/* Carousel Section */}
      <section className="md:w-full md:max-w-3xl max-w-sm w-[350px] mx-auto mb-10 px-5">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {retailImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.imageUrl} // Make sure your backend returns `imageUrl` property
                alt={`Slide ${index}`}
                className="w-full shadow-md h-[300px] lg:h-[400px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Hero Section */}
      <section className="px-5">
        <h1 className="text-2xl lg:text-4xl font-semibold mb-4">Retail & Online Arbitrage + Walmart & Amazon Dropshipping – Maximize Profits with Expert Strategies!</h1>
        <p className="text-[16px] font-normal mx-auto text-gray-400">
          Looking to make money with Retail Arbitrage (RA), Online Arbitrage (OA), Amazon & Walmart Dropshipping, and 2-Step Dropshipping? We provide expert sourcing, automation, and management solutions to help you scale your eCommerce business for maximum profit and long-term success.
        </p>
      </section>

      {/* Services Section */}
      <section className="services bg-black px-5 md:px-20 mt-10">
        <h2 className="text-xl lg:text-2xl font-semibold mb-6">Retail & Online Arbitrage Services</h2>

        {/* Accordion */}
        <div className="space-y-2">
          {accordions.map((accordion, index) => (
            <div key={index} className="border border-stone-800 overflow-hidden">
              <button
                className="w-full flex gap-2 lg:gap-5 items-center bg-black text-white text-[14px]"
                onClick={() => toggleAccordion(index)}
              >
                <span className="p-1 lg:p-3 bg-purple-600 text-white">
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

        {/* 2-Step Dropshipping Section */}
        <div>
          <h1 className="mt-10 text-xl lg:text-2xl">How 2-Step Dropshipping Works:</h1>
          <ul className="list-none pl-4 mt-5 text-[16px] text-gray-4200">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-2 mb-3">
                <FaCheck className="text-amber-500 text-xl lg:text-2xl" />
                <span className="text-sm lg:text-[16px] font-normal">
                  <span className="text-lg font-bold text-gray-400">{step.step}</span> – {step.details}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl mt-10">Walmart & Amazon Dropshipping Services</h2>
          <p className="text-gray-400 font-normal text-[16px] mt-5">Sell without holding inventory! We help you dropship from trusted suppliers while following marketplace policies.</p>
        </div>
        <div>
  <h2 className="text-xl mt-10">Amazon Dropshipping Services</h2>
  <ul className="text-gray-400 font-normal text-[16px] mt-5 list-none space-y-3">
    <li className="flex items-start">
      <FaDiamond className="text-amber-500 text-xl mr-3 mt-1" />
      Amazon TOS-Compliant Dropshipping – Work with legit suppliers to avoid account suspension.
    </li>
    <li className="flex items-start">
      <FaDiamond className="text-amber-500 text-xl mr-3 mt-1" />
      Automated Order Fulfillment – Seamlessly process orders without manual effort.
    </li>
    <li className="flex items-start">
      <FaDiamond className="text-amber-500 text-xl mr-3 mt-1" />
      Winning Product Research – Find high-demand, low-competition products.
    </li>
    <li className="flex items-start">
      <FaDiamond className="text-amber-500 text-xl mr-3 mt-1" />
      Amazon Account Management – Handle listing optimization, inventory, and customer service.
    </li>
  </ul>
</div>

<p className="mt-10 text-amber-500"> Want to start or scale your Amazon & Walmart business?</p>
        <div className="text-center mt-5">
          <button className="relative bg-purple-600 px-2 py-2 lg:px-6 lg:py-4 text-white font-semibold flex items-center overflow-hidden transition-all duration-300 shadow-animation text-[16px] lg:text-[18px] cursor-pointer">
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

export default RetailArbitragePage;
