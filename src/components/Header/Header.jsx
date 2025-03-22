
import { AiOutlineBoxPlot } from 'react-icons/ai';
import { FaArrowRightLong } from 'react-icons/fa6';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { IoCameraOutline, IoGlobeOutline, IoRocketOutline } from 'react-icons/io5';
import { MdOutlineDesignServices, MdOutlineWarehouse } from 'react-icons/md';
import { PiChartLine } from 'react-icons/pi';
import { TbUsersGroup } from 'react-icons/tb';
import { Link } from 'react-router-dom';

function Header() {
    const services = [
        { title: "Private Label", icon: <IoRocketOutline />, path: "/private-label" },
        { title: "Retail / Online Arbitrage", icon: <HiOutlineShoppingCart />, path: "/retail-arbitrage" },
        { title: "Wholesale FBA / WFS", icon: <MdOutlineWarehouse />, path: "/wholesale-fba" },
        { title: "Web Development", icon: <IoGlobeOutline />, path: "/web-development" },
        { title: "Shopify", icon: <AiOutlineBoxPlot />, path: "/shopify" },
        { title: "Creative Design", icon: <MdOutlineDesignServices />, path: "/creative-design" },
        { title: "Digital Marketing", icon: <PiChartLine />, path: "/digital-marketing" },
        { title: "Product Photography", icon: <IoCameraOutline />, path: "/product-photography" },
        { title: "F-Commerce Service", icon: <TbUsersGroup />, path: "/f-commerce-service" }
    ];

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-white">
                {services.map((service, index) => (
                    <Link
                        key={index}
                        to={service.path}
                        className="relative flex items-center justify-between bg-stone-100 text-black px-5 py-4 rounded-l-full group cursor-pointer overflow-hidden transition-all duration-500 hover:bg-orange-600"
                    >
                        {/* Animated Background Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-orange-600 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                        {/* Left Icon */}
                        <div className="text-2xl text-orange-600 p-4 bg-white rounded-full transition-all duration-500  z-10">
                            {service.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold transition-all duration-500 group-hover:text-white z-10">
                            {service.title}
                        </h3>

                        {/* Right Arrow Icon (Moves to Right on Hover) */}
                        <FaArrowRightLong className="text-orange-600 text-xl transition-transform duration-500 group-hover:translate-x-2 group-hover:text-white z-10" />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Header;
