import { useState } from "react";
import Swal from "sweetalert2";

const AddOurClients = () => {
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      Swal.fire("Error", "Please select an image file.", "error");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile); // must match backend field name

    try {
      const res = await fetch("https://my-gunter-project-server.vercel.app/clients", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        Swal.fire("Success!", "Client image uploaded successfully!", "success");
        setImageFile(null); // Reset input
      } else {
        Swal.fire("Error", data.message || "Failed to upload image.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error", "Failed to upload image.", "error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md text-black">
      <h2 className="text-xl font-semibold mb-4 text-purple-600 text-center">Add Our Clients (Upload Image)</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <div>
          <label className="block font-medium mb-1">Select Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-full"
          />
        </div>
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 shadow">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddOurClients;
