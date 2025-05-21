import React, { useEffect, useState } from "react";
import { TiEdit } from "react-icons/ti";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const ManageHero = () => {
  const [heroes, setHeroes] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);
  const [formData, setFormData] = useState({ title: "", description: "", image: "" });

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/heroes")
      .then((res) => res.json())
      .then((data) => setHeroes(data))
      .catch((error) => console.error("Error fetching heroes:", error));
  }, []);

  // Open Edit Modal
  const openEditModal = (hero) => {
    setSelectedHero(hero);
    setFormData({ title: hero.title, description: hero.description, image: hero.image });
    document.getElementById("edit-modal").showModal();
  };

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Update Hero (PUT request)
  const handleUpdate = async () => {
    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    if (formData.image instanceof File) {
      form.append("image", formData.image); // New file
    } else {
      form.append("image", formData.image); // Existing URL
    }
  
    const response = await fetch(`https://my-gunter-project-server.vercel.app/heroes/${selectedHero._id}`, {
      method: "PUT",
      body: form,
    });
  
    if (response.ok) {
      const updated = await response.json();
      Swal.fire("Updated!", "Hero updated successfully.", "success");
      // Re-fetch or locally update
      fetch("https://my-gunter-project-server.vercel.app/heroes")
        .then((res) => res.json())
        .then((data) => setHeroes(data));
      document.getElementById("edit-modal").close();
    }
  };
  

  // Delete Hero (DELETE request)
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://my-gunter-project-server.vercel.app/heroes/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then(() => {
            setHeroes(heroes.filter((hero) => hero._id !== id));
            Swal.fire("Deleted!", "Hero has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-purple-600">Manage Heroes</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-gray-700 text-white">
          <thead>
            <tr className="">
              <th className="p-2 border border-stone-500">Title</th>
              <th className="p-2 border border-stone-500">Description</th>
              <th className="p-2 border border-stone-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {heroes.map((hero) => (
              <tr key={hero._id} className="border-b border-gray-700">
                <td className="p-2 border border-stone-500">{hero.title}</td>
                <td className="p-2 border border-stone-500">{hero.description}</td>
                <td className="p-2 flex gap-3">
                  <button onClick={() => openEditModal(hero)} className="text-purple-600 text-lg"><TiEdit /></button>
                  <button onClick={() => handleDelete(hero._id)} className="text-red-500 text-lg"><AiOutlineDelete /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      <dialog
  id="edit-modal"
  className="modal-class backdrop:bg-black rounded-lg max-w-lg w-[90%] mx-auto p-6 bg-white text-black"
>
  <form method="dialog" className="space-y-4">
    <h3 className="text-purple-600 text-xl font-semibold text-center">Edit Hero Section</h3>

    <input
      type="text"
      name="title"
      value={formData.title}
      onChange={handleChange}
      placeholder="Title"
      className="w-full p-2 border border-gray-300 rounded focus:outline-purple-500"
    />

    <textarea
      name="description"
      value={formData.description}
      onChange={handleChange}
      placeholder="Description"
      className="w-full p-2 border border-gray-300 rounded focus:outline-purple-500"
    ></textarea>

    <input
      type="file"
      name="image"
      accept="image/*"
      onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
      className="w-full p-2 border border-gray-300 rounded focus:outline-purple-500"
    />

    <div className="flex justify-between">
      <button
        type="button"
        onClick={() => document.getElementById("edit-modal").close()}
        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={handleUpdate}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Update
      </button>
    </div>
  </form>
</dialog>
    </div>
  );
};

export default ManageHero;

