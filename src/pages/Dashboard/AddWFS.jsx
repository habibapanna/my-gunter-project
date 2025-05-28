import { useState } from "react";
import Swal from "sweetalert2";

const AddWFS = () => {
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
      // 1. Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "my_unsigned_preset");

      const cloudinaryRes = await fetch(
        "https://api.cloudinary.com/v1_1/drqvpholc/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const cloudinaryData = await cloudinaryRes.json();

      if (!cloudinaryData.secure_url) {
        throw new Error("Cloudinary upload failed");
      }

      const imageUrl = cloudinaryData.secure_url;

      // 2. Send to your backend
      const WFSData = {
        imageUrl,
        createdAt: new Date(),
      };

      const backendRes = await fetch("https://my-gunter-project-server.vercel.app/wfs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(WFSData),
      });

      const data = await backendRes.json();

      if (backendRes.ok) {
        Swal.fire("Success!", "WFS added successfully!", "success");
        setImageFile(null);
        e.target.reset(); // Reset the file input
      } else {
        Swal.fire("Error", data.message || "Failed to add WFS.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md text-black">
      <h2 className="text-xl font-semibold mb-4 text-purple-600 text-center">Add WFS (Upload Image)</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Choose Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-400 px-3 py-2"
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

export default AddWFS;
