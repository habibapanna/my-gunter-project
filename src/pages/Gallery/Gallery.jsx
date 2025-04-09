import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSquareFull } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Spinner from "../../components/Spinner/Spinner";
 // Import Spinner component

const Gallery = () => {
    const [search, setSearch] = useState("");
    const [galleryItems, setGalleryItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(""); // Track the selected category
    const [loading, setLoading] = useState(true); // Add loading state
    const location = useLocation();
    const navigate = useNavigate();

    // Fetch gallery data from the backend
    useEffect(() => {
        const fetchGalleryData = async () => {
            setLoading(true); // Set loading to true when fetching data
            try {
                const response = await fetch('https://my-gunter-project-server.vercel.app/gallery');
                const data = await response.json();
                setGalleryItems(data);

                // Extract unique categories from the gallery data
                const uniqueCategories = [...new Set(data.map(item => item.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Error fetching gallery data:", error);
            } finally {
                setLoading(false); // Set loading to false after data is fetched
            }
        };

        fetchGalleryData();
    }, []); // Run only once on mount

    // Fetch filtered gallery items based on selected category
    useEffect(() => {
        if (selectedCategory) {
            setLoading(true); // Set loading to true when category is clicked
            const fetchFilteredData = async () => {
                try {
                    const response = await fetch(`https://my-gunter-project-server.vercel.app/gallery?category=${selectedCategory}`);
                    const data = await response.json();
                    setGalleryItems(data);
                } catch (error) {
                    console.error("Error fetching filtered gallery data:", error);
                } finally {
                    setLoading(false); // Set loading to false after data is fetched
                }
            };

            fetchFilteredData();
        }
    }, [selectedCategory]); // Re-run when selectedCategory changes

// Filter gallery items by category
const filteredImages = selectedCategory
    ? galleryItems.filter(item => item.category && item.category.toLowerCase() === selectedCategory.toLowerCase())
    : galleryItems; // Show all items when "All Categories" is selected


    // Apply search filter
    const filteredSearchImages = search
        ? filteredImages.filter(item => item.title && item.title.toLowerCase().includes(search.toLowerCase()))
        : filteredImages;

    // Get the current gallery title based on the URL path
    const currentGallery = location.pathname.split("/")[2]; // Extract category from the URL path

    return (
        <div className="bg-purple-600">
            {/* ✅ Banner Section (Dynamically Updates Title with Animation) */}
            <motion.div 
                className="bg-black py-20"
                initial={{ opacity: 0, y: -50 }} // Initial state
                animate={{ opacity: 1, y: 0 }} // Final state
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl font-bold mb-5 text-center text-white">
                    {currentGallery ? currentGallery : "Gallery"}
                </h1>
                <p className="text-center text-white">
                    <Link to="/" className={`mr-3 transition-colors duration-300 ${location.pathname === "/" ? "text-amber-500 font-semibold" : "hover:text-amber-500"}`}>
                        Home
                    </Link>
                    /
                    <span className="ml-3 text-amber-500 font-semibold">
                        {currentGallery ? currentGallery : "Gallery"}
                    </span>
                </p>
            </motion.div>

            <div className="p-10 grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* ✅ Sidebar for Service List (Moved to the top on mobile) */}
                <div className="col-span-12 md:col-span-4 bg-purple-600 p-4 mb-6 md:mb-0">
                    {/* ✅ Search Bar */}
                    <div className="relative mb-4">
                        <MdOutlineSearch className="absolute left-3 top-3 text-amber-500 text-xl" />
                        <input
                            type="text"
                            placeholder="Search Services..."
                            className="w-full pl-10 pr-4 py-3 shadow-md text-white bg-purple-500 focus:outline-none focus:ring-2 focus:ring-white"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* ✅ Recent Post Section */}
                    <div className="shadow-md mb-4 bg-purple-500">
                        <h1 className="text-white text-lg font-bold p-3">Category</h1>
                        <div className="border-1 mx-5 mb-4"></div>

                        {/* ✅ Category List */}
                        <div className="flex flex-col mb-4">
    <button
        className={`flex justify-between items-center p-3 shadow-md transition-all duration-300 relative transform text-left 
        ${!selectedCategory ? "bg-amber-500 text-white" : "bg-purple-500 text-white hover:text-amber-500 hover:scale-95"}`}
        onClick={() => setSelectedCategory("")} // Set selected category to empty string for "All Categories"
    >
        <FaSquareFull className="text-sm mr-5" />
        <span className="text-sm">All Categories</span>
    </button>
    {categories.map((category, index) => (
        <button
            key={index}
            className={`flex justify-between items-center p-3 shadow-md transition-all duration-300 relative transform text-left 
            ${selectedCategory === category ? "bg-amber-500 text-white" : "bg-purple-500 text-white hover:text-amber-500 hover:scale-95"}`}
            onClick={() => setSelectedCategory(category)} // Update category on click
        >
            <FaSquareFull className="text-sm mr-5" />
            <span className="text-sm">{category}</span>
        </button>
    ))}
</div>

                    </div>
                </div>

                {/* ✅ Left Content Area - Shows Service Component with Image Animation */}
                <div className="col-span-12 md:col-span-8 flex justify-center items-center text-gray-200">
                    <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {loading ? ( // Display spinner while loading
                            <Spinner />
                        ) : (
                            filteredSearchImages.map((item, index) => (
                                <motion.div 
                                    key={index} 
                                    className="overflow-hidden shadow-lg"
                                    initial={{ opacity: 0, y: 100 }} // Start below the viewport (y: 100px)
                                    animate={{ opacity: 1, y: 0 }} // Move to final position (y: 0)
                                    transition={{ duration: 0.6, delay: index * 0.1 }} // Delay for staggered effect
                                >
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" 
                                    />
                                    <div className="p-3 bg-purple-600text-amber-500 text-center">{item.title}</div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
