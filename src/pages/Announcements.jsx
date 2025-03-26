import { Link, useLocation, Outlet, useNavigate } from "react-router-dom";
import { FaSquareFull } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2";

const newsArticles = [
  {
    title: "Breaking News: Walmart Business is Revolutionizing eCommerce!",
    image: "https://i.ibb.co.com/p6RXDJyy/vanilla-bear-films-JEw-NQerg3-Hs-unsplash.jpg",
    description: "Walmart Business is transforming online retail with AI tools, fulfillment solutions, and massive growth opportunities.",
  },
  {
    title: "F-Commerce Booming in Bangladesh: The Future of Online Business!",
    image: "https://i.ibb.co.com/8n2xG3Gv/pexels-mustapha-damilola-458083529-31269038.jpg",
    description: "With millions of active users, Facebook Commerce is shaping the future of online selling in Bangladesh.",
  },
  {
    title: "Amazon FBA Continues to Dominate eCommerce!",
    image: "https://themes.envytheme.com/gunter/wp-content/uploads/2019/05/google-1-1-1-380x330.jpg",
    description: "Amazon’s FBA program is scaling businesses worldwide with fast shipping and automated fulfillment.",
  },
  {
    title: "Amazon FBA Continues to Dominate eCommerce!",
    image: "https://i.ibb.co.com/S7fvk9xs/pexels-airamdphoto-31258451.jpg",
    description: "Amazon’s FBA program is scaling businesses worldwide with fast shipping and automated fulfillment.",
  },
];

const announcements = [
  { title: "The Ultimate Guide to Starting and Scaling an eCommerce Business in 2025", path: "/announcements/announcement-1" },
  { title: "The Ultimate Guide to Amazon and Walmart Arbitrage in 2025", path: "/announcements/announcement-2" },
  { title: "The Benefits of Private Label and Branding in eCommerce", path: "/announcements/announcement-3" },
];

const Announcements = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const currentAnnouncement = announcements.find(announcement => announcement.path === location.pathname);

  // Modal State
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", whatsapp: "", topic: "", preferredDate: "", cvFile: null });

  // Handle input changes
  const handleChange = (e) => {
    if (e.target.name === "preferredDate") {
      // Optionally, parse the date here if necessary
      const formattedDate = new Date(e.target.value).toISOString().split('T')[0]; // This ensures it's in the correct format
      setFormData({ ...formData, [e.target.name]: formattedDate });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };
  

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({ ...formData, cvFile: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = () => {
    setModalIsOpen(false);
    Swal.fire("Success!", "Application successfully sent!", "success");
  };

  return (
    <div className="bg-black">
      <div className="bg-black py-20">
        <h1 className="text-4xl font-bold mb-5 text-center text-white">
          {currentAnnouncement ? currentAnnouncement.title : "Announcements"}
        </h1>
        <p className="text-center text-white">
          <Link to="/" className="mr-3 transition-colors duration-300 hover:text-orange-600">Home</Link>
          /
          <span className="ml-3 text-orange-600 font-semibold">
            {currentAnnouncement ? currentAnnouncement.title : "Announcements"}
          </span>
        </p>
      </div>

      <div className="p-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          {currentAnnouncement ? (
            <Outlet />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsArticles.map((news, index) => (
                <div key={index} className="bg-black shadow-orange-600 shadow-md p-4">
                  <img src={news.image} alt={news.title} className="w-full h-40 object-cover" />
                  <h2 className="text-lg font-bold mt-3 text-white">{news.title}</h2>
                  <p className="text-gray-500 mt-2">{news.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="col-span-12 md:col-span-4 bg-black p-4">
          <div className="relative mb-4">
            <MdOutlineSearch className="absolute left-3 top-3 text-orange-600 text-xl" />
            <input
              type="text"
              placeholder="Search Services..."
              className="w-full pl-10 pr-4 py-3 shadow-orange-600 shadow-md text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="shadow-orange-600 shadow-md">
            <h1 className="text-white text-lg font-bold p-3">Recent Announcements</h1>
            <div className="border-1 border-gray-800 w-80 mx-auto"></div>
            <div className="flex flex-col">
              {announcements.filter(announcement => announcement.title.toLowerCase().includes(search.toLowerCase())).map((announcement, index) => (
                <button
                  key={index}
                  className={`flex justify-between items-center p-3 border-gray-800 transition-all duration-300 relative transform text-left 
                  ${location.pathname === announcement.path ? "bg-orange-600 text-white" : "bg-black text-white hover:text-orange-600 hover:scale-95"}`}
                  onClick={() => navigate(announcement.path)}
                >
                  <FaSquareFull className="text-sm mr-5" />
                  <span className="text-sm">{announcement.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Apply Now Button */}
          <div className="text-center mt-6">
            <button
              onClick={() => setModalIsOpen(true)}
              className="bg-orange-600 px-6 py-3 text-white font-semibold transition duration-300 shadow-animation mt-3"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
  isOpen={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
  className="w-full max-w-xl bg-white p-5 shadow-lg mx-auto border mt-15 h-auto max-h-[80vh] relative"
  overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
>
  <button
    onClick={() => setModalIsOpen(false)}
    className="absolute top-3 right-3 text-orange-600 text-2xl"
  >
    &times;
  </button>
  <h2 className="text-xl font-semibold mb-4 text-center text-orange-600 mt-2">
    Apply Now
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
    <div>
      <label className="block text-gray-700">First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full p-1.5 border border-gray-300 mt-1 text-black text-sm"
      />
    </div>
    <div>
      <label className="block text-gray-700">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full p-1.5 border border-gray-300 mt-1 text-black text-sm"
      />
    </div>
    <div>
      <label className="block text-gray-700">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-1.5 border border-gray-300 mt-1 text-black text-sm"
      />
    </div>
    <div>
      <label className="block text-gray-700">Whatsapp</label>
      <input
        type="text"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleChange}
        className="w-full p-1.5 border border-gray-300 mt-1 text-black text-sm"
      />
    </div>
    <div className="sm:col-span-2">
      <label className="block text-gray-700">Preferred Date</label>
      <input
        type="date"
        name="preferredDate"
        value={formData.preferredDate}
        onChange={handleChange}
        className="w-full p-1.5 border border-gray-300 mt-1 text-black text-sm"
      />
    </div>
    <div className="sm:col-span-2">
      <label className="block text-gray-700">Upload CV</label>
      <input
        type="file"
        name="cvFile"
        onChange={handleFileChange}
        className="w-full p-1.5 border border-gray-300 mt-1 text-black text-sm"
      />
    </div>
  </div>

  <div className="text-center mt-5 mb-2">
    <button
      onClick={handleSubmit}
      className="bg-orange-600 px-4 py-2 text-white font-medium transition duration-300 shadow-animation"
    >
      Submit Application
    </button>
  </div>
</Modal>




    </div>
  );
};

export default Announcements;
