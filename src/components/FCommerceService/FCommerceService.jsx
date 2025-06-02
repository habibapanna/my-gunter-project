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
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStore, FaListAlt, FaCreditCard, FaHeadset, FaFacebook, FaFacebookMessenger, FaTags, FaAd,  FaCheckCircle } from "react-icons/fa";
import NewSection from "../NewSection/NewSection";

const terms = [
  {
    term: "SKU (Stock Keeping Unit)",
    definition:
      "A unique code is used to identify and track each individual product in your inventory. It helps manage stock and sales efficiently."
  },
  {
    term: "Facebook Pixel",
    definition:
      "A small piece of code is added to your website that tracks visitor actions. It helps you run targeted ads and measure their effectiveness on Facebook and Instagram."
  },
  {
    term: "Checkout Funnel",
    definition:
      "The step-by-step process a customer goes through to complete a purchase, from adding products to the cart to final payment."
  },
  {
    term: "Payment Gateway",
    definition:
      "The technology that securely processes online payments from customers, such as credit card or digital wallet transactions."
  },
  {
    term: "Shopping Cart",
    definition:
      "The virtual basket where customers collect products they want to buy before checking out."
  },
  {
    term: "Inventory Management",
    definition:
      "The system is used to monitor, update, and control the stock of products to avoid shortages or overstocking."
  },
  {
    term: "Messenger Commerce",
    definition:
      "Selling products directly through Facebook Messenger using automated chatbots for ordering and customer support."
  },
  {
    term: "Abandoned Cart Recovery",
    definition:
      "Techniques or tools that help remind customers to complete their purchase if they leave without paying."
  },
  {
    term: "Product Catalog",
    definition:
      "A digital listing of all the products available for sale, often synced across platforms like your website and Facebook Shop."
  },
  {
    term: "Social Commerce",
    definition:
      "The process of buying and selling products directly through social media platforms such as Facebook and Instagram."
  },
  {
    term: "Conversion Rate",
    definition:
      "The percentage of visitors to your store who complete a purchase. Higher conversion rates mean more effective sales processes."
  },
  {
    term: "Dropshipping",
    definition:
      "A retail fulfillment method where you don’t keep products in stock but instead transfer customer orders to a supplier who ships directly."
  },
  {
    term: "Order Fulfillment",
    definition:
      "The entire process of receiving, processing, and delivering orders to customers."
  }
];
const faqs = [
  {
    question:
      "How long does it usually take to get my online store and social media shops up and running?",
    answer:
      "It depends on your needs, but most setups take about 2 to 4 weeks. We make sure everything’s ready and working smoothly before you launch.",
  },
  {
    question: "Can you help me add different payment options for my customers?",
    answer:
      "Definitely! We set up multiple secure payment methods like credit cards, digital wallets, and local options so your customers can pay easily and safely.",
  },
  {
    question:
      "Will you help me keep my inventory updated across all platforms?",
    answer:
      "Yes, we make sure your inventory stays synced between your online store and social shops to avoid overselling and keep stock accurate in real time.",
  },
  {
    question: "Will my store work well on mobile devices?",
    answer:
      "Absolutely! We design your store and shops to look great and work perfectly on phones, tablets, and desktops for a smooth shopping experience everywhere.",
  },
];
const services = [
  {
    title: "Online Store Setup & Design",
    description:
      "A well-designed online store is the root of successful e-commerce.. It attracts customers and provides a seamless shopping experience. We specialize in designing customized and visually appealing stores customized to your brand. From platform selection to user-friendly layouts, we ensure your store is ready to convert visitors into buyers.",
    icon: <FaStore className="text-2xl text-amber-500" />,
  },
  {
    title: "Product Catalog Management",
    description:
      "An accurate and well-organized product catalog is vital for customer trust and sales growth. We manage your entire product range by updating descriptions, images, prices, and stock levels regularly. Our approach ensures your catalog remains current, easy to browse, and optimized for better customer engagement.",
    icon: <FaListAlt className="text-2xl text-amber-500" />,
  },
  {
    title: "Order & Payment Management",
    description:
      "Smooth order processing and secure payment handling are essential for customer satisfaction. We implement systems that track orders efficiently from purchase to delivery. Additionally, we integrate trusted payment gateways to provide your customers with a safe and hassle-free checkout experience.",
    icon: <FaCreditCard className="text-2xl text-amber-500" />,
  },
  {
    title: "Customer Support Integration",
    description:
      "Effective customer support strengthens brand loyalty and encourages repeat business. We integrate live chat, help desk solutions, and comprehensive FAQ sections to ensure your customers receive quick and helpful responses. Our tools are designed to resolve issues promptly and enhance overall satisfaction.",
    icon: <FaHeadset className="text-2xl text-amber-500" />,
  },
  {
    title: "Facebook & Instagram Shop Setup",
    description:
      "Expanding your sales channels through social media shops helps you reach a wider audience. We set up and optimize your Facebook and Instagram shops, ensuring your products are displayed correctly and comply with platform policies. This enables you to sell directly to social media users with ease.",
    icon: <FaFacebook className="text-2xl text-amber-500" />,
  },
  {
    title: "Messenger Commerce Setup",
    description:
      "Instant communication via Messenger increases customer engagement and sales. We deploy intelligent chatbots and automated replies that answer questions, provide product information, and assist with order placement 24/7. Utilize automation to improve response times and customer experience.",
    icon: <FaFacebookMessenger className="text-2xl text-amber-500" />,
  },
  {
    title: "Social Media Product Tagging & Promotions",
    description:
      "Tagging products in social media posts and stories simplifies the shopping journey. We help you implement product tags and design targeted promotions that boost visibility and help with purchases. Turn your social media presence into a powerful sales tool.",
    icon: <FaTags className="text-2xl text-amber-500" />,
  },
  {
    title: "Facebook Pixel & Ad Integration",
    description:
      "Tracking user behavior through Facebook Pixel is crucial for effective advertising. We set up and manage Pixel integration to collect valuable data on customer actions. This insight helps us to optimize your ad campaigns, improve targeting, and maximize your return on investment.",
    icon: <FaAd className="text-2xl text-amber-500" />,
  },
];
const growthBenefits = [
  {
    title: "Wider Reach",
    description:
      "Expand your business by selling to customers globally, without any geographic restrictions.",
  },
  {
    title: "24/7 Availability",
    description:
      "Keep your store open around the clock to capture sales anytime, anywhere.",
  },
  {
    title: "Better Customer Insights",
    description:
      "Gain valuable data from analytics and social platforms to target your audience effectively.",
  },
  {
    title: "Cost-Effective Marketing",
    description:
      "Reduce acquisition costs by utilizing targeted social media ads and organic engagement.",
  },
];
const steps = [
  {
    title: "Consultation & Strategy",
    description:
      "We begin by understanding your business goals and target audience. Then, we develop a tailored e-commerce strategy to ensure your online store meets your growth objectives effectively.",
  },
  {
    title: "Store & Shop Setup",
    description:
      "Our team sets up your online store and social media shops with optimized design and product listings. We ensure everything is ready for a smooth customer experience and easy management.",
  },
  {
    title: "Launch & Marketing",
    description:
      "We help you launch your store with targeted marketing campaigns. Using social media ads and promotions, we drive traffic and sales from day one to maximize your store’s visibility.",
  },
  {
    title: "Ongoing Support & Growth",
    description:
      "After launch, we provide continuous support, monitoring performance, and making improvements. Our goal is to help your business grow steadily with updated strategies and technical assistance.",
  },
];
const features = [
  {
    title: "Expert Team with Proven Results",
    description:
      "Our skilled team knows what it takes to grow your online business. With a track record of real success, we turn your goals into measurable results you can count on.",
  },
  {
    title: "Customized Solutions for Your Business",
    description:
      "No two businesses are the same. We craft solutions that fit your unique needs, making sure your online store works exactly the way you want it to—and drives real growth.",
  },
  {
    title: "Dedicated Support & Training",
    description:
      "We’re with you every step of the way. From hands-on training to ongoing support, we make sure you feel confident managing your store and ready to tackle new challenges.",
  },
  {
    title: "Transparent Pricing & Flexible Packages",
    description:
      "No hidden fees, no surprises. Our clear pricing and flexible packages let you pick exactly what you need, so you get the best value without stretching your budget.",
  },
  {
    title: "Cutting-Edge Tools & Technologies",
    description:
      "We use the latest tools to keep your store running smoothly and your customers happy. From faster checkout to smarter marketing, we help you stay ahead of the curve.",
  },
];
const testimonials = [
  {
    quote:
      "Their Facebook shop setup made selling on social media effortless for us. We saw immediate engagement and sales growth. Plus, their quick support helped solve every issue fast.",
    author: "— Anika R., Owner of Urban Style Apparel",
  },
  {
    quote:
      "The Messenger chatbot they implemented boosted our customer response times dramatically. Customers get instant answers, which reduces abandoned carts and increases orders through Facebook.",
    author: "— Mark D., Founder of HomeTech Solutions",
  },
  {
    quote:
      "Thanks to their product tagging and social promotions, our Instagram followers started buying directly from posts. It’s been a game changer for expanding our reach and sales.",
    author: "— Priya S., Co-owner of Glow Beauty Products",
  },
  {
    quote:
      "Their team handled our online store setup and Facebook shop integration flawlessly. The launch was smooth, and ongoing marketing support helped us attract new customers consistently.",
    author: "— James L., CEO of Fresh Foods Market",
  },
  {
    quote:
      "With Facebook Pixel integration, we gained deep insights into customer behavior. This allowed us to optimize ads and improve targeting, which boosted our ROI significantly.",
    author: "— Neha K., Marketing Manager at Trendy Gadgets",
  },
];

