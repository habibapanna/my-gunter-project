import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaShopify, FaAmazon, FaEbay, FaEtsy } from "react-icons/fa";
import { TbBrandWalmart } from "react-icons/tb";
import { FaBoxOpen, FaFileAlt, FaChartLine, FaTruck, FaSearch, FaDollarSign, FaHandshake, FaShippingFast, FaRocket, FaTools, FaBolt, FaShieldAlt  } from "react-icons/fa";
import { ShoppingCart, Rocket, Crown } from 'lucide-react';
import NewSection from "../NewSection/NewSection";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Strategic Product Sourcing",
    desc: "We help you source high-demand, high-margin products from trusted retailers using trend research and supplier vetting.",
    icon: <FaBoxOpen className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Amazon & Walmart Ungating Assistance",
    desc: "Get guided help through gated product approvals and documentation prep.",
    icon: <FaFileAlt className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Profit Analysis & Pricing Strategy",
    desc: "Maximize margins with data-backed pricing and dynamic adjustment tactics.",
    icon: <FaChartLine className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "FBA Prep & Logistics",
    desc: "From labeling to packaging and shipping, we ensure smooth inventory flow that meets all Amazon standards.",
    icon: <FaTruck className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Amazon SEO & Listing Optimization",
    desc: "Boost your product ranking with keyword-rich titles, optimized images, and top-tier copy.",
    icon: <FaSearch className="text-4xl text-purple-600 mb-4" />,
  },
  {
    title: "Repricing & Sales Growth Strategy",
    desc: "Stay competitive with smart tools and pricing strategies tailored to real-time trends.",
    icon: <FaDollarSign className="text-4xl text-purple-600 mb-4" />,
  },
];

const plans = [
  {
    icon: <ShoppingCart className="w-10 h-10" />,
    title: "Starter Plan",
    price: "$40/month",
    features: [
      "Product Sourcing Guidance",
      "Basic Order Fulfillment",
      "Inventory Tracking Setup",
      "Email Support",
      "Marketplace Compliance Tips",
      "— Advanced Product Research",
      "— Enhanced Order Fulfillment",
      "— Automated Inventory Updates",
      "— Listing Optimization",
      "— Priority Email & Chat Support",
    ],
    button: "Launch Your Store",
  },
  {
    icon: <Rocket className="w-10 h-10" />,
    title: "Growth Plan",
    price: "$60/month",
    features: [
      "Product Sourcing Guidance",
      "Basic Order Fulfillment",
      "Inventory Tracking Setup",
      "Email Support",
      "Marketplace Compliance Tips",
      "Advanced Product Research",
      "Enhanced Order Fulfillment",
      "Automated Inventory Updates",
      "Listing Optimization",
      "— Priority Email & Chat Support",
    ],
    button: "Upgrade for Growth",
  },
  {
    icon: <Crown className="w-10 h-10" />,
    title: "Premium Plan",
    price: "$89/month",
    features: [
      "Product Sourcing Guidance",
      "Basic Order Fulfillment",
      "Inventory Tracking Setup",
      "Email Support",
      "Marketplace Compliance Tips",
      "Advanced Product Research",
      "Enhanced Order Fulfillment",
      "Automated Inventory Updates",
      "Listing Optimization",
      "Priority Email & Chat Support",
      "Monthly Performance Reports",
      "Pricing Strategy Guidance",
      "Priority Product Sourcing",
      "Dedicated Fulfillment Management",
      "Multi-Channel Inventory Integration",
      "24/7 Dedicated Account Manager",
      "Full Account Management & Strategy",
      "Custom Analytics & Growth Consultation",
      "Exclusive Supplier Access",
    ],
    button: "Maximize Your Profits",
  },
];

const platforms = [
  {
    name: "Shopify",
    icon: <FaShopify className="text-4xl text-purple-600" />,
    description: "Easily manage your Shopify store with seamless sync.",
  },
  {
    name: "Amazon",
    icon: <FaAmazon className="text-4xl text-purple-600" />,
    description: "Automate listings and track sales on Amazon.",
  },
  {
    name: "Walmart",
    icon: <TbBrandWalmart className="text-4xl text-purple-600" />,
    description: "Sync your Walmart marketplace store effortlessly.",
  },
  {
    name: "eBay",
    icon: <FaEbay className="text-4xl text-purple-600" />,
    description: "Integrate your eBay listings with real-time updates.",
  },
  {
    name: "Etsy",
    icon: <FaEtsy className="text-4xl text-purple-600" />,
    description: "Manage your creative Etsy shop with ease.",
  },
];

