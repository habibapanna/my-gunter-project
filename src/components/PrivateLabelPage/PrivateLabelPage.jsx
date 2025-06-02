import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

// Import some nice icons from react-icons
import { HiTrendingUp, HiSearch, HiColorSwatch, HiCube, HiLightBulb } from "react-icons/hi";
import { FaQuoteLeft, FaQuestionCircle } from "react-icons/fa";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import NewSection from "../NewSection/NewSection";

function PrivateLabelPage() {
  const [images, setImages] = useState([]);

  const services = [
    {
      title: "Winning Product Research",
      desc: "We identify high-demand, low-competition products tailored to your niche, helping you maximize profits and minimize risks.",
      icon: <HiTrendingUp className="text-purple-600" />,
    },
    {
      title: "Supplier Sourcing & Quality Control",
      desc: "We connect you with reliable suppliers and maintain strict quality standards to ensure your products meet customer expectations.",
      icon: <HiSearch className="text-purple-600" />,
    },
    {
      title: "Custom Branding & Packaging",
      desc: "Stand out on Amazon with unique logos, packaging designs, and labels that build brand loyalty and enhance perceived value.",
      icon: <HiColorSwatch className="text-purple-600" />,
    },
    {
      title: "Amazon SEO & Listing Optimization",
      desc: "Boost your product rankings with keyword-optimized titles, bullet points, and compelling descriptions that convert shoppers into buyers.",
      icon: <HiMiniRocketLaunch className="text-purple-600" />,
    },
    {
      title: "Inventory & Logistics Management",
      desc: "Seamlessly manage FBA storage, shipping, and restocking to keep your supply chain running smoothly and customers happy.",
      icon: <HiCube className="text-purple-600" />,
    },
    {
      title: "Amazon PPC & Digital Marketing",
      desc: "Increase product visibility and sales with expertly crafted ad campaigns and targeted marketing strategies.",
      icon: <HiLightBulb className="text-purple-600" />,
    },
  ];

  // Testimonials sample
  const testimonials = [
    {
      name: "Lisa R.",
      role: "Home Goods Seller",
      quote: "“The quality checks they do on every order really show. Returns are handled fast, which keeps our customers trusting us more than ever.”",
    },
    {
      name: "James P.",
      role: "Sports Equipment Manufacturer",
      quote: "Coordinating multiple warehouses was tough before. Now, thanks to Imagine Dream World, everything runs smoothly, deliveries are faster, and costs are down.",
    },
    {
      name: "David L.",
      role: "Electronics Distributor",
      quote: "They get our brand perfectly. Their custom packaging and kitting make our products stand out, and the quality is always spot on.",
    },
  ];

  // FAQ sample
  const faqs = [
    {
      question: "What is Private Label?",
      answer: "Private Label means you sell products manufactured by a third party but branded with your own logo and packaging.",
    },
    {
      question: "Do you help with product research?",
      answer: "Yes, we provide in-depth market analysis to identify trending, low-competition products tailored for you.",
    },
    {
      question: "Can you manage my Amazon PPC campaigns?",
      answer: "Absolutely! Our experts create targeted ad campaigns that increase visibility and sales efficiently.",
    },
  ];

  useEffect(() => {
    fetch('https://my-gunter-project-server.vercel.app/private-labels')
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen pt-12 pb-20 px-5 lg:px-20">
      {/* Carousel */}
      <section className="mx-auto mb-14 relative max-w-6xl rounded-xl overflow-hidden shadow-lg">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          className="rounded-xl"
          grabCursor={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={img.imageUrl}
                  alt={`Slide ${index}`}
                  className="w-full h-[320px] lg:h-[450px] object-cover brightness-90 hover:scale-105 transition-transform duration-600 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl lg:text-4xl font-extrabold mb-6 text-purple-600 drop-shadow-lg"
        >
          Elevate Your Brand with Our Private Label & Branding Services
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-300 text-lg lg:text-xl leading-relaxed"
        >
          Launch your Amazon FBA Private Label with confidence. Our expert team offers end-to-end solutions to help you discover winning products, create compelling brands, optimize listings, and scale your business effortlessly.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-amber-500 border-b border-purple-600 pb-3 text-center lg:text-left">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, desc, icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-zinc-900 rounded-xl p-6 shadow-lg hover:shadow-purple-600 transition-shadow duration-400 cursor-default flex flex-col"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-bold mb-3 text-purple-600">{title}</h3>
              <p className="text-gray-300 flex-grow leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Extra Text Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto text-center text-gray-300 text-base lg:text-lg leading-relaxed"
        >
          <p>
            Partnering with us means gaining a trusted ally who understands the complexities of Amazon FBA. From market trends to logistics, we handle it all, allowing you to focus on growing your brand.
          </p>
          <p className="mt-4">
            Whether you’re a seasoned seller or just starting out, our comprehensive services are tailored to meet your unique business needs and goals. Let's create a brand that not only sells but also builds lasting customer relationships.
          </p>
        </motion.div>

        {/* Testimonials */}
        <section className="mt-24 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-amber-500 border-b border-purple-600 pb-3 text-center lg:text-left">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map(({ name, role, quote }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                className="bg-zinc-900 rounded-xl p-8 shadow-lg hover:shadow-purple-600 transition-shadow duration-400 flex flex-col"
              >
                <FaQuoteLeft className="text-purple-600 text-3xl mb-4" />
                <p className="text-gray-300 flex-grow italic leading-relaxed">"{quote}"</p>
                <div className="mt-6 font-semibold text-white">{name}</div>
                <div className="text-purple-500 text-sm">{role}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-24 max-w-6xl mx-auto bg-zinc-900 rounded-xl p-10 shadow-lg">
          <h2 className="text-3xl font-semibold mb-8 text-amber-500 border-b border-purple-600 pb-3 text-center lg:text-left">
            Why Choose Us?
          </h2>
          <ul className="space-y-5 text-gray-300 text-lg leading-relaxed list-disc list-inside max-w-3xl mx-auto lg:mx-0">
            <li>Deep industry expertise with proven success in Amazon FBA Private Label launches.</li>
            <li>Customized strategies tailored to your brand’s unique identity and goals.</li>
            <li>Full transparency and communication throughout the entire process.</li>
            <li>Dedicated support team ready to assist you at every step.</li>
            <li>Data-driven decisions powered by real market insights and trends.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-24 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10 text-amber-500 border-b border-purple-600 pb-3 text-center lg:text-left">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map(({ question, answer }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.4 }}
                className="bg-zinc-900 rounded-xl p-6 shadow-md cursor-default"
              >
                <div className="flex items-center gap-3 mb-2 text-purple-600 text-xl font-semibold">
                  <FaQuestionCircle />
                  {question}
                </div>
                <p className="text-gray-300">{answer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        {/* <section className="mt-28 text-center max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="text-xl text-purple-500 font-semibold"
          >
            Ready to take your Amazon business to the next level?
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="mt-6"
          >
            <Link
              to="/contact"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-7 rounded-lg shadow-lg transition-colors"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </section> */}
      </section>
      <section className="mt-20">
      <NewSection></NewSection>
      </section>
    </div>
  );
}

export default PrivateLabelPage;
