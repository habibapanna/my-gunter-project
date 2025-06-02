import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import Swal from "sweetalert2";

const ManageTeam = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    linkedin: "",
    image: null,
  });

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/team")
      .then((res) => res.json())
      .then((data) => {
        setTeam(data);
        setLoading(false);
      });
  }, []);

  const handleEdit = (member) => {
    setFormData({
      name: member.name || "",
      title: member.title || "",
      linkedin: member.linkedin || "",
      image: null,
    });
    setSelectedMember(member);
    setEditModal(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://my-gunter-project-server.vercel.app/team/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setTeam(team.filter((m) => m._id !== id));
              Swal.fire("Deleted!", "Member has been removed.", "success");
            }
          });
      }
    });
  };

  const handleUpdate = async () => {
    const form = new FormData();
    form.append("name", formData.name);
    form.append("title", formData.title);
    form.append("linkedin", formData.linkedin);
    if (formData.image) {
      form.append("image", formData.image);
    }

    const response = await fetch(
      `https://my-gunter-project-server.vercel.app/team/${selectedMember._id}`,
      {
        method: "PUT",
        body: form,
      }
    );

    const result = await response.json();
    if (result.modifiedCount > 0) {
      Swal.fire("Success!", "Member updated successfully.", "success");
      setEditModal(false);

      const updatedData = await fetch("https://my-gunter-project-server.vercel.app/team").then((res) => res.json());
      setTeam(updatedData);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4 text-purple-600 text-center">Manage Team</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-black border">
            <thead>
              <tr>
                <th className="py-2 border">Name</th>
                <th className="py-2 border">Title</th>
                <th className="py-2 border">LinkedIn</th>
                <th className="py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {team.map((member) => (
                <tr key={member._id}>
                  <td className="p-2 border text-center">{member.name}</td>
                  <td className="p-2 border text-center">{member.title}</td>
                  <td className="p-2 border text-center">
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 underline"
                      >
                        Profile
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="p-2 border text-center">
                    <div className="flex gap-4 justify-center">
                      <TiEdit
                        className="cursor-pointer text-purple-600"
                        onClick={() => handleEdit(member)}
                      />
                      <AiOutlineDelete
                        className="cursor-pointer text-red-600"
                        onClick={() => handleDelete(member._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded shadow-md w-96">
            <h2 className="text-xl font-semibold text-center text-purple-600 mb-4">Edit Team Member</h2>

            <label className="block mb-2">
              Name:
              <input
                type="text"
                className="w-full border px-3 py-2 mt-1"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>

            <label className="block mb-2">
              Title / Position:
              <input
                type="text"
                className="w-full border px-3 py-2 mt-1"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </label>

            <label className="block mb-2">
              LinkedIn URL:
              <input
                type="text"
                className="w-full border px-3 py-2 mt-1"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              />
            </label>

            <label className="block mb-4">
              Upload New Image:
              <input
                type="file"
                accept="image/*"
                className="w-full mt-1 border px-3 py-2"
                onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
              />
            </label>

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setEditModal(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="bg-purple-600 text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageTeam;
