import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Logoh.svg";
import CalendlyPopup from "../components/CalendlyPopup/CalendlyPopup";
import { FiMenu, FiX } from "react-icons/fi";
import CalendlyModal from "../components/CalendlyModal/CalendlyModal";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Announcements", path: "/announcements" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },  
  ];

  const isBlackBg = menuItems.some((item) => location.pathname.startsWith(item.path)) || location.pathname.startsWith("/services");


  return (
    <div className="border border-stone-800 sticky top-0 backdrop-blur-md z-100">
      <nav className={`${isBlackBg ? "bg-black " : "bg-black"} bg-opacity-80 text-white px-4 py-2 lg:py-1 transition duration-300 `}>
        <div className="container mx-auto flex justify-between items-center">
         
           {/* Mobile Menu Toggle */}
           
          <div className="flex gap-1">        
             {/* Logo */}
              <NavLink to="/"><img className="h-12 lg:h-18 w-full" src={Logo} alt="" /></NavLink>
            
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center justify-center">
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
            
              
            {/* ✅ Login/Logout Button */}
          </ul>
          <div className="flex items-center gap-3">
  {/* Calendly Button */}
  <div className="absolute left-1/2 transform -translate-x-5 lg:-translate-0 md:static md:transform-none">
    <CalendlyModal />
  </div>

  {/* Mobile Menu Icon */}
  <button
    className="text-amber-500 md:hidden text-2xl"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? (
      <FiX className="hover:text-purple-600" />
    ) : (
      <FiMenu className="hover:text-purple-600" />
    )}
  </button>
</div>


         
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
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
