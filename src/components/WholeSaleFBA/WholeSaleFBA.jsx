import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import { FaCheck } from "react-icons/fa6";
import { FaBox, FaBoxOpen, FaWarehouse, FaShippingFast, FaCheckCircle, FaTruck , FaSearch, FaTags, FaShieldAlt, FaGlobeAmericas, FaHeadset, FaChartBar, FaStar, FaChartLine, FaMoneyBillWave, FaCogs, FaClipboardList, FaTag, FaBoxes, FaUndo } from "react-icons/fa";
import NewSection from "../NewSection/NewSection";

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
      <Fade cascade damping={0.15}>
        <h2 className="text-2xl lg:text-3xl text-amber-500 font-bold mb-10 text-center">
          Benefits of Partnering with Us
        </h2>

        <div className="grid gap-6 max-w-4xl mx-auto text-gray-300 text-base md:text-lg">
          <div>
            <h4 className="font-semibold text-amber-400 flex items-center mb-1">
              <FaCheck className="inline mr-2" /> Best-Selling Product Selection
            </h4>
            <p className="ml-6">
              We identify high-demand, profitable products to keep your inventory fresh and relevant.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-amber-400 flex items-center mb-1">
              <FaCheck className="inline mr-2" /> Increased Efficiency
            </h4>
            <p className="ml-6">
              With our streamlined process, we help you reduce operational costs and increase profitability.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-amber-400 flex items-center mb-1">
              <FaCheck className="inline mr-2" /> Unified Inventory Management
            </h4>
            <p className="ml-6">
              We ensure your inventory syncs across all platforms, minimizing the risk of overselling.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-amber-400 flex items-center mb-1">
              <FaCheck className="inline mr-2" /> Faster Shipping
            </h4>
            <p className="ml-6">
              With FBA/WFS, we offer customers faster and more reliable shipping options to improve customer satisfaction.
            </p>
          </div>
        </div>
      </Fade>
    </section>

      {/* Work Process */}
      <section className="px-5 md:px-20 py-14 mx-auto bg-stone-900 text-gray-300">
      <Fade cascade damping={0.15}>
        <h2 className="text-2xl lg:text-3xl font-bold text-amber-500 mb-10 text-center">
          Work Process
        </h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 flex items-center mb-2">
              <FaBoxOpen className="mr-2" /> Product Receiving
            </h3>
            <p className="ml-6">
              Efficient product receiving ensures every shipment is accurately checked and organized. 
              We thoroughly inspect and document all products to ensure quality.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 flex items-center mb-2">
              <FaWarehouse className="mr-2" /> Inventory Storage
            </h3>
            <p className="ml-6">
              Goods are securely stored and tracked in our warehouse management system. 
              We organize and monitor the stock levels for efficient retrieval and restocking.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 flex items-center mb-2">
              <FaCheckCircle className="mr-2" /> Order Processing
            </h3>
            <p className="ml-6">
              Your orders will be quickly picked, checked, and prepared for packing. 
              We responsibly verify order details and select products accurately for timely order processing.
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 flex items-center mb-2">
              <FaBoxOpen className="mr-2" /> Packing and Labeling
            </h3>
            <p className="ml-6">
              Once ordering is done, get your items packed, labeled, and prepped to Amazon’s exact requirements. 
              Have secure packaging and correct labeling to meet FBA standards.
            </p>
          </div>

          {/* Step 5 */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold text-amber-400 flex items-center mb-2">
              <FaTruck className="mr-2" /> Shipping
            </h3>
            <p className="ml-6">
              Each of your orders should be shipped efficiently to meet delivery deadlines and customer expectations. 
              We carefully choose the best shipping method to deliver your orders quickly and affordably.
            </p>
          </div>
        </div>
      </Fade>
    </section>

    <section className="px-5 md:px-20 py-14 mx-auto bg-stone-950 text-gray-300">
      <Fade cascade damping={0.15}>
        <h2 className="text-2xl lg:text-3xl font-bold text-amber-500 mb-10 text-center">
          Why Choose Imagine Dream World for Your Wholesale FBA/WFS Needs?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Expertise */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 flex items-center mb-2">
              <FaStar className="mr-2" /> Proven Expertise
            </h3>
            <p className="ml-6">
              With years of experience, we understand the ins and outs of e-commerce and the complexities 
              of wholesale product sourcing and logistics management with professionalism.
            </p>
          </div>

          {/* Scalability */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 flex items-center mb-2">
              <FaChartLine className="mr-2" /> Scalability
            </h3>
            <p className="ml-6">
              As your business grows, we're ready to support that growth and scale our services 
              accordingly to meet evolving demands.
            </p>
          </div>

          {/* Transparent Pricing */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 flex items-center mb-2">
              <FaMoneyBillWave className="mr-2" /> Transparent Pricing
            </h3>
            <p className="ml-6">
              No hidden fees! We ensure clear, honest pricing that helps you manage your 
              operational costs effectively.
            </p>
          </div>

          {/* Comprehensive Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-amber-400 flex items-center mb-2">
              <FaCogs className="mr-2" /> Comprehensive Solutions
            </h3>
            <p className="ml-6">
              We offer end-to-end services with the flexibility to tailor them according to your unique business needs —
              delivered efficiently and reliably.
            </p>
          </div>
        </div>
      </Fade>
    </section>

    <section className="px-5 md:px-20 py-14 mx-auto bg-stone-950 text-gray-300">
      {/* CTA Message */}
      <Fade cascade damping={0.15}>
        <h2 className="text-3xl font-bold text-amber-500 text-center mb-4">
          Your Success Is Our Priority!
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-10">
          If you’re ready to move beyond the ordinary and build something remarkable, partner with <span className="text-amber-400 font-semibold">Imagine Dream World</span>. Start the conversation now and take the first step toward streamlined success and lasting growth.
        </p>

        {/* Pricing Title */}
        <h3 className="text-2xl font-bold text-center text-amber-500 mb-8">
          Pricing Plans Designed for Efficient E-Commerce Fulfillment
        </h3>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
  {/* Basic Plan */}
  <div className="border border-amber-500 rounded-2xl p-6 bg-stone-900 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-between">
    <div>
      <h4 className="text-xl font-semibold text-amber-400 mb-2">Basic Plan</h4>
      <p className="text-gray-400 mb-2">
        <span className="text-purple-600 font-semibold text-3xl">$40 </span>per month
      </p>
      <div className="w-16 h-1 bg-amber-500 rounded mb-4"></div>
      <ul className="space-y-2 list-disc list-inside text-sm">
        <li>Product Sourcing</li>
        <li>Inventory Management</li>
        <li>Monthly Report</li>
        <li>Up to 500 Units Processed/Month</li>
        <li>Basic Customer Support</li>
      </ul>
    </div>
    <div className="mt-6 flex justify-center">
      <button className="bg-amber-500 text-black font-semibold px-4 py-2 rounded hover:bg-amber-400 transition duration-300 hover:cursor-pointer">
        Contact Us
      </button>
    </div>
  </div>

  {/* Standard Plan */}
  <div className="border border-amber-500 rounded-2xl p-6 bg-stone-900 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-between">
    <div>
      <h4 className="text-xl font-semibold text-amber-400 mb-2">Standard Plan</h4>
      <p className="text-gray-400 mb-2">
        <span className="text-purple-600 font-semibold text-3xl">$60 </span>per month
      </p>
      <div className="w-16 h-1 bg-amber-500 rounded mb-4"></div>
      <ul className="space-y-2 list-disc list-inside text-sm">
        <li>Product Sourcing</li>
        <li>Inventory Management</li>
        <li>Supply Chain Management</li>
        <li>Listing Optimization</li>
        <li>Repricing & Price Optimization</li>
        <li>Standard Customer Support</li>
      </ul>
    </div>
    <div className="mt-6 flex justify-center">
      <button className="bg-amber-500 text-black font-semibold px-4 py-2 rounded hover:bg-amber-400 transition duration-300 hover:cursor-pointer">
        Contact Us
      </button>
    </div>
  </div>

  {/* Premium Plan */}
  <div className="border border-amber-500 rounded-2xl p-6 bg-stone-900 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col justify-between">
    <div>
      <h4 className="text-xl font-semibold text-amber-400 mb-2">Premium Plan</h4>
      <p className="text-gray-400 mb-2">
        <span className="text-purple-600 font-semibold text-3xl">$89 </span>per month
      </p>
      <div className="w-16 h-1 bg-amber-500 rounded mb-4"></div>
      <ul className="space-y-2 list-disc list-inside text-sm">
        <li>Product Sourcing</li>
        <li>Inventory Management</li>
        <li>Supply Chain Management</li>
        <li>Listing Optimization</li>
        <li>Repricing & Price Optimization</li>
        <li>Custom Inserts</li>
        <li>Amazon FBA Removals</li>
        <li>Hazmat Shipping</li>
        <li>Priority Customer Support</li>
      </ul>
    </div>
    <div className="mt-6 flex justify-center">
      <button className="bg-amber-500 text-black font-semibold px-4 py-2 rounded hover:bg-amber-400 transition duration-300 hover:cursor-pointer">
        Contact Us
      </button>
    </div>
  </div>
</div>


      </Fade>
    </section>

      {/* Final CTA */}
      {/* <section className="text-center py-10">
        <Link
          to="/contact"
          className="inline-block px-8 py-4 text-white text-lg font-semibold bg-purple-600 hover:bg-purple-500 transition rounded shadow-lg"
        >
          Start Scaling with Us Today
        </Link>
      </section> */}
      <section className="mt-10">
        <NewSection></NewSection>
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
