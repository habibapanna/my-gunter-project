import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { TiEdit } from "react-icons/ti";
import { AiOutlineDelete } from "react-icons/ai";

const ManageOurClients = () => {
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    try {
      const res = await axios.get("https://my-gunter-project-server.vercel.app/clients");
      setClients(res.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleEdit = async (id) => {
    const { value: file } = await Swal.fire({
      title: "Upload New Image",
      html: `
        <input type="file" id="image-file" class="swal2-file" accept="image/*" />
      `,
      preConfirm: () => {
        const input = Swal.getPopup().querySelector("#image-file");
        if (!input.files[0]) {
          Swal.showValidationMessage("Please select an image file.");
        }
        return input.files[0];
      },
      showCancelButton: true,
    });

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const res = await fetch(`https://my-gunter-project-server.vercel.app/clients/${id}`, {
          method: "PUT",
          body: formData,
        });

        const data = await res.json();
        if (res.ok) {
          Swal.fire("Updated!", "Client image has been updated.", "success");
          fetchClients();
        } else {
          Swal.fire("Error", data.message || "Failed to update image.", "error");
        }
      } catch (error) {
        console.error("Error updating client:", error);
        Swal.fire("Error", "Failed to update client.", "error");
      }
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this client!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`https://my-gunter-project-server.vercel.app/clients/${id}`);
          Swal.fire("Deleted!", "Client has been deleted.", "success");
          fetchClients();
        } catch (error) {
          console.error("Error deleting client:", error);
          Swal.fire("Error", "Failed to delete client", "error");
        }
      }
    });
  };

  return (
    <div className="p-4 overflow-x-auto">
      <h2 className="text-xl lg:text-2xl font-bold mb-4 text-purple-600 text-center">Manage Clients</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="text-left">
            <th className="p-3 border border-stone-500">#</th>
            <th className="p-3 border border-stone-500">Image</th>
            <th className="p-3 border border-stone-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={client._id}>
              <td className="p-3 border border-stone-500">{index + 1}</td>
              <td className="p-3 border border-stone-500">
                <img
                  src={client.imageUrl}
                  alt="Client"
                  className="p-2 h-[100px] object-cover"
                />
              </td>
              <td className="p-3 border border-stone-500 space-x-2">
                <TiEdit
                  className="cursor-pointer text-purple-600 text-xl inline"
                  onClick={() => handleEdit(client._id)}
                />
                <AiOutlineDelete
                  className="cursor-pointer text-red-600 text-xl inline"
                  onClick={() => handleDelete(client._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOurClients;
