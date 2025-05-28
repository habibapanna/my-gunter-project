import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddAnnouncements = () => {
  const [announcement, setAnnouncement] = useState({
    imageUrl: "",
    title: "",
    details: "",
    description: "",
    category: "",
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setAnnouncement({
      ...announcement,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file upload to Cloudinary
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_unsigned_preset");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/drqvpholc/upload",
        formData
      );
      setAnnouncement({
        ...announcement,
        imageUrl: res.data.secure_url,
      });
      setUploading(false);

      Swal.fire({
        icon: "success",
        title: "Image uploaded!",
        text: "Image uploaded successfully",
        confirmButtonColor: "#f97316",
      });
    } catch (error) {
      console.error("Image upload error:", error);
      setUploading(false);
      Swal.fire({
        icon: "error",
        title: "Upload failed",
        text: "Failed to upload image",
        confirmButtonColor: "#f97316",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!announcement.imageUrl) {
      Swal.fire({
        icon: "warning",
        title: "No image",
        text: "Please upload an image before submitting.",
        confirmButtonColor: "#f97316",
      });
      return;
    }

    try {
      const response = await axios.post(
        "https://my-gunter-project-server.vercel.app/announcements",
        announcement
      );

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: response.data.message,
        confirmButtonColor: "#f97316",
      });

      setAnnouncement({
        imageUrl: "",
        title: "",
        details: "",
        description: "",
        category: "",
      });
    } catch (error) {
      console.error("Error adding announcement:", error);

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
      <h2 className="text-xl text-purple-600 text-center font-bold mb-4">
        Add Announcement
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border border-gray-500"
            disabled={uploading}
            required={!announcement.imageUrl} // require if no image url yet
          />
          {uploading && <p className="text-sm text-orange-600">Uploading...</p>}
          {announcement.imageUrl && (
            <img
              src={announcement.imageUrl}
              alt="Uploaded"
              className="mt-2 max-h-40 object-contain"
            />
          )}
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
            className="w-full p-2 border border-gray-500"
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
          <input
  type="text"
  name="category"
  value={announcement.category}
  onChange={handleChange}
  placeholder="Enter category"
  className="w-full p-2 border border-gray-500"
  required
/>

        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-purple-600 shadow-animation text-white py-2 cursor-pointer"
          disabled={uploading}
        >
          Add Announcement
        </button>
      </form>
    </div>
  );
};

export default AddAnnouncements;
