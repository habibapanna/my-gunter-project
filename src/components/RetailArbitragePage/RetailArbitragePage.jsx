import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaShopify, FaAmazon, FaEbay, FaEtsy } from "react-icons/fa";
import { TbBrandWalmart } from "react-icons/tb";
import { FaBoxOpen, FaFileAlt, FaChartLine, FaTruck, FaSearch, FaDollarSign } from "react-icons/fa";
import { ShoppingCart, Rocket, Crown } from 'lucide-react';

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
          <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-md shadow-lg hover:bg-amber-500 transition">
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

        {/* Unique Selling Points */}
        <section className="mb-14">
          <h3 className="text-2xl font-semibold mb-4 border-b-2 border-amber-400 pb-2">
            Why Our Hybrid Model Wins
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-3 max-w-4xl">
            <li><strong>Low Startup Costs</strong></li>
            <li><strong>Full-Cycle Expertise</strong></li>
            <li><strong>Advanced Automation</strong></li>
            <li><strong>Scalable Growth</strong></li>
            <li><strong>Strict Compliance</strong></li>
            <li><strong>Fast, Reliable Shipping</strong></li>
          </ul>
        </section>
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



        {/* 4-Step Process */}
        <section className="mb-14">
          <h3 className="text-2xl font-semibold mb-6 border-b-2 border-amber-400 pb-2">
            Get Started in 4 Easy Steps
          </h3>
          <ol className="list-decimal list-inside text-gray-300 space-y-4 max-w-4xl">
            <li><strong>Consultation:</strong> Understand your business goals.</li>
            <li><strong>Sourcing & Setup:</strong> Setup pricing, logistics, and listings.</li>
            <li><strong>Launch & Growth:</strong> Start strong with expert support.</li>
            <li><strong>Scale Up:</strong> Expand into new verticals and platforms.</li>
          </ol>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <button className="px-8 py-3 bg-purple-700 text-white font-semibold rounded-md shadow hover:bg-amber-500 transition">
            Schedule Your Free Consultation Today
          </button>
        </section>
        {/* Pricing Table */}
        <section className="mt-20 mb-14">
  <h3 className="text-3xl font-bold mb-12 text-center text-amber-500">
    Flexible Pricing Plans for Every Stage of Your Business
  </h3>

  <div className="grid gap-8 md:grid-cols-3">
    {/* Starter Plan */}
    <div className="bg-stone-900 rounded-2xl p-6 shadow-lg hover:shadow-amber-400/40 transition-shadow duration-300">
      <div className="flex justify-center mb-4 text-amber-400">
        <ShoppingCart className="w-10 h-10" />
      </div>
      <h4 className="text-xl font-bold text-purple-600 mb-2 text-center">Starter Plan</h4>
      <ul className="space-y-3 text-gray-300">
        <li>Product Sourcing Guidance</li>
        <li>Basic Order Fulfillment</li>
        <li>Inventory Tracking Setup</li>
        <li>Email Support</li>
        <li>Marketplace Compliance Tips</li>
        <li>— Advanced Product Research</li>
        <li>— Enhanced Order Fulfillment</li>
        <li>— Automated Inventory Updates</li>
        <li>— Listing Optimization</li>
        <li>— Priority Email & Chat Support</li>
      </ul>
    </div>

    {/* Growth Plan */}
    <div className="bg-stone-900 rounded-2xl p-6 shadow-lg hover:shadow-amber-400/40 transition-shadow duration-300">
      <div className="flex justify-center mb-4 text-amber-400">
        <Rocket className="w-10 h-10" />
      </div>
      <h4 className="text-xl font-bold text-purple-600 mb-2 text-center">Growth Plan</h4>
      <ul className="space-y-3 text-gray-300">
        <li>Product Sourcing Guidance</li>
        <li>Basic Order Fulfillment</li>
        <li>Inventory Tracking Setup</li>
        <li>Email Support</li>
        <li>Marketplace Compliance Tips</li>
        <li>Advanced Product Research</li>
        <li>Enhanced Order Fulfillment</li>
        <li>Automated Inventory Updates</li>
        <li>Listing Optimization</li>
        <li>— Priority Email & Chat Support</li>
      </ul>
    </div>

    {/* Premium Plan */}
    <div className="bg-stone-900 rounded-2xl p-6 shadow-lg hover:shadow-amber-400/40 transition-shadow duration-300">
      <div className="flex justify-center mb-4 text-amber-400">
        <Crown className="w-10 h-10" />
      </div>
      <h4 className="text-xl font-bold text-purple-600 mb-2 text-center">Premium Plan</h4>
      <ul className="space-y-3 text-gray-300">
        <li>Product Sourcing Guidance</li>
        <li>Basic Order Fulfillment</li>
        <li>Inventory Tracking Setup</li>
        <li>Email Support</li>
        <li>Marketplace Compliance Tips</li>
        <li>Advanced Product Research</li>
        <li>Enhanced Order Fulfillment</li>
        <li>Automated Inventory Updates</li>
        <li>Listing Optimization</li>
        <li>Priority Email & Chat Support</li>
        <li>Monthly Performance Reports</li>
        <li>Pricing Strategy Guidance</li>
        <li>Priority Product Sourcing</li>
        <li>Dedicated Fulfillment Management</li>
        <li>Multi-Channel Inventory Integration</li>
        <li>24/7 Dedicated Account Manager</li>
        <li>Full Account Management & Strategy</li>
        <li>Custom Analytics & Growth Consultation</li>
        <li>Exclusive Supplier Access</li>
      </ul>
    </div>
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
    </div>
  );
}

export default RetailArbitragePage;
