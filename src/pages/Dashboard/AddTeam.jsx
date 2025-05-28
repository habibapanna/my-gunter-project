import React, { useState } from "react";
import Swal from "sweetalert2";

const AddTeam = () => {
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!imageFile) {
      Swal.fire("Error!", "Please select an image!", "error");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", imageFile); // image file

    try {
      const response = await fetch("https://my-gunter-project-server.vercel.app/team", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        Swal.fire("Success!", "Team member added successfully!", "success");
        setName("");
        setImageFile(null);
      } else {
        Swal.fire("Error!", result.message || "Something went wrong!", "error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire("Error!", "Failed to submit!", "error");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg p-6 text-black mt-5">
      <h2 className="text-xl font-semibold text-center mb-4 text-purple-600">Add Team Member</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        {/* Name Input */}
        <div>
          <label className="block font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border border-gray-500 p-2 w-full"
            placeholder="Enter name"
          />
        </div>

        {/* Image File Input */}
        <div>
          <label className="block font-medium">Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={(e) => setImageFile(e.target.files[0])}
            required
            className="border border-gray-500 p-2 w-full"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 w-full cursor-pointer">
          Add Team Member
        </button>
      </form>
    </div>
  );
};

export default AddTeam;
