import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";

const services = [
  "Custom Shopify Store Design – Mobile-friendly, fast-loading, and optimized for sales.",
  "Winning Product Research – Find high-demand products for dropshipping & private label.",
  "Shopify SEO & Conversion Optimization – Rank higher and boost sales with keyword-rich content.",
  "Store Automation & Order Management – Set up automated order processing & inventory tracking.",
  "Facebook, Google & TikTok Ads – Drive traffic and maximize sales with targeted advertising.",
];

function Shopify() {
  const [shopifyImages, setShopifyImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("https://my-gunter-project-server.vercel.app/shopify");
        const data = await res.json();
        setShopifyImages(data); // data should be an array of objects with imageUrl
      } catch (error) {
        console.error("Error fetching Shopify images:", error);
      }
    };
    fetchImages();
  }, []);

  return (
    <div className="bg-black min-h-screen pt-10 text-white">
      {/* Carousel Section */}
      <section className="md:w-full md:max-w-3xl max-w-sm w-[350px] mx-auto mb-10 px-5">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {shopifyImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.imageUrl}
                alt={`Shopify Slide ${index}`}
                className="w-full shadow-md h-[300px] lg:h-[400px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="px-5">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">
          Shopify Store Setup & Management – Build & Scale Your Online Business!
        </h1>
        <p className="text-[16px] font-normal text-gray-400 max-w-3xl mx-auto">
          Want to launch a professional, high-converting Shopify store? We provide end-to-end Shopify solutions, from store design and branding to SEO, product listings, and marketing, ensuring your success in eCommerce & dropshipping.
        </p>
      </section>

      {/* Services Section */}
      <section className="services bg-black px-5 md:px-20 mt-10">
        <h2 className="text-xl lg:text-2xl font-semibold mb-6">Our Shopify Services:</h2>
        <ul className="space-y-4">
          {services.map((service, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-400 text-[16px]">
              <FaCheck className="text-purple-600 text-xl" />
              {service}
            </li>
          ))}
        </ul>

        <div className="text-center mt-8">
          <button className="relative bg-purple-600 text-[16px] px-2 py-2 lg:px-6 lg:py-4 text-white font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 shadow-animation lg:text-[18px] cursor-pointer">
            <Link to="/contact">Get in touch for expert Shopify solutions!</Link>
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
            100% { opacity: 0; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default Shopify;
