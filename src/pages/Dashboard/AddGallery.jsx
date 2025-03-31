import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddGallery = () => {
    const [title, setTitle] = useState("");
    const [imageURL, setImageURL] = useState("");  // Only use image URL
    const [category, setCategory] = useState("");  // New state for category selection

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !imageURL || !category) {  // Check if title, image URL, and category are provided
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please enter a title, provide an image URL, and select a category!",
            });
            return;
        }

        const data = { title, imageURL, category };

        try {
            const response = await axios.post("https://my-gunter-project-server.vercel.app/gallery", data);

            Swal.fire({
                icon: "success",
                title: "Success!",
                text: response.data.message,
            });

            setTitle("");
            setImageURL("");  // Clear after successful submission
            setCategory("");  // Reset the category after submission
        } catch (error) {
            console.error("Error uploading image:", error);
            Swal.fire({
                icon: "error",
                title: "Upload Failed",
                text: "Failed to upload image. Please try again later.",
            });
        }
    };

    return (
        <div className="p-6 mt-5 bg-white text-black max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">Add Gallery Image</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 border border-gray-500"
                        placeholder="Enter a title"
                    />
                </div>
                
                {/* Image URL field */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Image URL</label>
                    <input
                        type="text"
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        className="w-full p-2 border border-gray-500"
                        placeholder="Enter image URL"
                    />
                </div>

                {/* Category Selection */}
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 border border-gray-500"
                    >
                        <option value="">Select Category</option>
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

                <button type="submit" className="mt-4 w-full bg-orange-600 shadow-animation text-white py-2">
                    Add Image
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

export default AddGallery;
