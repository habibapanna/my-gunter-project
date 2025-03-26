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

    // Gallery Images
    const images = [
        { image: "https://i.ibb.co/7tmB9P6n/pexels-liza-summer-6347554.jpg" },
        { image: "https://i.ibb.co/7N44mSpr/pexels-karolina-grabowska-6958478.jpg" },
        { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2020/07/project4-380x350.jpg" },
        { image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/04/project-details2-1-1-380x350.jpg" },
        { image: "https://i.ibb.co/TBBywqhy/pexels-shoper-pl-550490863-17485353.jpg" },
        { image: "https://i.ibb.co/LX55CzsT/pexels-ivan-samkov-7621136.jpg" },
        { image: "https://i.ibb.co/KxkjsyPm/mailchimp-KR0-WW6bjtt0-unsplash.jpg" },
        { image: "https://i.ibb.co/Rkk4dv0Z/myriam-jessier-eve-I7-MOc-Smw-unsplash.jpg" },
        { image: "https://i.ibb.co/S4kXQt7V/charlesdeluvio-tcw-NN4-B9u-WE-unsplash.jpg" }
    ];

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
        <div className="bg-black">
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

            <div className="p-10 grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* ✅ Sidebar for Service List (Moved to the top on mobile) */}
                <div className="col-span-12 md:col-span-4 bg-black p-4 mb-6 md:mb-0">
                    {/* ✅ Search Bar */}
                    <div className="relative mb-4">
                        <MdOutlineSearch className="absolute left-3 top-3 text-orange-600 text-xl" />
                        <input
                            type="text"
                            placeholder="Search Services..."
                            className="w-full pl-10 pr-4 py-3 shadow-orange-600 shadow-md text-white  focus:outline-none focus:ring-2 focus:ring-orange-600"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* ✅ Recent Post Section */}
                    <div className="shadow-orange-600 shadow-md mb-4">
                        <h1 className="text-white text-lg font-bold p-3">Recent Project</h1>
                        <div className="border-1 border-orange-600 mx-5 mb-4"></div>

                        {/* ✅ Blog List */}
                        <div className="flex flex-col">
                            {galleries.filter(gallery => gallery.title.toLowerCase().includes(search.toLowerCase())).map((gallery, index) => (
                                <button
                                    key={index}
                                    className={`flex justify-between items-center p-3 shadow-orange-600 shadow-md transition-all duration-300 relative transform text-left 
                                    ${location.pathname === gallery.path ? "bg-orange-600 text-white" : "bg-black text-whitek hover:text-orange-600 hover:scale-95"}`}
                                    onClick={() => navigate(gallery.path)}
                                >
                                    <FaSquareFull className="text-sm mr-5" />
                                    <span className="text-sm">{gallery.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ✅ Left Content Area - Shows Service Component */}
                <div className="col-span-12 md:col-span-8 flex justify-center items-center text-gray-600 text-xl font-semibold">
                    {currentGallery ? (
                        <Outlet /> // This will load the selected service component
                    ) : (
                        <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((item, index) => (
                        <div key={index} className="overflow-hidden shadow-lg">
                            <img src={item.image} alt={`Gallery ${index + 1}`} className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" />
                        </div>
                    ))}
                </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
