import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { TiEdit } from "react-icons/ti";

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch all blogs
  useEffect(() => {
    axios
      .get("https://my-gunter-project-server.vercel.app/blogs")
      .then((res) => setBlogs(res.data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  // Handle delete blog
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://my-gunter-project-server.vercel.app/blogs/${id}`)
          .then(() => {
            setBlogs(blogs.filter((blog) => blog._id !== id));
            Swal.fire("Deleted!", "Blog has been deleted.", "success");
          })
          .catch((error) => console.error("Error deleting blog:", error));
      }
    });
  };

  // Open modal with blog data
  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  // Handle update blog
  const handleUpdate = () => {
    axios
      .put(`https://my-gunter-project-server.vercel.app/blogs/${selectedBlog._id}`, selectedBlog)
      .then(() => {
        setBlogs(
          blogs.map((blog) =>
            blog._id === selectedBlog._id ? selectedBlog : blog
          )
        );
        Swal.fire("Updated!", "Blog has been updated.", "success");
        setIsModalOpen(false);
      })
      .catch((error) => console.error("Error updating blog:", error));
  };

  return (
    <div className="py-6 text-white">
      <h2 className="text-xl font-bold mb-4 text-orange-600 text-center">
        Manage Blogs
      </h2>

      {/* Scrollable Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-stone-600">
          <thead>
            <tr className="">
              <th className="border border-stone-600 p-2 text-sm md:text-base">
                Title
              </th>
              <th className="border border-stone-600 p-2 text-sm md:text-base">
                Category
              </th>
              <th className="border border-stone-600 p-2 text-sm md:text-base">
                Author
              </th>
              <th className="border border-stone-600 p-2 text-sm md:text-base">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="border border-stone-600">
                <td className="border border-stone-600 p-2 text-sm">
                  {blog.title}
                </td>
                <td className="border border-stone-600 p-2 text-sm">
                  {blog.category}
                </td>
                <td className="border border-stone-600 p-2 text-sm">
                  {blog.author}
                </td>
                <td className="borde border-stone-600 p-2 flex flex-col md:flex-row md:items-center gap-2">
                  <button
                    className="text-orange-600 transition"
                    onClick={() => openModal(blog)}
                  >
                    <TiEdit size={18} />
                  </button>
                  <button
                    className="text-red-600  transition"
                    onClick={() => handleDelete(blog._id)}
                  >
                    <AiOutlineDelete size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for updating blog */}
      {isModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center text-black h-full z-50">
    <div className="bg-white px-6 py-2 w-96 text-sm">
      <h3 className="text-lg font-bold mb-4 text-center text-orange-600">Update Blog</h3>
      <label>Title</label>
      <input
        type="text"
        placeholder="Title"
        value={selectedBlog.title}
        onChange={(e) =>
          setSelectedBlog({ ...selectedBlog, title: e.target.value })
        }
        className="w-full border border-gray-500 mb-2 text-gray-500"
      />
      <label>Image</label>
      <input
        type="text"
        placeholder="Image URL"
        value={selectedBlog.image}
        onChange={(e) =>
          setSelectedBlog({ ...selectedBlog, image: e.target.value })
        }
        className="w-full border border-gray-500 text-gray-500 mb-2"
      />
      <label>Category</label>
      <input
        type="text"
        placeholder="Category"
        value={selectedBlog.category}
        onChange={(e) =>
          setSelectedBlog({ ...selectedBlog, category: e.target.value })
        }
        className="w-full border border-gray-500 text-gray-500 mb-2"
      />
      <label>Author</label>
      <input
        type="text"
        placeholder="Author"
        value={selectedBlog.author}
        onChange={(e) =>
          setSelectedBlog({ ...selectedBlog, author: e.target.value })
        }
        className="w-full border border-gray-500 text-gray-500 mb-2"
      />
      <label>Description</label>
      <textarea
        placeholder="Description"
        value={selectedBlog.description}
        onChange={(e) =>
          setSelectedBlog({
            ...selectedBlog,
            description: e.target.value,
          })
        }
        className="w-full border border-gray-500 text-gray-500 mb-2"
      ></textarea>
      <label>Details</label>
      <textarea
        placeholder="Details"
        value={selectedBlog.details}
        onChange={(e) =>
          setSelectedBlog({ ...selectedBlog, details: e.target.value })
        }
        className="w-full border border-gray-500 text-gray-500 mb-4"
      ></textarea>
      <div className="flex justify-between">
        <button
          className="bg-gray-400 px-4 py-2"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-orange-600 text-white px-4 py-2"
          onClick={handleUpdate}
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

export default ManageBlog;
