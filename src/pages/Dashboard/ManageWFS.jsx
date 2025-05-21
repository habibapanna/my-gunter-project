import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { TiEdit } from "react-icons/ti";
import { AiOutlineDelete } from "react-icons/ai";

const ManageWFS = () => {
  const [WFS, setWFS] = useState([]);

  const fetchWFS = async () => {
    try {
      const res = await axios.get("https://my-gunter-project-server.vercel.app/wfs");
      setWFS(res.data);
    } catch (error) {
      console.error("Error fetching wfs:", error);
    }
  };

  useEffect(() => {
    fetchWFS();
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
        await axios.put(`https://my-gunter-project-server.vercel.app/wfs/${id}`, { imageUrl });
        Swal.fire("Updated!", "The image URL has been updated.", "success");
        fetchWFS();
      } catch (error) {
        console.error("Error updating wfs:", error);
        Swal.fire("Error", "Failed to update wfs", "error");
      }
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this wfs!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`https://my-gunter-project-server.vercel.app/wfs/${id}`);
          Swal.fire("Deleted!", "WFS has been deleted.", "success");
          fetchWFS();
        } catch (error) {
          console.error("Error deleting wfs:", error);
          Swal.fire("Error", "Failed to delete wfs", "error");
        }
      }
    });
  };

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-xl lg:text-2xl font-bold mb-4 text-purple-600 text-center">Manage WFS</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="text-left">
            <th className="p-3 border border-stone-500">#</th>
            <th className="p-3 border border-stone-500">Image</th>
            <th className="p-3 border border-stone-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {WFS.map((wfs, index) => (
            <tr key={wfs._id} className="">
              <td className="p-3 border border-stone-500">{index + 1}</td>
              <td className="p-3 border border-stone-500">
                <img src={wfs.imageUrl} alt="Private Label" className="w-24 h-[100px] object-cover" />
              </td>
              <td className="p-3 border border-stone-500 space-x-2">
                <TiEdit
                  className="cursor-pointer text-purple-600 text-xl inline"
                  onClick={() => handleEdit(wfs._id, wfs.imageUrl)}
                />
                <AiOutlineDelete
                  className="cursor-pointer text-red-600 text-xl inline"
                  onClick={() => handleDelete(wfs._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageWFS;
