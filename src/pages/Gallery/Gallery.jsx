import { Link, useLocation } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Spinner from "../../components/Spinner/Spinner";
import NewSection from "../../components/NewSection/NewSection";

const Gallery = () => {
    const [search, setSearch] = useState("");
    const [galleryItems, setGalleryItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const location = useLocation();
    const currentGallery = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchGalleryData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://my-gunter-project-server.vercel.app/gallery');
                const data = await response.json();
                setGalleryItems(data);
            } catch (error) {
                console.error("Error fetching gallery data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchGalleryData();
    }, []);

    const filteredSearchImages = search
        ? galleryItems.filter(item =>
            item.title?.toLowerCase().includes(search.toLowerCase())
        )
        : galleryItems;

    const totalPages = Math.ceil(filteredSearchImages.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentImages = filteredSearchImages.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="bg-black min-h-screen">
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


            {/* ✅ Image Grid */}
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                <div className="flex justify-center mt-10 px-4 max-w-6xl mx-auto space-x-2">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-amber-500 text-white hover:bg-amber-600 disabled:bg-gray-700 cursor-pointer"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 disabled:bg-gray-700 cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            )}

            {/* ✅ Optional New Section */}
            <section className="mt-5"><NewSection /></section>
        </div>
    );
};

export default Gallery;
