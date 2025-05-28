import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const AddAbout = () => {
  const [formData, setFormData] = useState({
    image1: "",
    image2: "",
    title: "",
    description: "",
  });
  const [aboutData, setAboutData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/about")
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const uploadImageToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "my_unsigned_preset"); // your preset
    data.append("cloud_name", "drqvpholc"); // your cloud name

    const response = await fetch("https://api.cloudinary.com/v1_1/drqvpholc/image/upload", {
      method: "POST",
      body: data,
    });

    const result = await response.json();
    return result.secure_url; // URL to be saved in DB
  };

  const handleImageUpload = async (e) => {
    const { name, files } = e.target;
    setLoading(true);
    const uploadedUrl = await uploadImageToCloudinary(files[0]);
    setFormData({ ...formData, [name]: uploadedUrl });
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image1 || !formData.image2 || !formData.description) {
      return Swal.fire("Error", "Please fill all fields and upload images", "error");
    }

    const response = await fetch("https://my-gunter-project-server.vercel.app/about", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      Swal.fire("Success!", "About section added successfully!", "success");
      setFormData({ image1: "", image2: "", title: "", description: "" });
    }
  };

  return (
    <div className="container mx-auto p-6 text-black">
      <h2 className="text-2xl font-bold mb-4 text-purple-600 text-center">Add About Section</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md">
        {/* Upload Image 1 */}
        <input
          type="file"
          name="image1"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-2 border border-gray-500"
          required
        />
        {formData.image1 && (
          <img src={formData.image1} alt="Image1 Preview" className="w-32 h-auto" />
        )}

        {/* Upload Image 2 */}
        <input
          type="file"
          name="image2"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-2 border border-gray-500"
          required
        />
        {formData.image2 && (
          <img src={formData.image2} alt="Image2 Preview" className="w-32 h-auto" />
        )}

        {/* Title (optional) */}
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title (optional)"
          className="w-full p-2 border border-gray-500"
        />

        {/* Description */}
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border border-gray-500"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 w-full cursor-pointer"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddAbout;
