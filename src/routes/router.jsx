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
import AdminRoute from "./AdminRoute";
import AddPrivateLabel from "../pages/Dashboard/AddPrivateLabel";
import AddRetail from "../pages/Dashboard/AddRetail";
import ManagePrivateLabel from "../pages/Dashboard/ManagePrivateLabel";
import ManageRetail from "../pages/Dashboard/ManageRetail";
import AddWFS from "../pages/Dashboard/AddWFS";
import AddWebDevelopment from "../pages/Dashboard/AddWebDevelopment";
import ManageWebDevelopment from "../pages/Dashboard/ManageWebDevelopment";
import AddShopify from "../pages/Dashboard/AddShopify";
import ManageShopify from "../pages/Dashboard/ManageShopify";
import AddCreativeDesign from "../pages/Dashboard/AddCreativeDesign";
import ManageCreativeDesign from "../pages/Dashboard/ManageCreativeDesign";
import AddDigitalMarketing from "../pages/Dashboard/AddDigitalMarketing";
import AddProductPhotography from "../pages/Dashboard/AddProductPhotography";
import AddFCommerceService from "../pages/Dashboard/AddFCommerceService";
import ManageDigitalMarketing from "../pages/Dashboard/ManageDigitalMarketing";
import ManageProductPhotography from "../pages/Dashboard/ManageProductPhotography";
import ManageFCommerceService from "../pages/Dashboard/ManageFCommerceService";
import ManageWFS from "../pages/Dashboard/ManageWFS";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddOurClients from "../pages/Dashboard/AddOurClients";
import ManageOurClients from "../pages/Dashboard/ManageOurClients";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />, // ✅ Navbar & Footer are inside Main
        errorElement: <ErrorPage></ErrorPage>,
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
    element: <AdminRoute>
    <Dashboard />
</AdminRoute>,
    // <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
        {
            path: "add-service",
            element: <AddService></AddService>
            
        },
        {
            path: "add-private-label",
            element: <AddPrivateLabel></AddPrivateLabel>
        },
        {
            path: "add-retail",
            element: <AddRetail></AddRetail>
        },      
        {
            path: "add-wfs",
            element: <AddWFS></AddWFS>
        },
        {
            path: "add-web-development",
            element: <AddWebDevelopment></AddWebDevelopment>
        },
        {
            path: "add-shopify",
            element: <AddShopify></AddShopify>
        }, 
        {
            path: "add-creative-design",
            element: <AddCreativeDesign></AddCreativeDesign>
        },
        {
            path: "add-digital-marketing",
            element: <AddDigitalMarketing></AddDigitalMarketing>
        },
        {
            path: "add-product-photography",
            element: <AddProductPhotography></AddProductPhotography>
        },
        {
            path: "add-f-commerce-service",
            element: <AddFCommerceService></AddFCommerceService>
        },
        {
            path: "manage-service",
            element: <ManageService></ManageService>
        },
        {
            path: "manage-private-label",
            element: <ManagePrivateLabel></ManagePrivateLabel>
        },
        {
            path: "manage-retail",
            element: <ManageRetail></ManageRetail>
        },
        {
            path: "manage-wfs",
            element: <ManageWFS></ManageWFS>
        },
        {
            path: "manage-web-development",
            element: <ManageWebDevelopment></ManageWebDevelopment>
        },
        {
            path: "manage-shopify",
            element: <ManageShopify></ManageShopify>
        },
        {
            path: "manage-creative-design",
            element: <ManageCreativeDesign></ManageCreativeDesign>
        },
        {
            path: "manage-digital-marketing",
            element: <ManageDigitalMarketing></ManageDigitalMarketing>
        },
        {
            path: "manage-product-photography",
            element: <ManageProductPhotography></ManageProductPhotography>
        },
        {
            path: "manage-f-commerce-service",
            element: <ManageFCommerceService></ManageFCommerceService>
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
            path: "add-our-clients",
            element: <AddOurClients></AddOurClients>
        },
        {
            path: "manage-about",
            element: <ManageAbout></ManageAbout>
        },
        {
            path: "manage-our-clients",
            element: <ManageOurClients></ManageOurClients>
        },
        {
            path: "all-user",
            element: <AllUsers></AllUsers>
        },
    ]
 }

]);

export default router;



