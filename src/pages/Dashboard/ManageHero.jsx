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
    const response = await fetch(`https://my-gunter-project-server.vercel.app/heroes/${selectedHero._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      Swal.fire("Updated!", "Hero updated successfully.", "success");
      setHeroes((prev) => prev.map((h) => (h._id === selectedHero._id ? { ...h, ...formData } : h)));
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
      <h2 className="text-2xl font-bold mb-4 text-center text-orange-600">Manage Heroes</h2>
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
                  <button onClick={() => openEditModal(hero)} className="text-orange-600 text-lg"><TiEdit /></button>
                  <button onClick={() => handleDelete(hero._id)} className="text-red-500 text-lg"><AiOutlineDelete /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      <dialog id="edit-modal" className="bg-white p-6">
        <h3 className="text-orange-600 text-xl mb-4 font-semibold">Edit Hero Section</h3>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full mb-3 p-2 bg-gray-700 text-white" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full mb-3 p-2 bg-gray-700 text-white"></textarea>
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="w-full mb-3 p-2 bg-gray-700 text-white" />
        <div className="flex justify-between">
          <button onClick={() => document.getElementById("edit-modal").close()} className="bg-gray-600 text-white px-4 py-2">Cancel</button>
          <button onClick={handleUpdate} className="bg-orange-600 text-white px-4 py-2">Update</button>
        </div>
      </dialog>
    </div>
  );
};

export default ManageHero;
