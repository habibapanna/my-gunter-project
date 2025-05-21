import { Link } from "react-router-dom";
import {
    HiOutlineClipboardList,
    HiOutlineShoppingBag,
    HiOutlineCube,
    HiOutlineCode,
    HiOutlineGlobeAlt,
    HiOutlineColorSwatch,
    HiOutlineChartBar,
    HiOutlineCamera,
    HiOutlineOfficeBuilding,
} from "react-icons/hi";

const services = [
    { path: "/dashboard/manage-private-label", label: "Manage Private Label", icon: <HiOutlineClipboardList className="text-xl mr-2" /> },
    { path: "/dashboard/manage-retail", label: "Manage Retail", icon: <HiOutlineShoppingBag className="text-xl mr-2" /> },
    { path: "/dashboard/manage-wfs", label: "Manage WFS", icon: <HiOutlineCube className="text-xl mr-2" /> },
    { path: "/dashboard/manage-web-development", label: "Manage Web Development", icon: <HiOutlineCode className="text-xl mr-2" /> },
    { path: "/dashboard/manage-shopify", label: "Manage Shopify", icon: <HiOutlineGlobeAlt className="text-xl mr-2" /> },
    { path: "/dashboard/manage-creative-design", label: "Manage Creative Design", icon: <HiOutlineColorSwatch className="text-xl mr-2" /> },
    { path: "/dashboard/manage-digital-marketing", label: "Manage Digital Marketing", icon: <HiOutlineChartBar className="text-xl mr-2" /> },
    { path: "/dashboard/manage-product-photography", label: "Manage Product Photography", icon: <HiOutlineCamera className="text-xl mr-2" /> },
    { path: "/dashboard/manage-f-commerce-service", label: "Manage F-Commerce Service", icon: <HiOutlineOfficeBuilding className="text-xl mr-2" /> },
];

const ManageService = () => {
    return (
        <div className="p-6">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-center text-purple-600">Manage Services</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <Link
                        key={index}
                        to={service.path}
                        className="flex items-center justify-center bg-black hover:bg-purple-600 border border-stone-500 hover:border-none shadow-md px-4 py-3 text-white font-medium transition"
                    >
                        {service.icon}
                        {service.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ManageService;
