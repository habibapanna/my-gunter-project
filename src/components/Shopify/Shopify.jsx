import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaShopify, FaTools, FaUpload, FaVial, FaExchangeAlt, FaCode } from 'react-icons/fa';
import { Slide, Fade, Zoom } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import NewSection from "../NewSection/NewSection";

const services = [
  {
    title: "Custom Shopify Store Setup",
    icon: <FaShopify className="text-4xl text-purple-600" />,
    description:
      "We design and build Shopify stores that meet your brand identity and business goals. Our team handles everything, starting from selecting the right layout and features to launching your store efficiently. We ensure your store is visually appealing, user-friendly, and fully functional. Build a strong foundation to attract customers and grow sales.",
  },
  {
    title: "Shopify Theme Development & Customization",
    icon: <FaTools className="text-4xl text-purple-600" />,
    description:
      "Your Shopify store’s theme is the first thing customers notice. We customize themes that talk about your brand’s personality and make shopping simple and enjoyable. Our experts modify layouts, colors, fonts, and features to create a unique shopping experience. Stand out in the crowd and keep customers engaged, turning visits into sales.",
  },
  {
    title: "Product Upload & Management",
    icon: <FaUpload className="text-4xl text-purple-600" />,
    description:
      "We take care of uploading your products with accurate descriptions, high-quality images, and proper categorization. Our team organizes your inventory and updates product details regularly. Get your catalog managed efficiently to keep your store up-to-date and ready for customers. It saved your time and effort.",
  },
  {
    title: "Testing & QA",
    icon: <FaVial className="text-4xl text-purple-600" />,
    description:
      "We conduct thorough testing of your Shopify store to identify and fix any issues. Through an expert quality assurance process, we assess functionality, responsiveness, checkout flow, and speed. We ensure your store works perfectly across all devices. Provide a smooth and error-free shopping experience for your customers.",
  },
  {
    title: "Migration to Shopify",
    icon: <FaExchangeAlt className="text-4xl text-purple-600" />,
    description:
      "Moving your store to Shopify? We manage the entire migration process from your current platform to Shopify. Our team securely transfers your products, customer data, orders, and settings with zero downtime. We handle technical challenges and ensure your new Shopify store is fully operational and ready to support your business growth.",
  },
  {
    title: "Headless Shopify Solutions",
    icon: <FaCode className="text-4xl text-purple-600" />,
    description:
      "We build headless Shopify setups by separating the front end from the back end. You will get full control over your store’s design and performance. Our team integrates custom front-end frameworks with Shopify’s backend. Ensure fast loading times and unique user experiences, just planned for your brand’s needs.",
  },
];

const steps = [
  {
    title: "Discovery & Planning",
    description:
      "We start by understanding your business and goals. Next, we research your market and customers. This helps us plan the perfect Shopify store that fits your needs and stands out.",
  },
  {
    title: "Design & Development",
    description:
      "We create a custom Shopify store design that matches your brand. Our team develops all essential features and optimizes the user experience. The store will be built to be attractive, easy to navigate, and fully efficient for your customers.",
  },
  {
    title: "Testing & Launch",
    description:
      "Before going live, we thoroughly test your store’s functionality, responsiveness, and checkout process across devices. We fix any issues to ensure smooth performance. After your approval, we launch your Shopify store, ready for customers to shop confidently.",
  },
  {
    title: "Ongoing Support & Optimization",
    description:
      "Continuous support keeps your store updated and running smoothly. We monitor performance, fix issues, and optimize for better speed and sales. Get your Shopify store to always grow and adapt to changing business needs.",
  },
];

