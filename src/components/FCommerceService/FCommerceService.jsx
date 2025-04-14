import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

function FCommerceService() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/f-commerce-service")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const services = [
    "Facebook Shop & Marketplace Setup – Build a professional storefront.",
    "Winning Product Research – Find trending & high-converting products.",
    "Facebook & Instagram Ads – Run high-ROI ad campaigns for maximum reach.",
    "Social Media Content & Engagement – Boost brand trust with eye-catching posts.",
    "Automated Order & Chatbot Setup – Streamline sales with automation tools.",
    "Influencer Marketing & Promotions – Leverage influencers to increase conversions.",
  ];

  return (
    <div className="bg-black min-h-screen py-5 text-white">
      {/* Carousel Section */}
      <section className="mw-full mx-auto mb-10 px-5">
        <Fade triggerOnce>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img.image || img.imageUrl}
                  alt={`Slide ${index}`}
                  className="w-full shadow-md h-[300px] lg:h-[400px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
      </section>

      {/* Hero Section */}
      <section className="px-5">
        <Slide direction="up" triggerOnce>
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-center text-purple-600">
            F-Commerce Services – Grow & Scale Your Business on Facebook!
          </h1>
        </Slide>
        <Fade cascade damping={0.1} triggerOnce>
          <p className="text-[16px] text-gray-300 font-normal max-w-3xl mx-auto text-center">
            Want to sell more on Facebook & Instagram? Our F-Commerce services help you set up, manage, and scale your business using Facebook Shops, Marketplace, and Ads, ensuring high engagement, more sales, and brand growth.
          </p>
        </Fade>
      </section>

      {/* Services Section */}
      <section className="bg-black px-5 md:px-20 mt-10">
        <Slide direction="left" triggerOnce>
          <h2 className="text-xl lg:text-2xl font-semibold mb-6 text-center text-amber-500">Our F-Commerce Services:</h2>
        </Slide>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, index) => (
            <Zoom key={index} triggerOnce delay={index * 100}>
              <div className="flex items-start gap-3 bg-zinc-900 p-4 shadow-md hover:shadow-2xl transition-all duration-300">
                <FaCheck className="text-amber-500 text-xl mt-1" />
                <p className="text-[16px] text-gray-300">{service}</p>
              </div>
            </Zoom>
          ))}
        </div>

        <Fade delay={300} triggerOnce>
          <p className="mt-10 text-center text-amber-500 text-lg md:text-xl font-bold">
            Start and grow your F-Commerce business with expert strategies!
          </p>
        </Fade>

        <div className="mt-8 text-center">
          <Zoom triggerOnce>
            <button className="relative bg-purple-600 px-6 py-3 text-white font-semibold hover:bg-purple-700 transition duration-300 shadow-animation text-[16px] lg:text-[18px]">
              <Link to='/contact'>Contact us today for expert guidance!</Link>
            </button>
          </Zoom>
        </div>
      </section>

      {/* Button Animation Styles */}
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
}

export default FCommerceService;
