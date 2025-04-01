import React, { useEffect, useState } from "react";
import { TiEdit } from "react-icons/ti";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import axios from "axios";

const ManageAbout = () => {
  const [aboutData, setAboutData] = useState([]);
  const [editData, setEditData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/about")
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const handleEdit = (data) => {
    setEditData(data);
    setModalOpen(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://my-gunter-project-server.vercel.app/about/${editData._id}`,
        editData
      );
      if (response.status === 200) {
        Swal.fire("Success", "Data updated successfully", "success");
        setAboutData((prev) =>
          prev.map((item) => (item._id === editData._id ? editData : item))
        );
        setModalOpen(false);
      }
    } catch (error) {
      Swal.fire("Error", "Failed to update data", "error");
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `https://my-gunter-project-server.vercel.app/about/${id}`
          );
          if (response.status === 200) {
            setAboutData((prev) => prev.filter((item) => item._id !== id));
            Swal.fire("Deleted!", "Your item has been deleted.", "success");
          }
        } catch (error) {
          Swal.fire("Error", "Failed to delete data", "error");
        }
      }
    });
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Manage About Section</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="">
              <th className="p-2 border border-stone-500">Title</th>
              <th className="p-2 border border-stone-500">Description</th>
              <th className="p-2 border border-stone-500">Actions</th>
            </tr>
          </thead>
          <tbody>
            {aboutData.map((item) => (
              <tr key={item._id} className="border border-stone-500">
                <td className="p-2 border border-stone-500">{item.title}</td>
                <td className="p-2 border border-stone-500">{item.description}</td>
                <td className="p-2 border-stone-500 flex gap-2">
                  <TiEdit
                    className="text-orange-600 cursor-pointer"
                    size={20}
                    onClick={() => handleEdit(item)}
                  />
                  <AiOutlineDelete
                    className="text-red-500 cursor-pointer"
                    size={20}
                    onClick={() => handleDelete(item._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-5 w-96">
            <h3 className="text-lg font-bold mb-3">Edit About Section</h3>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                className="border p-2 w-full mb-2"
                value={editData.image1}
                onChange={(e) => setEditData({ ...editData, image1: e.target.value })}
                placeholder="Image 1 URL"
              />
              <input
                type="text"
                className="border p-2 w-full mb-2"
                value={editData.image2}
                onChange={(e) => setEditData({ ...editData, image2: e.target.value })}
                placeholder="Image 2 URL"
              />
              <input
                type="text"
                className="border p-2 w-full mb-2"
                value={editData.title}
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                placeholder="Title"
              />
              <textarea
                className="border p-2 w-full mb-2"
                value={editData.description}
                onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                placeholder="Description"
              ></textarea>
              <div className="flex justify-between">
                <button type="submit" className="bg-orange-600 text-white px-4 py-2">Update</button>
                <button type="button" onClick={() => setModalOpen(false)} className="bg-gray-500 text-white px-4 py-2">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAbout;