const reasons = [
  {
    title: "Expert Shopify Specialists",
    description:
      "Our team consists of skilled Shopify experts who understand every aspect of store development and management. We deliver customized solutions that align with your brand and business goals.",
  },
  {
    title: "Custom Solutions for Your Brand",
    description:
      "We don’t do one-size-fits-all. Every Shopify store we build is customized to reflect your unique brand identity and customer needs. Our personalized approach creates a memorable shopping experience that sets you apart.",
  },
  {
    title: "Proven Track Record of Success",
    description:
      "With numerous successful Shopify projects completed, we bring proven strategies and best practices to your store. Our experience guarantees efficient development, smooth management, and measurable growth.",
  },
  {
    title: "End-to-End Service",
    description:
      "From initial setup to ongoing management, we cover every stage of your Shopify journey. This comprehensive service means you get expert support at every step, saving time and avoiding costly mistakes.",
  },
  {
    title: "Focus on Performance & Speed",
    description:
      "We optimize your Shopify store for fast loading times and quick navigation. A high-performing store improves user experience, reduces bounce rates, and boosts conversions, giving you a competitive edge.",
  },
];

const integrations = [
  {
    title: "Payment Gateway Integrations",
    description:
      "We integrate secure, fast payment gateways like Shopify Payments, PayPal, and Stripe to ensure smooth checkout experiences. Our setup supports multiple currencies and fraud protection. You can ensure to build customer trust and increase conversions with reliable payment processing.",
  },
  {
    title: "Custom API Integrations",
    description:
      "We connect your Shopify store with third-party systems via custom APIs. Through this, you can automate workflows between platforms like CRMs, ERPs, and marketing tools. Streamline operations and improve efficiency to meet your unique business needs.",
  },
  {
    title: "Marketing & Email Automation",
    description:
      "Automated marketing and email campaigns drive customer engagement and repeat sales. Imagine Dream World sets up integrations with platforms like Klaviyo and Mailchimp. Our goal is to create personalized workflows that save time while nurturing your audience effectively.",
  },
  {
    title: "Shipping & Fulfillment Services",
    description:
      "Efficient shipping and fulfillment are key to customer satisfaction and retention. We connect your Shopify store with top shipping providers, automating label printing, tracking. Get your inventory updated to ensure timely and accurate deliveries.",
  },
  {
    title: "Chatbot Integration",
    description:
      "Instant customer support enhances the shopping experience and boosts conversions. We integrate AI chatbots that provide 24/7 assistance, answer queries, and guide visitors. The time is now to reduce response times and increase engagement.",
  },
  {
    title: "OMS Integration",
    description:
      "Centralized order management streamlines processing and inventory control across channels. Our OMS integrations help maintain accurate stock levels, speed up fulfillment. Improve customer service that drives your store’s growth and scalability.",
  },
];

const engagementModels = [
  {
    model: "Fixed Price",
    bestFor: "New Store Launch",
    features: [
      "Defined scope and deliverables",
      "Upfront pricing",
      "Milestone-based payments",
    ],
    payment: "One-time payment after milestones completed",
  },
  {
    model: "Monthly Retainer",
    bestFor: "Ongoing Store Management & Growth",
    features: [
      "Continuous updates and support",
      "Flexible priority changes",
      "Extended team integration",
    ],
    payment: "Monthly subscription, flexible term",
  },
  {
    model: "Dedicated Team",
    bestFor: "Large Projects & Scaling Needs",
    features: [
      "Customized team setup",
      "Full collaboration with your in-house team",
      "High control over development",
    ],
    payment: "Monthly fee per team member, long-term commitment",
  },
];
const faqs = [
  {
    question: "How long does it take to build a custom e-commerce website?",
    answer:
      "Typically, it takes 6 to 12 weeks, depending on the project’s complexity and features. We keep you updated throughout the process to ensure timely delivery.",
  },
  {
    question: "Can you integrate my existing inventory and payment systems?",
    answer:
      "Yes, we specialize in integrating third-party platforms like inventory management and payment gateways to create a seamless experience for you and your customers.",
  },
  {
    question: "Will my website be optimized for mobile devices?",
    answer:
      "Absolutely. Every website we build is fully responsive, ensuring it works smoothly on smartphones, tablets, and desktops.",
  },
  {
    question: "What kind of support do you provide after the website launches?",
    answer:
      "We offer ongoing maintenance, security updates, and technical support to keep your store running smoothly and adapt to your evolving needs.",
  },
];


