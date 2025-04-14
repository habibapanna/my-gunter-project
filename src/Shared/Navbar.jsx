import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Logopw.svg";
import { FiMenu, FiX } from "react-icons/fi";
import CalendlyModal from "../components/CalendlyModal/CalendlyModal";
import OurServices from "../components/OurServices/OurServices";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesPopup, setShowServicesPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Detect mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Announcements", path: "/announcements" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isBlackBg = menuItems.some((item) =>
    location.pathname.startsWith(item.path)
  );

  return (
    <div className="border border-stone-800 sticky top-0 backdrop-blur-md z-[100]">
      <nav
        className={`${
          isBlackBg ? "bg-black " : "bg-black"
        } bg-opacity-80 text-white px-4 py-2 lg:py-1 transition duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full relative">
          <NavLink to="/">
            <img className="h-12 lg:h-16 w-auto" src={Logo} alt="Logo" />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 items-center justify-center relative">
            {menuItems.map(({ name, path }) => (
              <li
                key={name}
                onMouseEnter={() =>
                  !isMobile && name === "Services" && setShowServicesPopup(true)
                }
                onMouseLeave={() =>
                  !isMobile && name === "Services" && setShowServicesPopup(false)
                }
                className="relative"
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `relative transition duration-300 hover:text-amber-500 pb-1 font-semibold ${
                      isActive
                        ? "text-amber-500 border-b-2 border-amber-500"
                        : `text-${isBlackBg ? "white" : "black"} border-b-2 border-transparent`
                    }`
                  }
                  onClick={(e) => {
                    if (isMobile && name === "Services") {
                      e.preventDefault();
                      setShowServicesPopup((prev) => !prev);
                    } else {
                      setShowServicesPopup(false);
                    }
                  }}
                >
                  {name}
                </NavLink>

                {/* Services Popup (Desktop) */}
                {name === "Services" && showServicesPopup && (
                  <div
                    className="top-0 fixed left-1/2 transform -translate-x-1/2 mt-3 w-[100vw] max-w-4xl bg-black bg-opacity-95 z-[200] p-6 rounded-lg shadow-lg"
                    onMouseEnter={() => !isMobile && setShowServicesPopup(true)}
                    onMouseLeave={() => !isMobile && setShowServicesPopup(false)}
                  >
                    <OurServices />
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Calendly & Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <CalendlyModal />
            </div>

            <div className="md:hidden flex items-center">
              <CalendlyModal />
              <button
                className="text-amber-500 text-2xl ml-4"
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
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed top-16 right-0 w-full bg-black bg-opacity-90 shadow-lg rounded-l-lg z-50">
            <ul className="text-left py-5">
              {menuItems.map(({ name, path }) => (
                <li key={name}>
<NavLink
  to={path}
  className={() => {
    const isServices = name === "Services";
    const isHome = name === "Home";
    const currentPath = location.pathname;

    const isActive =
      (isHome && currentPath === "/") ||
      (!isHome && currentPath.startsWith(path));

    const isActiveOrPopup = isActive || (isServices && showServicesPopup);

    return `
      block py-3 px-5 border-b border-stone-600 transition duration-300
      hover:bg-purple-600 hover:text-white text-amber-500
      ${isActiveOrPopup ? "bg-purple-600 text-white font-semibold" : ""}
    `;
  }}
  onClick={(e) => {
    if (name === "Services") {
      e.preventDefault();
      setShowServicesPopup((prev) => !prev);
    } else {
      setShowServicesPopup(false);
      setIsOpen(false);
    }
  }}
>
  {name}
</NavLink>


                  {/* Mobile Popup */}
                  {name === "Services" && showServicesPopup && (
                    <div className="px-5 pt-4 pb-6">
                      <OurServices />
                    </div>
                  )}
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
