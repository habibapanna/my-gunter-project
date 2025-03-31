import React, { useState, useEffect } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai';
import { TiEdit } from 'react-icons/ti';
import Swal from 'sweetalert2'; // Import SweetAlert2

const ManageGallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedCategory, setUpdatedCategory] = useState('');

  // Fetch gallery items from the backend
  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const response = await axios.get('https://my-gunter-project-server.vercel.app/gallery');
        setGalleryItems(response.data);
      } catch (error) {
        console.error('Error fetching gallery items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  // Handle update
  const handleUpdate = async (id) => {
    try {
      await axios.put(`https://my-gunter-project-server.vercel.app/gallery/${id}`, {
        title: updatedTitle,
        category: updatedCategory,
      });
      setGalleryItems((prevItems) =>
        prevItems.map((item) =>
          item._id === id ? { ...item, title: updatedTitle, category: updatedCategory } : item
        )
      );
      setEditingItem(null);

      // Show success alert
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Gallery item has been updated successfully.',
      });
    } catch (error) {
      console.error('Error updating gallery item:', error);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    // Show confirmation before delete
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`https://my-gunter-project-server.vercel.app/${id}`);
          setGalleryItems((prevItems) => prevItems.filter((item) => item._id !== id));

          // Show success alert
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Gallery item has been deleted successfully.',
          });
        } catch (error) {
          console.error('Error deleting gallery item:', error);
        }
      }
    });
  };

  return (
    <div className='mt-5'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 border-stone-600">Title</th>
              <th className="border p-2 border-stone-600">Category</th>
              <th className="border p-2 border-stone-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {galleryItems.map((item) => (
              <tr key={item._id}>
                <td className="border border-stone-600 p-2">{item.title}</td>
                <td className="border border-stone-600 p-2">{item.category}</td>
                <td className="border border-stone-600 px-4 py-4 lg:flex justify-around"> 
                  <TiEdit
                    className="cursor-pointer text-orange-600"
                    onClick={() => {
                      setEditingItem(item._id);
                      setUpdatedTitle(item.title);
                      setUpdatedCategory(item.category);
                    }}
                  />
                  <AiOutlineDelete
                    className="cursor-pointer text-red-600"
                    onClick={() => handleDelete(item._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Update Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 shadow-md w-96 text-black">
            <h2 className="text-xl mb-4">Update Gallery Item</h2>
            <input
              type="text"
              placeholder="Title"
              value={updatedTitle}
              onChange={(e) => setUpdatedTitle(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Category"
              value={updatedCategory}
              onChange={(e) => setUpdatedCategory(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setEditingItem(null)}
                className="mt-4 w-full bg-gray-600 shadow-animation text-white py-2"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpdate(editingItem)}
                className="mt-4 w-full bg-orange-600 shadow-animation text-white py-2"
              >
                Update
              </button>
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

export default ManageGallery;
