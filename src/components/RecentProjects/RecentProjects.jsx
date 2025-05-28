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
    <div className="bg-black px-5 md:px-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between text-left mb-6">
        <div>
          <h3 className="text-amber-500 font-semibold">OUR COMPLETED PROJECTS</h3>
          <h2 className="text-2xl md:text-4xl font-bold mt-3 text-white mb-3">Every Store Presents a Journey of Growth</h2>
          <p>Explore the journey behind each store’s success.  From innovative strategies to remarkable growth, learn how solutions power up your business growth and drive lasting transformations. </p>
          <div className="flex gap-1 mt-6 mb-5 justify-start">
            <span className="border-2 w-8 border-amber-500"></span>
            <span className="border-2 w-2 border-amber-500"></span>
            <span className="border-2 w-3 border-amber-500"></span>
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
              <Link to="/gallery">
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
                <div className="relative bg-black text-white text-lg py-5 px-2 w-full text-center transition-all duration-500 h-[100px]">
                  <div className="absolute bottom-0 left-0 w-full h-full bg-purple-600 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-500"></div>
                  <span className="relative z-10 text-sm lg:text-lg">{project.title}</span>
                </div>
              </div></Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Bottom Indicator */}
      {!loading && !error && projects.length > 0 && (
        <div className="flex justify-center gap-2">
          {projects.slice(0, 2).map((_, index) => (
            <span
              key={index}
              className={`h-[3px] w-10 transition-all duration-500 ${
                activeIndex % projects.length === index ? "bg-purple-600" : "bg-white"
              }`}
            ></span>
          ))}
        </div>
      )}

      {/* View All Projects Button */}
      <div className="mt-5">
        <button className="bg-purple-600 px-4 md:px-6 py-2 md:py-4 text-white lg:font-semibold flex items-center gap-2 hover:scale-95 hover:bg-purple-500 mb-10 mt-4 md:mt-10 mx-auto cursor-pointer">
          <Link to="/gallery">All Projects </Link>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default RecentProjects;
