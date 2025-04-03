import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RecentProjects = () => {
  const [projects, setProjects] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.slice(0, 5)); // Show only 4-5 projects
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load projects.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-black p-6 md:p-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between text-left mb-6">
        <div>
          <h3 className="text-orange-600 font-semibold">OUR COMPLETED PROJECTS</h3>
          <h2 className="text-2xl md:text-4xl font-bold mt-3 text-white">Recent Projects</h2>
          <div className="flex gap-1 mt-6 mb-5 justify-start">
            <span className="border-2 w-8 border-orange-600"></span>
            <span className="border-2 w-2 border-orange-600"></span>
            <span className="border-2 w-3 border-orange-600"></span>
          </div>
        </div>
      </div>

      {/* Loading & Error Handling */}
      {loading && <p className="text-white text-center">Loading projects...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Swiper Carousel */}
      {!loading && !error && projects.length > 0 && (
        <Swiper
          modules={[Pagination, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },  // Small screen: 1 slide
            640: { slidesPerView: 2, spaceBetween: 15 },  // Medium screen: 2 slides
            1024: { slidesPerView: 4, spaceBetween: 20 }, // Large screen: 4 slides
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          speed={1000}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="p-2 md:p-5"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="group relative h-[350px] md:h-[400px] shadow-lg overflow-hidden">
                {/* Image with Hover Effect */}
                <div className="relative w-full h-[250px] overflow-hidden">
                  <img
                    src={project.image} // Dynamic image
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale"
                  />
                </div>

                {/* Text Card */}
                <div className="relative bg-stone-900 text-white text-lg py-10 px-2 w-full text-center transition-all duration-500 h-[100px]">
                  <div className="absolute bottom-0 left-0 w-full h-full bg-orange-600 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-500"></div>
                  <span className="relative z-10 text-sm lg:text-lg">{project.title}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Bottom Indicator */}
      {!loading && !error && projects.length > 0 && (
        <div className="flex justify-center gap-2 mt-5">
          {projects.slice(0, 2).map((_, index) => (
            <span
              key={index}
              className={`h-[3px] w-10 transition-all duration-500 ${
                activeIndex % projects.length === index ? "bg-orange-600" : "bg-white"
              }`}
            ></span>
          ))}
        </div>
      )}

      {/* View All Projects Button */}
      <div className="mt-10">
        <button className="shadow-animation bg-orange-600 px-4 md:px-6 py-2 md:py-4 text-white lg:font-semibold flex items-center gap-2 shadow-animation mt-4 md:mt-0 mx-auto">
          <Link to="/gallery">All Projects </Link>
          <FaArrowRightLong />
        </button>
      </div>
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

export default RecentProjects;
