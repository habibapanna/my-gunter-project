import { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaSquareFull } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Spinner from "../components/Spinner/Spinner";
import { GoDotFill } from "react-icons/go";
import NewSection from "../components/NewSection/NewSection";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  const filteredAnnouncements = announcements.filter(
    (announcement) =>
      !selectedCategory || announcement.category === selectedCategory
  );
  
  const totalPages = Math.ceil(filteredAnnouncements.length / itemsPerPage);
  const paginatedAnnouncements = filteredAnnouncements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
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
    setSelectedCategory(category); // This will set the category to 'null' for All Announcements
    setSelectedAnnouncement(null);
    setLoading(false);
    
    // Scroll to the details section after selecting a category
    window.scrollTo({
      top: document.getElementById("announcement-details")?.offsetTop,
      behavior: "smooth",
    });
  };
  

const handleAnnouncementClick = (announcement) => {
    setLoading(true);
    setSelectedAnnouncement(announcement);
    setSelectedCategory(null);
    setLoading(false);

    // Scroll to the details section after selecting an announcement
    window.scrollTo({
      top: document.getElementById("announcement-details").offsetTop,
      behavior: "smooth",
    });
};

  const handleReadMore = (announcement) => {
    setSelectedAnnouncement(announcement);
    // Scroll to the top of the details section
    window.scrollTo({
      top: document.getElementById("announcement-details").offsetTop,
      behavior: "smooth",
    });
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setModalIsOpen(false);
  
    const form = new FormData();
    form.append("name", `${formData.firstName} ${formData.lastName}`);
    form.append("email", formData.email);
    form.append("phone", formData.whatsapp);
    form.append("topic", formData.topic);
    form.append("preferredDate", formData.preferredDate);
    form.append("cvFile", formData.cvFile);
  
    try {
      const response = await fetch("https://my-gunter-project-server.vercel.app/submit-form", {
        method: "POST",
        body: form,
      });
  
      const result = await response.json();
  
      if (response.ok) {
        Swal.fire("Success!", result.message, "success");
        
        // ✅ Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          whatsapp: "",
          topic: "",
          preferredDate: "",
          cvFile: null,
        });
  
      } else {
        Swal.fire("Error", result.message || "Submission failed", "error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire("Error", "Something went wrong. Please try again later.", "error");
    }
  };

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      cvFile: e.target.files[0] // Ensure the file is being captured correctly
    }));
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
          <Link to="/" className="mr-3 transition-colors duration-300 hover:text-amber-500">
            Home
          </Link>
          /
          <span className="ml-3 text-amber-500 font-semibold">
            {currentAnnouncement ? currentAnnouncement.title : "Announcements"}
          </span>
        </p>
      </div>

      <div className="p-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 order-1">
          {loading ? (
            <Spinner />
          ) : (
            <>
              {selectedAnnouncement ? (
                <div id="announcement-details" className="bg-black p-4 shadow-md">
                  <img className="w-full h-[400px] object-cover" src={selectedAnnouncement.
image} alt="" />
                  <h2 className="text-white text-xl font-bold mt-5">{selectedAnnouncement.title}</h2>
                  <p className="text-gray-400 mt-2">{selectedAnnouncement.description}</p>
                  <p className="text-gray-400 mt-2">{selectedAnnouncement.details}</p>
                            {/* Apply Now Button */}
          <div className="text-center mt-6">
            <button
              onClick={() => setModalIsOpen(true)}
              className="bg-purple-600 px-6 py-3 text-white font-semibold transition duration-300 mt-3 shadow-animation cursor-pointer"
            >
              Apply Now
            </button>
          </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {paginatedAnnouncements.map((announcement) => (
  <div key={announcement.id} className="bg-black shadow-md border border-gray-900 shadow-gray-900 p-4 flex flex-col justify-between h-[400px]">
    <div onClick={() => handleReadMore(announcement)} className="cursor-pointer">
      <img src={announcement.image} alt={announcement.title} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-bold mt-3 text-white">{announcement.title}</h2>
      <p className="text-gray-400 text-sm mt-2">{announcement.description}</p>
    </div>
    <button
      className="text-amber-500 hover:underline cursor-pointer text-left font-semibold"
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
          <div className="flex justify-end gap-4 mt-6">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className={`px-4 py-2 bg-amber-500 text-white cursor-pointer shadow ${
      currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-600"
    }`}
  >
    Previous
  </button>
  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className={`px-4 py-2 bg-purple-600 text-white shadow cursor-pointer ${
      currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"
    }`}
  >
    Next
  </button>
</div>

        </div>
        
        
{/* Search bar */}
        <div className="col-span-12 md:col-span-4 bg-black px-4">
{/* Apply Now Button */}
<div className="relative w-full h-42 bg-cover mb-5" style={{ backgroundImage: 'url(https://i.ibb.co/d4v88Lsq/nordwood-themes-k-RNZi-GKtz48-unsplash.jpg)' }}>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-40"></div>

  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
    {/* Apply Now Button */}
    <button
      onClick={() => setModalIsOpen(true)}
      className="bg-amber-500 px-6 py-3 text-white font-semibold transition duration-300 mt-3 shadow-animation cursor-pointer mb-5 shadow-md"
    >
      Apply Now
    </button>
  </div>
</div>

          <div className="relative mb-4">
            <MdOutlineSearch className="absolute left-3 top-3 text-amber-500 text-xl cursor-pointer" />
            <input
              type="text"
              placeholder="Search Services..."
              className="w-full pl-10 pr-4 py-3 bg-black shadow-md text-white focus:outline-none focus:ring-2 focus:ring-white border"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
{/* Title */}
<div className="bg-black shadow-md border border-gray-900 shadow-gray-900">
  <h1 className="text-white text-lg font-bold p-3">Recent Announcements</h1>
  <div className="border-1 border-white mb-5 w-full mx-auto"></div>
  <div className="flex flex-col">
    {announcements
      .filter((announcement) =>
        announcement.title.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 9)
      .map((announcement) => {
        const isSelected = selectedAnnouncement === announcement;
        return (
          <button
            key={announcement.id}
            className={`p-3 text-left items-center flex group transition ${
              isSelected
                ? "bg-purple-600 text-white font-bold"
                : "bg-black text-white hover:bg-purple-600"
            }`}
            onClick={() => handleAnnouncementClick(announcement)}
          >
            <FaSquareFull
              className={`text-sm mr-2 transition ${
                isSelected ? "text-white" : "text-purple-600 group-hover:text-white"
              }`}
            />
            <span
              className={`text-sm transition ${
                isSelected ? "text-white" : "group-hover:text-white"
              }`}
            >
              {announcement.title}
            </span>
          </button>
        );
      })}
  </div>
</div>

{/* Category */}
<div className="bg-black shadow-md mt-4 border border-gray-900 shadow-gray-900">
  <h1 className="text-white font-bold p-3">Categories</h1>
  <div className="border-1 border-white w-86 mx-auto"></div>
  <div className="flex flex-col mt-2">
    {/* All Announcements button */}
    <button
      className={`p-2 items-center flex text-left group transition ${
        selectedCategory === null ? "bg-purple-600 text-white font-bold" : "text-white hover:bg-purple-600"
      }`}
      onClick={() => handleCategoryClick(null)}
    >
      <GoDotFill
        className={`text-sm mr-2 transition ${
          selectedCategory === null ? "text-white" : "text-purple-600 group-hover:text-white"
        }`}
      />
      <span className={`text-sm ${selectedCategory === null ? "text-white" : "group-hover:text-white"}`}>
        All Announcements
      </span>
    </button>

    {/* Categories List */}
    {categories.map((category, index) => {
      const isSelected = selectedCategory === category;
      return (
        <button
          key={index}
          className={`p-2 items-center flex text-left group transition ${
            isSelected ? "bg-purple-600 text-white font-bold" : "text-white hover:bg-purple-600"
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          <GoDotFill
            className={`text-sm mr-2 transition ${
              isSelected ? "text-white" : "text-purple-600 group-hover:text-white"
            }`}
          />
          <span className={`text-sm ${isSelected ? "text-white" : "group-hover:text-white"}`}>
            {category}
          </span>
        </button>
      );
    })}
  </div>
</div>


        </div>
      </div>
      {/* Modal */}
      <Modal
  isOpen={modalIsOpen}
  onRequestClose={() => setModalIsOpen(false)}
  className="w-full max-w-xl p-6 rounded-xl mx-auto mt-10 max-h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 shadow-2xl animate-fadeIn"
  overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
>
  <button
    onClick={() => setModalIsOpen(false)}
    className="absolute top-15 right-90 text-white text-3xl hover:scale-110 transition-transform duration-200"
  >
    &times;
  </button>

  <h2 className="text-2xl font-bold text-white text-center mb-6 tracking-wide animate-slideDown">
 Apply Now
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm animate-fadeIn delay-200">
    {[
      { label: "First Name", name: "firstName" },
      { label: "Last Name", name: "lastName" },
      { label: "Email", name: "email", type: "email" },
      { label: "Whatsapp", name: "whatsapp" },
      { label: "Topic", name: "topic" },
      { label: "Preferred Date", name: "preferredDate", type: "date" },
    ].map((field, i) => (
      <div key={i}>
        <label className="block text-white mb-1">{field.label}</label>
        <input
          type={field.type || "text"}
          name={field.name}
          value={formData[field.name]}
          onChange={handleChange}
          className="w-full p-2 rounded-md border border-purple-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/80 transition-all duration-200 text-black"
        />
      </div>
    ))}
  </div>

  <div className="mt-4">
    <label className="block text-white mb-1">Upload CV</label>
    <input
      type="file"
      name="cvFile"
      onChange={handleFileChange}
      className="w-full p-2 rounded-md border border-purple-200 bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/80 transition-all duration-200 text-black"
    />
  </div>

  <div className="text-center mt-6">
    <button
      onClick={handleSubmit}
      className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-purple-400 hover:bg-purple-100 transition-all duration-300 transform hover:-translate-y-1"
    >
      Submit Application
    </button>
  </div>
</Modal>
<NewSection></NewSection>

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
