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
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-lg p-2 lg:p-3 bg-orange-600 bg-opacity-50 hover:bg-opacity-80 transition z-40 mt-16 lg:mt-0"
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
            <button className="bg-orange-600 py-2 px-4 lg:px-6 lg:py-3 text-white lg:font-semibold transition duration-300 shadow-animation">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => changeSlide("next")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-lg p-2 lg:p-3 bg-orange-600 bg-opacity-50 hover:bg-opacity-80 transition z-40 mt-16 lg:mt-0"
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
    </div>
  );
};

export default HeroSection;
