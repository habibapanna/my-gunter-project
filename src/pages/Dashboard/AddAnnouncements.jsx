import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddAnnouncements = () => {
    const [announcement, setAnnouncement] = useState({
        imageUrl: "",
        title: "",
        details: "",
        description: "", // Added description field
        category: "", // Category field
    });

    const handleChange = (e) => {
        setAnnouncement({
            ...announcement,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://my-gunter-project-server.vercel.app/announcements", announcement);
            
            // Success Alert
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: response.data.message,
                confirmButtonColor: "#f97316", // Orange button
            });

            setAnnouncement({ imageUrl: "", title: "", details: "", description: "", category: "" }); // Reset form
        } catch (error) {
            console.error("Error adding announcement:", error);
            
            // Error Alert
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Failed to add announcement",
                confirmButtonColor: "#f97316",
            });
        }
    };

    return (
        <div className="max-w-md mx-auto mt-5 bg-white p-6 text-black shadow-md text-sm">
            <h2 className="text-xl text-orange-600 text-center font-bold mb-4">Add Announcement</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Image URL</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={announcement.imageUrl}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={announcement.title}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Details</label>
                    <textarea
                        name="details"
                        value={announcement.details}
                        onChange={handleChange}
                        className="w-full p- border border-gray-500"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={announcement.description}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-500"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Category</label>
                    <select
                        name="category"
                        value={announcement.category}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-500"
                        required
                    >
                        <option value="">Select a category</option>
                        <option value="Private Label">Private Label</option>
                        <option value="Retail / Online Arbitrage">Retail / Online Arbitrage</option>
                        <option value="Wholesale FBA / WFS">Wholesale FBA / WFS</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Shopify">Shopify</option>
                        <option value="Creative Design">Creative Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Product Photography & Videography">Product Photography & Videography</option>
                        <option value="F-Commerce Service">F-Commerce Service</option>
                    </select>
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full bg-orange-600 shadow-animation text-white py-2 cursor-pointer"
                >
                    Add Announcement
                </button>
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

export default AddAnnouncements;
