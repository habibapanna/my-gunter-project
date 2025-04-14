import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck, FaDiamond, FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

function RetailArbitragePage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [retailImages, setRetailImages] = useState([]);

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
    <div className="bg-black min-h-screen py-5 text-white mx-auto">
      {/* Carousel Section */}
      <section className="mx-auto mb-10 px-5">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full rounded-lg"
        >
          {retailImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.imageUrl}
                alt={`Slide ${index}`}
                className="w-full shadow-md h-[300px] lg:h-[400px] object-cover transition-transform duration-500 transform hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="px-5 text-center max-w-6xl mx-auto">
        <Fade cascade direction="up">
          <h1 className="text-2xl lg:text-4xl font-bold mb-5 text-purple-600">
            Retail & Online Arbitrage + Walmart & Amazon Dropshipping – Maximize Profits with Expert Strategies!
          </h1>
          <p className="text-[16px] font-normal mx-auto text-gray-300">
            Looking to make money with Retail Arbitrage (RA), Online Arbitrage (OA), Amazon & Walmart Dropshipping, and 2-Step Dropshipping? We provide expert sourcing, automation, and management solutions to help you scale your eCommerce business for maximum profit and long-term success.
          </p>
        </Fade>
      </section>

      {/* Services Section */}
      <section className="services bg-black px-5 md:px-20 mt-10">
        <Zoom triggerOnce>
          <h2 className="text-xl lg:text-3xl font-semibold mb-6 text-amber-500">Retail & Online Arbitrage Services</h2>
        </Zoom>

        <div className="space-y-2">
          {accordions.map((accordion, index) => (
            <Fade direction="up" cascade key={index}>
              <div className="border border-stone-800 overflow-hidden shadow-lg rounded-lg hover:shadow-xl transition-all">
                <button
                  className={`w-full flex gap-2 lg:gap-5 text-sm items-center text-white lg:text-xl font-bold py-3 px-5 transition-colors duration-300 ${
                    openIndex === index ? "bg-purple-600" : "bg-black hover:bg-purple-600"
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="p-1 lg:p-3 bg-purple-600 text-white rounded-full">
                    {openIndex === index ? (
                      <FiMinus className="h-3 w-3 lg:h-5 lg:w-5" />
                    ) : (
                      <FaPlus className="h-3 w-3 lg:h-5 lg:w-5" />
                    )}
                  </span>
                  {accordion.title}
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden bg-black"
                >
                  <div className="p-2 lg:p-4 bg-black text-sm lg:text-[16px] text-gray-300">
                    {accordion.details}
                  </div>
                </motion.div>
              </div>
            </Fade>
          ))}
        </div>

{/* 🚚 Amazon & Walmart Dropshipping Overview Section */}
<section className="px-5 mt-16">
  {/* Section Heading */}
  <div className="text-center mb-12">
    <h2 className="text-2xl text-purple-600 lg:text-3xl font-semibold">Amazon & Walmart Dropshipping Overview</h2>
    <Zoom triggerOnce>
      <p className="text-gray-300 font-normal text-[16px] mt-4 max-w-2xl mx-auto">
        Sell without holding inventory! We help you dropship from trusted suppliers while following marketplace policies.
      </p>
    </Zoom>
  </div>

  {/* Grid for Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* 2-Step Dropshipping Card */}
    <Slide direction="left" triggerOnce>
      <div className="bg-[#111] border border-[#222] p-6 shadow-md hover:shadow-purple-500 transition-shadow duration-300 flex flex-col justify-between h-[380px] md:h-[420px]">
        <h3 className="text-xl lg:text-2xl text-amber-500 font-bold mb-4">How 2-Step Dropshipping Works:</h3>
        <ul className="text-gray-300 text-[16px] space-y-2 flex-grow">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaCheck className="text-amber-500 text-xl lg:text-2xl mt-1" />
              <span className="text-sm lg:text-[16px] font-normal">
                <span className="md:text-lg font-bold text-purple-600">{step.step}</span> – {step.details}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Slide>

{/* Amazon Dropshipping Services Card */}
<Fade direction="right" triggerOnce>
  <div className="bg-[#111] border border-[#222] p-6 shadow-md hover:shadow-purple-500 transition-shadow duration-300 flex flex-col justify-between h-[380px] md:h-[420px]">
    <h3 className="text-xl lg:text-2xl font-bold text-amber-600 mb-4">Amazon Dropshipping Services</h3>
    
    <ul className="text-gray-300 list-none space-y-4 text-sm md:text-[16px] flex-grow">
      <li className="flex items-start gap-2">
        <FaDiamond className="text-amber-500 text-xl lg:text-2xl mt-1" />
        <span className="text-sm lg:text-[16px] font-normal">
          <span className="md:text-lg font-bold text-purple-600">Amazon TOS-Compliant Dropshipping</span> – Work with legit suppliers to avoid account suspension.
        </span>
      </li>
      <li className="flex items-start gap-2">
        <FaDiamond className="text-amber-500 text-xl lg:text-2xl mt-1" />
        <span className="text-sm lg:text-[16px] font-normal">
          <span className="md:text-lg font-bold text-purple-600">Automated Order Fulfillment</span> – Seamlessly process orders without manual effort.
        </span>
      </li>
      <li className="flex items-start gap-2">
        <FaDiamond className="text-amber-500 text-xl lg:text-2xl mt-1" />
        <span className="text-sm lg:text-[16px] font-normal">
          <span className="md:text-lg font-bold text-purple-600">Winning Product Research</span> – Find high-demand, low-competition products.
        </span>
      </li>
      <li className="flex items-start gap-2">
        <FaDiamond className="text-amber-500 text-xl lg:text-2xl mt-1" />
        <span className="text-sm lg:text-[16px] font-normal">
          <span className="md:text-lg font-bold text-purple-600">Amazon Account Management</span> – Handle listing optimization, inventory, and customer service.
        </span>
      </li>
    </ul>
  </div>
</Fade>

  </div>
</section>

        <Slide direction="up" triggerOnce>
          <p className="mt-10 text-amber-500 font-bold text-xl lg:text-2xl text-center">
            Want to start or scale your Amazon & Walmart business?
          </p>
          <div className="text-center mt-5">
            <button className="relative bg-purple-600 px-2 py-2 lg:px-6 lg:py-4 text-white font-semibold flex items-center overflow-hidden transition-all duration-300 shadow-animation text-[16px] lg:text-[18px] cursor-pointer hover:bg-purple-700 mx-auto">
              <Link to="/contact">Contact us today for expert guidance!</Link>
            </button>
          </div>
        </Slide>
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

export default RetailArbitragePage;
