import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";

const images = [
  { image: "https://i.ibb.co.com/LX55CzsT/pexels-ivan-samkov-7621136.jpg" },
  { image: "https://i.ibb.co.com/n81KPgP6/pexels-ivan-samkov-7621131.jpg" },
  { image: "https://i.ibb.co.com/JWn064XP/pexels-mikhail-nilov-6969962.jpg" },
  { image: "https://i.ibb.co.com/8DKXsfP2/pexels-ivan-samkov-7621020.jpg" },
  { image: "https://i.ibb.co.com/LDT38Nd5/pexels-pixabay-50987.jpg" },
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
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img.image} alt={`Slide ${index}`} className="w-full shadow-md h-[300px] lg:h-[400px] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="px-5">
        <h1 className="text-2xl lg:text-4xl font-bold mb-4">F-Commerce Services – Grow & Scale Your Business on Facebook!</h1>
        <p className="text-[16px] text-gray-400 font-normal max-w-3xl mx-auto">
          Want to sell more on Facebook & Instagram? Our F-Commerce services help you set up, manage, and scale your business using Facebook Shops, Marketplace, and Ads, ensuring high engagement, more sales, and brand growth.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-black px-5 md:px-20 mt-10">
        <h2 className="text-xl lg:text-2xl font-semibold mb-6">Our F-Commerce Services:</h2>
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li key={index} className="flex items-center text-gray-400 text-[16px]">
              <FaCheck className="text-orange-600 mr-3 text-2xl" /> {service}
            </li>
          ))}
        </ul>
        <p className="mt-10 text-orange-600"> Start and grow your F-Commerce business with expert strategies!</p>
        <div className="text-center mt-8">
          <button className="relative bg-orange-600 px-2 py-2 lg:px-6 lg:py-4 text-white font-semibold transition-all duration-300 shadow-animation text-[16px] lg:text-[18px]">
            <Link to='/contact'>Contact us today for expert guidance!</Link>
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
