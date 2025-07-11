import { useState } from "react";
import Swal from "sweetalert2";

const AddCreativeDesign = () => {
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
      // Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", "my_unsigned_preset");

      const cloudRes = await fetch(
        "https://api.cloudinary.com/v1_1/drqvpholc/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const cloudData = await cloudRes.json();

      if (!cloudData.secure_url) {
        throw new Error("Image upload failed.");
      }

      const imageUrl = cloudData.secure_url;

      // Send image URL to backend
      const designsData = {
        imageUrl,
        createdAt: new Date(),
      };

      const res = await fetch("https://my-gunter-project-server.vercel.app/creative-designs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(designsData),
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("Success!", "Design added successfully!", "success");
        setImageFile(null);
        e.target.reset();
      } else {
        Swal.fire("Error", data.message || "Failed to add design.", "error");
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
      <h2 className="text-xl font-semibold mb-4 text-purple-600 text-center">
        Add Creative Design (Upload Image)
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

export default AddCreativeDesign;
