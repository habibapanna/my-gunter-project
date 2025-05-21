// Frontend: AddBlog Component
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddBlog = () => {
    const [blogData, setBlogData] = useState({
        image: '',
        title: '',
        description: '',
        details: '',
        category: '',
        author: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!blogData.image || !blogData.title || !blogData.description || !blogData.details || !blogData.category || !blogData.author) {
            Swal.fire('Error!', 'All fields are required!', 'error');
            return;
        }

        try {
            const response = await fetch('https://my-gunter-project-server.vercel.app/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(blogData)
            });
            
            if (response.ok) {
                Swal.fire('Success!', 'Blog successfully added!', 'success');
                setBlogData({
                    image: '',
                    title: '',
                    description: '',
                    details: '',
                    category: '',
                    author: ''
                });
            } else {
                Swal.fire('Error!', 'Failed to add blog.', 'error');
            }
        } catch (error) {
            Swal.fire('Error!', 'Something went wrong.', 'error');
        }
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 text-black shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-600">Add New Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="image" value={blogData.image} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border border-gray-500" />
                <input type="text" name="title" value={blogData.title} onChange={handleChange} placeholder="Title" className="w-full p-2 border border-gray-500" />
                <input type="text" name="description" value={blogData.description} onChange={handleChange} placeholder="Short Description" className="w-full p-2 border border-gray-500" />
                <textarea name="details" value={blogData.details} onChange={handleChange} placeholder="Details" rows="4" className="w-full p-2 border border-gray-500"></textarea>
                <input type="text" name="category" value={blogData.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border border-gray-500" />
                <input type="text" name="author" value={blogData.author} onChange={handleChange} placeholder="Author" className="w-full p-2 border border-gray-500" />
                <button type="submit" className="bg-purple-600 px-6 py-3 text-white font-semibold w-full cursor-pointer">Submit Blog</button>
            </form>
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
                        background: rgba(0, 0, 0, 0.9); /* Solid dark panel */
                        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
                        opacity: 0;
                    }
                    
                    /* Left panel (rises from bottom) */
                    .shadow-animation::before {
                        left: 0;
                        bottom: -100%;
                    }
                    
                    /* Right panel (falls from top) */
                    .shadow-animation::after {
                        right: 0;
                        top: -100%;
                    }

                    /* Hover Effect */
                    .shadow-animation:hover::before {
                        transform: translateY(-100%);
                        opacity: 1;
                    }

                    .shadow-animation:hover::after {
                        transform: translateY(100%);
                        opacity: 1;
                    }

                    /* Panels Disappear After a While */
                    .shadow-animation:hover::before,
                    .shadow-animation:hover::after {
                        animation: panelDisappear 1s ease-in-out forwards;
                    }

                    @keyframes panelDisappear {
                        0% {
                            opacity: 1;
                        }
                        70% {
                            opacity: 1;
                        }
                        100% {
                            opacity: 0;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default AddBlog;