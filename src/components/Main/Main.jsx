import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import { FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

const Main = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); // Default to light mode

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    // Listen for theme changes
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
            {/* Smooth Fade In/Out Effect */}
            <div className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-700 ${loading ? "opacity-100 z-50" : "opacity-0 -z-50"}`}>
                <Spinner />
            </div>

            <Navbar />
            <div className={`flex-grow transition-opacity duration-700 ${loading ? "opacity-50" : "opacity-100"}`}>
                <Outlet />
            </div>
            <Footer />

            <div 
    onClick={scrollToTop} 
    className="fixed bottom-8 lg:bottom-5 left-6 w-10 h-10 flex items-center justify-center rounded-full text-amber-500 bg-white hover:bg-amber-600 hover:text-white cursor-pointer shadow-lg transition-all z-50"
>
    <MdKeyboardArrowUp className=" text-2xl" />
</div>


            {/* WhatsApp Floating Button - Show only in light mode */}
            {theme === "light" && (
                <a
                    href="https://wa.me/+8801946127204"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 lg:bottom-5 right-6 bg-green-500 text-white p-3 rounded-full shadow- hover:bg-green-600 transition-all z-60"
                >
                    <FaWhatsapp size={20} />
                </a>
            )}
            
        </div>
    );
};

export default Main;
