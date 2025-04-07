import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { TiEdit } from "react-icons/ti";
import { AiOutlineDelete } from "react-icons/ai";

const ManageRetail = () => {
  const [retails, setRetails] = useState([]);

  const fetchRetails = async () => {
    try {
      const res = await axios.get("http://localhost:5000/retails");
      setRetails(res.data);
    } catch (error) {
      console.error("Error fetching retails:", error);
    }
  };

  useEffect(() => {
    fetchRetails();
  }, []);

  const handleEdit = async (id, currentImageUrl) => {
    const { value: imageUrl } = await Swal.fire({
      title: "Update Image URL",
      input: "url",
      inputLabel: "New Image URL",
      inputValue: currentImageUrl,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) return "Image URL cannot be empty!";
      },
    });

    if (imageUrl) {
      try {
        await axios.put(`http://localhost:5000/retails/${id}`, { imageUrl });
        Swal.fire("Updated!", "The image URL has been updated.", "success");
        fetchRetails();
      } catch (error) {
        console.error("Error updating label:", error);
        Swal.fire("Error", "Failed to update retail", "error");
      }
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this retail!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/retails/${id}`);
          Swal.fire("Deleted!", "Label has been deleted.", "success");
          fetchRetails();
        } catch (error) {
          console.error("Error deleting retail:", error);
          Swal.fire("Error", "Failed to delete retail", "error");
        }
      }
    });
  };

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-xl lg:text-2xl font-bold mb-4 text-orange-600 text-center">Manage Retails</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="text-left">
            <th className="p-3 border border-stone-500">#</th>
            <th className="p-3 border border-stone-500">Image</th>
            <th className="p-3 border border-stone-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {retails.map((retail, index) => (
            <tr key={retail._id} className="">
              <td className="p-3 border border-stone-500">{index + 1}</td>
              <td className="p-3 border border-stone-500">
                <img src={retail.imageUrl} alt="Private Label" className="w-24 h-[100px] object-cover" />
              </td>
              <td className="p-3 border border-stone-500 space-x-2">
                <TiEdit
                  className="cursor-pointer text-orange-600 text-xl inline"
                  onClick={() => handleEdit(retail._id, retail.imageUrl)}
                />
                <AiOutlineDelete
                  className="cursor-pointer text-red-600 text-xl inline"
                  onClick={() => handleDelete(retail._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageRetail;
