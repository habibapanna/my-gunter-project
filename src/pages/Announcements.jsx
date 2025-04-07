import { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaSquareFull } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Spinner from "../components/Spinner/Spinner";
import { GoDotFill } from "react-icons/go";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
    topic: "",
    preferredDate: "",
    cvFile: null,
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetch("https://my-gunter-project-server.vercel.app/announcements")
      .then((response) => response.json())
      .then((data) => {
        setAnnouncements(data);
        const uniqueCategories = [
          ...new Set(data.map((announcement) => announcement.category)),
        ];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching announcements:", error);
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setLoading(true);
    setSelectedCategory(category);
    setSelectedAnnouncement(null);
    setLoading(false);
  };

  const handleAnnouncementClick = (announcement) => {
    setLoading(true);
    setSelectedAnnouncement(announcement);
    setSelectedCategory(null);
    setLoading(false);
  };

  const handleReadMore = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  const handleSubmit = () => {
    setModalIsOpen(false);
    // Submit form data and send email notification
    Swal.fire("Success!", "Application successfully sent!", "success");
  };

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const currentAnnouncement = announcements.find(
    (announcement) => announcement.path === location.pathname
  );

  return (
    <div className="bg-black">
      <div className="bg-black py-20">
        <h1 className="text-4xl font-bold mb-5 text-center text-white">
          {currentAnnouncement ? currentAnnouncement.title : "Announcements"}
        </h1>
        <p className="text-center text-white">
          <Link to="/" className="mr-3 transition-colors duration-300 hover:text-orange-600">
            Home
          </Link>
          /
          <span className="ml-3 text-orange-600 font-semibold">
            {currentAnnouncement ? currentAnnouncement.title : "Announcements"}
          </span>
        </p>
      </div>

      <div className="p-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          {loading ? (
            <Spinner />
          ) : (
            <>
              {selectedAnnouncement ? (
                <div className="bg-black p-4 shadow-md">
                  <img className="w-full h-[400px] object-cover" src={selectedAnnouncement.
image} alt="" />
                  <h2 className="text-white text-xl font-bold mt-5">{selectedAnnouncement.title}</h2>
                  <p className="text-gray-500 mt-2">{selectedAnnouncement.description}</p>
                  <p className="text-gray-400 mt-2">{selectedAnnouncement.details}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {announcements
                    .filter((announcement) => !selectedCategory || announcement.category === selectedCategory)
                    .map((announcement) => (
                      <div key={announcement.id} className="bg-black shadow-orange-600 shadow-md p-4">
                        <img src={announcement.image} alt={announcement.title} className="w-full h-40 object-cover" />
                        <h2 className="text-lg font-bold mt-3 text-white">{announcement.title}</h2>
                        <p className="text-gray-500 mt-2">{announcement.description}</p>
                        <button
                          className="text-orange-600 mt-2 hover:underline cursor-pointer"
                          onClick={() => handleReadMore(announcement)}
                        >
                          Read More
                        </button>
                      </div>
                    ))}
                </div>
              )}
            </>
          )}
        </div>
{/* Search bar */}
        <div className="col-span-12 md:col-span-4 bg-black p-4">
          <div className="relative mb-4">
            <MdOutlineSearch className="absolute left-3 top-3 text-orange-600 text-xl cursor-pointer" />
            <input
              type="text"
              placeholder="Search Services..."
              className="w-full pl-10 pr-4 py-3 shadow-orange-600 shadow-md text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
{/* Title */}
          <div className="shadow-orange-600 shadow-md">
            <h1 className="text-white text-lg font-bold p-3">Recent Announcements</h1>
            <div className="border-1 border-gray-800 w-80 mx-auto"></div>
            <div className="flex flex-col">
              {announcements
                .filter((announcement) => announcement.title.toLowerCase().includes(search.toLowerCase()))
                .map((announcement) => (
                  <button
                    key={announcement.id}
                    className={`p-3 text-left items-center flex ${selectedAnnouncement === announcement ? "bg-orange-600 text-white" : "bg-black text-white hover:text-orange-600 hover:scale-95"}`}
                    onClick={() => handleAnnouncementClick(announcement)}
                  >
                    <FaSquareFull className="text-sm mr-2" />
                    <span className="text-sm">{announcement.title}</span>
                  </button>
                ))}
            </div>
          </div>
{/* Category */}
          <div className="shadow-orange-600 shadow-md mt-4">
  <h1 className="text-white font-bold p-3">Categories</h1>
  <div className="border-1 border-gray-800 w-80 mx-auto"></div>
  <div className="flex flex-col mt-2">
    {categories.map((category, index) => (
      <button
        key={index}
        className={`text-white p-2 items-center flex hover:bg-orange-600  text-left ${selectedCategory === category ? 'bg-orange-600' : ''}`}
        onClick={() => handleCategoryClick(category)}
      >
        <GoDotFill className="text-sm mr-2" />
        {category}
      </button>
    ))}
  </div>
</div>


          {/* Apply Now Button */}
          <div className="text-center mt-6">
            <button
              onClick={() => setModalIsOpen(true)}
              className="bg-orange-600 px-6 py-3 text-white font-semibold transition duration-300 mt-3 shadow-animation cursor-pointer"
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
        <h2 className="text-xl font-semibold mb-4 text-center text-orange-600 mt-2 cursor-pointer">
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
          <div>
            <label className="block text-gray-700">Topic</label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full p-1.5 border border-gray-300 mt-1 text-black text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-700">Preferred Date</label>
            <input
              type="date"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full p-1.5 border border-gray-300 mt-1 text-black text-sm"
            />
          </div>
          
        </div>
        <div>
            <label className="block text-gray-700">Upload CV</label>
            <input
              type="file"
              name="cvFile"
              onChange={handleFileChange}
              className="w-full p-1.5 border border-gray-300 mt-1 text-black text-sm"
            />
          </div>

        <div className="text-center mt-5">
          <button
            onClick={handleSubmit}
            className="bg-orange-600 px-6 py-3 text-white font-semibold transition duration-300 shadow-animation mt-3 cursor-pointer"
          >
            Submit Application
          </button>
        </div>
      </Modal>
      <style>
        {`
          .shadow-animation {
              position: relative;
              overflow: hidden;
          }

          .shadow-animation::before,
          .shadow-animation::after {
              content: '';
              position: absolute;
              width: 50%;
              height: 100%;
              background: rgba(0, 0, 0, 0.9);
              transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
              opacity: 0;
          }

          .shadow-animation::before {
              left: 0;
              bottom: -100%;
          }

          .shadow-animation::after {
              right: 0;
              top: -100%;
          }

          .shadow-animation:hover::before {
              transform: translateY(-100%);
              opacity: 1;
          }

          .shadow-animation:hover::after {
              transform: translateY(100%);
              opacity: 1;
          }

          .shadow-animation:hover::before,
          .shadow-animation:hover::after {
              animation: panelDisappear 1s ease-in-out forwards;
          }

          @keyframes panelDisappear {
              0% { opacity: 1; }
              70% { opacity: 1; }
              100% { opacity: 0; transform: translateY(0); }
          }
        `}
      </style>

    </div>
  );
};

export default Announcements;
