import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash } from 'react-icons/fa';
import 'sweetalert2/dist/sweetalert2.min.css'; // Ensure you have this import for SweetAlert styling
import { TiEdit } from 'react-icons/ti';
import { AiOutlineDelete } from 'react-icons/ai';

const ManageTestimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);

  // Fetch testimonials data from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://my-gunter-project-server.vercel.app/testimonials');
        const data = await response.json();
        setTestimonials(data); // Store fetched data in state
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  // Handle editing the testimonial
  const handleEdit = (testimonial) => {
    setIsEditing(true);
    setEditingTestimonial(testimonial);
    Swal.fire({
      title: 'Edit Testimonial',
      html: `
        <input type="text" id="author" class="swal2-input" placeholder="Author" value="${testimonial.author}" />
        <input type="text" id="text" class="swal2-input" placeholder="Text" value="${testimonial.text}" />
        <input type="text" id="position" class="swal2-input" placeholder="Position" value="${testimonial.position}" />
        <input type="url" id="image" class="swal2-input" placeholder="Image URL" value="${testimonial.image}" />
      `,
      preConfirm: async () => {
        const author = document.getElementById('author').value;
        const text = document.getElementById('text').value;
        const position = document.getElementById('position').value;
        const image = document.getElementById('image').value;
  
        // Update the testimonial
        const updatedTestimonial = { ...testimonial, author, text, position, image };
        setTestimonials(testimonials.map(t => t._id === testimonial._id ? updatedTestimonial : t));
  
        try {
          // Send PUT request to update the testimonial on the backend
          const response = await fetch(`https://my-gunter-project-server.vercel.app/testimonials/${testimonial._id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTestimonial),
          });
  
          if (response.ok) {
            // Show success SweetAlert
            Swal.fire('Updated!', 'Your testimonial has been updated successfully.', 'success');
          } else {
            // Show error SweetAlert if update fails
            Swal.fire('Error!', 'There was an issue updating the testimonial.', 'error');
          }
        } catch (error) {
          console.error('Error updating testimonial:', error);
          Swal.fire('Error!', 'There was an error connecting to the server.', 'error');
        }
      },
      showCancelButton: true,
      confirmButtonText: 'Save Changes',
      cancelButtonText: 'Cancel',
    });
  };
  

  // Handle deleting the testimonial
  const handleDelete = (testimonialId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This will permanently delete the testimonial!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete the testimonial from state
        setTestimonials(testimonials.filter(t => t._id !== testimonialId));

        // Here you can make the DELETE request to remove the testimonial from the backend
        fetch(`https://my-gunter-project-server.vercel.app/testimonials/${testimonialId}`, {
          method: 'DELETE',
        });

        Swal.fire('Deleted!', 'Your testimonial has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-purple-600 mt-5 text-center lg:text-2xl font-bold mb-4">Manage Testimonials</h2>

      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr> 
            <th className="p-2 border border-gray-300">Author</th>
            <th className="p-2 border border-gray-300">Text</th>
            <th className="p-2 border border-gray-300">Position</th>
            <th className="p-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.map((testimonial) => (
            <tr key={testimonial._id}>
              <td className="p-2 border border-gray-300">{testimonial.author}</td>
              <td className="p-2 border border-gray-300">{testimonial.text}</td>
              <td className="p-2 border border-gray-300">{testimonial.position}</td>
              <td className="p-2 border border-gray-300">
                <button
                  className="text-purple-600 hover:text-purple-700 cursor-pointer"
                  onClick={() => handleEdit(testimonial)}
                >
                  <TiEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700 ml-4 cursor-pointer"
                  onClick={() => handleDelete(testimonial._id)}
                >
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTestimonial;
