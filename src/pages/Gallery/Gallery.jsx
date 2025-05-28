import { Link, useLocation } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Spinner from "../../components/Spinner/Spinner";
import NewSection from "../../components/NewSection/NewSection";
import Team from "../Team";

const Gallery = () => {
  const [search, setSearch] = useState("");
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const location = useLocation();
  const currentGallery = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchGalleryData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://my-gunter-project-server.vercel.app/gallery");
        const data = await response.json();
        setGalleryItems(data);
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGalleryData();
  }, []);

  const filteredSearchImages = search
    ? galleryItems.filter(item =>
        item.title?.toLowerCase().includes(search.toLowerCase())
      )
    : galleryItems;

  const totalPages = Math.ceil(filteredSearchImages.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = filteredSearchImages.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="bg-black min-h-screen text-white px-5">
      {/* ✅ Banner */}
      <motion.div
        className="py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-5 text-center">
          {currentGallery ? currentGallery : "About Us"}
        </h1>
        <p className="text-center">
          <Link
            to="/"
            className={`mr-3 transition-colors duration-300 ${
              location.pathname === "/" ? "text-amber-500 font-semibold" : "hover:text-amber-500"
            }`}
          >
            Home
          </Link>
          /
          <span className="ml-3 text-amber-500 font-semibold">
            {currentGallery ? currentGallery : "About Us"}
          </span>
        </p>
      </motion.div>

      {/* ✅ About Us Section */}
      <section className="max-w-6xl mx-auto space-y-10">
      <div className="space-y-12">
      <section className=" mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold text-amber-500 mb-2">About Us</h3>
          <p className="text-gray-200 leading-relaxed">
            At Imagine Dream World, we understand that running a thriving online business demands more than just a great product. It requires expert management, strategic marketing, and advanced technologies.
            <br /><br />
            That’s where we excel. We offer a comprehensive suite of e-commerce management services designed to ensure the long-lasting growth of your business and domination of the digital marketplace.
            <br /><br />
            From retail arbitrage solutions to private label development, web development, UI/UX design, digital marketing, and Keap CRM integration — our team is equipped to deliver results.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src="https://i.postimg.cc/wxSX9mmt/aerial-view-business-team.jpg"
            alt="Aerial view of business team"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-amber-500 mb-2">How Our Journey Began</h3>
        <p>
          Imagine Dream World was founded with a vision: to empower businesses to unlock their full potential online. Seeing the struggles many face with e-commerce and digital strategy, our mission became clear — to remove these barriers with tailored, high-impact solutions.
          <br /><br />
          Since day one, we've partnered with startups and industry leaders alike to build strong digital presences, optimize operations, and boost revenue through innovation and expertise.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <h3 className="text-2xl font-semibold text-amber-500 mb-2">Our Commitment to You</h3>
        <p>
          At Imagine Dream World, we prioritize clear communication and custom strategies. We take the time to understand your goals so we can build results-driven solutions that work.
          <br /><br />
          Whether it’s launching your site with a stunning UI or managing listings and campaigns, we handle every detail with care. We're here for the long run, offering strategic support to keep you ahead of the competition.
        </p>
      </motion.div>
    </div>

        <div className="max-w-6xl mx-auto px-4">
        <Team></Team>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-amber-500 mb-2">The Difference We Make For Your E-commerce Excellence </h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Comprehensive Solutions:</strong> We manage every aspect of your e-commerce journey — from sourcing to scaling.</li>
            <li><strong>Elite Experts:</strong> Our team brings experience in development, design, marketing, and retail strategy.</li>
            <li><strong>Client-Driven Focus:</strong> Your vision is our priority, and we deliver with integrity.</li>
            <li><strong>Innovative Technologies:</strong> We use cutting-edge tools and best practices for success.</li>
            <li><strong>Transparent Communication:</strong> We keep you informed every step of the way.</li>
          </ul>
        </div>

        <motion.div
      className="max-w-6xl mx-auto mt-12 px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-semibold text-amber-500 mb-4">Hear from Our Clients</h3>
      <p className="text-white mb-6">
        Our clients’ success stories are a testament to our dedication and expertise. Many have experienced transformative growth and operational excellence through our solutions.
        <br /><br />
        Visit our testimonials to find how Imagine Dream World has powered up businesses like yours to conquer the digital arena.
      </p>

      <div className="space-y-8">
        <div className="bg-stone-900 p-6 rounded-lg shadow-md">
          <p className="text-white italic">
            "Imagine Dream World really helped us get our online store organized and growing. Their team is responsive and knows how to get results. Highly recommended!"
          </p>
          <p className="mt-2 text-amber-400 font-medium">— Sarah Mitchell, Founder of Luxe Apparel</p>
        </div>

        <div className="bg-stone-900 p-6 rounded-lg shadow-md">
          <p className="text-white italic">
            "They helped us streamline our retail arbitrage and set up Keap CRM. Our operations run much smoother now, and revenue is definitely up."
          </p>
          <p className="mt-2 text-amber-400 font-medium">— Michael Johnson, Operations Manager at Trendy Gadgets</p>
        </div>

        <div className="bg-stone-900 p-6 rounded-lg shadow-md">
          <p className="text-white italic">
            "Their support with our private label launch made a big difference. The process was smooth, and sales have improved steadily since working with them."
          </p>
          <p className="mt-2 text-amber-400 font-medium">— David Lee, CEO of HomeTech Solutions</p>
        </div>
      </div>
    </motion.div>

      </section>

      {/* ✅ Image Grid */}
      <div>
        
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading ? (
            <Spinner />
          ) : currentImages.length === 0 ? (
            <p className="col-span-3 text-center">No images found.</p>
          ) : (
            currentImages.map((item, index) => (
              <motion.div
                key={index}
                className="overflow-hidden shadow-md shadow-gray-900"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-3 bg-black text-amber-500 text-center">{item.title}</div>
              </motion.div>
            ))
          )}
        </div> */}
      </div>

      {/* ✅ Pagination */}
      {/* {!loading && filteredSearchImages.length > itemsPerPage && (
        <div className="flex justify-end mt-10 px-4 max-w-6xl mx-auto space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-amber-500 text-white hover:bg-amber-600 disabled:bg-gray-700"
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 disabled:bg-gray-700"
          >
            Next
          </button>
        </div>
      )} */}

      {/* ✅ Optional Extra Section */}
      <section className="mt-16">
        <NewSection />
      </section>
    </div>
  );
};

export default Gallery;