function FCommerceService() {
  const [images, setImages] = useState([]);
  const [openIndex, setOpenIndex] = useState(0); // open first by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/f-commerce-service")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  // const services = [
  //   "Facebook Shop & Marketplace Setup – Build a professional storefront.",
  //   "Winning Product Research – Find trending & high-converting products.",
  //   "Facebook & Instagram Ads – Run high-ROI ad campaigns for maximum reach.",
  //   "Social Media Content & Engagement – Boost brand trust with eye-catching posts.",
  //   "Automated Order & Chatbot Setup – Streamline sales with automation tools.",
  //   "Influencer Marketing & Promotions – Leverage influencers to increase conversions.",
  // ];

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
        Grow Your Business at Scale 
        </h1>
      </Slide>
      <Fade cascade damping={0.1} triggerOnce>
        <p className="text-lg text-gray-300 font-normal max-w-4xl mx-auto text-center mb-10">
        Kickstart your digital journey with Imagine Dream World. We craft innovative online stores and social commerce solutions that drive revenue, enhance visibility, and ensure sustainable growth. Join us!

        </p>
      </Fade>

      {/* Request a Quote Button */}
      <div className="text-center mb-16">
        <Zoom triggerOnce>
          <button className="bg-purple-600 px-8 py-3 text-white font-semibold hover:bg-purple-500 transition duration-300 rounded shadow-animation text-lg hover:scale-[1.02] cursor-pointer">
            <Link to="/contact">Request a Quote</Link>
          </button>
        </Zoom>
      </div>

      {/* Partner Section */}
      <Slide direction="left" triggerOnce>
        <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-amber-500">
        Your Trusted Partner in E-Commerce Success

        </h2>
      </Slide>
      <Fade cascade damping={0.1} triggerOnce>
        <p className="text-gray-300 mx-auto text-[16px] mb-10">
        Imagine Dream World is your trusted partner in e-commerce and f-commerce success. We offer customized solutions that power your brand across leading platforms. Our expert team ensures efficient order management, secure payment integration, and effective marketing strategies to increase your sales range. With our dedicated ongoing support and advanced tools, reach wider audiences, engage customers, and grow your business steadily.
        </p>
      </Fade>

      {/* Challenges Section */}
      <section className="py-10  text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold mb-12 text-amber-500"
      >
        Our Core E-commerce & F-commerce Services for Your Business Growth
      </motion.h2>

      <div className="grid grid-cols-1 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-5 shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="flex items-start gap-4">
              <div>{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-purple-600">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-10 px-4 ">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold mb-12 text-purple-600"
      >
        E-Commerce & F-Commerce Glossary: Terms You Should Know
      </motion.h2>

      <div className="space-y-2 max-w-6xl mx-auto">
        {terms.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <FaCheckCircle className="text-purple-600 text-xl mt-1" />
            <div>
              <h3 className="font-semibold text-amber-500 text-lg mb-1">{item.term}</h3>
              <p className="text-gray-300 leading-relaxed">{item.definition}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-10 px-4 md:px-10 lg:px-20 bg-gradient-to-b from-black via-stone-900 to-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold text-center mb-12 text-purple-600"
      >
        Unlock Growth with Our E-Commerce & F-Commerce
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {growthBenefits.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className=" p-5"
          >
            <h3 className="text-xl font-semibold text-amber-500 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-10 px-4 md:px-10 lg:px-2 text-gray-900 dark:bg-black dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-14 text-amber-500 dark:text-amber-400"
      >
        Our Simple 4-Step Process to Your Online Success
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative p-6 rounded-xl bg-stone-900 border border-stone-800 dark:border-stone-600 shadow-sm"
          >
            <div className="absolute -top-5 left-4 bg-purple-600 text-white dark:bg-amber-500 w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow-md">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-amber-500 mb-2 mt-3">{step.title}</h3>
            <p className="text-gray-300">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-10 px-4 dark:bg-neutral-900 text-gray-900 dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-14 text-purple-600"
      >
        Partnering With Us Means You Gain a Trusted Ally
      </motion.h2>

      <div className="grid grid-cols-1 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="p-5 dark:border-stone-600 shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2 text-amber-500">
              {item.title}
            </h3>
            <p className="text-gray-300">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>

    <section className="py-10 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold mb-14 text-amber-500"
      >
        Real Quotes From Happy Clients
      </motion.h2>

      <div className="grid gap-8 grid-cols-1 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-stone-900 rounded-xl shadow-md border border-stone-800"
          >
            <p className="italic text-gray-300 mb-4">
              “{item.quote}”
            </p>
            <p className="font-semibold text-amber-500">
              {item.author}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
    <section className="py-1 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-600">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-stone-800 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left p-4 bg-stone-900 hover:bg-stone-800 transition duration-200"
            >
              <span className="font-medium text-amber-500 md:text-lg">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-4 md:px-6 pb-4 md:pb-6 text-sm text-gray-30"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
      <section className="mt-10">
        <NewSection></NewSection>
      </section>
    </div>
    </div>
  );
}

export default FCommerceService;