const steps = [
  {
    title: 'Personalized Consultation',
    description:
      'We start with a thorough and custom consultation to understand your business goals and needs. This way, we will recommend the best strategies and products to maximize your store’s potential.',
    icon: <FaHandshake className="text-4xl text-amber-500 mb-4" />,
  },
  {
    title: 'Product & Supplier Onboarding',
    description:
      'We assist you in picking and onboarding reliable suppliers and high-demand products. This ensures a smooth start with quality inventory aligned to your target market.',
    icon: <FaBoxOpen className="text-4xl text-amber-500 mb-4" />,
  },
  {
    title: 'Integrated Order Fulfillment',
    description:
      'Our seamless fulfillment process manages orders from placement to delivery. We coordinate inventory, packaging, and shipping to guarantee timely and accurate order completion.',
    icon: <FaShippingFast className="text-4xl text-amber-500 mb-4" />,
  },
  {
    title: 'Ongoing Support & Optimization',
    description:
      'We provide continuous support and performance analysis. Regular optimization of listings, pricing, and operations helps you stay competitive and grow your business steadily.',
    icon: <FaChartLine className="text-4xl text-amber-500 mb-4" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const features = [
  {
    icon: <FaRocket className="text-amber-500 text-3xl mb-3" />,
    title: "Lower Startup Costs",
    desc: "Minimize your initial investment by reducing inventory risks and upfront expenses. Launch and grow without heavy financial burden.",
  },
  {
    icon: <FaTools className="text-amber-500 text-3xl mb-3" />,
    title: "Full-Cycle E-commerce Expertise",
    desc: "We offer support from product sourcing to customer service, ensuring seamless operations and sustained growth.",
  },
  {
    icon: <FaBolt className="text-amber-500 text-3xl mb-3" />,
    title: "Advanced Automation Tools",
    desc: "Leverage cutting-edge automation for inventory, repricing, and order processing to reduce errors and scale effectively.",
  },
  {
    icon: <FaChartLine className="text-amber-500 text-3xl mb-3" />,
    title: "Scalable Business Model",
    desc: "Our hybrid approach supports multi-platform growth and expansion, maintaining quality and control.",
  },
  {
    icon: <FaShieldAlt className="text-amber-500 text-3xl mb-3" />,
    title: "Compliance Guaranteed",
    desc: "We ensure full compliance with marketplace policies and legal standards to protect your account and reputation.",
  },
  {
    icon: <FaTruck className="text-amber-500 text-3xl mb-3" />,
    title: "Fast Shipping",
    desc: "Optimized logistics deliver quick and reliable shipping, enhancing customer satisfaction and boosting loyalty.",
  },
];


function RetailArbitragePage() {
  const [retailImages, setRetailImages] = useState([]);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/retails")
      .then((res) => res.json())
      .then((data) => setRetailImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="bg- min-h-screen text-white px-4 sm:px-6 lg:px-12 py-10 max-w-7xl mx-auto">
      {/* Swiper Carousel */}
      <section className="mb-14 rounded-xl overflow-hidden shadow-2xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          className="rounded-xl"
        >
          {retailImages.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.imageUrl}
                alt={`Retail Slide ${index + 1}`}
                className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Content */}
      <motion.div
        className="max-w-6xl mx-auto p-6 md:p-12 font-sans text-gray-100"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <motion.header
  className="mb-14 text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeInUp}
>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-amber-500">
            Expert Retail Arbitrage, Online Arbitrage & Amazon/Walmart Dropshipping Solutions
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Scale Faster, Sell Smarter — Accelerate your online store’s success with our proven arbitrage solutions. Reliable sourcing, efficient fulfillment, and expert pricing strategies to drive consistent sales and lasting growth.
          </p>
          <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-md shadow-lg hover:bg-amber-500 transition hover:cursor-pointer">
            Request a Free Consultation
          </button>
          </motion.header>

        {/* Section Titles & Articles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-amber-500">
            Your Trusted Partner for Profitable eCommerce Growth
          </h2>
          <p className="text-gray-300 max-w-4xl">
            At Imagine Dream World, we empower e-commerce entrepreneurs to grow efficiently and profitably. With extensive experience in Retail Arbitrage, Online Arbitrage, and marketplace dropshipping, we combine industry expertise with innovative automation and personalized support.
          </p>
        </section>

        {/* Service Highlights */}
        <motion.section
  className="mb-14 max-w-6xl mx-auto px-4"
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
<motion.h3
    className="text-2xl font-semibold mb-8 border-b-2 border-amber-500 pb-2 text-purple-200"
    variants={fadeInUp}
  >
        Complete Retail Arbitrage & Dropshipping Services to Scale Your Store
        </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ title, desc, icon }, idx) => (
         <motion.article
         key={idx}
         className="bg-zinc-900 rounded-xl p-6 shadow-md hover:shadow-purple-600 transition-shadow duration-300 cursor-default flex flex-col items-center text-center"
         variants={fadeInUp}
       >
         {icon}
         <h4 className="text-xl font-semibold text-purple-600 mb-3">{title}</h4>
         <p className="text-gray-300">{desc}</p>
       </motion.article>
        ))}
      </div>
      </motion.section>

        {/* Dropshipping Overview */}
        <section className="mb-14">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-amber-500 pb-2">
            Amazon & Walmart Dropshipping — Sell Without Holding Inventory
          </h3>
          <p className="mb-6 text-gray-400 italic font-medium">
            Simplify Sales & Maximize Efficiency with 2-Step Dropshipping
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-3 max-w-4xl">
            <li><strong>Purchase in Wholesale:</strong> Lower costs, increase profit margins.</li>
            <li><strong>Third-Party Prep Centers:</strong> Compliance-ready packaging with fast delivery.</li>
            <li><strong>Marketplace Sales:</strong> Competitive listings, winning the Buy Box.</li>
            <li><strong>Direct Shipping:</strong> Seamless customer delivery, no branding issues.</li>
          </ul>
        </section>

        {/* Full Dropshipping Management */}
        <section className="mb-14">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-amber-500 pb-2">
            Complete Dropshipping Management on Amazon & Walmart
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-3 max-w-4xl">
            <li><strong>100% TOS-Compliant:</strong> Safe, approved supplier network.</li>
            <li><strong>Automated Order Fulfillment:</strong> Lightning-fast fulfillment workflows.</li>
            <li><strong>In-Depth Product Research:</strong> Market data used to pick winning products.</li>
            <li><strong>Full Account Management:</strong> End-to-end oversight and support.</li>
          </ul>
        </section>

        {/* Platform Integration */}
        <motion.section
  className="mb-14 max-w-6xl mx-auto px-4"
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
<motion.h3
    className="text-2xl font-semibold mb-6 border-b-2 border-amber-500 pb-2 text-purple-200"
    variants={fadeInUp}
  >
    Seamless Integration with Major E-Commerce Platforms
  </motion.h3>
  <motion.p
    className="mb-8 text-gray-300 max-w-3xl"
    variants={fadeInUp}
  >
    Manage your store effortlessly across platforms like:
  </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {platforms.map(({ name, icon, description }) => (
          <motion.div
          key={name}
          className="bg-zinc-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
          variants={fadeInUp}
        >
          <div className="mb-4">{icon}</div>
          <h4 className="text-xl font-semibold text-purple-600 mb-2">{name}</h4>
          <p className="text-gray-400 text-sm">{description}</p>
        </motion.div>
        ))}
      </div>
      </motion.section>
        {/* Case Studies */}
{/* Case Studies */}
<motion.section className="mb-14"
variants={staggerContainer}
initial="hidden"
whileInView="visible"
viewport={{ once: true }}>
  <h3 className="text-2xl font-semibold mb-6 border-b-2 border-amber-500 pb-2">
    Case Studies: Success Stories from Our Clients
  </h3>

  <div className="grid gap-6 md:grid-cols-2 text-gray-300">
    <div className="bg-stone-900 p-6 rounded-2xl shadow-lg hover:shadow-amber-500/30 transition-shadow duration-300">
      <blockquote className="italic">
        “I was struggling to find profitable products, but their team really helped me narrow down my options. Their support made growing my store so much easier.”
      </blockquote>
      <footer className="mt-4 text-sm font-semibold text-amber-400">
        — Sarah M., Online Arbitrage Seller
      </footer>
    </div>

    <div className="bg-stone-900 p-6 rounded-2xl shadow-lg hover:shadow-amber-500/30 transition-shadow duration-300">
      <blockquote className="italic">
        “Their advice on sourcing and fulfillment was a game-changer. My sales jumped, and I finally feel like I have a solid system in place.”
      </blockquote>
      <footer className="mt-4 text-sm font-semibold text-amber-400">
        — James L., Retail Arbitrage Entrepreneur
      </footer>
    </div>

    <div className="bg-stone-900 p-6 rounded-2xl shadow-lg hover:shadow-amber-500/30 transition-shadow duration-300">
      <blockquote className="italic">
        “The pricing tips and inventory help saved me hours every week. I’m seeing better profits and less stress thanks to their guidance.”
      </blockquote>
      <footer className="mt-4 text-sm font-semibold text-amber-400">
        — Emily R., Amazon Seller
      </footer>
    </div>

    <div className="bg-stone-900 p-6 rounded-2xl shadow-lg hover:shadow-amber-500/30 transition-shadow duration-300">
      <blockquote className="italic">
        “I was worried about compliance issues, but they handled everything smoothly. Their professionalism gave me confidence to focus on expanding my business.”
      </blockquote>
      <footer className="mt-4 text-sm font-semibold text-amber-400">
        — David K., Walmart Marketplace Seller
      </footer>
    </div>
  </div>
