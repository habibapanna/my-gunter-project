import { Link, useLocation, Outlet, useNavigate } from "react-router-dom"; 
import { FaArrowRightLong } from "react-icons/fa6"; 
import { MdOutlineSearch, MdMenu } from "react-icons/md"; 
import { useState, useEffect } from "react"; 
import Lottie from 'react-lottie'; 
import lottie from "../assets/service/service1.json"; // Update with correct path

const Services = () => {
    const [search, setSearch] = useState(""); 
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
    const location = useLocation(); 
    const navigate = useNavigate(); 

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

    const currentService = services.find(service => service.path === location.pathname) || services[0]; // Default to Private Label if no match

    const defaultOptions = { 
        loop: true, 
        autoplay: true, 
        animationData: lottie, 
        rendererSettings: { 
            preserveAspectRatio: 'xMidYMid slice' 
        } 
    };

    useEffect(() => {
        // Redirect to "Private Label" service if no service is selected
        if (location.pathname === "/services") {
            navigate('/services/private-label'); // Redirect to default service (Private Label)
        }
    }, [location, navigate]); // This ensures the redirect occurs only on page load or URL change

    return ( 
        <div className="bg-black"> 
            {/* ✅ Banner Section */}
            <div className="bg-black py-16 text-center"> 
                <h1 className="text-2xl lg:text-4xl font-bold mb-3 text-white"> 
                    {currentService ? currentService.title : "Services"} 
                </h1> 
                <p className="text-white"> 
                    <Link to="/" className="mr-2 hover:text-amber-500 hover:underline"> 
                        Home 
                    </Link> 
                    / 
                    <span className="ml-2 text-amber-500 font-semibold"> 
                        {currentService ? currentService.title : "Services"} 
                    </span> 
                </p> 
            </div>

            <div className="p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 lg:gap-6">  

                {/* ✅ Sidebar */} 
                <div className="lg:col-span-4 bg-black p-4 transition-all duration-300"> 
                    {/* ✅ Search Bar */}
                    <div className="relative mb-4">
                        <MdOutlineSearch className="absolute left-3 top-3 text-amber-500 text-xl cursor-pointer" />
                        <input
                            type="text"
                            placeholder="Search Services..."
                            className="w-full pl-10 pr-4 py-3 shadow-md text-white focus:outline-none focus:ring-2 bg-black focus:ring-white border"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* ✅ Service List */}
                    <div className="flex flex-col">
                        {services.filter(service => service.title.toLowerCase().includes(search.toLowerCase())).map((service, index) => (
                            <button
                                key={index}
                                className={`flex justify-between items-center p-3 border-b border-stone-500 shadow-md  transition-all duration-300 cursor-pointer
                                    ${location.pathname === service.path 
                                        ? "bg-purple-600 text-white" 
                                        : "bg-black text-gray-400 hover:bg-purple-600 hover:text-white"
                                    }`}
                                onClick={() => {
                                    navigate(service.path);
                                    setIsSidebarOpen(false); // Close menu on mobile after clicking
                                }}
                            >
                                <span className="lg:text-lg">{service.title}</span>
                                <FaArrowRightLong className="lg:text-lg" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* ✅ Right Content Area */}
                <div className="lg:col-span-8 flex justify-center items-center text-gray-400 text-xl font-semibold">
                    {currentService ? (
                        <Outlet />
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center">
                            {/* Default to Private Label service */}
                            <h2 className="text-2xl font-bold text-white">Private Label Service</h2>
                            <p className="mt-4">Learn more about our Private Label services and how they can help you grow your business.</p>
                            <Lottie options={defaultOptions} height={300} width={300} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    ); 
};

export default Services;
