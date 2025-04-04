import { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

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
    setIsExiting(true); // Start exit animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => {
        if (direction === "next") {
          return (prevIndex + 1) % heroes.length;
        } else {
          return prevIndex === 0 ? heroes.length - 1 : prevIndex - 1;
        }
      });
      setIsExiting(false); // Start enter animation
    }, 300); // Halfway through exit animation
  };

  if (heroes.length === 0) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  return (
    <div className="relative bg-black min-h-screen flex justify-center items-center overflow-hidden mx-auto">
      {/* Left Arrow */}
      <button
        onClick={() => changeSlide("prev")}
        className="shadow-animation absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-lg p-2 lg:p-3 bg-orange-600 bg-opacity-50 hover:bg-opacity-80 transition z-40 mt-90 lg:mt-0 cursor-pointer"
      >
        <FaArrowLeftLong />
      </button>

      {/* Hero Content */}
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center w-full px-10">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            key={currentIndex}
            src={heroes[currentIndex]?.image || ""}
            className={`w-2/3 lg:max-w-md shadow-2xl transition-transform duration-700 ${
              isExiting ? "animate-slide-down" : "animate-slide-up"
            }`}
            alt="Hero"
          />
        </div>

        {/* Text Section */}
        <div
          key={currentIndex}
          className={`lg:w-1/2 text-left transition-opacity duration-700 ${
            isExiting ? "animate-slide-down" : "animate-slide-up"
          } mb-10 mt-10 lg:mt-1 lg:mb-0`}
        >
          <span className="border-8 w-8 h-20 border-orange-600 bg-orange-600"></span>
          <h1 className="text-2xl lg:text-6xl font-bold text-white lg:mb-5">
            {heroes[currentIndex]?.title || "Default Title"}
          </h1>
          <p className="py-6 text-white lg:mb-5">
            {heroes[currentIndex]?.description || "Default description."}
          </p>

          <div className="flex gap-5 lg:justify-start">
            <button className="shadow-animation bg-orange-600 py-2 px-4 lg:px-6 lg:py-3 text-white lg:font-semibold transition duration-300 shadow-animation cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => changeSlide("next")}
        className="shadow-animation absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-lg p-2 lg:p-3 bg-orange-600 bg-opacity-50 hover:bg-opacity-80 transition z-40 mt-90 lg:mt-0 cursor-pointer"
      >
        <FaArrowRightLong />
      </button>

      {/* Animations */}
      <style>
        {`
          @keyframes slideUp {
            from {
              transform: translateY(50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes slideDown {
            from {
              transform: translateY(0);
              opacity: 1;
            }
            to {
              transform: translateY(50px);
              opacity: 0;
            }
          }

          .animate-slide-up {
            animation: slideUp 0.6s ease-out;
          }

          .animate-slide-down {
            animation: slideDown 0.3s ease-out;
          }
        `}
      </style>
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
  );
};

export default HeroSection;
