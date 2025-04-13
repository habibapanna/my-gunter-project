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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full">

         
           {/* Mobile Menu Toggle */}
           
          <div className="flex gap-1">        
             {/* Logo */}
             <NavLink to="/"><img className="h-12 lg:h-16 w-auto" src={Logo} alt="Logo" /></NavLink>

            
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
  <div className="hidden md:block">
  <CalendlyModal />
</div>


  {/* Mobile Menu Icon */}
  <div className="md:hidden flex items-center">
  <CalendlyModal />
  <button
    className="text-amber-500 text-2xl ml-4"
    onClick={() => setIsOpen(!isOpen)}
  >
    {isOpen ? <FiX className="hover:text-purple-600" /> : <FiMenu className="hover:text-purple-600" />}
  </button>
</div>

</div>


         
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed top-16 right-0 w-full bg-black bg-opacity-90 shadow-lg rounded-l-lg">
            <ul className="text-left py-5">
              {menuItems.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-3 transition duration-300 border-b border-stone-600 hover:bg-purple-600 px-5 ${
                        isActive
                          ? "text-white bg-purple-600"
                          : `text-white`
                      }`
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
