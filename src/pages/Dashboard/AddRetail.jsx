import { useState } from "react";
import Swal from "sweetalert2";

const AddRetail = () => {
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      Swal.fire("Error", "Please select an image.", "error");
      return;
    }

    setUploading(true);

    try {
      // Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "my_unsigned_preset"); // ✅ Replace this with your Cloudinary preset

      const cloudRes = await fetch(`https://api.cloudinary.com/v1_1/drqvpholc/image/upload`, {
        method: "POST",
        body: formData,
      });

      const cloudData = await cloudRes.json();
      const imageUrl = cloudData.secure_url;

      if (!imageUrl) {
        throw new Error("Image upload failed.");
      }

      // Send to your backend
      const res = await fetch("https://my-gunter-project-server.vercel.app/retails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl, createdAt: new Date() }),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("Success!", "Retail added successfully!", "success");
        setImageFile(null);
      } else {
        Swal.fire("Error", data.message || "Failed to add retail.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Something went wrong.", "error");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md text-black">
      <h2 className="text-xl font-semibold mb-4 text-purple-600 text-center">Add Retail (Upload Image)</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Select Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full border p-2 hover:cursor-pointer"
          />
        </div>
        <button
          type="submit"
          disabled={uploading}
          className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 shadow disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddRetail;
