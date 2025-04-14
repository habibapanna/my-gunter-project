import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

function WholeSaleFBA() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/wfs")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
      })
      .catch((err) => console.error("Failed to fetch WFS images:", err));
  }, []);

  return (
    <div className="bg-gradient-to-b bg-black min-h-screen py-5 text-gray-300">
      {/* Carousel Section */}
      <section className="md:w-full w-full mx-auto mb-10 px-5">
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

      {/* Hero Section */}
      <section className="px-5 text-center">
        <Fade direction="up" cascade damping={0.1}>
          <h1 className="text-2xl lg:text-4xl font-bold text-purple-600 mb-4 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.25)]">
            Wholesale FBA & WFS – Scale Your Amazon & Walmart Business!
          </h1>
          <p className="text-[16px] lg:text-lg max-w-3xl mx-auto mb-8 font-light leading-relaxed text-gray-300">
            Looking to grow a sustainable and profitable eCommerce business? Our Wholesale FBA (Fulfillment by Amazon) & WFS (Walmart Fulfillment Services) solutions help you source high-demand, brand-approved products and streamline fulfillment for maximum scalability and profit.
          </p>
        </Fade>
      </section>

      {/* Services Section */}
      <section className="px-5 md:px-20 mt-10">
        <Fade direction="up" cascade damping={0.15}>
          <h2 className="text-xl lg:text-3xl font-bold mb-6 text-center text-amber-500">
            Our Wholesale FBA & WFS Services
          </h2>

          <ul className="grid gap-6 lg:grid-cols-2">
            {[
              "Brand-Approved Wholesale Sourcing – Work with trusted distributors & manufacturers.",
              "Amazon FBA & Walmart WFS Prep – Hassle-free labeling, packaging & shipment management.",
              "Bulk Order & Logistics Handling – Efficient inventory control for higher profit margins.",
              "Amazon & Walmart SEO Optimization – Improve rankings & sales with keyword-rich listings.",
              "Advertising & Sales Growth Strategy – Boost visibility with Amazon PPC & Walmart Ads.",
              "Advertising & Sales Growth Strategy – Boost visibility with Amazon PPC & Walmart Ads.",
            ].map((service, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-stone-900 bg-opacity-50 p-4 hover:scale-[1.02] transition-transform duration-300 shadow-md hover:shadow-purple-600"
              >
                <FaCheck className="text-amber-400 text-xl mt-1" />
                <span className="text-[16px] font-medium text-gray-200">
                  {service}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-amber-500 mt-10 text-center text-lg font-semibold">
            Start and scale your Wholesale FBA & WFS business today with expert guidance!
          </p>

          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="relative inline-block px-6 py-3 text-white font-semibold text-lg  bg-purple-600 transition-all duration-300 shadow-lg shadow-animation"
            >
              Contact us today for expert guidance!
            </Link>
          </div>
        </Fade>
      </section>
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

export default WholeSaleFBA;
