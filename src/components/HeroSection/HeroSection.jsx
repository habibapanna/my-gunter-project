import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { TbPlayerPlay } from "react-icons/tb";

const images = [
  "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/beard-man-1-1.png",
  "https://themes.envytheme.com/gunter/wp-content/uploads/2019/05/man1-1-1.png",
  "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/main-women-1-1.png",
];

const texts = [
  {
    title: "Seamless Support for Limitless Growth",
    description:
      "Reliability, innovation, and round-the-clock support—fueling your e-commerce growth without boundaries.",
  },
  {
    title: "Technology and experience",
    description:
      "We simplify e-commerce with seamless IT management. Focus on selling while we handle the tech.",
  },
  {
    title: "Empowering Your Business",
    description:
      "We provide cutting-edge solutions to help your business grow and thrive in the digital era.",
  },
];

        // Scroll to Contact section
        const scrollToContact = () => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
          }
      };

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false); // Video modal state
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative bg-black min-h-screen flex justify-center items-center overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-lg p-3 bg-orange-600 bg-opacity-50 hover:bg-opacity-80 transition z-50"
      >
        <FaArrowLeftLong />
      </button>

      {/* Hero Content */}
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center w-full px-10">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-end">
          <img
            key={currentIndex}
            src={images[currentIndex]}
            className="max-w-md rounded-lg shadow-2xl transition-transform duration-700 animate-slide-up"
            alt="Hero"
          />
        </div>

        {/* Text Section */}
        <div key={currentIndex} className="lg:w-1/2 text-left animate-slide-up mb-10 lg:mb-0">
        <span className="border-8 w-8 h-20 border-orange-600 bg-orange-600"></span>
          <h1 className="text-3xl lg:text-6xl font-bold text-white mb-5 ">
            {texts[currentIndex]?.title || "Default Title"}
          </h1>
          <p className="py-6 text-white mb-5">
            {texts[currentIndex]?.description || "Default description for missing text."}
          </p>

          <div className="flex gap-5  lg:justify-start">
            <button onClick={scrollToContact} className="bg-orange-600 px-6 py-3 text-white font-semibold transition duration-300 shadow-animation">
              Get Started
            </button>
            <button onClick={() => setShowVideo(true)} className="flex items-center gap-3 text-gray-500 font-semibold group transition duration-300">
              <span className="w-12 h-12 flex justify-center items-center border-2 border-orange-600 rounded-full text-orange-600 transition duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white">
                <TbPlayerPlay className="text-2xl" />
              </span>
              <span className="transition duration-300 group-hover:text-orange-600">
                Watch Video
              </span>
            </button>
          </div>
        </div>
      </div>
       {/* Video Modal */}
       {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-[70%] lg:w-[50%]">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-6 -right-6 text-white text-3xl hover:text-orange-600 transition"
            >
              <IoClose />
            </button>
            <iframe
              className="w-full h-72 md:h-96 lg:h-[450px] rounded-lg"
              src="https://www.youtube.com/embed/waBuau8T4mY?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-lg p-3 bg-orange-600 bg-opacity-50 hover:bg-opacity-80 transition z-50"
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

          .animate-slide-up {
            animation: slideUp 0.7s ease-out;
          }

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
};

export default HeroSection;
