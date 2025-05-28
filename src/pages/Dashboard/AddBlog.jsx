import React, { useState } from "react";
import Swal from "sweetalert2";

const AddBlog = () => {
  const [blogData, setBlogData] = useState({
    image: "", // This will hold the Cloudinary URL
    title: "",
    description: "",
    details: "",
    category: "",
  });

  const [uploading, setUploading] = useState(false);

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  // Handle image upload to Cloudinary on file selection
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_unsigned_preset"); // your unsigned preset

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/drqvpholc/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (data.secure_url) {
        setBlogData((prev) => ({ ...prev, image: data.secure_url }));
        Swal.fire("Success", "Image uploaded successfully!", "success");
      } else {
        Swal.fire("Error", "Failed to upload image", "error");
      }
    } catch (error) {
      Swal.fire("Error", "Image upload error", "error");
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { image, title, description, details, category } = blogData;
    if (!image || !title || !description || !details || !category) {
      Swal.fire("Error!", "All fields are required!", "error");
      return;
    }

    try {
      const response = await fetch(
        "https://my-gunter-project-server.vercel.app/blogs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        }
      );

      if (response.ok) {
        Swal.fire("Success!", "Blog successfully added!", "success");
        setBlogData({
          image: "",
          title: "",
          description: "",
          details: "",
          category: "",
        });
      } else {
        Swal.fire("Error!", "Failed to add blog.", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 text-black shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-600">
        Add New Blog
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            disabled={uploading}
            className="w-full p-2 border border-gray-500"
          />
          {uploading && <p className="text-sm text-gray-600">Uploading...</p>}
          {blogData.image && (
            <img
              src={blogData.image}
              alt="Uploaded"
              className="mt-2 max-h-40 object-contain"
            />
          )}
        </div>
        <input
          type="text"
          name="title"
          value={blogData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 border border-gray-500"
        />
        <input
          type="text"
          name="description"
          value={blogData.description}
          onChange={handleChange}
          placeholder="Short Description"
          className="w-full p-2 border border-gray-500"
        />
        <textarea
          name="details"
          value={blogData.details}
          onChange={handleChange}
          placeholder="Details"
          rows="4"
          className="w-full p-2 border border-gray-500"
        ></textarea>
        <input
          type="text"
          name="category"
          value={blogData.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-2 border border-gray-500"
        />
        <button
          type="submit"
          className="bg-purple-600 px-6 py-3 text-white font-semibold w-full cursor-pointer"
          disabled={uploading}
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