</motion.section>

<section className="py-16 px-6 md:px-20 text-white">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center text-amber-400 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Unmatched Excellence in Our Hybrid Retail Arbitrage and Dropshipping Solution
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-2xl bg-stone-900 shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {item.icon}
            <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

        {/* 4-Step Process */}
        <section className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-amber-400">
          Get Started in 4 Easy Steps — Simple, Transparent, Effective
        </h2>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-stone-800 rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow duration-300"
            >
              {step.icon}
              <h3 className="text-xl font-semibold text-amber-300 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

        {/* Final CTA */}
        <section className="text-center">
          <button className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-md shadow hover:bg-amber-500 transition hover:cursor-pointer">
            Schedule Your Free Consultation Today
          </button>
        </section>
        {/* Pricing Table */}
        <section className="mt-20 mb-14">
      <h3 className="text-3xl font-bold mb-12 text-center text-amber-500">
        Flexible Pricing Plans for Every Stage of Your Business
      </h3>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className="bg-stone-900 rounded-2xl p-6 shadow-lg hover:shadow-amber-400/40 transition-shadow duration-300 flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex justify-center mb-4 text-amber-400">{plan.icon}</div>
              <h4 className="text-xl font-bold text-purple-600 mb-2 text-center">
                {plan.title}
              </h4>
              <p className="text-center text-amber-400 font-semibold text-lg mb-4">
                {plan.price}
              </p>
              <ul className="space-y-3 text-gray-300 text-sm">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex justify-center">
              <Link to="/contact">
              <button className="bg-amber-500 hover:bg-amber-400 text-black font-semibold py-2 px-4 rounded-lg transition duration-200 hover:cursor-pointer">
                {plan.button}
              </button></Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
{/* FAQ Accordion Section */}
<section className="mt-20 max-w-4xl mx-auto">
  <h3 className="text-3xl font-bold mb-8 text-center text-amber-500">
    Frequently Asked Questions
  </h3>

  {[
    {
      question: "How do you help me find profitable products for retail and online arbitrage?",
      answer:
        "We use a combination of market research, supplier insights, and pricing analysis to identify high-demand, low-competition products that maximize your profit margins.",
    },
    {
      question: "What kind of support do you provide for order fulfillment and inventory management?",
      answer:
        "Our services include streamlined order processing, inventory tracking, and timely shipping solutions to ensure your customers receive products quickly and your stock levels stay optimized.",
    },
    {
      question: "Can I switch plans as my business grows?",
      answer:
        "Absolutely. Our flexible pricing plans are designed to scale with your business, allowing you to upgrade or customize services anytime to match your evolving needs.",
    },
    {
      question: "How quickly can I expect to see results after using your services?",
      answer:
        "Results vary depending on your business size and effort, but many clients begin noticing improved sourcing efficiency and increased sales within the first few weeks.",
    },
    {
      question: "Do you provide support for multiple marketplaces like Amazon, Walmart, and eBay?",
      answer:
        "Yes, we specialize in managing and optimizing sales across major marketplaces, tailoring strategies to each platform’s unique requirements.",
    },
  ].map((item, index) => {
    const isOpen = index === 0;
    return (
      <details key={index} open={isOpen} className="mb-4 bg-stone-900 border border-gray-700 rounded">
        <summary className="cursor-pointer px-6 py-4 text-lg font-medium text-purple-600 hover:bg-gray-700 transition">
          {item.question}
        </summary>
        <div className="px-6 py-4 text-gray-300 border-t border-gray-700">
          {item.answer}
        </div>
      </details>
    );
  })}
</section>

      </motion.div>
      <section>
        <NewSection></NewSection>
      </section>
    </div>
  );
}

export default RetailArbitragePage;
