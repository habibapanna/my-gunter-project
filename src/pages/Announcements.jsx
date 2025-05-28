import { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaSquareFull } from "react-icons/fa6";
import { MdOutlineSearch } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Spinner from "../components/Spinner/Spinner";
import { GoDotFill } from "react-icons/go";
import NewSection from "../components/NewSection/NewSection";
import { Fade, Slide, Zoom } from "react-awesome-reveal";


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

const handleSubmit = async () => {
  if (!formData.cvFile) {
    Swal.fire({
      icon: 'warning',
      title: 'Missing CV',
      text: 'Please upload your CV before submitting.',
    });
    return;
  }

  const formPayload = new FormData();
  formPayload.append('firstName', formData.firstName);
  formPayload.append('lastName', formData.lastName);
  formPayload.append('email', formData.email);
  formPayload.append('whatsapp', formData.whatsapp);
  formPayload.append('topic', formData.topic);
  formPayload.append('preferredDate', formData.preferredDate);
  formPayload.append('cvFile', formData.cvFile);

  try {
    const res = await fetch('http://localhost:5000/api/submit-application', {
      method: 'POST',
      body: formPayload
    });

    const data = await res.json();
    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Application Submitted',
        text: 'Thank you for your application. We will contact you soon!',
      });
      setModalIsOpen(false);
    } else {
      throw new Error(data.error);
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Submission Failed',
      text: 'Something went wrong. Please try again later.',
    });
    console.error(error);
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
      <Fade cascade>
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
</Fade>

      </div>

      <div className="p-10 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8 order-1">
          {loading ? (
            <Spinner />
          ) : (
            <>
              {selectedAnnouncement ? (
               <Zoom triggerOnce>
               <div id="announcement-details" className="bg-black p-4 shadow-md">
                 <img
                   className="w-full h-[400px] object-cover"
                   src={selectedAnnouncement.image}
                   alt=""
                 />
                 <h2 className="text-white text-xl font-bold mt-5">{selectedAnnouncement.title}</h2>
                 <p className="text-gray-400 mt-2">{selectedAnnouncement.description}</p>
                 <p className="text-gray-400 mt-2">{selectedAnnouncement.details}</p>
                 <div className="text-center mt-6">
                   <button
                     onClick={() => setModalIsOpen(true)}
                     className="bg-purple-600 px-6 py-3 text-white font-semibold transition duration-300 mt-3 hover:scale-95 hover:bg-purple-500 cursor-pointer"
                   >
                     Apply Now
                   </button>
                 </div>
               </div>
             </Zoom>
             
              ) : (
<Fade cascade damping={0.1}>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {paginatedAnnouncements.map((announcement) => (
      <div
        key={announcement.id}
        className="bg-black shadow-md border border-gray-900 shadow-gray-900 p-4 flex flex-col justify-between h-[400px]"
      >
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
</Fade>

              )}
            </>
            
          )}
{!selectedAnnouncement && (
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
)}


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
      className="bg-amber-500 px-6 py-3 text-white font-semibold transition duration-300 mt-3 hover:scale-95 hover:bg-amber-400 cursor-pointer mb-5 shadow-md"
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
  className="relative w-[300px] lg:w-full lg:max-w-xl p-6 mx-auto mt-16 max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn bg-cover bg-center bg-no-repeat"
  overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  style={{
    content: {
      backgroundImage: `url('https://i.postimg.cc/rsP6DKD6/kkkapusha-rwt-Y4h-U5k3k-unsplash.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-85 z-0"></div>

  {/* Modal Content */}
  <div className="relative z-10">
    <button
      onClick={() => setModalIsOpen(false)}
      className="absolute cursor-pointer top-0 right-0 text-white text-3xl hover:scale-110 transition-transform duration-200 z-20"
    >
      &times;
    </button>

    <h2 className="text-2xl font-bold text-center mb-6 tracking-wide animate-slideDown text-purple-500">
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
            className="w-full p-2 rounded-md border border-purple-200 bg-white/40 focus:outline-none focus:ring-2 focus:ring-white/80 transition-all duration-200 text-white"
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
        className="bg-white text-purple-700 px-5 py-2 rounded font-bold shadow shadow-purple-400 hover:bg-purple-100 transition-all duration-300 transform hover:-translate-y-1"
      >
        Submit Application
      </button>
    </div>
  </div>
</Modal>

<NewSection></NewSection>
    </div>
  );
};

export default Announcements;
