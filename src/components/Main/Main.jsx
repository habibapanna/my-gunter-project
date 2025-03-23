import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";

const Main = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <div className="relative min-h-screen max-w-full mx-auto flex flex-col">
            {/* Smooth Fade In/Out Effect */}
            <div className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 transition-opacity duration-700 ${loading ? "opacity-100 z-50" : "opacity-0 -z-50"}`}>
                <Spinner />
            </div>

            <Navbar />
            <div className={`flex-grow transition-opacity duration-700 ${loading ? "opacity-50" : "opacity-100"}`}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
