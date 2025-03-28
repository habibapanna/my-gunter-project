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
        const response = await axios.get('http://localhost:5000/gallery');
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
      await axios.put(`http://localhost:5000/gallery/${id}`, {
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
          await axios.delete(`http://localhost:5000/gallery/${id}`);
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
    <div>
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
                <td className="border border-stone-600 p-2 flex justify-around">
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
                className="px-4 py-2 bg-gray-300 hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={() => handleUpdate(editingItem)}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white "
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

export default ManageGallery;
