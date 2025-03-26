import { Link, NavLink, Outlet } from "react-router-dom";
import { FiPlusCircle, FiList, FiFileText, FiImage, FiGrid } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="flex h-screen overflow-x-hidden">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-black text-white w-56 transition-transform duration-300 transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-56`}
      >
        {/* Close Button (Only in Mobile) */}
        <button
          className="absolute top-4 right-4 text-white md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes className="hover:text-orange-600" size={24} />
        </button>

        <div className="flex flex-col space-y-4 px-4 pt-14 md:pt-6">
            <h1 className="text-xl text-center text-orange-600">Dashboard</h1>
          <NavLink
            to="/dashboard/add-service"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <FiPlusCircle size={20} />
            <span>Add Service</span>
          </NavLink>

          <NavLink
            to="/dashboard/manage-service"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <FiList size={20} />
            <span>Manage Service</span>
          </NavLink>

          <NavLink
            to="/dashboard/add-blog"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <FiFileText size={20} />
            <span>Add Blog</span>
          </NavLink>

          <NavLink
            to="/dashboard/manage-blog"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <FiGrid size={20} />
            <span>Manage Blog</span>
          </NavLink>

          <NavLink
            to="/dashboard/add-gallery"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <FiImage size={20} />
            <span>Add Gallery</span>
          </NavLink>

          <NavLink
            to="/dashboard/manage-gallery"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <FiGrid size={20} />
            <span>Manage Gallery</span>
          </NavLink>

        </div>
        <div className="border mx-4 mt-5"></div>
        <div className="mt-5 px-5">
            <Link to='/'>Home</Link>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white relative">
        {/* Menu Bar for Mobile */}
        <button
          className="absolute top-4 right-4 md:hidden"
          onClick={() => {
            console.log("Opening sidebar"); // Debugging log
            setIsOpen(true);
          }}
        >
          <FaBars className="text-black hover:text-orange-600" size={24} />
        </button>

        <Outlet /> {/* Loads the selected route content */}
      </div>
    </div>
  );
};

export default Dashboard;
