import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddTestimonial = () => {
  const [formData, setFormData] = useState({
    image: '',
    text: '',
    author: '',
    position: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://my-gunter-project-server.vercel.app/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire('Success!', 'Testimonial added successfully!', 'success');
        setFormData({
          image: '',
          text: '',
          author: '',
          position: '',
        });
      } else {
        Swal.fire('Error!', data.message, 'error');
      }
    } catch (error) {
      Swal.fire('Error!', 'Something went wrong. Please try again.', 'error');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg p-6 mt-8 text-black">
      <h2 className="text-2xl font-semibold text-center text-orange-600 mb-6">Add Testimonial</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Image URL */}
        <div>
          <label htmlFor="image" className="block font-medium">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 w-full"
            placeholder="Enter image URL"
          />
        </div>

        {/* Testimonial Text */}
        <div>
          <label htmlFor="text" className="block font-medium">Testimonial Text</label>
          <textarea
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 w-full"
            placeholder="Enter testimonial text"
            rows="4"
          />
        </div>

        {/* Author Name */}
        <div>
          <label htmlFor="author" className="block font-medium">Author Name</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 w-full"
            placeholder="Enter author's name"
          />
        </div>

        {/* Position */}
        <div>
          <label htmlFor="position" className="block font-medium">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 w-full"
            placeholder="Enter author's position"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-orange-600 text-white py-3 mt-4 hover:bg-orange-700 transition duration-200 cursor-pointer">
          Add Testimonial
        </button>
      </form>
    </div>
  );
};

export default AddTestimonial;
