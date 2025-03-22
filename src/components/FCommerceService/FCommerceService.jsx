import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";

const images = [
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/blog3-1-1-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/blog2-1-1-1-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/project4-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/project-details2-1-1-380x350.jpg" },
  { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/woman-bed-1-1-380x350.jpg" },
];

function FCommerceService() {
  const services = [
    "Facebook Shop & Marketplace Setup – Build a professional storefront.",
    "Winning Product Research – Find trending & high-converting products.",
    "Facebook & Instagram Ads – Run high-ROI ad campaigns for maximum reach.",
    "Social Media Content & Engagement – Boost brand trust with eye-catching posts.",
    "Automated Order & Chatbot Setup – Streamline sales with automation tools.",
    "Influencer Marketing & Promotions – Leverage influencers to increase conversions.",
  ];

  return (
    <div className="bg-white min-h-screen py-10 text-black">
      {/* Carousel Section */}
      <section className="w-full max-w-3xl mx-auto mb-10">
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
      <section>
        <h1 className="text-4xl font-bold mb-4">F-Commerce Services – Grow & Scale Your Business on Facebook!</h1>
        <p className="text-[16px] text-gray-500 font-normal max-w-3xl mx-auto">
          Want to sell more on Facebook & Instagram? Our F-Commerce services help you set up, manage, and scale your business using Facebook Shops, Marketplace, and Ads, ensuring high engagement, more sales, and brand growth.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white px-5 md:px-20 mt-10">
        <h2 className="text-2xl font-semibold mb-6">Our F-Commerce Services:</h2>
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li key={index} className="flex items-center text-gray-500 text-[16px]">
              <FaCheck className="text-orange-600 mr-3 text-2xl" /> {service}
            </li>
          ))}
        </ul>
        <p className="mt-10">💼 Start and grow your F-Commerce business with expert strategies!</p>
        <div className="text-center mt-8">
          <button className="relative bg-orange-600 px-6 py-4 text-white font-semibold transition-all duration-300 shadow-animation text-[18px]">
            <Link to='/contact'>📩 Contact us today for expert guidance!</Link>
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

export default FCommerceService;
