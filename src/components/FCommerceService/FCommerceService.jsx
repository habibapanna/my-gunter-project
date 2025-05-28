import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import {
  Boxes,
  PackageCheck,
  Warehouse,
  Undo2,
  ShoppingCart,
  PackageSearch,
} from "lucide-react";

const logisticsServices = [
  {
    title: "Inventory Management System",
    desc: "Our advanced inventory management system ensures precise stock tracking and real-time updates. This minimizes stockouts and overstock risks with accurate demand forecasting and efficient restocking. With full visibility, you maintain control and optimize your supply chain efficiency.",
    icon: <Boxes className="w-8 h-8 text-amber-500 mb-2" />,
  },
  {
    title: "Order Picking & Packing",
    desc: "We design optimized picking strategies and quality packing processes to guarantee order accuracy and product safety. Our team ensures every order is carefully handled and packed to meet customer expectations, reducing errors and enhancing delivery satisfaction.",
    icon: <PackageCheck className="w-8 h-8 text-amber-500 mb-2" />,
  },
  {
    title: "Multi-Warehouse Coordination",
    desc: "Managing multiple warehouses is simplified through our centralized coordination system. We synchronize inventory and orders across locations for the fastest delivery and reduced shipping costs. Improve stock availability and ensure your customers receive their products right away, no matter where they are.",
    icon: <Warehouse className="w-8 h-8 text-amber-500 mb-2" />,
  },
  {
    title: "Returns Processing & Handling",
    desc: "We know returns can be a hassle for you and your customers. That’s why we manage product inspections, restocking, and refunds efficiently to minimize turnaround times. Our goal is to ensure optimal value from returned goods and maintain higher satisfaction.",
    icon: <Undo2 className="w-8 h-8 text-amber-500 mb-2" />,
  },
  {
    title: "E-commerce Integration Support",
    desc: "We provide quick integration with popular e-commerce platforms like Shopify, Amazon, and eBay. Automatically sync orders across all your sales and update inventory in real-time, so stock levels stay accurate. Witness your online business grow without distraction.",
    icon: <ShoppingCart className="w-8 h-8 text-amber-500 mb-2" />,
  },
  {
    title: "Custom Packaging & Kitting",
    desc: "We offer packaging and kitting services to provide personalized and ready-to-ship product bundles. Our experts design the packaging solutions that protect your products and create memorable unboxing moments. Improve customer retention and set your brand apart from competitors.",
    icon: <PackageSearch className="w-8 h-8 text-amber-500 mb-2" />,
  },
];

