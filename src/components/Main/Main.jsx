import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowUp, MdLiveHelp, MdChatBubble } from "react-icons/md"; // Chat Icons
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Main = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="relative min-h-screen max-w-7xl mx-auto flex flex-col">
            {/* Loading Spinner */}
            <div className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-700 ${loading ? "opacity-100 z-50" : "opacity-0 -z-50"}`}>
                <Spinner />
            </div>

            <Navbar />
            <div className={`flex-grow transition-opacity duration-700 ${loading ? "opacity-50" : "opacity-100"}`}>
                <Outlet />
            </div>
            <Footer />

            {theme === "light" && (
  <div className="fixed bottom-8 left-6 z-50 group">
    {/* Chat Box */}
    <div className="relative w-12 h-12 bg-purple-600 rounded-full shadow-lg cursor-pointer overflow-hidden group transition-all duration-500">
      
      {/* Chat Icon (Only visible when NOT hovered) */}
      <div className="w-full h-full flex items-center justify-center text-white transition-opacity duration-300 group-hover:opacity-0">
        <MdChatBubble size={22} />
      </div>

      {/* Swiper - Only visible when hovered */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          loop
          slidesPerView={1}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center text-white">
              <a href="#" title="Live Chat">
                <MdLiveHelp size={22} />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center text-white">
              <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer" title="Messenger">
                <FaFacebookMessenger size={22} />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full flex items-center justify-center text-white">
              <a href="https://wa.me/+8801946127204" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <FaWhatsapp size={22} />
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
)}


            {/* Scroll to Top */}
            <div 
                onClick={scrollToTop} 
                className="fixed bottom-8 right-6 w-12 h-12 flex items-center justify-center rounded-full hover:bg-purple-600 bg-amber-500 text-white cursor-pointer shadow-lg transition-all z-50"
            >
                <MdKeyboardArrowUp className="text-2xl" />
            </div>
        </div>
    );
};

export default Main;
