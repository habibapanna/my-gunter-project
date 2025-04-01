import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'; // Make sure you have this import for SweetAlert styling

const AddHero = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (!image || !name || !description) {
      Swal.fire('Error!', 'All fields are required!', 'error');
      return;
    }

    const heroData = {
      name, // Using name instead of title
      image,
      description,
    };

    try {
      const response = await fetch('https://my-gunter-project-server.vercel.app/heroes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(heroData),
      });

      if (response.ok) {
        Swal.fire('Success!', 'Hero added successfully!', 'success');
        setImage('');
        setName('');
        setDescription('');
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
      <h2 className="text-center text-2xl font-bold mb-4 text-orange-600">Add Hero Section</h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-lg">
        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            className="w-full px-4 py-2 mt-2 border border-gray-300"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 mt-2 border border-gray-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter hero name"
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
          className="w-full bg-orange-600 text-white py-2 px-4 hover:bg-orange-700"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddHero;