function FCommerceService() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/f-commerce-service")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const services = [
    "Facebook Shop & Marketplace Setup – Build a professional storefront.",
    "Winning Product Research – Find trending & high-converting products.",
    "Facebook & Instagram Ads – Run high-ROI ad campaigns for maximum reach.",
    "Social Media Content & Engagement – Boost brand trust with eye-catching posts.",
    "Automated Order & Chatbot Setup – Streamline sales with automation tools.",
    "Influencer Marketing & Promotions – Leverage influencers to increase conversions.",
  ];

  return (
    <div className="bg-black min-h-screen py-5 text-white">
      {/* Carousel Section */}
      <section className="mw-full mx-auto mb-10 px-5">
        <Fade triggerOnce>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img.image || img.imageUrl}
                  alt={`Slide ${index}`}
                  className="w-full shadow-md h-[300px] lg:h-[400px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>
      </section>
      <div className="bg-black min-h-screen py-5 text-white px-5 md:px-20">
      {/* Hero Section */}
      <Slide direction="up" triggerOnce>
        <h1 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-purple-600">
          Next-Gen Warehouse Support for Your E-commerce Success
        </h1>
      </Slide>
      <Fade cascade damping={0.1} triggerOnce>
        <p className="text-lg text-gray-300 font-normal max-w-4xl mx-auto text-center mb-10">
          Optimize your inventory, speed up order processing, and reduce costs with our expert warehouse solutions.
        </p>
      </Fade>

      {/* Request a Quote Button */}
      <div className="text-center mb-16">
        <Zoom triggerOnce>
          <button className="bg-purple-600 px-8 py-3 text-white font-semibold hover:bg-purple-700 transition duration-300 rounded shadow-animation text-lg">
            <Link to="/contact">Request a Quote</Link>
          </button>
        </Zoom>
      </div>

      {/* Partner Section */}
      <Slide direction="left" triggerOnce>
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-amber-500 text-center">
          Your Partner for Reliable and Scalable Warehouse Support Services
        </h2>
      </Slide>
      <Fade cascade damping={0.1} triggerOnce>
        <p className="text-gray-300 mx-auto text-[16px] mb-10 text-center">
          At Imagine Dream World, we offer dependable warehouse support just designed for your business. Our flexible solutions grow alongside your needs. With skilled professionals and proven processes, we ensure accurate inventory, fast order fulfillment, and secure handling. Partner with us for efficient, reliable service that drives your business success.
        </p>
      </Fade>

      {/* Challenges Section */}
      <Slide direction="right" triggerOnce>
        <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-amber-500 text-center">
          Warehouse Challenges Solved, Operations Optimized
        </h3>
      </Slide>
      <Fade cascade damping={0.1} triggerOnce>
        <p className="text-gray-300 max-w mb-10 text-center">
          Warehouse inefficiencies cause up to 20% revenue loss due to errors, delays, and poor space use. For example, picking errors alone can reach 1 in 300 items, which leads to costly returns and unhappy customers. Rising real estate costs cause warehouses to do more with less space, and the growing SKU variety just complicates inventory management.
          We solve these challenges by implementing precise inventory tracking and high-density storage solutions that increase space use by up to 60%. We optimize workflows and offer barcode scanning to reduce picking errors by over 30%. Our approach speeds up order fulfillment and cuts delivery delays, helping businesses lower costs and improve customer satisfaction.
        </p>
      </Fade>

      {/* Solutions Section */}
      <Slide direction="left" triggerOnce>
        <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-amber-500 text-center">
          Our End-to-End Warehouse Solutions Designed for E-commerce Excellence
        </h3>
      </Slide>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
      {logisticsServices.map(({ title, desc, icon }, i) => (
        <Zoom key={i} triggerOnce delay={i * 100}>
          <div className="bg-zinc-900 p-5 rounded shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-start">
            <div>{icon}</div>
            <h4 className="text-amber-500 font-semibold mb-2">{title}</h4>
            <p className="text-gray-300 text-sm flex-grow">{desc}</p>
          </div>
        </Zoom>
      ))}
    </div>


      {/* Process Section */}
      <Slide direction="right" triggerOnce>
        <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-amber-500">
          From Consultation to Delivery: Our Proven Warehouse Process
        </h3>
      </Slide>

      <ul className="list-disc list-inside max-w-4xl text-gray-300 mb-16 space-y-3">
        <li>
          <strong>Assessment & Planning:</strong> We analyze your product types, order volumes, and delivery timelines. This helps us to create a customized warehouse layout and workflow that maximizes your business efficiency.
        </li>
        <li>
          <strong>System Setup & Integration:</strong> We manage warehouse management software and connect it with your e-commerce platforms like Shopify or Amazon. Get real-time inventory updates and sync with the automated order processing.
        </li>
        <li>
          <strong>Picking, Packing & Quality:</strong> Our team picks orders using barcode scanning, packs items securely, and performs quality inspections. We ensure every shipment meets your standards before dispatch.
        </li>
        <li>
          <strong>Shipping & Customer Updates:</strong> We coordinate with trusted carriers for timely delivery. Automated notifications keep your customers informed, while we handle returns and resolve any shipping issues carefully.
        </li>
      </ul>

      {/* Transformation Section */}
      <Slide direction="left" triggerOnce>
        <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-amber-500 text-center">
          How Our Warehouse Support Transforms Your Supply Chain
        </h3>
      </Slide>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16 text-center text-gray-300">
        {[
          "Accurate Inventory Control — Keep stock levels precise and visible in real time.",
          "Faster Order Fulfillment — Deliver orders quickly and reliably every time.",
          "Scalable Operations — Easily adapt warehouse capacity as your business grows.",
        ].map((text, i) => (
          <Zoom key={i} triggerOnce delay={i * 100}>
            <div className="bg-zinc-900 p-6 rounded shadow-md hover:shadow-2xl transition-all duration-300">
              <p>{text}</p>
            </div>
          </Zoom>
        ))}
      </div>

      {/* Technology & Security Section */}
      <Slide direction="right" triggerOnce>
        <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-amber-500">
          Enhance Warehousing with Technology and Security
        </h3>
      </Slide>
      <Fade cascade damping={0.1} triggerOnce>
        <ul className="list-disc list-inside max-w-4xl text-gray-300 mb-16 space-y-3">
          <li>
            <strong>Advanced Warehouse Management Systems:</strong> We use industry-leading WMS for real-time inventory tracking, automated processing, and seamless e-commerce platform integration.
          </li>
          <li>
            <strong>Automation for Efficiency:</strong> Our barcode scanning and automated sorting reduce errors, speed up fulfillment, and boost overall warehouse productivity.
          </li>
          <li>
            <strong>Robust Security Measures:</strong> Your inventory is protected with 24/7 surveillance and controlled access. Secure storage protocols and full traceability of stock movements.
          </li>
          <li>
            <strong>Data Protection & Compliance:</strong> Our encrypted data storage and industry-standard compliance safeguard your business information and maintain operational integrity.
          </li>
        </ul>
      </Fade>

      {/* Why Trust Section */}
      <Slide direction="left" triggerOnce>
        <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-amber-500">
          Why Leading E-commerce Brands Trust Imagine Dream World
        </h3>
      </Slide>
      <Fade cascade damping={0.1} triggerOnce>
        <ul className="list-disc list-inside max-w-4xl text-gray-300 mb-16 space-y-3">
          <li><strong>Experienced Warehouse Professionals:</strong> Our team brings years of hands-on experience managing complex warehouse operations. We ensure accuracy, efficiency, and reliability in every step of your fulfillment process.</li>
          <li><strong>Flexible Operations:</strong> We adapt quickly to changing business demands. Whether seasonal spikes or new product lines, our processes scale efficiently to meet the industry's changing needs.</li>
          <li><strong>Continuous Monitoring:</strong> We track inventory and order progress throughout the fulfillment cycle. Our ongoing oversight helps prevent errors and keeps your operations running without interruption.</li>
          <li><strong>Collaborative Partnership:</strong> We work closely with your team to understand goals and challenges. This partnership offers clear communication and customized solutions that drive your success.</li>
          <li><strong>Transparent Reporting:</strong> Regular, detailed reports give you full visibility into inventory, orders, and performance. This openness builds trust and supports informed decision-making.</li>
          <li><strong>Hands-On Quality Control:</strong> Every order undergoes strict quality checks before shipment. Our attention to detail ensures your customers receive accurate, well-packaged products every time.</li>
        </ul>
      </Fade>

      {/* Testimonials Section */}
      <Slide direction="up" triggerOnce>
        <h3 className="text-2xl font-semibold mb-6 text-center text-purple-600">
          Hear From Our Clients: Success Stories in Fulfillment
        </h3>
      </Slide>

      <div className="max-w-4xl mx-auto space-y-10">
        {[
          {
            quote: "The quality checks they do on every order really show. Returns are handled fast, which keeps our customers trusting us more than ever.",
            name: "Lisa R., Home Goods Seller",
          },
          {
            quote: "Coordinating multiple warehouses was tough before. Now, thanks to Imagine Dream World, everything runs smoothly, deliveries are fast, and costs are down.",
            name: "Jason M., Electronics Distributor",
          },
          {
            quote: "Their integration with Shopify means our inventory is always accurate, and orders get processed automatically. It saved us tons of time and headaches.",
            name: "Anna T., Fashion Brand Owner",
          },
        ].map(({ quote, name }, i) => (
          <Zoom key={i} triggerOnce delay={i * 100}>
            <div className="bg-zinc-900 rounded p-6 shadow-lg text-gray-300">
              <p className="italic mb-4">"{quote}"</p>
              <p className="font-semibold text-purple-500">— {name}</p>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
    </div>
  );
}

export default FCommerceService;
