import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { useState } from "react";
import Lottie from 'react-lottie';
import lottie from "../assets/service/service1.json"; // Update with correct path

const Services = () => {
    const [search, setSearch] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    // Services List
    const services = [
        { title: "Private Label", path: "/services/private-label" },
        { title: "Retail / Online Arbitrage", path: "/services/retail-arbitrage" },
        { title: "Wholesale FBA / WFS", path: "/services/wholesale-fba" },
        { title: "Web Development", path: "/services/web-development" },
        { title: "Shopify", path: "/services/shopify" },
        { title: "Creative Design", path: "/services/creative-design" },
        { title: "Digital Marketing", path: "/services/digital-marketing" },
        { title: "Product Photography", path: "/services/product-photography" },
        { title: "F-Commerce Service", path: "/services/f-commerce-service" },
    ];

    // Get the current service title based on the URL path
    const currentService = services.find(service => service.path === location.pathname);

    // Lottie options for animation
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: lottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="bg-white">
            {/* ✅ Banner Section (Dynamically Updates Title) */}
            <div className="bg-black py-20">
                <h1 className="text-4xl font-bold mb-5 text-center text-white">
                    {currentService ? currentService.title : "Services"}
                </h1>
                <p className="text-center text-white">
                    <Link to="/" className={`mr-3 transition-colors duration-300 ${location.pathname === "/" ? "text-orange-600 font-semibold" : "hover:text-orange-600"}`}>
                        Home
                    </Link>
                    /
                    <span className="ml-3 text-orange-600 font-semibold">
                        {currentService ? currentService.title : "Services"}
                    </span>
                </p>
            </div>

            <div className="p-10 grid grid-cols-12 gap-6">
                {/* ✅ Sidebar for Service List */}
                <div className="col-span-4 bg-white shadow-lg h-[550px] p-4">
                    {/* ✅ Search Bar */}
                    <div className="relative mb-4">
                        <MdOutlineSearch className="absolute left-3 top-3 text-orange-600 text-xl" />
                        <input
                            type="text"
                            placeholder="Search Services..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 text-gray-600  focus:outline-none focus:ring-2 focus:ring-orange-600"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* ✅ Service List */}
                    <div className="flex flex-col">
                        {services.filter(service => service.title.toLowerCase().includes(search.toLowerCase())).map((service, index) => (
                            <button
                                key={index}
                                className={`flex justify-between items-center p-3 border-b border-gray-300 transition-all duration-300 text-gray-600 relative transform
                                ${location.pathname === service.path ? "bg-orange-600 text-white" : "bg-white text-gray-600 hover:bg-orange-600 hover:text-white hover:scale-95"}`}
                                onClick={() => navigate(service.path)}
                            >
                                <span className="text-[16px]">{service.title}</span>
                                <FaArrowRightLong className="text-lg" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* ✅ Right Content Area - Shows Service Component */}
                <div className="col-span-8 flex justify-center items-center text-gray-600 text-xl font-semibold">
                    {currentService ? (
                        <Outlet /> // This will load the selected service component
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center">
                            <Lottie options={defaultOptions} height={400} width={400} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;
