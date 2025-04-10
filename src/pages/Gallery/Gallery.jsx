import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSquareFull } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Spinner from "../../components/Spinner/Spinner";

const Gallery = () => {
    const [search, setSearch] = useState("");
    const [galleryItems, setGalleryItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchGalleryData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://my-gunter-project-server.vercel.app/gallery');
                const data = await response.json();
                setGalleryItems(data);
                const uniqueCategories = [...new Set(data.map(item => item.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Error fetching gallery data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchGalleryData();
    }, []);

    useEffect(() => {
        if (selectedCategory) {
            setLoading(true);
            const fetchFilteredData = async () => {
                try {
                    const response = await fetch(`https://my-gunter-project-server.vercel.app/gallery?category=${selectedCategory}`);
                    const data = await response.json();
                    setGalleryItems(data);
                } catch (error) {
                    console.error("Error fetching filtered gallery data:", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchFilteredData();
        }
    }, [selectedCategory]);

    const filteredImages = selectedCategory
        ? galleryItems.filter(item => item.category && item.category.toLowerCase() === selectedCategory.toLowerCase())
        : galleryItems;

    const filteredSearchImages = search
        ? filteredImages.filter(item => item.title && item.title.toLowerCase().includes(search.toLowerCase()))
        : filteredImages;

    // Pagination logic
    const totalPages = Math.ceil(filteredSearchImages.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentImages = filteredSearchImages.slice(indexOfFirstItem, indexOfLastItem);

    const currentGallery = location.pathname.split("/")[2];

    return (
        <div className="bg-black">
            {/* ✅ Banner */}
            <motion.div 
                className="bg-black py-20"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
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
                {/* ✅ Sidebar */}
                <div className="col-span-12 md:col-span-4 bg-black p-4 mb-6 md:mb-0">
                    {/* ✅ Search Bar */}
                    <div className="relative mb-4">
                        <MdOutlineSearch className="absolute left-3 top-3 text-amber-500 text-xl" />
                        <input
                            type="text"
                            placeholder="Search Services..."
                            className="w-full pl-10 pr-4 py-3 shadow-md text-white bg-black focus:outline-none focus:ring-2 focus:ring-white border"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1); // reset page
                            }}
                        />
                    </div>

                    {/* ✅ Category List */}
                    <div className="shadow-md mb-4 bg-black">
                        <h1 className="text-white text-lg font-bold p-3">Category</h1>
                        <div className="border-1 mx-5 mb-4"></div>

                        <div className="flex flex-col mb-4">
                            <button
                                className={`flex justify-between items-center p-3 shadow-md transition-all duration-300 text-left 
                                ${!selectedCategory ? "bg-purple-600 text-white" : "bg-black text-white hover:bg-purple-600"}`}
                                onClick={() => {
                                    setSelectedCategory("");
                                    setCurrentPage(1); // reset page
                                }}
                            >
                                <FaSquareFull className="text-sm mr-5" />
                                <span className="text-sm">All Categories</span>
                            </button>

                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`flex justify-between items-center p-3 shadow-md transition-all duration-300 text-left 
                                    ${selectedCategory === category ? "bg-purple-600 text-white" : "bg-black text-white hover:bg-purple-600"}`}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setCurrentPage(1); // reset page
                                    }}
                                >
                                    <FaSquareFull className="text-sm mr-5" />
                                    <span className="text-sm">{category}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ✅ Main Gallery Area */}
                <div className="col-span-12 md:col-span-8 text-gray-400">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {loading ? (
                            <Spinner />
                        ) : currentImages.length === 0 ? (
                            <p className="text-white col-span-3 text-center">No images found.</p>
                        ) : (
                            currentImages.map((item, index) => (
                                <motion.div 
                                    key={index} 
                                    className="overflow-hidden shadow-md shadow-gray-900"
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105" 
                                    />
                                    <div className="p-3 bg-black text-amber-500 text-center">{item.title}</div>
                                </motion.div>
                            ))
                        )}
                    </div>

                    {/* ✅ Pagination Controls */}
                    {!loading && filteredSearchImages.length > 9 && (
                        <div className="flex justify-end mt-6 space-x-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-amber-500 text-white hover:bg-amber-600 disabled:bg-gray-700"
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 disabled:bg-gray-700"
                            >
                                Next
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
