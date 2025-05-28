import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; 
import {
  Camera,
  Image as ImageIcon,
  Video,
  Rotate3d,
  Scissors,
} from "lucide-react"; // Lucide icons

const services = [
  {
    title: "Studio Product Photography",
    desc: "High-res images with controlled lighting to showcase every detail for catalogs, websites, and marketplaces.",
    icon: <Camera className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Lifestyle Photography",
    desc: "Images captured in real-life settings to create emotional connections and relatability.",
    icon: <ImageIcon className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Product Videography",
    desc: "Videos showcasing product features and benefits, increasing engagement and decision-making.",
    icon: <Video className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "360° & Interactive Visuals",
    desc: "Immersive visuals letting customers explore your product from every angle.",
    icon: <Rotate3d className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Image & Video Editing",
    desc: "Professional retouching and branding for polished, on-brand visuals.",
    icon: <Scissors className="w-6 h-6 text-amber-500" />,
  },
];


function ProductPhotography() {
  const [images, setImages] = useState([]);
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const faqs = [
    {
      question: "What types of products do you photograph and film?",
      answer:
        "We handle small accessories, apparel, electronics, and more — tailored for your brand.",
    },
    {
      question: "How long does the process take?",
      answer:
        "Typically 1–2 weeks depending on project scope — from planning to final delivery.",
    },
    {
      question: "What equipment do you use?",
      answer:
        "DSLR/mirrorless cameras, lightboxes, stabilizers, and more to ensure sharp and stunning visuals.",
    },
    {
      question: "Do you offer rush services?",
      answer:
        "Yes, expedited services are available based on availability and urgency.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };


  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/product-photography")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen py-10">
      {/* Carousel */}
      <Fade direction="up" cascade damping={0.2}>
        <section className="w-full mx-auto mb-10 px-5">
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
                  src={img.imageUrl}
                  alt={`Slide ${index}`}
                  className="w-full shadow-md h-[300px] lg:h-[400px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Fade>

      {/* Hero Section */}
      <Fade direction="up" triggerOnce>
        <section className="text-center px-5 md:px-20">
          <h1 className="text-3xl lg:text-4xl font-bold text-purple-500 mb-4">
            Professional Product Photography & Videography For Your Online Business
          </h1>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            Stand out in the competitive online marketplace with compelling product photos and videos. Capture attention, build trust, and increase conversions with professional visuals.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-purple-600 px-6 py-3 font-semibold text-white rounded hover:bg-purple-700 transition-all"
          >
            Get a Free Quote
          </Link>
        </section>
      </Fade>

      {/* Service Introduction */}
      <Fade direction="up" cascade damping={0.15}>
        <section className="px-5 md:px-20 mt-16">
          <h2 className="text-2xl text-center text-amber-500 font-bold mb-6">
            Your Partner for High-Impact E-commerce Visuals
          </h2>
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            At Imagine Dream World, we help online businesses stand out with product photos and videos that are built to convert. Our visuals align with your brand, capture attention, and drive better buying decisions across platforms.
          </p>
        </section>
      </Fade>

      {/* Benefits */}
      <Fade direction="up">
        <section className="px-5 md:px-20 mt-16 ">
          <h2 className="text-2xl font-bold text-center text-amber-500 mb-6">
            Why Quality Product Visuals Matter in E-commerce
          </h2>
          <ul className="text-gray-300 grid gap-4 md:grid-cols-3 list-disc list-inside">
          <li>Improve conversion rates</li>
            <li>Build trust and credibility</li>
            <li>Show product details clearly</li>
            <li>Boost purchase confidence</li>
            <li>Differentiate from competitors</li>
            <li>Instantly capture customer attention</li>
            <li>Lower return rates</li>
          </ul>
        </section>
      </Fade>

      {/* Service Cards */}
      <Fade direction="up" cascade damping={0.15}>
      <section className="px-5 md:px-20 mt-16">
        <h2 className="text-2xl text-center text-amber-500 font-bold mb-6">
          Our E-commerce Visual Services
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 p-6 rounded shadow hover:shadow-lg transition flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                {service.icon}
                <h3 className="font-semibold text-lg text-white">{service.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </Fade>

      {/* Process */}
      <Fade direction="up">
        <section className="px-5 md:px-20 mt-16">
          <h2 className="text-2xl text- text-amber-500 font-bold mb-6 text-center">
            From Planning to Perfection: Our Seamless Process
          </h2>
          <div className="space-y-6 text-gray-300 mx-auto grid grid-cols-1 md:grid-cols-2">
            <p><strong className="text-purple-600">Creative Consultation:</strong> Understanding your brand, goals, and audience for tailored visuals.</p>
            <p><strong className="text-purple-600">Product Delivery:</strong> Secure logistics and communication until we receive your items.</p>
            <p><strong className="text-purple-600">Styling & Shooting:</strong> Styling and capturing visuals with precision using high-end gear.</p>
            <p><strong className="text-purple-600">Post-Production:</strong> Editing for perfection with branding, color correction, and formatting.</p>
            <p><strong className="text-purple-600">Final Delivery:</strong> Optimized files delivered digitally for all platforms.</p>
          </div>
        </section>
      </Fade>

      {/* Why Choose Us */}
      <Fade direction="up">
        <section className="px-5 md:px-20 mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl text-center text-amber-500 font-bold mb-6 ">
            Why Choose Imagine Dream World?
          </h2>
          <ul className="text-gray-300 grid grid-cols-1 mx-auto list-disc list-inside max-w-2xl gap-2 md:grid-cols-2">
            <li>E-commerce Focused</li>
            <li>Multi-Platform Formats</li>
            <li>Consistent Quality</li>
            <li>Custom Branding Options</li>
            <li>Fast Turnaround</li>
            
          </ul>
        </section>
      </Fade>

      {/* Portfolio Placeholder */}
      {/* <Fade direction="up">
        <section className="px-5 md:px-20 mt-16 text-center">
          <h2 className="text-2xl font-bold text-amber-500 mb-4">See Our Work in Action</h2>
          <p className="text-gray-400 mb-2">Let our portfolio speak for itself.</p>
          <div className="bg-gray-800 h-64 flex items-center justify-center text-gray-500">
            [Insert photo/video gallery slider]
          </div>
        </section>
      </Fade> */}

      {/* Testimonials */}
      <Fade direction="up">
        <section className="px-5 md:px-20 mt-16">
          <h2 className="text-2xl text-center text-amber-500 font-bold mb-6">
            What Our Clients Say
          </h2>
          <div className="grid gap-6 md:grid-cols-3 text-gray-300">
            {[
              {
                quote: "The photos were exactly what we needed. Sales went up within a week of updating our product listings.",
                name: "Nisha M.",
                title: "Skincare Brand Owner",
              },
              {
                quote: "The lifestyle shots looked amazing and really brought our products to life.",
                name: "Adam R.",
                title: "Home Decor Seller",
              },
              {
                quote: "Quick turnaround, consistent quality, and great communication. This studio stands out.",
                name: "Sarah T.",
                title: "Fashion Boutique Founder",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-gray-900 border border-gray-700 p-5 rounded shadow">
                <p className="italic mb-2">“{testimonial.quote}”</p>
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="text-xs text-gray-400">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </section>
      </Fade>

      {/* FAQ */}
      <Fade direction="up">
      <section className="px-5 md:px-20 mt-16">
        <h2 className="text-2xl text-center text-amber-500 font-bold mb-6">
          Frequently Asked Questions
        </h2>
        <div className="text-gray-300 max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 py-4 bg-gray-900 hover:bg-gray-800 flex justify-between items-center text-left font-semibold text-lg transition-colors duration-200"
                >
                  <span>{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-amber-500" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-4 text-gray-400 text-base"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </Fade>

      {/* Final CTA */}
      <Fade direction="up">
        <section className="text-center mt-16 px-5">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">Let’s Work Together To Create Visuals That Boost Sales</h2>
          <Link
            to="/contact"
            className="inline-block bg-purple-600 px-6 py-3 font-semibold text-white rounded hover:bg-purple-700 transition-all"
          >
            Contact Us Now
          </Link>
        </section>
      </Fade>
    </div>
  );
}

export default ProductPhotography;
