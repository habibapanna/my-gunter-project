import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import NewSection from "../NewSection/NewSection";
import { motion, AnimatePresence } from "framer-motion";

function WebDevelopment() {
  const [images, setImages] = useState([]);
  const [startCount, setStartCount] = useState(false);
  const { ref: sectionRef, inView } = useInView({ triggerOnce: true });
  const [activeIndex, setActiveIndex] = useState(0); // First FAQ open by default

  const toggleIndex = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const plans = [
    {
      title: "Basic",
      price: "$40/month",
      features: [
        "Custom-designed e-commerce website with intuitive navigation",
        "Fully responsive design optimized for all devices",
        "Essential product catalog management",
        "Secure payment gateway integration",
        "Basic post-launch support and maintenance",
      ],
    },
    {
      title: "Standard",
      price: "$60/month",
      features: [
        "All Basic features plus:",
        "Advanced inventory and product variant management",
        "Optimized shopping cart and streamlined checkout process",
        "Integration with third-party platforms (CRM, ERP, marketing tools)",
        "Enhanced security protocols and compliance",
        "Priority technical support and updates",
      ],
    },
    {
      title: "Premium",
      price: "$89/month",
      features: [
        "All Standard features plus:",
        "Performance tuning and technical enhancements for scalability",
        "Multi-channel sales integration (marketplaces, social media)",
        "Tailored solutions for complex business requirements",
        "Dedicated account manager for personalized service",
        "24/7 premium support with proactive monitoring",
      ],
    },
  ];

  const features = [
    {
      title: "Decades of Industry Experience",
      description:
        "Benefit from our years of developing successful e-commerce platforms. Our deep knowledge ensures your site is built on proven strategies, driving growth and delivering results from day one.",
    },
    {
      title: "Around-the-Clock Support",
      description:
        "Get peace of mind with our 24/7 support team. We’re always ready to resolve issues quickly, ensuring your website runs smoothly and your customers stay happy, no matter the hour.",
    },
    {
      title: "Customized Solutions",
      description:
        "We don’t offer one-size-fits-all. Expect a website perfectly tailored to your brand, products, and business goals. This personal touch sets you apart and creates a memorable customer experience.",
    },
    {
      title: "Proactive Security Updates",
      description:
        "We continuously monitor and update your website’s security. This prevents threats, safeguards customer data, and ensures your online store remains a safe and reliable place to shop.",
    },
    {
      title: "Data-Driven Optimization",
      description:
        "We use analytics to understand your customer behavior and identify areas for improvement. This means your website is constantly evolving to boost conversions and maximize revenue.",
    },
    {
      title: "Transparent Communication",
      description:
        "Stay informed with clear, consistent updates throughout the development process. We keep you in the loop, ensuring your vision is realized and your expectations are exceeded.",
    },
  ];
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  
  const steps = [
    {
      title: "Consultation & Requirement Analysis",
      desc: "We start by understanding your business goals and specific needs. Our experts collect detailed requirements to ensure the e-commerce solution perfectly meets your vision and target audience. We ensure to set a strong foundation for success.",
    },
    {
      title: "Design & Prototype Approval",
      desc: "Our design team creates clear and user-friendly layouts and interactive prototypes. You review and approve each element to ensure that the website meets your expectations before development begins.",
    },
    {
      title: "Development & Integration",
      desc: "Our developers build your online store using the latest technologies. We integrate essential features like payment gateways, inventory systems, and third-party tools to create a seamless shopping experience.",
    },
    {
      title: "Testing & Quality Assurance",
      desc: "Before launch, we thoroughly test your website on multiple devices and browsers. Our quality checks ensure functionality, speed, security, and usability meet the highest standards.",
    },
    {
      title: "Launch & Deployment",
      desc: "We carefully deploy your website to a secure and reliable hosting environment. Our team monitors the launch closely to ensure a smooth transition with minimal downtime.",
    },
    {
      title: "Ongoing Support & Optimization",
      desc: "Post-launch, we provide continuous support and regular updates. We monitor performance, fix issues promptly. Get your store optimized and adapted to changing market needs and customer behavior.",
    },
  ];

  const serviceItems = [
    {
      title: "Custom E-commerce Website Design",
      description:
        "We create unique e-commerce websites just for your brand identity. Our designs focus on clear navigation and attractive layouts that engage your customers from the first visit. Every element reflects your business values and attracts your target audience. Build trust and drive more purchases.",
    },
    {
      title: "Mobile-Responsive Development",
      description:
        "Your online store will work seamlessly on phones and tablets. The layout adjusts to screen size, offering a smooth shopping experience. Keep visitors engaged and improve SEO with a responsive design.",
    },
    {
      title: "Secure Payment Gateway Integration",
      description:
        "Connect to trusted payment systems like credit cards and digital wallets. Ensure safe transactions with strong security. Boost trust, reduce cart abandonment, and stay compliant.",
    },
    {
      title: "Shopping Cart & Checkout Optimization",
      description:
        "Simplify the checkout process with fewer steps and guest checkout options. Enhance customer satisfaction, reduce abandoned carts, and increase sales with a seamless flow.",
    },
    {
      title: "Product Management System",
      description:
        "Easily add, edit, and manage products with no technical skills needed. Use bulk uploads and stock alerts to stay organized and show accurate info to avoid lost sales.",
    },
    {
      title: "Technical Enhancement",
      description:
        "Boost your website’s speed, security, and features regularly. We fix bugs, update tools, and enhance functionality so your store runs smoothly and competitively.",
    },
    {
      title: "Platform Integration & Setup",
      description:
        "Connect with CRMs, inventory, and marketing tools to automate tasks and make data-driven decisions. Save time and streamline operations with integrated systems.",
    },
    {
      title: "Website Maintenance & Support",
      description:
        "Get ongoing support, updates, and security monitoring. We handle issues quickly and keep your site running smoothly with regular backups and maintenance.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    }),
  };
  
  const values = [
    {
      title: "Increased Sales",
      description:
        "Partnering with us means your online store is built to convert visitors into loyal customers. Expect a boost in sales through improved user experience and effective e-commerce strategies.",
    },
    {
      title: "Enhanced Brand Credibility",
      description:
        "A professional, secure, and user-friendly website builds trust with your customers. We help you establish a strong brand presence that stands out and earns customer loyalty.",
    },
    {
      title: "Scalable Solutions",
      description:
        "Our e-commerce platforms grow with your business. If you’re increasing your product list or customer base, your website will handle increased demand without losing performance or speed.",
    },
    {
      title: "Secure and Reliable Platform",
      description:
        "We highly focus on your store’s security with the latest protections. A reliable platform keeps your site running efficiently, safeguards customer data, and minimizes downtime.",
    },
    {
      title: "Dedicated Support",
      description:
        "Our team is always ready to assist you. Starting from quick issue solving to ongoing advice, we provide the support you need to keep your e-commerce business thriving.",
    },
  ];
  
  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/web-development")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  const testimonials = [
    {
      name: "Sarah Ahmed, CEO of TrendyWear",
      quote:
        "I wasn’t sure what to expect, but the team made everything easy. Our new site looks great and sales have definitely picked up.",
    },
    {
      name: "Rajib Khan, Marketing Head at FreshFoods",
      quote:
        "The mobile site works flawlessly, and customers keep telling us how easy it is to shop. Definitely recommend their work!",
    },
    {
      name: "Nadia Rahman, Owner of HomeStyle Decor",
      quote:
        "They listened carefully to what we needed and delivered on time. The secure payment setup made our customers feel safe.",
    },
    {
      name: "Imran Hossain, Operations Manager at TechGadgets",
      quote:
        "Professional team who really know their stuff. They fixed issues fast and communication was clear throughout the project.",
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

  return (
   <div>
    <Fade>
    <div className="bg-black text-white min-h-screen py-10 px-4 lg:px-20">
      {/* Hero & Carousel */}
      <section className="mb-10">
        <Zoom triggerOnce>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="rounded-xl overflow-hidden"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={img.imageUrl}
                  alt={`Slide ${idx}`}
                  className="w-full h-[300px] lg:h-[400px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Zoom>
      </section>

      {/* Intro Text */}
      <Fade cascade direction="up" triggerOnce>
        <h1 className="text-purple-600 text-3xl lg:text-4xl font-bold text-center mb-6">
          Premier E-commerce Web Development Service for Lasting Growth
        </h1>
        <p className="text-gray-300 text-center max-w-4xl mx-auto mb-4">
          We offer innovative, secure, and user-friendly e-commerce web
          development services to elevate your brand. Increase sales and create
          seamless shopping experiences that keep customers coming back.
        </p>
        <div className="text-center mt-6">
          <Link
            to="/contact"
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-md font-semibold"
          >
            Get a Free Consultation
          </Link>
        </div>
      </Fade>

      {/* Key Stats */}
      <section
      ref={sectionRef}
      className="grid grid-cols-2 sm:grid-cols-4 text-center gap-6 mt-12"
    >
      <div>
        <h2 className="text-3xl font-bold text-amber-500">
          {startCount ? <CountUp end={60} duration={5} delay={0.3} /> : 0}+
        </h2>
        <p className="text-gray-400">Expert Web Developers</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-amber-500">
          {startCount ? <CountUp end={80} duration={5} delay={0.6} /> : 0}+
        </h2>
        <p className="text-gray-400">Successful Projects</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-amber-500">Excellent</h2>
        <p className="text-gray-400">Customer Reviews</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-amber-500">4.8 ★</h2>
        <p className="text-gray-400">On Clutch</p>
      </div>
    </section>

      {/* Services */}
      <section className="px-4 py-12 md:px-20 text-gray-800 dark:text-white">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl text-purple-600 font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Custom E-commerce Web Development Solutions for Unmatched Growth
        </motion.h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {serviceItems.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl shadow-lg bg-stone-900 dark:border-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl text-amber-500 font-semibold mb-2">{item.title}</h3>
            <p className="text-sm leading-relaxed text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
    <section className="max-w-6xl mx-auto px-4 py-16 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-amber-500">
        Exceptional Value You Gain by Partnering with Us
      </h2>
      <div className="grid gap-8 grid-cols-1">
        {values.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="bg-stone-900 p-6 rounded-xl shadow hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-amber-400 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
      {/* Development Steps */}
      <section className="max-w-6xl mx-auto px-4 py-10 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-amber-500 mb-12">
        Just 6 Steps to Build Your Perfect Online Store
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stepVariants}
            className="bg-zinc-900 border border-amber-500 p-6 rounded-xl shadow hover:shadow-amber-400/20 hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-xl font-semibold text-amber-400 mb-2">
              {index + 1}. {step.title}
            </h3>
            <p className="text-gray-300 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-4 py-10 text-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-amber-500 mb-12">
        Why Our E-commerce Website Development Services Are Premium
      </h2>

      <div className="grid gap-8 grid-cols-1">
        {features.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-amber-300/20 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-amber-400 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

      {/* Testimonials */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-amber-500 mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 p-5 rounded-md border border-zinc-700"
            >
              <p className="italic text-gray-300 mb-2">“{item.quote}”</p>
              <p className="text-purple-500 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-amber-400 mb-6"
        >
          Ready to Launch Your Online Store?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Are you prepared to elevate your business with a high-performance online store? Partner with us to create a secure, scalable, and user-friendly e-commerce platform. Get in touch now to start building your competitive advantage.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-zinc-900 border border-amber-500 rounded-xl shadow-lg hover:shadow-amber-300/30 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-amber-400 mb-2">{plan.title}</h3>
                <p className="text-xl font-semibold text-white mb-4">{plan.price}</p>
                <ul className="text-sm text-gray-300 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-left gap-2">
                      <span className="text-amber-400 font-bold">✔</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-6 bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 rounded-lg transition duration-300 hover:cursor-pointer">
                Confirm Your Order
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-amber-400 mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-700 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium text-white bg-zinc-900 hover:bg-zinc-800 transition"
                onClick={() => toggleIndex(index)}
              >
                <span>{faq.question}</span>
                <span className="text-amber-400">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-zinc-800 text-gray-300 text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Final CTA */}
      {/* <section className="text-center mt-20">
        <h2 className="text-3xl font-bold text-amber-500 mb-6">
          Ready to Launch Your Online Store?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Partner with us to build a secure, scalable, and user-friendly
          e-commerce platform. Let’s take your business to the next level!
        </p>
        <Link
          to="/contact"
          className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-md text-lg font-bold"
        >
          Contact Us Now
        </Link>
      </section> */}
      <section className="mt-20">
        <NewSection></NewSection>
      </section>
    </div>
    </Fade>
   </div>
  );
}

export default WebDevelopment;
