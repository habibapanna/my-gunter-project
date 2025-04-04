import { FaSquareFull } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import { Link } from "react-router-dom";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true); // Initial data fetch loading
    const [contentLoading, setContentLoading] = useState(false); // Right-side content loading
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBlog, setSelectedBlog] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch("https://my-gunter-project-server.vercel.app/blogs")
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching blogs:", error);
                setLoading(false);
            });
    }, []);

    const categories = [...new Set(blogs.map(blog => blog.category))];
    const filteredBlogs = selectedCategory ? blogs.filter(blog => blog.category === selectedCategory) : blogs;
    const searchedBlogs = filteredBlogs.filter(blog => blog.title.toLowerCase().includes(search.toLowerCase()));

    const formatDate = (dateString) => {
        const options = { day: "numeric", month: "long", year: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
      };
      

    return (
        <div>
            <div className="bg-black py-20 text-center">
                <h1 className="text-4xl font-bold text-white mb-3">
                    {selectedBlog ? selectedBlog.title : "Blog"}
                </h1>
                <h1 className="text-orange-600">
                    <Link className="text-white" to="/">Home</Link> / Blog
                </h1>
            </div>

            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-4 bg-black p-4">
                    <div className="relative mb-4">
                        <MdOutlineSearch className="absolute left-3 top-3 text-orange-600 text-xl" />
                        <input
                            type="text"
                            placeholder="Search Blogs..."
                            className="w-full pl-10 pr-4 py-3 shadow-orange-600 focus:ring-orange-600 text-white placeholder-gray-500 shadow-md"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    
                    <div className="shadow-md shadow-orange-600 p-3 text-white">
                        <h1 className="text-lg font-bold">Recent Posts</h1>
                        <div className="my-2"></div>
                        {searchedBlogs.map((blog) => (
                            <button
                                key={blog._id}
                                className={`flex items-center p-2 text-left transition ${
                                    selectedBlog?._id === blog._id ? "text-orange-600 font-bold" : "hover:text-orange-600"
                                }`}
                                onClick={() => {
                                    setContentLoading(true);
                                    setTimeout(() => {
                                        setSelectedBlog(blog);
                                        setContentLoading(false);
                                    }, 500);
                                }}
                            >
                                <FaSquareFull className="text-sm mr-3" />
                                <span className="text-sm">{blog.title}</span>
                            </button>
                        ))}
                    </div>
                    
                    <div className="shadow-md shadow-orange-600 p-3 mt-4 text-white">
                        <h1 className="text-lg font-bold">Categories</h1>
                        <div className="border-b my-2"></div>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`p-2 block w-full text-left transition ${selectedCategory === category ? "bg-orange-600 text-white" : "hover:text-orange-600"}`}
                                onClick={() => {
                                    setContentLoading(true);
                                    setTimeout(() => {
                                        setSelectedCategory(category);
                                        setSelectedBlog(null);
                                        setContentLoading(false);
                                    }, 500);
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="md:col-span-8">
                    {contentLoading ? (
                        <Spinner />
                    ) : selectedBlog ? (
                        <div className="bg-black text-white p-6  shadow-md">
                            <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-64 object-cover mb-4" />
                            <h1 className="mb-2 text-white">{formatDate(selectedBlog.createdAt)}</h1>

                            <h2 className="text-2xl lg:text-4xl font-bold mb-3">{selectedBlog.title}</h2>
                            <p className="text-sm text-gray-400 mb-5">{selectedBlog.description}</p>
                            <p className="text-sm text-gray-400">{selectedBlog.details}</p>
                            <button
                                className="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold hover:bg-orange-700 cursor-pointer"
                                onClick={() => {
                                    setContentLoading(true);
                                    setTimeout(() => {
                                        setSelectedBlog(null);
                                        setContentLoading(false);
                                    }, 500);
                                }}
                            >
                                Back to Blogs
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5">
                            {searchedBlogs.map((blog, index) => (
                                <motion.div
                                    key={blog._id}
                                    className="bg-black text-white p-4 shadow-orange-600 shadow-md"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <h1 className="absolute bg-orange-600 text-white text-sm px-2">{formatDate(blog.createdAt)}</h1>

                                    <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover mb-3" />
                                    <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                                    <p className="text-sm text-gray-400">{blog.description}</p>
                                    <button
                                        className="text-orange-600 font-semibold hover:underline mt-2 cursor-pointer"
                                        onClick={() => {
                                            setContentLoading(true);
                                            setTimeout(() => {
                                                setSelectedBlog(blog);
                                                setContentLoading(false);
                                            }, 500);
                                        }}
                                    >
                                        Read More
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;