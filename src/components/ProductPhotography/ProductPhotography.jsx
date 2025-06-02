import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; 
import { FaRocket, FaClock, FaCheckCircle, FaBrush, FaTabletAlt } from "react-icons/fa";
import {
  Camera,
  Image as ImageIcon,
  Video,
  Rotate3d,
  Scissors,
} from "lucide-react"; // Lucide icons
import NewSection from "../NewSection/NewSection";
const services = [
  {
    title: "Studio Product Photography",
    desc: "We create high-resolution images with controlled lighting to highlight every detail. Our studio shoots focus on clarity and precision. It ensures your products look flawless and professional. You can use them for catalogs, websites, and online marketplaces.",
    icon: <Camera className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Lifestyle Photography",
    desc: "We create high-resolution images with controlled lighting to highlight every detail. Our studio shoots focus on clarity and precision. It ensures your products look flawless and professional. You can use them for catalogs, websites, and online marketplaces.",
    icon: <ImageIcon className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Product Videography",
    desc: "We produce high-quality videos that highlight product functionality, showcase unique selling points, and engage viewers. Ultimate results? It increases visitors’ time spent on your site and helps customers make informed buying decisions.",
    icon: <Video className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "360° & Interactive Visuals",
    desc: "We create Interactive spins and visuals that let customers explore products from every angle. These immersive experiences provide transparency and confidence to the shoppers. It also enhances conversion rates through engaging, hands-on interaction.",
    icon: <Rotate3d className="w-6 h-6 text-amber-500" />,
  },
  {
    title: "Image & Video Editing",
    desc: "We offer professional retouching and editing to ensure polished product photos and videos. Our editing team enhances colors, removes imperfections. They apply branding elements, guaranteeing a polished look across your product catalog.",
    icon: <Scissors className="w-6 h-6 text-amber-500" />,
  },
];
const processSteps = [
  {
    title: "Creative Consultation",
    description:
      "We first deeply understand your brand, your products, and your target audience. Our expert team works with you to develop a visual strategy customized to your goals, ensuring every shot supports your unique selling points and enhances customer appeal.",
  },
  {
    title: "Product Delivery",
    description:
      "You send us your products or samples securely. We handle all logistics carefully to ensure items arrive in perfect condition, ready for styling and photography. We maintain clear communication throughout the process to keep you informed.",
  },
  {
    title: "Styling & Shooting",
    description:
      "Our expert team styles your products to highlight their best features and arranges lighting and backgrounds for maximum impact. We capture high-quality images and videos using advanced equipment.",
  },
  {
    title: "Post-Production Perfection",
    description:
      "Our editing specialists enhance each image and video with color correction, retouching, and formatting. We ensure visuals meet brand standards and platform requirements. Our motive is simple- delivering polished content that engages and converts!",
  },
  {
    title: "Final Delivery",
    description:
      "You will receive your ready-to-use visuals through an easy digital delivery system. Files are optimized for web, social media, and marketplaces, ensuring fast loading and flawless display to help your products stand out online.",
  },
];

