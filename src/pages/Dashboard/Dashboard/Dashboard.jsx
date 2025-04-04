import { Link, NavLink, Outlet } from "react-router-dom";
import { FiPlusCircle, FiList, FiFileText, FiImage, FiGrid } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { TbLogs } from "react-icons/tb";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdOutlineAnnouncement, MdOutlineDashboardCustomize, MdOutlineManageAccounts, MdOutlineRoundaboutLeft, MdOutlineRoundaboutRight } from "react-icons/md";
import { PiMicrosoftTeamsLogo, PiUsersThree } from "react-icons/pi";
import { VscHome } from "react-icons/vsc";
import { LiaUsersSolid } from "react-icons/lia";
import { SlLike } from "react-icons/sl";
import { AiOutlineTeam } from "react-icons/ai";
import { SiApacherocketmq } from "react-icons/si";
import { DiHeroku } from "react-icons/di";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scrolling when sidebar is open
  useEffect(() => {
    // Prevent body scrolling when sidebar is open
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  
    // Cleanup: Remove the overflow-hidden class when the component is unmounted
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  

  return (
    <div className="flex h-screen overflow-x-hidden">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full bg-black text-white w-56 text-sm transition-transform duration-300 transform z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-56`}
      >
        {/* Close Button (Only in Mobile) */}
        <button
          className="absolute top-4 right-4 text-white md:hidden cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes className="hover:text-orange-600" size={24} />
        </button>

        <div className="flex flex-col space-y-4 px-4 py-14 md:py-6 overflow-y-scroll h-full">
            
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 ${
                isActive ? "text-white bg-stone-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <MdOutlineDashboardCustomize size={20} />
            <span>Dashboard</span>
          </NavLink>
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
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
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
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
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
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <TbLogs size={20} />
            <span>Manage Blog</span>
          </NavLink>

          <NavLink
            to="/dashboard/add-gallery"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 cursor-pointer transition-all duration-200 ${
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
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <FiGrid size={20} />
            <span>Manage Gallery</span>
          </NavLink>
          <NavLink
            to="/dashboard/add-announcements"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <TfiAnnouncement size={20} />
            <span>Add Announcements</span>
          </NavLink>
          <NavLink
            to="/dashboard/manage-announcements"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <MdOutlineAnnouncement size={20} />
            <span>Manage Announcements</span>
          </NavLink>
          <NavLink
            to="/dashboard/add-team"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <AiOutlineTeam size={20} />
            <span>Add Team</span>
          </NavLink>
          <NavLink
            to="/dashboard/manage-team"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <PiMicrosoftTeamsLogo size={20} />
            <span>Manage Team</span>
          </NavLink>
          <NavLink
            to="/dashboard/add-testimonial"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <SlLike size={20} />
            <span>Add Testimonial</span>
          </NavLink>
          <NavLink
            to="/dashboard/manage-testimonial"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <MdOutlineManageAccounts size={20} />
            <span>Manage Testimonial</span>
          </NavLink>
          <NavLink
            to="/dashboard/add-hero"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <SiApacherocketmq size={20} />
            <span>Add Hero Section</span>
          </NavLink>
          <NavLink
            to="/dashboard/manage-hero"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <DiHeroku size={20} />
            <span>Manage Hero Section</span>
          </NavLink>
          <NavLink
            to="/dashboard/add-about"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <MdOutlineRoundaboutRight size={20} />
            <span>Add About Section</span>
          </NavLink>
          <NavLink
            to="/dashboard/manage-about"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <MdOutlineRoundaboutLeft size={20} />
            <span>Manage About Section</span>
          </NavLink>
          <NavLink
            to="/dashboard/all-user"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <PiUsersThree size={20} />
            <span>All User</span>
          </NavLink>
          <div className="border text-orange-600 mx-4 mt-5"></div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-2 p-2 transition-all duration-200 cursor-pointer ${
                isActive ? "text-white bg-orange-600" : "text-white hover:bg-orange-600"
              }`
            }
          >
            <VscHome size={20} />
            <span>Home</span>
          </NavLink>
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
      <div className="flex-1 p-6 bg-black relative">
        {/* Menu Bar for Mobile */}
        <button
          className="absolute top-4 right-4 md:hidden"
          onClick={() => {
            console.log("Opening sidebar"); // Debugging log
            setIsOpen(true);
          }}
        >
          <FaBars className="text-orange-600 hover:text-orange-500 cursor-pointer" size={24} />
        </button>

        <Outlet /> {/* Loads the selected route content */}
      </div>
    </div>
  );
};

export default Dashboard;
