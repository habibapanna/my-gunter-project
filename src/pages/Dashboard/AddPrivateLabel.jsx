import { useState } from "react";
import Swal from "sweetalert2";

const AddPrivateLabel = () => {
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      Swal.fire("Error", "Please select an image file.", "error");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile); // must match multer field name

    try {
      const res = await fetch("https://my-gunter-project-server.vercel.app/private-labels", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        Swal.fire("Success!", "Private Label added successfully!", "success");
        setImageFile(null); // Reset
      } else {
        Swal.fire("Error", data.message || "Upload failed.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to add private label.", "error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md text-black">
      <h2 className="text-xl font-semibold mb-4 text-purple-600 text-center">Add Private Label (Upload Image)</h2>
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
        <button type="submit" className="bg-purple-600 hover:bg-purple-500 hover:cursor-pointer text-white px-4 py-2 shadow">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPrivateLabel;
