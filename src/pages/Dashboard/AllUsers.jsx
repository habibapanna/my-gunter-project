import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiOutlineDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get("https://my-gunter-project-server.vercel.app/users")
            .then(response => setUsers(response.data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://my-gunter-project-server.vercel.app/users/${id}`)
                    .then(() => {
                        setUsers(users.filter(user => user._id !== id));
                        Swal.fire("Deleted!", "User has been deleted.", "success");
                    })
                    .catch(error => console.error("Error deleting user:", error));
            }
        });
    };

    const handleMakeAdmin = (id) => {
        axios.patch(`https://my-gunter-project-server.vercel.app/users/admin/${id}`)
            .then(() => {
                setUsers(users.map(user => user._id === id ? { ...user, role: "admin" } : user));
                Swal.fire("Success!", "User has been promoted to Admin.", "success");
            })
            .catch(error => console.error("Error making user admin:", error));
    };
    

    return (
        <div className="py-6">
            <h2 className="text-xl font-bold mb-4 text-purple-600 text-center ">All Users</h2>
           <div className='overflow-x-scroll w-[320px] md:overflow-x-hidden md:w-full'>
           <table className="w-full border-collapse border border-stone-600">
                <thead>
                    <tr>
                        <th className="border border-stone-600 p-2">Name</th>
                        <th className="border border-stone-600 p-2">Email</th>
                        <th className="border border-stone-600 p-2">Role</th>
                        <th className="border border-stone-600 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id} className="border border-stone-600">
                            <td className="border border-stone-600 p-2">{user.name}</td>
                            <td className="border border-stone-600 p-2">{user.email}</td>
                            <td className="border border-stone-600 p-2">{user.role || "User"}</td>
                            <td className="border border-stone-600 p-2 flex lg:gap-2">
                                <button className="text-red-600 px-3 py-1" onClick={() => handleDelete(user._id)}>
                                    <AiOutlineDelete />
                                </button>
                                {user.role !== "admin" && (
                                    <button className="shadow-animation text-sm bg-purple-600 g:px-3 px-1 py-1 cursor-pointer" onClick={() => handleMakeAdmin(user._id)}>
                                        Make Admin
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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
    );
};

export default AllUsers;
