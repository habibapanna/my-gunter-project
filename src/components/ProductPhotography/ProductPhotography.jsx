import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";

function ProductPhotography() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/product-photography")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  const services = [
    "Winning Product Research",
    "Supplier Sourcing & Quality Control",
    "Custom Branding & Packaging",
    "Amazon SEO & Listing Optimization",
    "Inventory & Logistics Management",
    "Amazon PPC & Digital Marketing",
  ];

  return (
    <div className="bg-black min-h-screen py-5 text-white">
      {/* Carousel Section */}
      <Fade direction="up" cascade damping={0.2}>
        <section className="w-full mx-auto mb-10 px-5">
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
        </section>
      </Fade>

      {/* Hero Section */}
      <Fade direction="up" triggerOnce>
        <section className="text-left px-5 md:px-20">
          <h1 className="text-2xl lg:text-4xl text-center text-purple-600 font-bold mb-4">
            Product Photography & Videography
          </h1>
          <p className="text-[16px] text-gray-300 text-center">
            High-quality product images and videos are essential for increasing conversions and building trust with customers. We provide professional photography and videography services for Amazon, Walmart, Shopify, eBay, and social media marketing to help your brand stand out.
          </p>
        </section>
      </Fade>

      {/* Services Section */}
      <Fade direction="up" cascade damping={0.15}>
        <section className="px-5 md:px-20 mt-10">
          <h2 className="text-xl text-center text-amber-500 lg:text-2xl font-bold mb-6">
            Our Product Photography & Videography Services
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 border border-gray-700"
              >
                <h3 className="text-white font-semibold text-lg mb-2">
                  {service}
                </h3>
                <p className="text-gray-400 text-sm">
                  {service.includes("Amazon") || service.includes("SEO")
                    ? "Specialized for marketplaces like Amazon & Shopify."
                    : "Boost product appeal with expert-level visuals."}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="relative bg-purple-600 px-6 py-3 lg:px-8 lg:py-4 text-white font-semibold shadow-animation overflow-hidden transition-all duration-300 text-[16px] lg:text-[18px] cursor-pointer">
              <Link to="/contact">Contact us today for a customized shoot!</Link>
            </button>
          </div>
        </section>
      </Fade>

      {/* Tailwind Keyframe Styles */}
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
}

export default ProductPhotography;
