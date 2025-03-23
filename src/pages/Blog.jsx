import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { FaSquareFull } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { useState } from "react";

const Blog = () => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    // Blog List
    const blogs = [
        { title: "The Ultimate Guide to Starting and Scaling an eCommerce Business in 2025", path: "/blog/blog-1", category: "eCommerce", cover: "https://i.ibb.co/bjZ7nY6b/pexels-anna-nekrashevich-7552326.jpg" },
        { title: "The Ultimate Guide to Amazon and Walmart Arbitrage in 2025", path: "/blog/blog-2", category: "Arbitrage", cover: "https://i.ibb.co/C5xn9YSS/pexels-anete-lusina-4790264.jpg" },
        { title: "The Benefits of Private Label and Branding in eCommerce", path: "/blog/blog-3", category: "Branding", cover: "https://i.ibb.co/pvWyJkw6/pexels-ron-lach-9594420.jpg" },
    ];

    const categories = ["eCommerce", "Arbitrage", "Branding"];

    // Get the current blog based on URL
    const currentBlog = blogs.find(blog => blog.path === location.pathname);
    
    // Filtered Blogs based on category selection
    const filteredBlogs = selectedCategory ? blogs.filter(blog => blog.category === selectedCategory) : blogs;

    return (
        <div className="bg-white">
            {/* ✅ Banner Section */}
            <div className="bg-black py-20 text-center">
                <h1 className="text-4xl font-bold text-white">{currentBlog ? currentBlog.title : "Blog"}</h1>
                <p className="text-white">
                    <Link to="/" className="mr-3 hover:text-orange-600">Home</Link>/
                    <span className="ml-3 text-orange-600 font-semibold">{currentBlog ? currentBlog.title : "Blog"}</span>
                </p>
            </div>

            {/* ✅ Content Section */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* ✅ Sidebar (Moves to Top on Mobile) */}
                <div className="md:col-span-4 bg-white p-4 md:order-none">
                    {/* ✅ Search Bar */}
                    <div className="relative mb-4">
                        <MdOutlineSearch className="absolute left-3 top-3 text-orange-600 text-xl" />
                        <input
    type="text"
    placeholder="Search Blogs..."
    className="w-full pl-10 pr-4 py-3 border border-gray-200 focus:ring-orange-600 text-gray-500 placeholder-gray-500"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>

                    </div>
                    {/* ✅ Recent Posts */}
                    <div className="border border-gray-300 p-3 text-black">
                        <h1 className="text-lg font-bold">Recent Posts</h1>
                        <div className="border-b border-gray-300 my-2"></div>
                        {filteredBlogs.filter(blog => blog.title.toLowerCase().includes(search.toLowerCase())).map((blog, index) => (
                            <button
                                key={index}
                                className="flex items-center p-2 hover:text-orange-600"
                                onClick={() => navigate(blog.path)}
                            >
                                <FaSquareFull className="text-sm mr-3" />
                                <span className="text-sm">{blog.title}</span>
                            </button>
                        ))}
                    </div>
                    {/* ✅ Categories */}
                    <div className="border border-gray-300 p-3 mt-4 text-black">
                        <h1 className="text-lg font-bold">Categories</h1>
                        <div className="border-b border-gray-300 my-2"></div>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`p-2 block w-full text-left transition ${selectedCategory === category ? "bg-orange-600 text-white" : "hover:text-orange-600"}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
                
                {/* ✅ Blog Cards */}
                <div className="md:col-span-8">
                    {currentBlog ? (
                        <Outlet />
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {blogs.map((blog, index) => (
                                <div key={index} className="bg-white text-black p-4 border border-gray-200 shadow-md">
                                    <img src={blog.cover} alt={blog.title} className="w-full h-40 object-cover mb-3" />
                                    <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                                    <button
                                        className="text-orange-600 font-semibold hover:underline"
                                        onClick={() => navigate(blog.path)}
                                    >
                                        Read More
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;
