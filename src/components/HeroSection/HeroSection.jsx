import { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const [heroes, setHeroes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const coloredWords = [
    { text: "Private Label", color: "text-pink-500" },
    { text: "Retail / Online Arbitrage", color: "text-lime-500" },
    { text: "Wholesale FBA / WFS", color: "text-violet-500" },
    { text: "Web Development", color: "text-green-500" },
    { text: "Shopify", color: "text-blue-500" },
    { text: "Creative Design", color: "text-sky-500" },
    { text: "Digital Marketing", color: "text-amber-500" },
    { text: "Product Photography", color: "text-purple-500" },
    { text: "F-Commerce Service", color: "text-orange-500" },
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
          // done typing
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        } else {
          // done deleting
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
            className={`h-[300px] lg:h-[500px] object-cover lg:max-w-md transition-transform duration-700 z-10 ${
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
          } mb-10 mt-10 lg:mt-0 lg:mb-0`}
        >
          <span className="border-8 w-10 h-28 lg:w-16 lg:h-40 border-amber-500 absolute bg-amber-500 mt-2 lg:mt-5"></span>
          <div className="mb-4 text-center">
  <span className="text-lg lg:text-2xl font-semibold text-amber-400 px-3 py-1 rounded-full inline-block text-center mx-auto">
  <span className={`font-semibold ${coloredWords[wordIndex].color}`}>
  {displayText}
  <span className="animate-pulse">|</span>
</span>

  </span>
</div>
          <h1 className="text-3xl lg:text-6xl font-bold text-white mb-5 lg:mb-10 relative">
            {heroes[currentIndex]?.title || "Default Title"}
          </h1>
          
          <p><span className="text-amber-400">★★★★★</span> Rated 5/5 | Based on 20+ Happy Clients</p>
          <p className="py-5 lg:py-6 text-white lg:mb-5">
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
