import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";

const services = [
  { title: "500+ Amazon Stores Managed", image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/blog3-1-1-380x350.jpg" },
  { title: "200+ Walmart Stores Managed", image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/blog2-1-1-1-380x350.jpg" },
  { title: "100+ Shopify Stores Managed", image: "https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/project4-380x350.jpg" },
  { title: "Professional Product Photography", image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/project-details2-1-1-380x350.jpg" },
  { title: "Expert Digital Marketing Services", image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/woman-bed-1-1-380x350.jpg" },
];

const RecentProjects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-black p-6 md:p-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="text-center md:text-left">
          <h3 className="text-orange-600 font-semibold">OUR COMPLETED PROJECTS</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">Recent Projects</h2>
          <div className="flex gap-1 mt-6 mb-5 justify-center md:justify-start">
            <span className="border-2 w-8 border-orange-600"></span>
            <span className="border-2 w-2 border-orange-600"></span>
            <span className="border-2 w-3 border-orange-600"></span>
          </div>
        </div>
        <button className="bg-orange-600 px-5 md:px-6 py-3 md:py-4 text-white font-semibold flex items-center gap-2 shadow-animation mt-4 md:mt-0">
          All Projects <FaArrowRightLong />
        </button>
      </div>

      {/* Swiper Carousel */}
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
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="group relative h-[350px] md:h-[400px] shadow-lg overflow-hidden">
              {/* Image with Hover Effect */}
              <div className="relative w-full h-[250px] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:grayscale"
                />
              </div>

              {/* Text Card */}
              <div className="relative bg-stone-900 text-white font-semibold text-lg p-5 w-full text-center transition-all duration-500">
                {service.title}
                <div className="absolute bottom-0 left-0 w-full h-full bg-orange-600 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-500"></div>
                <span className="relative z-10">{service.title}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Indicator */}
      <div className="flex justify-center gap-2 mt-5">
        {services.slice(0, 2).map((_, index) => (
          <span
            key={index}
            className={`h-[3px] w-10 transition-all duration-500 ${
              activeIndex % services.length === index ? "bg-orange-600" : "bg-white"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
