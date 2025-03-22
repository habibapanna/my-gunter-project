import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const newsArticles = [
  {
    title: "Breaking News: Walmart Business is Revolutionizing eCommerce!",
    image: "https://i.ibb.co.com/p6RXDJyy/vanilla-bear-films-JEw-NQerg3-Hs-unsplash.jpg",
    description: "Walmart Business is transforming online retail with AI tools, fulfillment solutions, and massive growth opportunities.",
  },
  {
    title: "F-Commerce Booming in Bangladesh: The Future of Online Business!",
    image: "https://i.ibb.co.com/PGyPtgPj/pexels-olly-3761509.jpg",
    description: "With millions of active users, Facebook Commerce is shaping the future of online selling in Bangladesh.",
  },
  {
    title: "Amazon FBA Continues to Dominate eCommerce! ",
    image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/05/google-1-1-1-380x330.jpg",
    description: "Amazon’s FBA program is scaling businesses worldwide with fast shipping and automated fulfillment.",
  },
  {
    title: "Amazon FBA Continues to Dominate eCommerce! ",
    image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/05/singlr-bolg-1-1-1-1-scaled-380x330.jpg",
    description: "Amazon’s FBA program is scaling businesses worldwide with fast shipping and automated fulfillment.",
  },
];

const LatestNews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-black p-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-orange-600 font-semibold">OUR COMPANY BLOG</h3>
          <h2 className="text-4xl font-bold mt-3 text-white">Latest News</h2>
          <div className="flex gap-1 mt-8 mb-5">
            <span className="border-2 w-8 border-orange-600"></span>
            <span className="border-2 w-2 border-orange-600"></span>
            <span className="border-2 w-3 border-orange-600"></span>
          </div>
        </div>
        <button className="bg-orange-600 px-6 py-4 text-white font-semibold flex items-center gap-2 overflow-hidden shadow-animation">
          <Link to="/blog">View All</Link>
          <FaArrowRightLong />
        </button>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={1000}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="p-5"
      >
        {newsArticles.map((news, index) => (
         <SwiperSlide key={index}>
         <div className="relative group h-[450px] shadow-lg overflow-hidden">
           <img
             src={news.image}
             alt={news.title}
             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
           />
           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[110%] bg-stone-900 backdrop-blur-md text-white p-6 flex flex-col gap-3 z-10">
             <span className="bg-orange-600 px-3 py-1 w-max font-semibold">May 05</span>
             <h3 className="text-xl font-bold text-left text-white px-1">{news.title}</h3>
             <button className="text-orange-600 hover:underline font-semibold text-left">READ MORE</button>
           </div>
         </div>
       </SwiperSlide>
        
        
        ))}
      </Swiper>
      <div className="flex justify-center gap-2 mt-12">
        {newsArticles.slice(0, 2).map((_, index) => (
          <span
            key={index}
            className={`h-[3px] w-10 transition-all duration-500 ${
              activeIndex % newsArticles.length === index ? "bg-orange-600" : "bg-white"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;