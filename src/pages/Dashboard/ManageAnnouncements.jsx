import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AiOutlineDelete } from "react-icons/ai";
import { TiEdit } from "react-icons/ti";

const ManageAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/announcements")
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while fetching announcements.",
        });
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will permanently delete the announcement.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://my-gunter-project-server.vercel.app/announcements/${id}`)
          .then(() => {
            setAnnouncements(announcements.filter((item) => item._id !== id));
            Swal.fire("Deleted!", "The announcement has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting announcement:", error);
            Swal.fire("Error", "Failed to delete announcement.", "error");
          });
      }
    });
  };

  const openModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setUpdatedTitle(announcement.title);
    setUpdatedCategory(announcement.category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAnnouncement(null);
  };

  const handleUpdate = () => {
    axios
      .put(`https://my-gunter-project-server.vercel.app/announcements/${selectedAnnouncement._id}`, {
        title: updatedTitle,
        category: updatedCategory,
      })
      .then(() => {
        setAnnouncements(
          announcements.map((item) =>
            item._id === selectedAnnouncement._id
              ? { ...item, title: updatedTitle, category: updatedCategory }
              : item
          )
        );
        Swal.fire("Updated!", "The announcement has been updated.", "success");
        closeModal();
      })
      .catch((error) => {
        console.error("Error updating announcement:", error);
        Swal.fire("Error", "Failed to update announcement.", "error");
      });
  };

  return (
    <div className="text-white mt-5 bg-black">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border border-stone-600 px-4 py-2 text-left">Title</th>
            <th className="border border-stone-600 px-4 py-2 text-left">Category</th>
            <th className="border border-stone-600 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {announcements.length > 0 ? (
            announcements.map((announcement) => (
              <tr key={announcement._id}>
                <td className="border border-stone-600 px-4 py-2">{announcement.title}</td>
                <td className="border border-stone-600 px-4 py-2">{announcement.category}</td>
                <td className="border border-stone-600 px-4 py-2">
                  <button className="mr-2 text-orange-600 hover:underline" onClick={() => openModal(announcement)}>
                    <TiEdit />
                  </button>
                  <button className="text-red-600 hover:underline" onClick={() => handleDelete(announcement._id)}>
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="border text-center py-4">
                No announcements available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 shadow-lg text-black w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Announcement</h2>
            <input
              type="text"
              className="w-full border p-2 mb-2"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <input
              type="text"
              className="w-full border p-2 mb-4"
              value={updatedCategory}
              onChange={(e) => setUpdatedCategory(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button className="mt-4 w-full bg-gray-600 shadow-animation text-white py-2" onClick={closeModal}>Cancel</button>
              <button className="mt-4 w-full bg-orange-600 shadow-animation text-white py-2" onClick={handleUpdate}>Update</button>
            </div>
          </div>
          <style>
                {`
                    .shadow-animation {
                        position: relative;
                        overflow: hidden;
                    }

                    .shadow-animation::before,
                    .shadow-animation::after {
                        content: '';
                        position: absolute;
                        width: 50%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.9); /* Solid dark panel */
                        transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
                        opacity: 0;
                    }
                    
                    /* Left panel (rises from bottom) */
                    .shadow-animation::before {
                        left: 0;
                        bottom: -100%;
                    }
                    
                    /* Right panel (falls from top) */
                    .shadow-animation::after {
                        right: 0;
                        top: -100%;
                    }

                    /* Hover Effect */
                    .shadow-animation:hover::before {
                        transform: translateY(-100%);
                        opacity: 1;
                    }

                    .shadow-animation:hover::after {
                        transform: translateY(100%);
                        opacity: 1;
                    }

                    /* Panels Disappear After a While */
                    .shadow-animation:hover::before,
                    .shadow-animation:hover::after {
                        animation: panelDisappear 1s ease-in-out forwards;
                    }

                    @keyframes panelDisappear {
                        0% {
                            opacity: 1;
                        }
                        70% {
                            opacity: 1;
                        }
                        100% {
                            opacity: 0;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </div>
      )}
    </div>
  );
};

export default ManageAnnouncements;