import { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { FaPlayCircle, FaTimesCircle } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const [heroes, setHeroes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const coloredWords = [
    { text: "Private Label", color: "text-amber-500" },
    { text: "Retail / Online Arbitrage", color: "text-purple-600" },
    { text: "Wholesale FBA / WFS", color: "text-amber-500" },
    { text: "Web Development", color: "text-purple-600" },
    { text: "Shopify", color: "text-amber-500" },
    { text: "Creative Design", color: "text-purple-600" },
    { text: "Digital Marketing", color: "text-amber-500" },
    { text: "Product Photography", color: "text-purple-600" },
    { text: "F-Commerce Service", color: "text-amber-500" },
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = coloredWords[wordIndex].text;
    let timeout;

    if (!isDeleting && charIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex));
        setCharIndex(charIndex - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        } else {
          setWordIndex((prev) => (prev + 1) % coloredWords.length);
          setCharIndex(0);
          setIsDeleting(false);
        }
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/heroes")
      .then((res) => res.json())
      .then((data) => setHeroes(data))
      .catch((error) => console.error("Error fetching heroes:", error));
  }, []);

  const changeSlide = (direction) => {
    setIsExiting(true);
    setIsVideoPlaying(false); // Stop video when slide changes
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

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  if (heroes.length === 0) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  const { image, video, title, description } = heroes[currentIndex];

  return (
    <div className="relative bg-black flex justify-center items-center overflow-hidden mx-auto">
      {/* Left Arrow */}
      <button
        onClick={() => changeSlide("prev")}
        className="shadow-animation absolute left-0 lg:left-2 lg:top-1/2 top-50 transform -translate-y-1/2 text-white text-lg p-2 lg:p-3 bg-purple-600 bg-opacity-50 hover:bg-opacity-80 transition z-40 cursor-pointer"
      >
        <FaArrowLeftLong />
      </button>

      {/* Hero Content */}
      <div className="lg:hero-content flex flex-col-reverse lg:flex-row-reverse items-center w-full lg:px-10">
        {/* Image / Video Section */}
        <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
          {!isVideoPlaying ? (
            <div className="relative">
              <img
                src={image}
                alt="Hero"
                className={`h-[300px] lg:h-[500px] object-cover lg:max-w-md transition-transform duration-700 z-10 ${
                  isExiting ? "animate-slide-down" : "animate-slide-up"
                }`}
              />
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-60 transition rounded"
              >
                <FaPlayCircle className="text-white text-6xl" />
              </button>
            </div>
          ) : (
            <div className="relative">
              <video
                src={video}
                autoPlay
                controls
                className="h-[300px] lg:h-[500px] object-cover lg:max-w-md transition-transform duration-700 z-10"
              />
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-2 right-2 bg-black bg-opacity-70 p-2 rounded-full text-white text-xl"
              >
                <FaTimesCircle />
              </button>
            </div>
          )}
        </div>

        {/* Text Section */}
        <div
          key={currentIndex}
          className={`lg:w-1/2 text-left transition-opacity duration-700 ${
            isExiting ? "animate-slide-down" : "animate-slide-up"
          } mb-10 mt-10 lg:mt-0 lg:mb-0`}
        >
          <span className="border-8 w-10 h-28 lg:w-16 lg:h-40 border-amber-500 bg-amber-500 mt-2 lg:mt-5"></span>
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-5 lg:mb-10">
            {title || "Default Title"}
          </h1>
          <div className="mt-5 text-left">
            <h1 className="text-2xl lg:text-4xl font-semibold text-purple-600 mb-2">
              We Provided Services
            </h1>
            <span className="text-lg lg:text-2xl font-semibold text-amber-500 px-3 py-1 rounded-full inline-block text-center mx-auto mb-5">
              <span className={`font-semibold ${coloredWords[wordIndex].color}`}>
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </span>
          </div>

          <p>
            <span className="text-amber-500 mb-5">★★★★★</span> Rated 5/5 | Based on 20+ Happy Clients
          </p>

          <p className="py-5 lg:py-6 text-white lg:mb-5">
            {description || "Default description."}
          </p>
          <div className="flex gap-5 lg:justify-start">
            <button
              onClick={scrollToContact}
              className="flex items-center shadow-animation bg-purple-600 py-2 px-4 lg:px-6 lg:py-3 text-white lg:font-semibold transition duration-300 cursor-pointer"
            >
              <GrContact className="text-xl mr-2" />
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => changeSlide("next")}
        className="shadow-animation absolute right-0 lg:right-2 lg:top-1/2 top-50 transform -translate-y-1/2 text-white text-lg p-2 lg:p-3 bg-purple-600 bg-opacity-50 hover:bg-opacity-80 transition z-40 cursor-pointer"
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
        `}
      </style>
    </div>
  );
};

export default HeroSection;
