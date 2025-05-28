import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const AddHero = () => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const fileInputRef = useRef(null); // 🔧 Reference for resetting file input

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || !title || !description) {
      Swal.fire('Error!', 'All fields are required!', 'error');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);

    formData.append('description', description);

    try {
      const response = await fetch('https://my-gunter-project-server.vercel.app/heroes', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        Swal.fire('Success!', 'Hero added successfully!', 'success');
        setImage('');
        setTitle('');
        setDescription('');
        fileInputRef.current.value = null; // ✅ Reset the file input field
      } else {
        Swal.fire('Error!', 'Failed to add hero.', 'error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire('Error!', 'There was an issue with the server.', 'error');
    }
  };

  return (
    <div className="container mx-auto py-4 text-black">
      <h2 className="text-center text-2xl font-bold mb-4 text-purple-600">Add Hero Section</h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-lg">
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image Upload
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            className="w-full px-4 py-2 mt-2 border border-gray-300"
            onChange={(e) => setImage(e.target.files[0])}
            ref={fileInputRef} // ✅ Attach ref to file input
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
  type="text"
  id="title"
  className="w-full px-4 py-2 mt-2 border border-gray-300"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
  placeholder="Enter hero title"
  required
/>
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            className="w-full px-4 py-2 mt-2 border border-gray-300"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 hover:bg-purple-700 cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddHero;
