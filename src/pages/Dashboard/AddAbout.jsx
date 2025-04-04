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

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/about")
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      <h2 className="text-2xl font-bold mb-4 text-orange-600 text-center">Add About Section</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md">
        <input
          type="text"
          name="image1"
          value={formData.image1}
          onChange={handleChange}
          placeholder="Image 1 URL"
          className="w-full p-2 border border-gray-500"
          required
        />
        <input
          type="text"
          name="image2"
          value={formData.image2}
          onChange={handleChange}
          placeholder="Image 2 URL"
          className="w-full p-2 border border-gray-500"
          required
        />
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full p-2 border border-gray-500"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 border border-gray-500"
          required
        ></textarea>
        <button type="submit" className="bg-orange-600 text-white px-4 py-2 w-full cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddAbout;