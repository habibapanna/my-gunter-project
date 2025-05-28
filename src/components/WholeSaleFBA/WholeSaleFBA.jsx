import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import { FaCheck } from "react-icons/fa6";
import { FaBox, FaWarehouse, FaTruck, FaSearch, FaTags, FaShieldAlt, FaGlobeAmericas, FaHeadset, FaChartBar } from "react-icons/fa";
import { FaShippingFast, FaClipboardList, FaTag, FaBoxes, FaUndo } from "react-icons/fa";

// Additional Services data with icons
const additionalServices = [
  {
    title: "Hazmat Shipping",
    desc: "Ensure compliance and safety when shipping hazardous materials.",
    icon: <FaShippingFast className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Custom Inserts",
    desc: "Enhance branding with personalized inserts inside every package.",
    icon: <FaClipboardList className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Label Removal",
    desc: "We carefully remove labels to meet Amazon FBA standards.",
    icon: <FaTag className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Amazon FBA Removals",
    desc: "Avoid fees and optimize inventory with fast, reliable FBA removals.",
    icon: <FaBoxes className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Client & Supplier Returns",
    desc: "We manage returns smoothly—keeping disruption to your business minimal.",
    icon: <FaUndo className="text-4xl text-purple-600 mb-4" />,
  },
];


// Define the service data with icons
const services = [
  {
    title: "Product Sourcing",
    desc: "We simplify sourcing through our trusted supplier network. From inspection to packaging—we handle compliance and quality at your cost.",
    icon: <FaBox className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Inventory Management",
    desc: "Maintain optimal stock levels through smart tracking and restocking. We ensure popular items are always ready for sale.",
    icon: <FaWarehouse className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Fulfillment Services",
    desc: "From order processing to delivery—we pack, label, and ship with accuracy to reduce errors and delays.",
    icon: <FaTruck className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Listing Optimization",
    desc: "Our team enhances your listings with keywords, visuals, and copy that converts—boosting visibility and sales.",
    icon: <FaSearch className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Repricing & Price Optimization",
    desc: "Stay competitive with dynamic pricing strategies based on real-time market data.",
    icon: <FaTags className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Compliance & Quality Control",
    desc: "Avoid penalties with rigorous compliance and quality standards across every step.",
    icon: <FaShieldAlt className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "International Shipping & Logistics",
    desc: "Handle customs, freight, and last-mile delivery efficiently through our global network.",
    icon: <FaGlobeAmericas className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Customer Service",
    desc: "We handle customer inquiries and returns with care—building trust and loyalty.",
    icon: <FaHeadset className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Sales & Performance Analytics",
    desc: "Track performance, profit margins, and trends to make data-driven decisions for growth.",
    icon: <FaChartBar className="text-4xl text-purple-600 mb-4" />,
  },
];

