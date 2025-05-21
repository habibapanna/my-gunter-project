import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/announcements")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data.slice(0, 5)))
      .catch((error) => console.error("Error fetching announcements:", error));
  }, []);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="bg-black px-5 lg:px-10">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-amber-500 font-semibold">OUR COMPANY BLOG</h3>
          <h2 className="text-2xl lg:text-4xl font-bold mt-3 text-white">Latest News</h2>
          <div className="flex gap-1 mt-8 mb-5">
            <span className="border-2 w-8 border-amber-500"></span>
            <span className="border-2 w-2 border-amber-500"></span>
            <span className="border-2 w-3 border-amber-500"></span>
          </div>
        </div>
      </div>

      {announcements.length > 0 ? (
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          speed={2000}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="p-5"
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {announcements.map((news) => (
            <SwiperSlide key={news._id}>
              <Link to="/announcements">
                <div className="relative group h-[400px] shadow-lg overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="h-[130px] absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120%] bg-black backdrop-blur-md text-white p-6 flex flex-col gap-3 z-10">
                    <span className="bg-purple-600 px-3 py-1 w-max text-sm ml-10 lg:ml-5">
                      {formatDate(news.date)}
                    </span>
                    <h3 className="text-sm lg:text-[16px] lg:font-semibold text-left text-white px-1 ml-10 lg:ml-5">
                      {news.title}
                    </h3>
                    <span className="text-amber-500 hover:underline lg:font-semibold text-left text-sm ml-10 lg:ml-5 cursor-pointer">
                      READ MORE
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-white text-center">Loading announcements...</p>
      )}

      <div className="flex justify-center gap-2 mt-12">
        {announcements.slice(0, 2).map((_, index) => (
          <span
            key={index}
            className={`h-[3px] w-10 transition-all duration-500 ${
              activeIndex % announcements.length === index ? "bg-purple-600" : "bg-white"
            }`}
          ></span>
        ))}
      </div>

      <div className="mt-10">
        <Link to="/announcements">
          <button className="bg-purple-600 px-4 py-2 lg:px-6 lg:py-4 text-white lg:font-semibold flex items-center gap-2 overflow-hidden shadow-animation mx-auto cursor-pointer">
            View All <FaArrowRightLong />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestNews;
