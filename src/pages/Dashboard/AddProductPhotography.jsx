import { useState } from "react";
import Swal from "sweetalert2";

const AddProductPhotography = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageUrl.trim()) {
      Swal.fire("Error", "Please enter an image URL.", "error");
      return;
    }

    const shopifyData = {
      imageUrl, // Send only one image URL
      createdAt: new Date(),
    };

    try {
      const res = await fetch("https://my-gunter-project-server.vercel.app/product-photography", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(shopifyData),
      });

      const data = await res.json();
      if (res.ok) {
        Swal.fire("Success!", "Product photography added successfully!", "success");
        setImageUrl(""); // Reset input field after success
      } else {
        Swal.fire("Error", data.message || "Failed to add product photography.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to add product photography.", "error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md text-black">
      <h2 className="text-xl font-semibold mb-4 text-orange-600 text-center">Add Product Photography (Image URL)</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            required
            className="w-full px-3 py-2 border border-gray-500"
          />
        </div>
        <button type="submit" className="bg-orange-600 text-white px-4 py-2 shadow">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPhotography;
