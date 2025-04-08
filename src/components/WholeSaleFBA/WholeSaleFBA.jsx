import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";

function WholeSaleFBA() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/wfs")
      .then((res) => res.json())
      .then((data) => {
        // Assuming your API returns an array of objects with an "imageUrl" property
        setImages(data);
      })
      .catch((err) => console.error("Failed to fetch WFS images:", err));
  }, []);

  return (
    <div className="bg-purple-600 min-h-screen py-10 text-gray-200">
      {/* Carousel Section */}
      <section className="md:w-full md:max-w-3xl max-w-sm w-[350px] mx-auto mb-10 px-5">
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
                className="w-full shadow-md h-[300px] lg:h-[400px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="px-5">
        <h1 className="tex-2xl lg:text-4xl font-bold mb-4 text-white">
          Wholesale FBA & WFS – Scale Your Amazon & Walmart Business!
        </h1>
        <p className="text-[16px] max-w-3xl mx-auto mb-8 font-normal text-gray-200">
          Looking to grow a sustainable and profitable eCommerce business? Our Wholesale FBA (Fulfillment by Amazon) & WFS (Walmart Fulfillment Services) solutions help you source high-demand, brand-approved products and streamline fulfillment for maximum scalability and profit.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-purple-600 px-5 md:px-20 mt-10">
        <h2 className="text-xl lg:text-2xl font-semibold text-white mb-6">Our Wholesale FBA & WFS Services</h2>

        <ul className="space-y-4">
          {[
            "Brand-Approved Wholesale Sourcing – Work with trusted distributors & manufacturers.",
            "Amazon FBA & Walmart WFS Prep – Hassle-free labeling, packaging & shipment management.",
            "Bulk Order & Logistics Handling – Efficient inventory control for higher profit margins.",
            "Amazon & Walmart SEO Optimization – Improve rankings & sales with keyword-rich listings.",
            "Advertising & Sales Growth Strategy – Boost visibility with Amazon PPC & Walmart Ads.",
          ].map((service, index) => (
            <li key={index} className="flex items-start gap-3 text-lg">
              <FaCheck className="text-amber-500 text-2xl" />
              <span className="text-[16px] font-normal lg:font-semibold text-gray-200">{service}</span>
            </li>
          ))}
        </ul>

        <p className="text-amber-500 mt-10">
          Start and scale your Wholesale FBA & WFS business today with expert guidance!
        </p>

        <div className="text-center mt-5">
          <button className="relative bg-amber-500 px-2 py-2 lg:px-6 lg:py-4 text-white font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 shadow-animation text-[16px] lg:text-[18px] cursor-pointer">
            <Link to="/contact">Contact us today for expert guidance!</Link>
          </button>
        </div>
      </section>

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
            0% { opacity: 1; }
            70% { opacity: 1; }
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

export default WholeSaleFBA;
