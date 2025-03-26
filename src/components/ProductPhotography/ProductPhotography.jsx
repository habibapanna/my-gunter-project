import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  { image: "https://i.ibb.co.com/wF2Y3z2j/pexels-olenkabohovyk-3819969.jpg" },
  { image: "https://i.ibb.co.com/fYSJMzTc/pexels-ayush-phillip-1415203-2732096.jpg" },
  { image: "https://i.ibb.co.com/XrMmmxrv/pexels-laryssa-suaid-798122-1667071-1.jpg" },
  { image: "https://i.ibb.co.com/wNrbjxky/pexels-alexazabache-3766111.jpg" },
  { image: "https://i.ibb.co.com/j9mPCHhQ/pexels-binoid-cbd-1990665-3612182.jpg" },
];

function ProductPhotography() {
  const services = [
    "Winning Product Research",
    "Supplier Sourcing & Quality Control",
    "Custom Branding & Packaging",
    "Amazon SEO & Listing Optimization",
    "Inventory & Logistics Management",
    "Amazon PPC & Digital Marketing",
  ];

  return (
    <div className="bg-black min-h-screen py-10 text-white">
      {/* Carousel Section */}
      <section className="w-full md:max-w-3xl max-w-[400px] mx-auto mb-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img.image} alt={`Slide ${index}`} className="w-full shadow-md h-[400px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="text-left px-5 md:px-20">
        <h1 className="text-4xl font-bold mb-4">Product Photography & Videography</h1>
        <p className="text-[16px] text-gray-400 max-w-3xl font-normal">
          High-quality product images and videos are essential for increasing conversions and building trust with customers. We provide professional photography and videography services for Amazon, Walmart, Shopify, eBay, and social media marketing to help your brand stand out.
        </p>
      </section>

      {/* Services Section */}
      <section className="px-5 md:px-20 mt-10">
        <h2 className="text-2xl font-semibold mb-6">Our Product Photography & Videography Services</h2>
        <div className="space-y-3">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-orange-600 text-lg">◆</span>
              <p className="text-[16px] text-gray-400">{service}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button className="relative bg-orange-600 px-6 py-4 text-white font-semibold flex items-center gap-2 overflow-hidden transition-all duration-300 shadow-animation text-[18px]">
            <Link to='/contact'>Contact us today for a customized shoot!</Link>
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
        background: rgba(0, 0, 0, 0.9); /* Solid dark panel */
        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
        opacity: 0;
    }
    
    /* Left panel (rises from bottom) */
    .shadow-animation::before {
        left: 0;
        bottom: -100%;
    }
    
    /* Right panel (falls from top) */
    .shadow-animation::after {
        right: 0;
        top: -100%;
    }

    /* Hover Effect */
    .shadow-animation:hover::before {
        transform: translateY(-100%);
        opacity: 1;
    }

    .shadow-animation:hover::after {
        transform: translateY(100%);
        opacity: 1;
    }

    /* Panels Disappear After a While */
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
