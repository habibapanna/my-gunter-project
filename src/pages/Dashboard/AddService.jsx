import React from 'react';
import { Link } from 'react-router-dom';
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
} from 'react-icons/hi';

const services = [
    { path: '/dashboard/add-private-label', label: 'Add Private Label', icon: <HiOutlineClipboardList className="text-xl mr-2" /> },
    { path: '/dashboard/add-retail', label: 'Add Retail', icon: <HiOutlineShoppingBag className="text-xl mr-2" /> },
    { path: '/dashboard/add-wfs', label: 'Add WFS', icon: <HiOutlineCube className="text-xl mr-2" /> },
    { path: '/dashboard/add-web-development', label: 'Add Web Development', icon: <HiOutlineCode className="text-xl mr-2" /> },
    { path: '/dashboard/add-shopify', label: 'Add Shopify', icon: <HiOutlineGlobeAlt className="text-xl mr-2" /> },
    { path: '/dashboard/add-creative-design', label: 'Add Creative Design', icon: <HiOutlineColorSwatch className="text-xl mr-2" /> },
    { path: '/dashboard/add-digital-marketing', label: 'Add Digital Marketing', icon: <HiOutlineChartBar className="text-xl mr-2" /> },
    { path: '/dashboard/add-product-photography', label: 'Add Product Photography', icon: <HiOutlineCamera className="text-xl mr-2" /> },
    { path: '/dashboard/add-f-commerce-service', label: 'Add F-Commerce Service', icon: <HiOutlineOfficeBuilding className="text-xl mr-2" /> },
];

const AddService = () => {
    return (
        <div className="p-6">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4 text-orange-600 text-center">Add New Service</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <Link
                        key={index}
                        to={service.path}
                        className="flex items-center justify-center bg-black hover:bg-orange-600 text-white border border-stone-500 hover:border-none shadow-md px-4 py-3 text-center font-medium transition"
                    >
                        {service.icon}
                        {service.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AddService;
