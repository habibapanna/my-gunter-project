import { useState, useContext, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { SiDreamstime } from "react-icons/si";
import AuthContext from "../Context/AuthContext/AuthContext";
import Logo from "../assets/Logow.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logoutUser } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminChecked, setAdminChecked] = useState(false); // ✅ new state

  useEffect(() => {
    const token = localStorage.getItem("access-token");

    if (user?.email && token) {
      fetch(`https://my-gunter-project-server.vercel.app/users/admin/${user.email}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(data => {
          setIsAdmin(data.isAdmin);
          setAdminChecked(true); // ✅ Admin check done
        })
        .catch(() => {
          setIsAdmin(false);
          setAdminChecked(true); // ✅ Still mark as checked even if error
        });
    } else {
      setAdminChecked(false); // ✅ Reset if not logged in
      setIsAdmin(false);
    }
  }, [user]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Announcements", path: "/announcements" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isBlackBg = menuItems.some((item) => location.pathname.startsWith(item.path)) || location.pathname.startsWith("/services");

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="border border-stone-400 sticky top-0 backdrop-blur-md z-50">
      <nav className={`${isBlackBg ? "bg-purple-600" : "bg-purple-600"} bg-opacity-80 text-white px-4 py-2 transition duration-300`}>
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-1">
            <h1 className="great-vibes border-none text-white text-xl lg:text-2xl font-bold">
              <NavLink to="/"><img className="h-12 lg:h-18 w-full" src={Logo} alt="" /></NavLink>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {menuItems.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative transition duration-300 hover:text-amber-500 pb-1 font-semibold ${
                      isActive
                        ? "text-amber-500 border-b-2 border-amber-500"
                        : `text-${isBlackBg ? "white" : "black"} border-b-2 border-transparent`
                    } hover:border-amber-500`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}

            {/* ✅ Show Go to Dashboard only if adminChecked and isAdmin */}
            {adminChecked && isAdmin && (
              <li>
                <Link to="/dashboard/all-user">
                  <button className="text-sm bg-amber-500 px-2 shadow-animation cursor-pointer font-bold">Go to Dashboard</button>
                </Link>
              </li>
            )}

            {/* ✅ Login/Logout Button */}
            {user ? (
              <button onClick={handleLogout} className="bg-white px-2 text-sm border-none text-purple-600 shadow-animation cursor-pointer">
                Logout
              </button>
            ) : (
              <button className="bg-amber-500 px-2 text-sm border-none shadow-animation cursor-pointer">
                <Link to="/login">Login</Link>
              </button>
            )}
          </ul>

          {/* Mobile Menu Toggle */}
          <button className="text-white md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX className="hover:text-gray-200" /> : <FiMenu className="hover:text-gray-200" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed top-16 right-0 w-1/2 bg-black bg-opacity-90 shadow-lg rounded-l-lg">
            <ul className="text-center py-4 space-y-4">
              {menuItems.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 transition duration-300 hover:text-amber-500 pb-1 ${
                        isActive
                          ? "text-amber-500 underline border-amber-500"
                          : `text-white hover:underline border-transparent`
                      } hover:border-amber-500`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                  </NavLink>
                </li>
              ))}

              {/* ✅ Go to Dashboard button for mobile */}
              {adminChecked && isAdmin && (
                <li>
                  <Link to="/dashboard/all-user">
                    <button className="bg-amber-500 px-2 text-sm border-none shadow-animation">Go to Dashboard</button>
                  </Link>
                </li>
              )}

              {/* ✅ Mobile Login/Logout Button */}
              <li>
                {user ? (
                  <button onClick={handleLogout} className="bg-red-600 px-2 text-sm border-none shadow-animation">
                    Logout
                  </button>
                ) : (
                  <button className="bg-amber-500 px-2 text-sm border-none shadow-animation">
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
