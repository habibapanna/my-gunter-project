import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong, FaSquareFull } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { useState } from "react";
import Lottie from 'react-lottie';
import lottie from "../../assets/service/gallery1.json"; // Update with correct path

const Gallery = () => {
    const [search, setSearch] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    // Services List
    const galleries = [
        { title: "The Ultimate Guide to Starting and Scaling an eCommerce Business in 2025", path: "/gallery/gallery-1" },
        { title: "The Ultimate Guide to Amazon and Walmart Arbitrage in 2025", path: "/gallery/gallery-2" },
        { title: "The Benefits of Private Label and Branding in eCommerce", path: "/gallery/gallery-3" },
    ];

    // Get the current service title based on the URL path
    const currentGallery = galleries.find(gallery => gallery.path === location.pathname);

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
                    {currentGallery ? currentGallery.title : "Gallery"}
                </h1>
                <p className="text-center text-white">
                    <Link to="/" className={`mr-3 transition-colors duration-300 ${location.pathname === "/" ? "text-orange-600 font-semibold" : "hover:text-orange-600"}`}>
                        Home
                    </Link>
                    /
                    <span className="ml-3 text-orange-600 font-semibold">
                        {currentGallery ? currentGallery.title : "Gallery"}
                    </span>
                </p>
            </div>

            <div className="p-10 grid grid-cols-12 gap-6">
                {/* ✅ Left Content Area - Shows Service Component */}
                <div className="col-span-8 flex justify-center items-center text-gray-600 text-xl font-semibold">
                    {currentGallery ? (
                        <Outlet /> // This will load the selected service component
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center">
                            <Lottie options={defaultOptions} height={400} width={400} />
                        </div>
                    )}
                </div>

                {/* ✅ Sidebar for Service List (Moved to the right) */}
                <div className="col-span-4 bg-white p-4">
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
                  <div className="border border-gray-300">
                  <h1 className="text-black text-lg font-bold p-3">Recent Post</h1>
                  <div className="border-1 border-gray-300 w-80 mx-auto">
                  </div>

                      {/* ✅ Blog List */}
                      <div className="flex flex-col ">
                        {galleries.filter(gallery => gallery.title.toLowerCase().includes(search.toLowerCase())).map((gallery, index) => (
                            <button
                                key={index}
                                className={`flex justify-between items-center p-3 border-gray-300 transition-all duration-300 relative transform text-left 
                                ${location.pathname === gallery.path ? "bg-orange-600 text-white" : "bg-white text-black hover:text-orange-600 hover:scale-95"}`}
                                onClick={() => navigate(gallery.path)}
                            >
                                <FaSquareFull className="text-sm mr-5" />
                                <span className="text-sm ">{gallery.title}</span>
                                
                            </button>
                        ))}
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;