function Shopify() {
  const [shopifyImages, setShopifyImages] = useState([]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [openIndex, setOpenIndex] = useState(0);
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("https://my-gunter-project-server.vercel.app/shopify");
        const data = await res.json();
        setShopifyImages(data);
      } catch (error) {
        console.error("Error fetching Shopify images:", error);
      }
    };
    fetchImages();
  }, []);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-black min-h-screen py-5 text-white">
      {/* Carousel Section */}
      <section className="w-full mx-auto mb-10 px-5">
        <Zoom triggerOnce>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="w-full"
          >
            {shopifyImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img.imageUrl}
                  alt={`Shopify Slide ${index}`}
                  className="w-full shadow-md h-[300px] lg:h-[400px] object-cover rounded-xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Zoom>
      </section>

    {/* Introduction Section */}
<section className="text-white px-5 md:px-20 mt-16">
  <Slide direction="up" triggerOnce>
    <h2 className="text-2xl lg:text-4xl font-bold text-center text-purple-500 mb-4">
      Expert Shopify Store Development & Management Services
    </h2>
  </Slide>
  <Fade cascade triggerOnce>
    <p className="text-gray-300 max-w-4xl mx-auto text-center mb-6">
      We offer personalized store development, user-centric design, reliable management services with expert support — everything you need for your brand’s ultimate success.
      <br />
      <span className="font-semibold text-amber-400">Contact us now and get ready to place your brand’s store at the top of the Shopify market!</span>
    </p>
    <div className="text-center">
      <Link
        to="/contact"
        className="inline-block bg-purple-600 hover:bg-purple-700 transition text-white font-medium px-6 py-3 rounded-md shadow-md"
      >
        Book a Call
      </Link>
    </div>
  </Fade>
</section>

{/* Trusted Partner Section */}
<section className="mt-16 px-5 md:px-20 text-white">
  <Slide direction="left" triggerOnce>
    <h2 className="text-xl lg:text-2xl font-bold mb-4 text-center text-amber-500">
      Your Trusted Partner for Shopify Store Development
    </h2>
  </Slide>
  <Fade cascade direction="up" triggerOnce>
    <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
      At Imagine Dream World, our professional e-commerce team brings years of experience in designing custom-made Shopify stores with full management services. We combine innovative design, smooth integrations, and rapid performance — all with continuous support until your dream comes true.
    </p>

    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-purple-600 text-lg font-semibold mt-16"
    >
      <div>
        <p className="text-4xl font-bold text-white">
          {inView && <CountUp end={1000} duration={4} />}+
        </p>
        <p className="mt-2">Successful Projects</p>
      </div>

      <div>
        <p className="text-4xl font-bold text-white">
          {inView && <CountUp end={500} duration={4} />}+
        </p>
        <p className="mt-2">Happy Clients</p>
      </div>

      <div>
        <p className="text-4xl font-bold text-white">
          {inView && <CountUp end={100} duration={4} />}+
        </p>
        <p className="mt-2">Experts</p>
      </div>
    </div>
  </Fade>
</section>

