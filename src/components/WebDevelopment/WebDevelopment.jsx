import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

function WebDevelopment() {
  const [images, setImages] = useState([]);

  const services = [
    "Custom Website Design & Development – Modern, mobile-friendly & high-speed websites.",
    "E-Commerce Website Development – Shopify, WooCommerce, Magento & more.",
    "SEO & Speed Optimization – Improve ranking and performance on Google.",
    "UI/UX Design & Branding – Engaging, visually appealing layouts.",
    "Web App Development – Scalable solutions for startups & enterprises.",
    "Website Maintenance & Security – Regular updates & protection against cyber threats.",
  ];

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/web-development")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="bg-black min-h-screen py-5 text-white">
      {/* Carousel Section */}
      <section className="md:w-full md:max-w-3x max-w- w-full mx-auto mb-10 px-5">
        <Zoom cascade triggerOnce>
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
                  src={img.imageUrl}
                  alt={`Slide ${index}`}
                  className="w-full shadow-md h-[300px] lg:h-[400px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Zoom>
      </section>

      {/* Hero Section */}
      <section className="md:px-20 px-5 text-center">
        <Fade cascade direction="up" triggerOnce>
          <h1 className="text-2xl lg:text-4xl font-bold mb-4 text-purple-600">
            Web Development Services
          </h1>
          <p className="text-[16px] text-gray-300">
            Need a fast, responsive, and SEO-optimized website? We specialize
            in custom web development for businesses, eCommerce, and personal
            brands, ensuring a user-friendly experience and maximum conversions.
          </p>
        </Fade>
      </section>

      {/* Services Section */}
      <section className="services bg-black px-5 md:px-20 mt-14">
  <Slide direction="left" triggerOnce>
    <h2 className="text-xl text-amber-500 lg:text-2xl font-bold mb-6 text-center">
      Our Web Development Services
    </h2>
  </Slide>

  {/* Services Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {services.map((service, index) => (
      <Fade key={index} direction="up" delay={index * 100} triggerOnce>
        <div className="bg-zinc-900 hover:bg-zinc-800 transition duration-300 p-5 shadow-lg border border-zinc-700">
          <div className="flex items-start gap-3 text-gray-300 text-[16px]">
            <FaCheck className="text-amber-500 text-xl mt-1" />
            <span>{service}</span>
          </div>
        </div>
      </Fade>
    ))}
  </div>

  {/* Call To Action Button */}
  <Fade delay={500} triggerOnce>
    <div className="text-center mt-10">
      <button className="relative bg-purple-600 text-[16px] px-2 py-2 lg:px-6 lg:py-4 text-white font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 shadow-animation lg:text-[18px] cursor-pointer mx-auto hover:bg-purple-700">
        <Link to="/contact">Contact us today for expert guidance!</Link>
      </button>
    </div>
  </Fade>
</section>


      {/* Custom Shadow Button Animation */}
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

export default WebDevelopment;
