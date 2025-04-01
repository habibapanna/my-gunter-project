import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main/Main";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Announcements from "../pages/Announcements";
import Contact from "../pages/Contact";
import PrivateLabelPage from "../components/PrivateLabelPage/PrivateLabelPage";
import RetailArbitragePage from "../components/RetailArbitragePage/RetailArbitragePage";
import WholeSaleFBA from "../components/WholeSaleFBA/WholeSaleFBA";
import WebDevelopment from "../components/WebDevelopment/WebDevelopment";
import Shopify from "../components/Shopify/Shopify";
import CreativeDesign from "../components/CreativeDesign/CreativeDesign";
import DigitalMarketing from "../components/DigitalMarketing/DigitalMarketing";
import ProductPhotography from "../components/ProductPhotography/ProductPhotography";
import FCommerceService from "../components/FCommerceService/FCommerceService";
import Blog1 from "../components/Blog1/Blog1";
import Blog2 from "../components/Blog2/Blog2";
import Blog3 from "../components/Blog3/Blog3";
import Announcement1 from "../components/Announcement1/Announcement1";
import Announcement2 from "../components/Announcement2/Announcement2";
import Announcement3 from "../components/Announcement3/Announcement3";
import Gallery from "../pages/Gallery/Gallery";
import Gallery1 from "../components/Gallery1/Gallery1";
import Gallery3 from "../components/Gallery3/Gallery3";
import Gallery2 from "../components/Gallery2/Gallery2";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddBlog from "../pages/Dashboard/AddBlog";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import AddService from "../pages/Dashboard/AddService";
import ManageService from "../pages/Dashboard/ManageService";
import ManageBlog from "../pages/Dashboard/ManageBlog";
import AddGallery from "../pages/Dashboard/AddGallery";
import ManageGallery from "../pages/Dashboard/ManageGallery";
import AddAnnouncements from "../pages/Dashboard/AddAnnouncements";
import ManageAnnouncements from "../pages/Dashboard/ManageAnnouncements";
import AllUsers from "../pages/Dashboard/AllUsers";
import AddTeam from "../pages/Dashboard/AddTeam";
import ManageTeam from "../pages/Dashboard/ManageTeam";
import ManageTestimonial from "../pages/Dashboard/ManageTestimonial";
import AddTestimonial from "../pages/Dashboard/AddTestimonial";
import AddHero from "../pages/Dashboard/AddHero";
import ManageHero from "../pages/Dashboard/ManageHero";
import AddAbout from "../pages/Dashboard/AddAbout";
import ManageAbout from "../pages/Dashboard/ManageAbout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />, // ✅ Navbar & Footer are inside Main
        errorElement: <h1 className="text-5xl font-bold text-red-500">Page not found</h1>,
        children: [
            { path: "/", element: <Home /> },
            { path: "blog", element: <Blog />,
                children: [
                    {
                    path: "blog-1",
                    element: <Blog1></Blog1>
                    },
                    {
                    path: "blog-2",
                    element: <Blog2></Blog2>
                    },
                    {
                    path: "blog-3",
                    element: <Blog3></Blog3>
                    },
                ]
             },
            { path: "announcements", element: <Announcements />,
                children: [
                    {
                        path: "announcement-1",
                        element: <Announcement1></Announcement1>
                    },
                    {
                        path: "announcement-2",
                        element: <Announcement2></Announcement2>
                    },
                    {
                        path: "announcement-3",
                        element: <Announcement3></Announcement3>
                    },
                    
                ]
             },
            { path: "gallery", element: <Gallery></Gallery>,
                children: [
                    {
                        path: "gallery-1",
                        element: <Gallery1></Gallery1>
                    },
                    {
                        path: "gallery-2",
                        element: <Gallery2></Gallery2>
                    },
                    {
                        path: "gallery-3",
                        element: <Gallery3></Gallery3>
                    },
                ]
             },
            { path: "contact", element: <Contact /> },
            { path: "login", element: <Login></Login> },
            { path: "register", element: <Register></Register> },
            { 
                path: "services", // ✅ Services is now inside Main
                element: <Services />,
                children: [
                    { path: "private-label", element: <PrivateLabelPage /> },
                    { path: "retail-arbitrage", element: <RetailArbitragePage /> },
                    { path: "wholesale-fba", element: <WholeSaleFBA /> },
                    { path: "web-development", element: <WebDevelopment /> },
                    { path: "shopify", element: <Shopify /> },
                    { path: "creative-design", element: <CreativeDesign /> },
                    { path: "digital-marketing", element: <DigitalMarketing /> },
                    { path: "product-photography", element: <ProductPhotography /> },
                    { path: "f-commerce-service", element: <FCommerceService /> },
                ],
            },
        ],
    },
 {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    // <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
        {
            path: "add-service",
            element: <AddService></AddService>
        },
        {
            path: "manage-service",
            element: <ManageService></ManageService>
        },
        {
            path: "add-blog",
            element: <AddBlog></AddBlog>
        },
        {
            path: "manage-blog",
            element: <ManageBlog></ManageBlog>
        },
        {
            path: "add-gallery",
            element: <AddGallery></AddGallery>
        },
        {
            path: "manage-gallery",
            element: <ManageGallery></ManageGallery>
        },
        {
            path: "add-announcements",
            element: <AddAnnouncements></AddAnnouncements>
        },
        {
            path: "manage-announcements",
            element: <ManageAnnouncements></ManageAnnouncements>
        },
        {
            path: "add-team",
            element: <AddTeam></AddTeam>
        },
        {
            path: "manage-team",
            element: <ManageTeam></ManageTeam>
        },
        {
            path: "add-testimonial",
            element: <AddTestimonial></AddTestimonial>
        },
        {
            path: "manage-testimonial",
            element: <ManageTestimonial></ManageTestimonial>
        },
        {
            path: "add-hero",
            element: <AddHero></AddHero>
        },
        {
            path: "manage-Hero",
            element: <ManageHero></ManageHero>
        },
        {
            path: "add-about",
            element: <AddAbout></AddAbout>
        },
        {
            path: "manage-about",
            element: <ManageAbout></ManageAbout>
        },
        {
            path: "all-user",
            element: <AllUsers></AllUsers>
        },
    ]
 }

]);

export default router;