{/* Offerings Section */}
<div className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-12"
      >
        We Offer Expert Shopify Store Development & Management Solutions
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-stone-900 shadow-lg rounded-2xl p-6 hover:shadow-2xl"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-amber-500 mb-2">{service.title}</h3>
            <p className="text-gray-300 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    <section className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-amber-500 mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Maximize Your Shopify Store Potential with Advanced Integrations
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {integrations.map((item, index) => (
          <motion.div
            key={index}
            className="bg-stone-900 shadow-md rounded-xl p-6 border-l-4 border-amber-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-purple-600 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-10 px-4 max-w-6xl mx-auto text-center">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-purple-600 mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Shopify Development Process in 4 Simple Steps
      </motion.h2>

      <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-stone-900 shadow-xl rounded-2xl p-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-amber-500 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-purple-700 mb-12"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Imagine Dream World is the Perfect Choice for Your Shopify Store
      </motion.h2>

      <div className="grid grid-cols-1 gap-8">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            className="bg-stone-900 shadow-lg rounded-xl p-6 border-l-4 border-purple-600"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-amber-500 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>


{/* Testimonials Section */}
<section className="mt-10 px-5 md:px-20 text-white">
  <Zoom triggerOnce>
    <h2 className="text-xl lg:text-3xl font-bold mb-6 text-center text-purple-600">What Our Clients Say</h2>
  </Zoom>
  <Fade cascade direction="up" triggerOnce>
    <div className="space-y-6">
      {[
        {
          name: "Sarah J., Boutique Owner",
          quote: "Imagine Dream World transformed my Shopify store beyond expectations. Their attention to detail and quick response made launching stress-free. Sales have noticeably increased thanks to their expert design and management."
        },
        {
          name: "Lina K., Fashion Brand Founder",
          quote: "Working with Imagine Dream World was a game-changer. Their Shopify development process is smooth, and their ongoing support keeps my store running flawlessly."
        },
        {
          name: "Emily T., Home Decor Seller",
          quote: "The marketing automation they set up has increased my repeat sales and customer engagement. Their knowledge of Shopify and marketing tools is impressive."
        }
      ].map((item, i) => (
        <div key={i} className="bg-zinc-800 p-5 rounded-md shadow-md border border-zinc-600">
          <p className="italic text-gray-300">“{item.quote}”</p>
          <p className="mt-2 text-right text-amber-500 font-semibold">— {item.name}</p>
        </div>
      ))}
    </div>
  </Fade>
</section>
<section className="py-16 px-4 max-w-6xl mx-auto text-center">
      {/* Heading */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-amber-500 mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Partner with Us to Turn Your Vision into Reality
      </motion.h2>

      <motion.p
        className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Your dream Shopify store is just a call away. Imagine Dream World turns
        ideas into powerful, sales-driving realities. Start your journey with
        us! Contact us today and watch your business soar!
      </motion.p>

      {/* Subheading */}
      <motion.h3
        className="text-2xl font-semibold text-purple-600 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Choose the Engagement Model That Fits Your Shopify Goals
      </motion.h3>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
  {engagementModels.map((item, idx) => (
    <motion.div
      key={idx}
      className="bg-stone-900 shadow-lg rounded-xl p-6 border-t-4 border-amber-500 flex flex-col justify-between"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.2 }}
      viewport={{ once: true }}
    >
      <div>
        <h4 className="text-xl font-bold text-purple-700 mb-2">
          {item.model}
        </h4>
        <p className="text-sm font-semibold text-amber-500 mb-4">
          Best For: {item.bestFor}
        </p>
        <ul className="list-disc list-inside text-gray-300 text-sm mb-4">
          {item.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-300 font-medium mb-6">
          <strong>Payment & Commitment:</strong> {item.payment}
        </p>
      </div>
      <Link to="/contact" className="mt-auto">
        <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 rounded transition hover:cursor-pointer">
          Book Your Order
        </button>
      </Link>
    </motion.div>
  ))}
</div>

    </section>

    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-stone-800 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center text-left p-4 text-white font-medium hover:bg-stone-700 transition"
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-4 pb-4 text-sm text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>

{/* CTA Section */}
{/* <section className="mt-16 px-5 md:px-20 text-white text-center">
  <Fade triggerOnce>
    <h2 className="text-2xl font-bold text-purple-600 mb-4">
      Partner with Us to Turn Your Vision into Reality
    </h2>
    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
      Your dream Shopify store is just a call away. Imagine Dream World turns ideas into powerful, sales-driving realities. Contact us today and watch your business soar!
    </p>
    <Link
      to="/contact"
      className="inline-block bg-amber-500 hover:bg-amber-600 transition text-black font-semibold px-6 py-3 rounded-md shadow"
    >
      Book Your Order
    </Link>
  </Fade>
</section> */}
<section className="mt-5">
  <NewSection></NewSection>
</section>


    </div>
  );
}

export default Shopify;
