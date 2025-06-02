import { useState, useEffect } from "react";
import { GrContact } from "react-icons/gr";
import { FaPlayCircle, FaTimesCircle } from "react-icons/fa";
import { IoPlay } from "react-icons/io5";
import { MdPlayArrow } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  const [hero, setHero] = useState(null);
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
      .then((data) => setHero(data[0])) // Just take the first hero
      .catch((error) => console.error("Error fetching hero:", error));
  }, []);

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  if (!hero) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  const { image, title, description } = hero;

  return (
    <div className="relative bg-black flex justify-center items-center overflow-hidden mx-auto py-24 px-5 lg:px-10">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center max-w-7xl w-full gap-10">
        {/* Image / Video Section */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          {!isVideoPlaying ? (
            <div className="relative">
            <img
              src={image}
              alt="Hero"
              className="h-[300px] lg:h-[400px] object-cover w-full max-w-md rounded-lg bg-gray-300"
            />
          
            {/* Play Button */}
            <button
  onClick={() => setIsVideoPlaying(true)}
  className="absolute inset-0 flex items-center justify-center transition"
>
  <IoPlay className="text-white text-4xl rounded-full mt-10 p-2 cursor-pointer hover:scale-95 hover:bg-amber-400 bg-amber-500 backdrop-blur-xl shadow-md" />
</button>

          
            {/* Feature Info Below Play Button */}
            <div className="absolute hidden bottom-5 left-1/2 -translate-x-1/2 md:flex flex-col space-y-1 mt-4 text-sm w-full md:px-5">
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md p-2 rounded-full">
                <p className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center font-bold">1</p>
                <p className="text-white">All eCommerce Solution</p>
              </div>
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md p-2 rounded-full">
                <p className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center font-bold">2</p>
                <p className="text-white">Design & Development Services</p>
              </div>
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-md p-2 rounded-full">
                <p className="w-5 h-5 bg-white text-black rounded-full flex items-center justify-center font-bold">3</p>
                <p className="text-white">All type of Digital Solution</p>
              </div>
            </div>
          </div>
          
          ) : (
            <div className="relative w-full max-w-md h-[300px] lg:h-[400px]">
              <iframe
                className="w-full h-full rounded-md"
                src="https://www.youtube.com/embed/QsY8fnvMn6c?si=b0dFBkHLfrBz4JBx"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="absolute top-2 right-2 bg-black bg-opacity-70 p-2 rounded-full text-white text-xl"
              >
                <FaTimesCircle className="text-amber-500  cursor-pointer" />
              </button>
            </div>
          )}
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-left">
        <p className="text-amber-500 text-lg lg:text-xl">
            ★★★★★ Rated 5/5 | Based on 20+ Happy Clients
          </p>
          <Fade direction="up"> <h1 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
            {title || "Default Title"}
          </h1></Fade>
          
          <p className="mt-2 mb-5 lg:mb-8 text-white">
            {description || "Default description."}
          </p>

          <div className="flex gap-5">
            <button
              onClick={scrollToContact}
              className="flex items-center hover:bg-amber-400 bg-amber-500 py-2 lg:py-3 px-5 lg:px-8 text-black rounded-full cursor-pointer font-semibold transition duration-300 hover:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
