import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaArrowRightLong,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch team members from API
  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/team")
      .then((res) => res.json())
      .then((data) => {
        setTeamMembers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching team:", err);
        setError("Failed to load team data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white text-center">Loading team...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="bg-black p-5 md:p-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="text-left">
          <h3 className="text-amber-500 font-semibold">Meet our experts</h3>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-white mb-3">
          Meet Our Expert Team
          </h2>
          <p>We have a team of experts, each bringing specialized skills to the table. Their professional experience ensures that every aspect of your e-commerce business is in capable hands.
</p>
          <div className="flex gap-1 justify-start mt-6 mb-5">
            <span className="border-2 w-8 border-amber-500"></span>
            <span className="border-2 w-2 border-amber-500"></span>
            <span className="border-2 w-3 border-amber-500"></span>
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
          320: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="p-2 md:p-5"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={member._id || index}>
            <div className="relative group h-[400px] shadow-lg">
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:translate-y-5 bg-gradient-to-br from-amber-500 to-purple-600"
              />

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white py-4 px-10 text-center">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-amber-500 text-sm">{member.title}</p>
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
                ? "bg-purple-600"
                : "bg-white"
            }`}
          ></span>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-10">
        <button className="bg-purple-600 px-4 py-2 lg:px-6 lg:py-4 text-white lg:font-semibold flex items-center gap-2 overflow-hidden hover:scale-95 hover:bg-purple-500 mx-auto cursor-pointer">
          <Link to="/gallery"> View All</Link>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default OurTeam;
