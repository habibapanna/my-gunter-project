import { useState, useEffect } from "react";
import { AiOutlineBoxPlot } from "react-icons/ai";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoGlobeOutline, IoRocketOutline } from "react-icons/io5";
import { MdOutlineWarehouse } from "react-icons/md";

const services = [
  { title: "Private Label", icon: <IoRocketOutline />, path: "private-label" },
  { title: "Retail / Online Arbitrage", icon: <HiOutlineShoppingCart />, path: "retail-arbitrage" },
  { title: "Wholesale FBA / WFS", icon: <MdOutlineWarehouse />, path: "wholesale-fba" },
  { title: "Web Development", icon: <IoGlobeOutline />, path: "web-development" },
  { title: "Shopify", icon: <AiOutlineBoxPlot />, path: "shopify" },
];

const HeroSection = () => {
  const [heroes, setHeroes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/heroes")
      .then((res) => res.json())
      .then((data) => setHeroes(data))
      .catch((error) => console.error("Error fetching heroes:", error));
  }, []);

  const changeSlide = (direction) => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        direction === "next"
          ? (prevIndex + 1) % heroes.length
          : prevIndex === 0
          ? heroes.length - 1
          : prevIndex - 1
      );
      setIsExiting(false);
    }, 300);
  };

  const scrollToServices = () => {
    const section = document.getElementById("our-services");
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  if (heroes.length === 0) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  return (
    <div className="relative bg-black min-h-screen flex justify-center items-center overflow-hidden mx-auto">
      {/* Left Arrow */}
      <button
        onClick={() => changeSlide("prev")}
        className="shadow-animation absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-lg p-2 lg:p-3 bg-purple-600 bg-opacity-50 hover:bg-opacity-80 transition z-40 cursor-pointer"
      >
        <FaArrowLeftLong />
      </button>

      {/* Hero Content */}
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center w-full px-10">
        {/* Image Section */}
        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
          <img
            key={currentIndex}
            src={heroes[currentIndex]?.image || ""}
            className={`w-2/3 lg:max-w-md transition-transform duration-700 z-10 ${
              isExiting ? "animate-slide-down" : "animate-slide-up"
            }`}
            alt="Hero"
          />

          {/* Service Cards - Continuous Marquee */}
{/* Service Cards - Continuous Marquee */}
<div className="absolute bottom-10 w-full overflow-hidden px-4 z-30">
  <div className="marquee flex lg:flex-col gap-6">
    {[...services, ...services].map((service, idx) => (
      <div
        key={idx}
        className="min-w-[140px] h-15 backdrop-blur-md bg-white/10 border border-white/10 text-white  flex flex-col justify-center items-center p-2 text-sm shadow-md rounded-full"
      >
        <div className="mt-1">{service.title}</div>
      </div>
    ))}
  </div>

  {/* See More Button - moved here BELOW marquee */}
  <div className="mt-4 text-center lg:mr-90">
    <button
      onClick={scrollToServices}
      className="hover:text-white hover:bg-white/10 rounded-full px-4 py-1 text-sm bg-white text-purple-600 transition cursor-pointer"
    >
      See More Services
    </button>
  </div>
</div>
        </div>

        {/* Text Section */}
        <div
          key={currentIndex}
          className={`lg:w-1/2 text-left transition-opacity duration-700 ${
            isExiting ? "animate-slide-down" : "animate-slide-up"
          } mb-10 mt-10 lg:mt-1 lg:mb-0`}
        >
          <span className="border-8 w-8 h-20 border-purple-600 bg-purple-600"></span>
          <h1 className="text-2xl lg:text-6xl font-bold text-white lg:mb-5">
            {heroes[currentIndex]?.title || "Default Title"}
          </h1>
          <p><span className="text-amber-500">★★★★★</span> Rated 5/5 | Based on 20+ Happy Clients</p>
          <p className="py-6 text-white lg:mb-5">
            {heroes[currentIndex]?.description || "Default description."}
          </p>
          <div className="flex gap-5 lg:justify-start">
            <button onClick={scrollToContact} className="flex items-center shadow-animation bg-purple-600 py-2 px-4 lg:px-6 lg:py-3 text-white lg:font-semibold transition duration-300 cursor-pointer">
            <GrContact className="text-xl mr-2" />
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => changeSlide("next")}
        className="shadow-animation absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-lg p-2 lg:p-3 bg-purple-600 bg-opacity-50 hover:bg-opacity-80 transition z-40 cursor-pointer"
      >
        <FaArrowRightLong />
      </button>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          @keyframes slideDown {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(50px); opacity: 0; }
          }

          .animate-slide-up {
            animation: slideUp 0.6s ease-out;
          }

          .animate-slide-down {
            animation: slideDown 0.3s ease-out;
          }

          .marquee {
            animation: marqueeScroll 12s linear infinite;
            width: max-content;
          }

          @keyframes marqueeScroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default HeroSection;