function ProductPhotography() {
  const [images, setImages] = useState([]);
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const reasons = [
    "Instantly capture your customer's attention",
    "Build trust and credibility with professional images",
    "Help shoppers understand product details and features",
    "Reduce hesitation and boost purchase confidence",
    "Lower return rates by setting accurate expectations",
    "Differentiate your brand from competitors",
    "Improve conversion rates across all sales platforms",
  ];

  const faqs = [
    {
      question: "What types of products do you photograph and film?",
      answer:
        "We handle a wide range of products. It includes small accessories, electronics, apparel, and home goods. Our team adapts techniques to suit different sizes, textures, and brand styles to create the best visual impact.",
    },
    {
      question: "How long does the process take?",
      answer:
        "The entire process typically spans from initial planning to final delivery. Usually, it takes between one to two weeks, depending on project complexity. For instance, pre-shoot prep, shooting, post-production, and client review.",
    },
    {
      question: "What equipment do you use?",
      answer:
        "We use professional DSLR and mirrorless cameras from trusted brands to capture sharp, high-quality images. Our setup includes studio lighting, lightboxes, and tripods to ensure consistent, well-lit shots. For videography, we employ advanced video cameras and stabilizers to produce smooth, detailed product videos. ",
    },
    {
      question: "Do you offer rush services?",
      answer:
        "Yes, rush or expedited services are available for urgent projects. It allows faster turnaround times while maintaining quality, subject to scheduling and resource availability to meet tight deadlines.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const features = [
    {
      title: "E-commerce Focused",
      description:
        "We specialize in visuals that speak directly to online shoppers as we understand buyer behavior and platform trends. Our images and videos help boost clicks, conversions, and customer trust.",
      icon: <FaRocket className="text-2xl text-purple-600" />,
    },
    {
      title: "Fast Turnaround",
      description:
        "On a short timeline? No worries! Our efficient workflow delivers high-quality visuals right when you need them. Ultimately, your product launches and campaigns stay on track.",
      icon: <FaClock className="text-2xl text-purple-600" />,
    },
    {
      title: "Consistent Quality",
      description:
        "Our every shot meets a high standard. We maintain sharpness, styling, and, more importantly, they align with your brand across every product.",
      icon: <FaCheckCircle className="text-2xl text-purple-600" />,
    },
    {
      title: "Custom Branding Options",
      description:
        "We capture every shoot to reflect your unique brand identity. This includes carefully selecting backgrounds and packaging details that enhance your product’s appeal.",
      icon: <FaBrush className="text-2xl text-purple-600" />,
    },
    {
      title: "Multi-Platform Formats",
      description:
        "We deliver images and videos optimized for Shopify, Amazon, Instagram, and all major e-commerce and social platforms. This ensures your visuals look perfect and perform well, no matter where your customers find your products.",
      icon: <FaTabletAlt className="text-2xl text-purple-600" />,
    },
  ];


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
          <h1 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-4">
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
          At Imagine Dream World, we help online businesses stand out with product photos and videos that are built to convert. Our team creates clean studio images, lifestyle compositions, and engaging product videos that align with your brand’s visual identity. Each visual is designed to build trust, capture attention, and support better buying decisions. It doesn’t matter which platform you sell the products on, we ensure your products make a lasting impression.
          </p>
        </section>
      </Fade>

      {/* Benefits */}
      <section className="py-10 px-4 md:px-10 lg:px-20  text-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold text-center mb-5 text-purple-600"
      >
        Why Quality Product Visuals Matter in E-commerce
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="flex items-start gap-4 p-4 bg- rounded-xl shadow-md"
          >
            <FaCheckCircle className="text-amber-500 text-xl mt-1" />
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              {reason}
            </p>
          </motion.div>
        ))}
      </div>
    </section>

      {/* Service Cards */}
      <Fade direction="left" cascade damping={0.15}>
      <section className="px-5 md:px-20 mt-10">
        <h2 className="text-2xl md:text-3xl text-center text-amber-500 font-bold mb-6">
          Our E-commerce Visual Services
        </h2>
        <div className="grid gap-6 grid-cols-1">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-stone-900 border border-stone-800 p-6 rounded shadow hover:shadow-lg transition flex flex-col gap-3"
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
      <Fade direction="right">
      <section className="py-20 px-4 md:px-10 lg:px-20 bg-stone-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-amber-500 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          From Planning to Perfection: Our Seamless Process
        </motion.h2>

        <div className="">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="p-5 shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-amber-400 mt-1">
                  <FaCheckCircle className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl text-purple-600 md:text-2xl font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
      </Fade>

      {/* Why Choose Us */}
      <Fade direction="left">
      <section className="py-10 px-4 md:px-10 lg:px-20  text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-600"
      >
        Why Choose Imagine Dream World?
      </motion.h2>

      <div className="grid grid-cols-1 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-5 rounded-2xl shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex items-start gap-4">
              {feature.icon}
              <div>
                <h3 className="text-xl font-semibold mb-2 text-amber-500">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
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
        <section className="px-5 md:px-20 mt-10">
          <h2 className="text-2xl text-center text-amber-500 font-bold mb-6">
            What Our Clients Say
          </h2>
          <div className="grid gap-6 grid-cols-1 text-gray-300">
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
              <div key={i} className="bg-stone-900 border border-gray-700 p-5 rounded shadow">
                <p className="italic mb-2">“{testimonial.quote}”</p>
                <p className="text-sm font-semibold text-purple-600">{testimonial.name}</p>
                <p className="text-amber-500">{testimonial.title}</p>
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
        <div className="text-purple-600 max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 py-4 bg-stone-900 hover:bg-gray-800 flex justify-between items-center text-left font-semibold text-lg transition-colors duration-200"
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
      {/* <Fade direction="up">
        <section className="text-center mt-16 px-5">
          <h2 className="text-2xl font-bold text-purple-500 mb-4">Let’s Work Together To Create Visuals That Boost Sales</h2>
          <Link
            to="/contact"
            className="inline-block bg-purple-600 px-6 py-3 font-semibold text-white rounded hover:bg-purple-700 transition-all"
          >
            Contact Us Now
          </Link>
        </section>
      </Fade> */}
      <section className="mt-10">
        <NewSection></NewSection>
      </section>
    </div>
  );
}

export default ProductPhotography;
