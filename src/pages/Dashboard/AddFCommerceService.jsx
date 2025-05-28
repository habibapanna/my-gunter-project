import { useState } from "react";
import Swal from "sweetalert2";

const AddFCommerceService = () => {
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      Swal.fire("Error", "Please select an image to upload.", "error");
      return;
    }

    setUploading(true);

    try {
      // Step 1: Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "my_unsigned_preset"); // Replace this with your actual preset

      const cloudRes = await fetch("https://api.cloudinary.com/v1_1/drqvpholc/image/upload", {
        method: "POST",
        body: formData,
      });

      const cloudData = await cloudRes.json();

      if (!cloudData.secure_url) {
        throw new Error("Image upload failed.");
      }

      const imageUrl = cloudData.secure_url;

      // Step 2: Send image URL to your backend
      const fCommerceServiceData = {
        imageUrl,
        createdAt: new Date(),
      };

      const res = await fetch("https://my-gunter-project-server.vercel.app/f-commerce-service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fCommerceServiceData),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("Success!", "F-Commerce Service data added successfully!", "success");
        setImageFile(null);
        e.target.reset(); // Reset file input
      } else {
        Swal.fire("Error", data.message || "Failed to add F-Commerce Service data.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong during upload.", "error");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md text-black">
      <h2 className="text-xl font-semibold mb-4 text-purple-600 text-center">
        Add F-Commerce Service (Upload Image)
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Choose Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border border-gray-500"
          />
        </div>
        <button
          type="submit"
          disabled={uploading}
          className="bg-purple-600 text-white px-4 py-2 shadow disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddFCommerceService;
