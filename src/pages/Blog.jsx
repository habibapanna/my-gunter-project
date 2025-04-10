import { FaSquareFull } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [contentLoading, setContentLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        image: "",
        title: "",
        description: "",
        details: "",
        category: "",
        author: "",
    });

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = () => {
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
    };

    const categories = [...new Set(blogs.map(blog => blog.category))];
    const filteredBlogs = selectedCategory ? blogs.filter(blog => blog.category === selectedCategory) : blogs;
    const searchedBlogs = filteredBlogs.filter(blog => blog.title.toLowerCase().includes(search.toLowerCase()));

    const formatDate = (dateString) => {
        const options = { day: "numeric", month: "long", year: "numeric" };
        return new Date(dateString).toLocaleDateString("en-US", options);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePostBlog = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://my-gunter-project-server.vercel.app/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                Swal.fire("Success!", "Blog posted successfully", "success");
                setShowModal(false);
                setFormData({
                    image: "",
                    title: "",
                    description: "",
                    details: "",
                    category: "",
                    author: "",
                });
                fetchBlogs(); // refresh blog list
            } else {
                Swal.fire("Error", "Something went wrong", "error");
            }
        } catch (error) {
            Swal.fire("Error", "Server error", "error");
        }
    };

    return (
        <div>
            <div className="bg-black py-20 text-center">
                <h1 className="text-4xl font-bold text-white mb-3">
                    {selectedBlog ? selectedBlog.title : "Blog"}
                </h1>
                <h1 className="text-amber-500">
                    <Link className="text-white" to="/">Home</Link> / Blog
                </h1>
            </div>

            <div className="py-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-black">
                <div className="md:col-span-4 bg-black p-4">
                    <div className="relative mb-4">
                        <MdOutlineSearch className="absolute left-3 top-3 text-amber-500 text-xl" />
                        <input
                            type="text"
                            placeholder="Search Blogs..."
                            className="w-full pl-10 pr-4 py-3 focus:ring-white text-white bg-black shadow-md border"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="shadow-md p-3 text-white bg-black">
                        <h1 className="text-lg font-bold">Recent Posts</h1>
                        <div className="my-2"></div>
                        {searchedBlogs.map((blog) => (
                            <button
                                key={blog._id}
                                className={`flex items-center p-2 text-left transition group ${
                                    selectedBlog?._id === blog._id ? "bg-purple-600 font-bold" : "hover:bg-purple-600 "
                                }`}
                                onClick={() => {
                                    setContentLoading(true);
                                    setTimeout(() => {
                                        setSelectedBlog(blog);
                                        setContentLoading(false);
                                    }, 500);
                                }}
                            >
                                <FaSquareFull className="text-sm mr-3 text-amber-500 group-hover:text-white" />
                                <span className="text-sm">{blog.title}</span>
                            </button>
                        ))}
                    </div>

                    <div className="shadow-md p-3 mt-4 text-white bg-black">
                        <h1 className="text-lg font-bold">Categories</h1>
                        <div className="border-b my-2"></div>
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`p-2 block w-full text-left transition ${selectedCategory === category ? "bg-purple-600 text-white" : "hover:bg-purple-600"}`}
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

                <div className="md:col-span-8 bg-black">
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
                                className="mt-4 px-4 py-2 bg-purple-600 text-white font-semibold hover:bg-purple-600 cursor-pointer shadow-animation"
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
                                    onClick={() => {
                                        setContentLoading(true);
                                        setTimeout(() => {
                                            setSelectedBlog(blog);
                                            setContentLoading(false);
                                        }, 500);
                                    }}
                                    className="bg-black text-white p-4 shadow-md shadow-gray-900 cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <h1 className="absolute bg-amber-500 text-white text-sm px-2">{formatDate(blog.createdAt)}</h1>
                                    <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover mb-3" />
                                    <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                                    <p className="text-sm text-gray-400">{blog.description}</p>
                                    <button
                                        className="text-amber-500 font-semibold hover:underline mt-2 cursor-pointer"
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
            {/* STYLES */}
            <style>
        {`
          .shadow-animation {
              position: relative;
              overflow: hidden;
          }

          .shadow-animation::before,
          .shadow-animation::after {
              content: '';
              position: absolute;
              width: 50%;
              height: 100%;
              background: rgba(0, 0, 0, 0.9);
              transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
              opacity: 0;
          }

          .shadow-animation::before {
              left: 0;
              bottom: -100%;
          }

          .shadow-animation::after {
              right: 0;
              top: -100%;
          }

          .shadow-animation:hover::before {
              transform: translateY(-100%);
              opacity: 1;
          }

          .shadow-animation:hover::after {
              transform: translateY(100%);
              opacity: 1;
          }

          .shadow-animation:hover::before,
          .shadow-animation:hover::after {
              animation: panelDisappear 1s ease-in-out forwards;
          }

          @keyframes panelDisappear {
              0% { opacity: 1; }
              70% { opacity: 1; }
              100% { opacity: 0; transform: translateY(0); }
          }
        `}
      </style>
        </div>
    );
};

export default Blog;
