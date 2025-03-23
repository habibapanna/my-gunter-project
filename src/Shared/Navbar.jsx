import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import { SiDreamstime } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Announcements", path: "/announcements" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  const isBlackBg = menuItems.some(item => item.path === location.pathname);

  return (
<div className="shadow-md sticky top-0 backdrop-blur-md z-50">
<nav className={`${isBlackBg ? "bg-black" : "bg-white"} bg-opacity-80 text-white px-4 py-5 transition duration-300`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-1">
        <SiDreamstime className={`great-vibes border-none ${isBlackBg ? "text-white" : "text-black"} text-2xl font-bold`}></SiDreamstime> 
        <h1 className={`great-vibes border-none ${isBlackBg ? "text-white" : "text-black"} text-2xl font-bold`}>
          Imagine Dream World</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 ">
          {menuItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative transition duration-300 hover:text-orange-500 pb-1 font-semibold ${
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : `text-${isBlackBg ? "white" : "black"} border-b-2 border-transparent`
                  } hover:border-orange-500`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`${isBlackBg ? "text-white" : "text-black"} md:hidden text-2xl`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX className="hover:text-gray-200" /> : <FiMenu className="hover:text-gray-200" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className={`md:hidden fixed top-16 right-0 w-1/2 ${isBlackBg ? "bg-black" : "bg-white"} bg-opacity-90 shadow-lg rounded-l-lg`}>
          <ul className="text-center py-4 space-y-4">
            {menuItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `block py-2 transition duration-300 hover:text-orange-500 pb-1 ${
                      isActive
                        ? "text-orange-500 underline border-orange-500"
                        : `text-${isBlackBg ? "white" : "black"} hover:underline border-transparent`
                    } hover:border-orange-500`
                  }
                  onClick={() => setIsOpen(false)} // Close menu when clicking a link
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
</div>
  );
};

export default Navbar;
