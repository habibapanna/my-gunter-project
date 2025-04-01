import React, { useState } from "react";
import Swal from "sweetalert2";

const AddTeam = () => {
  const [teamData, setTeamData] = useState({
    name: "", // New field
    title: "", // New field
    image: "", 
    facebook: "",
    instagram: "",
    x: "",
    linkedin: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeamData({ ...teamData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://my-gunter-project-server.vercel.app/team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(teamData),
      });

      const result = await response.json();
      if (result.success) {
        Swal.fire("Success!", "Team member added successfully!", "success");
        setTeamData({
          name: "",
          title: "",
          image: "",
          facebook: "",
          instagram: "",
          x: "",
          linkedin: "",
        });
      } else {
        Swal.fire("Error!", "Something went wrong!", "error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire("Error!", "Failed to submit!", "error");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg p-6 text-black mt-5">
      <h2 className="text-xl font-semibold text-center mb-4 text-orange-600">Add Team Member</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name Input */}
        <div>
          <label className="block font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={teamData.name}
            onChange={handleChange}
            required
            className="border border-gray-500 p-2 w-full"
            placeholder="Enter name"
          />
        </div>

        {/* Title Input */}
        <div>
          <label className="block font-medium">Title:</label>
          <input
            type="text"
            name="title"
            value={teamData.title}
            onChange={handleChange}
            required
            className="border border-gray-500 p-2 w-full"
            placeholder="Enter title (e.g., Team Leader)"
          />
        </div>

        {/* Image URL Input */}
        <div>
          <label className="block font-medium">Image URL:</label>
          <input
            type="url"
            name="image"
            value={teamData.image}
            onChange={handleChange}
            required
            className="border border-gray-500 p-2 w-full"
            placeholder="Enter image URL"
          />
        </div>

        {/* Social Media Links */}
        <div>
          <label className="block font-medium">Facebook URL:</label>
          <input type="url" name="facebook" value={teamData.facebook} onChange={handleChange} className="border border-gray-500 p-2 w-full" />
        </div>
        <div>
          <label className="block font-medium">Instagram URL:</label>
          <input type="url" name="instagram" value={teamData.instagram} onChange={handleChange} className="border border-gray-500 p-2 w-full" />
        </div>
        <div>
          <label className="block font-medium">X (Twitter) URL:</label>
          <input type="url" name="x" value={teamData.x} onChange={handleChange} className="border border-gray-500 p-2 w-full" />
        </div>
        <div>
          <label className="block font-medium">LinkedIn URL:</label>
          <input type="url" name="linkedin" value={teamData.linkedin} onChange={handleChange} className="border border-gray-500 p-2 w-full" />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-orange-600 text-white px-4 py-2 w-full">
          Add Team Member
        </button>
      </form>
    </div>
  );
};

export default AddTeam;
