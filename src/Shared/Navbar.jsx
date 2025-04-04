import { useState, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { SiDreamstime } from "react-icons/si";
import AuthContext from "../Context/AuthContext/AuthContext";
 // ✅ Import AuthContext

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logoutUser } = useContext(AuthContext); // ✅ Get user & logOut from AuthContext

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Announcements", path: "/announcements" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isBlackBg = menuItems.some((item) => location.pathname.startsWith(item.path)) || location.pathname.startsWith("/services");


  // ✅ Handle logout
  const handleLogout = async () => {
    try {
      await logoutUser(); // Calls logout function from context
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="border-b border-stone-800 sticky top-0 backdrop-blur-md z-50">
      <nav className={`${isBlackBg ? "bg-black" : "bg-black"} bg-opacity-80 text-white px-4 py-5 transition duration-300`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-1">
            <SiDreamstime className={`great-vibes border-none text-orange-600 text-2xl font-bold`} />
            <h1 className={`great-vibes border-none ${isBlackBg ? "text-white" : "text-white"} text-xl lg:text-2xl font-bold`}>
              <NavLink t0="/">Imagine <span className="text-orange-600">Dream</span> World</NavLink>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {menuItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative transition duration-300 hover:text-orange-6000 pb-1 font-semibold ${
                      isActive
                        ? "text-orange-600 border-b-2 border-orange-600"
                        : `text-${isBlackBg ? "white" : "black"} border-b-2 border-transparent`
                    } hover:border-orange-600`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
            <button className="text-sm bg-orange-600 px-2 shadow-animation cursor-pointer"><Link to="/dashboard">Go to Dashboard</Link></button>

            {/* ✅ Show Login/Logout Button */}
            {user ? (
              <button onClick={handleLogout} className="bg-red-600 px-2 text-sm border-none shadow-animation cursor-pointer">
                Logout
              </button>
            ) : (
              <button className="bg-orange-600 px-2 text-sm border-none shadow-animation cursor-pointer">
                <Link to="/login">Login</Link>
              </button>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button className={`${isBlackBg ? "text-white" : "text-white"} md:hidden text-2xl`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX className="hover:text-gray-200" /> : <FiMenu className="hover:text-gray-200" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className={`md:hidden fixed top-16 right-0 w-1/2 ${isBlackBg ? "bg-black" : "bg-black"} bg-opacity-90 shadow-lg rounded-l-lg`}>
            <ul className="text-center py-4 space-y-4">
              {menuItems.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 transition duration-300 hover:text-orange-600 pb-1 ${
                        isActive
                          ? "text-orange-600 underline border-orange-600"
                          : `text-${isBlackBg ? "white" : "black"} hover:underline border-transparent`
                      } hover:border-orange-600`
                    }
                    onClick={() => setIsOpen(false)} // Close menu when clicking a link
                  >
                    {name}
                  </NavLink>
                </li>
              ))}

              {/* ✅ Mobile Login/Logout Button */}
              <li>
                {user ? (
                  <button onClick={handleLogout} className="bg-red-600 px-2 text-sm border-none shadow-animation">
                    Logout
                  </button>
                ) : (
                  <button className="bg-orange-600 px-2 text-sm border-none shadow-animation">
                    <Link to="/login">Login</Link>
                  </button>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
