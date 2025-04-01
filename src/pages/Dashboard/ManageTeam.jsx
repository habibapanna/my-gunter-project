import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";
import Swal from "sweetalert2";
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const ManageTeam = () => {
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedMember, setSelectedMember] = useState(null);
    const [editModal, setEditModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        title: "",
        image: "",
        facebook: "",
        x: "",
        instagram: "",
        linkedin: "",
    });

    useEffect(() => {
        fetch("https://my-gunter-project-server.vercel.app/team")
            .then((res) => res.json())
            .then((data) => {
                setTeam(data);
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching team data:", err));
    }, []);

    // Handle edit button click
    const handleEdit = (member) => {
        setFormData({
            name: member.name,
            title: member.title,
            image: member.image,
            facebook: member.facebook,
            x: member.x,
            instagram: member.instagram,
            linkedin: member.linkedin,
        });
        setSelectedMember(member);
        setEditModal(true);
    };

    // Handle delete button click
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://my-gunter-project-server.vercel.app/team/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            setTeam(team.filter(member => member._id !== id));
                            Swal.fire("Deleted!", "Team member has been deleted.", "success");
                        }
                    });
            }
        });
    };

    // Handle form submission (update member data)
    const handleUpdate = () => {
        fetch(`https://my-gunter-project-server.vercel.app/team/${selectedMember._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    setTeam(
                        team.map((member) =>
                            member._id === selectedMember._id ? { ...member, ...formData } : member
                        )
                    );
                    Swal.fire("Updated!", "Team member has been updated.", "success");
                    setEditModal(false);
                }
            });
    };

    return (
        <div className="p-5">
            <h2 className="text-2xl font-bold mb-4 text-orange-600 text-center">Manage Team</h2>
            {loading ? (
                <p>Loading team members...</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-black border">
                        <thead>
                            <tr>
                                <th className="py-2 border border-stone-500">Name</th>
                                <th className="py-2 border border-stone-500">Title</th>
                                <th className="p-2 border border-stone-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {team.map((member) => (
                                <tr key={member._id}>
                                    <td className="p-2 border border-stone-500 text-center">{member.name}</td>
                                    <td className="p-2 border border-stone-500 text-center">{member.title}</td>
                                    <td className="p-2 border border-stone-500 text-center">
                                        <div className="flex gap-2 lg:gap-5">
                                        <TiEdit
                                            className="cursor-pointer text-orange-600"
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
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 mt-16">
                    <div className="bg-white text-black p-6  text-sm overflow-y-scroll h-[500px] w-96 mb-36">
                        <h2 className="lg:text-2xl font-bold text-center mb-4 text-orange-600">Edit Team Member</h2>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Title</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Image URL</label>
                            <input
                                type="text"
                                value={formData.image}
                                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Facebook Link</label>
                            <input
                                type="text"
                                value={formData.facebook}
                                onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Twitter Link</label>
                            <input
                                type="text"
                                value={formData.x}
                                onChange={(e) => setFormData({ ...formData, x: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">Instagram Link</label>
                            <input
                                type="text"
                                value={formData.instagram}
                                onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-2">LinkedIn Link</label>
                            <input
                                type="text"
                                value={formData.linkedin}
                                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300"
                            />
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => setEditModal(false)}
                                className="bg-gray-500 text-white px-4 py-2"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleUpdate}
                                className="bg-orange-600 text-white px-4 py-2"
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
