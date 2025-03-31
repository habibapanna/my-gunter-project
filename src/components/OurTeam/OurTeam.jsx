import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaArrowRightLong,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Josh Butler",
    title: "Photographer",
    image:
      "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/team4-1-1.jpg",
  },
  {
    name: "Emily Carter",
    title: "Graphic Designer",
    image:
      "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/team2-1-1.jpg",
  },
  {
    name: "Michael Lee",
    title: "Art Director",
    image:
      "https://i.ibb.co.com/JRt4RcYB/pexels-michael-burrows-7129700.jpg",
  },
  {
    name: "Sophia Williams",
    title: "Marketing Manager",
    image:
      "https://i.ibb.co.com/5g1msBDj/luis-villasmil-Z4rqv-Rp-Rj38-unsplash.jpg",
  },
  {
    name: "Daniel Smith",
    title: "UI/UX Designer",
    image:
      "https://i.ibb.co.com/9jTZcz6/pexels-ketut-subiyanto-4623471.jpg",
  },
];

const OurTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-black p-5 md:p-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="text-left">
          <h3 className="text-orange-600 font-semibold">Meet our experts</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white">
            Our Team
          </h2>
          <div className="flex gap-1 justify-start mt-6 mb-5">
            <span className="border-2 w-8 border-orange-600"></span>
            <span className="border-2 w-2 border-orange-600"></span>
            <span className="border-2 w-3 border-orange-600"></span>
          </div>
        </div>
       
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        speed={2000}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Small screens: 1 slide
          768: { slidesPerView: 2, spaceBetween: 15 }, // Medium screens: 2 slides
          1024: { slidesPerView: 4, spaceBetween: 20 }, // Large screens: 4 slides
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="p-2 md:p-5"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="relative group h-[400px] shadow-lg">
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:translate-y-5"
              />

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white p-3 text-center">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-orange-600 text-sm">{member.title}</p>
              </div>

              {/* Social Links on Hover */}
              <div className="absolute top-0 left-0 w-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex justify-center gap-2 p-2">
                {[
                  { icon: FaFacebook, link: "#" },
                  { icon: FaInstagram, link: "#" },
                  { icon: FaTwitter, link: "#" },
                  { icon: FaLinkedin, link: "#" },
                ].map(({ icon: Icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    className="text-orange-600 hover:bg-orange-600 hover:text-white p-2 rounded-full border border-orange-500 text-sm"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Border Indicator */}
      <div className="flex justify-center gap-2 mt-12">
        {teamMembers.slice(0, 2).map((_, index) => (
          <span
            key={index}
            className={`h-[3px] w-10 transition-all duration-500 ${
              activeIndex % teamMembers.length === index
                ? "bg-orange-600"
                : "bg-white"
            }`}
          ></span>
        ))}
      </div>
      <div className="mt-10"> <button className="bg-orange-600 px-4 py-2 lg:px-6 lg:py-4 text-white lg:font-semibold flex items-center gap-2 overflow-hidden shadow-animation mx-auto">
         <Link to="/contact"> View All</Link>
          <FaArrowRightLong />
        </button></div>
    </div>
  );
};

export default OurTeam;