function WholeSaleFBA() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/wfs")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Failed to fetch WFS images:", err));
  }, []);

  return (
    <div className="bg-black text-gray-200 min-h-screen">
      {/* Carousel */}
      <section className="px-4 py-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img.imageUrl}
                alt={`Slide ${idx}`}
                className="w-full h-[300px] lg:h-[400px] object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero */}
      <section className="text-center px-5 lg:px-10 py-10">
        <Fade cascade>
          <h1 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-4">
            Trusted Wholesale FBA/WFS Service for E-Commerce Sellers
          </h1>
          <p className="text-lg max-w-4xl mx-auto mb-6">
            We offer efficient Amazon FBA and Walmart WFS services, handling everything from wholesale sourcing to order fulfillment. Focus on sales—we’ll take care of the rest.
          </p>
          <Link to="/contact" className="inline-block bg-purple-600 px-6 py-3 text-white font-semibold rounded shadow-md hover:scale-105 transition">
            Get Your Free Quote
          </Link>
        </Fade>
      </section>

      {/* Overview */}
      <section className="px-5 md:px-20 py-10 bg-stone-900">
        <Fade cascade>
          <h2 className="text-2xl lg:text-4xl text-amber-500 font-bold text-center mb-6">
            We Have Your E-commerce Wholesale Needs Covered
          </h2>
          <p className="text-gray-300 text-lg max-w-5xl mx-auto text-center mb-8">
            At Imagine Dream World, we understand the challenges e-commerce sellers face on Amazon, Walmart, and Shopify. With our hands-on expertise in sourcing, logistics, and compliance, we help you grow confidently.
          </p>
        </Fade>
      </section>

      {/* Services */}
      <section className="px-5 md:px-20 py-10 space-y-10 max-w-7xl mx-auto">
      <Fade cascade damping={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, desc, icon }, idx) => (
            <article
              key={idx}
              className="bg-zinc-900 rounded-xl p-6 shadow-md hover:shadow-purple-600 transition-shadow duration-300 cursor-default flex flex-col items-center text-center"
            >
              {icon}
              <h4 className="text-xl font-semibold text-purple-400 mb-3">{title}</h4>
              <p className="text-gray-300">{desc}</p>
            </article>
          ))}
        </div>
      </Fade>
    </section>

      {/* Add-Ons */}
      <section className="px-5 md:px-20 py-10">
      <Fade cascade damping={0.1}>
        <h2 className="text-2xl lg:text-3xl text-purple-600 font-bold mb-8 text-center">
          Additional Services for a Seamless Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalServices.map(({ title, desc, icon }, idx) => (
            <article
              key={idx}
              className="bg-stone-900 rounded-xl p-6 shadow-md hover:shadow-purple-600 transition-shadow duration-300 cursor-default flex flex-col items-center text-center"
            >
              {icon}
              <h4 className="text-xl font-semibold text-purple-400 mb-3">{title}</h4>
              <p className="text-gray-300">{desc}</p>
            </article>
          ))}
        </div>
      </Fade>
    </section>


      {/* Benefits */}
      <section className="px-5 md:px-20 py-10 mx-auto">
        <Fade cascade>
          <h2 className="text-2xl lg:text-3xl text-amber-500 font-bold mb-6 text-center">
            Benefits of Partnering with Us
          </h2>
          <ul className="text-gray-300 text-lg grid grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto">
            <li><FaCheck className="inline text-amber-500 mr-2" /> Best-Selling Product Selection</li>
            <li><FaCheck className="inline text-amber-500 mr-2" /> Increased Efficiency & Profitability</li>
            <li><FaCheck className="inline text-amber-500 mr-2" /> Unified Inventory Management</li>
            <li><FaCheck className="inline text-amber-500 mr-2" /> Faster & Reliable Shipping</li>
          </ul>
        </Fade>
      </section>

      {/* Work Process */}
      <section className="px-5 md:px-20 py-10 bg-stone-900">
        <Fade cascade>
          <h2 className="text-2xl lg:text-3xl text-purple-600 font-bold mb-6 text-center">
            Work Process
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Service title="Product Receiving" desc="Thorough inspection and organization of every incoming shipment." />
            <Service title="Inventory Storage" desc="Safe, trackable storage in our warehouse system." />
            <Service title="Order Processing" desc="Quick and accurate order verification and picking." />
            <Service title="Packing & Labeling" desc="Secure packaging and label compliance with FBA/WFS standards." />
            <Service title="Shipping" desc="Reliable and efficient shipping to meet marketplace timelines." />
          </div>
        </Fade>
      </section>

      {/* Final CTA */}
      <section className="text-center py-10">
        <Link
          to="/contact"
          className="inline-block px-8 py-4 text-white text-lg font-semibold bg-purple-600 hover:bg-purple-500 transition rounded shadow-lg"
        >
          Start Scaling with Us Today
        </Link>
      </section>
    </div>
  );
}

function Service({ title, desc }) {
  return (
    <div className="bg-stone-800 p-5 rounded-lg shadow hover:shadow-purple-500 transition">
      <h3 className="text-xl font-semibold text-amber-400 mb-2">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default WholeSaleFBA;
