import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Slide, Fade } from "react-awesome-reveal";
import { FaDiamond } from "react-icons/fa6";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";
import { FiChevronRight } from "react-icons/fi"; 
import NewSection from "../NewSection/NewSection";
import { motion, AnimatePresence } from "framer-motion";


const faqs = [
  {
    question: "What types of digital marketing services do you offer?",
    answer:
      "We offer more than a number of digital marketing services. It includes social media marketing, content creation, email campaigns, and analytics tracking. We also offer search engine optimization and PPC to support your business growth.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "You can see the quick results with PPC. It only takes days or weeks to offer you the results. However, SEO and content marketing usually take time. Generally, it takes 3 to 6 months to build traffic.",
  },
  {
    question: "How do you measure digital marketing success?",
    answer:
      "We track KPIs to measure the success of our digital marketing strategies. For instance, website traffic, conversion rates, lead quality, and ROI. We also offer regular reporting. It helps us adjust strategies and get you the best results.",
  },
  {
    question: "Can you customize digital marketing strategies?",
    answer:
      "Yes, absolutely. We customize our digital marketing strategy based on your specific business needs. We ensure our marketing strategies are relevant, and effective. Our service makes sure they are aligned with your business objectives.",
  },
];

const testimonials = [
  {
    name: "Ahmed S.",
    role: "Retail Business Owner",
    quote:
      "Imagine Dream World transformed our digital presence. Their targeted strategies increased our website traffic and brought in quality leads fast."
  },
  {
    name: "Layla R.",
    role: "Marketing Manager",
    quote:
      "The team’s use of advanced tools and clear reporting kept us informed and confident throughout the campaign. The results exceeded our expectations."
  },
  {
    name: "Faisal K.",
    role: "Startup Founder",
    quote:
      "Creative and effective. Imagine Dream World helped our brand connect with customers in a way that truly stands out."
  }
];

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "We optimize keywords and improve site structure to enhance the visibility of your brand. Our SEO services ensure your e-commerce site ranks higher on search engines and attracts the customers who are ready to buy!",
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description:
      "With our targeted PPC campaigns, we put your brand in front of the right audience instantly. We manage bids and optimize ads and thus driving qualified traffic to your site and maximizing your return on investment.",
  },
  {
    title: "Social Media Marketing",
    description:
      "We build engaging social media campaigns that connect your brand with your audience. You can efficiently increase your brand awareness and drive traffic through our engaging content and platform management.",
  },
  {
    title: "Content Marketing",
    description:
      "We value creating relevant content that speaks directly to your target audience. Our ultimate content marketing strategy aims to enhance customer engagement and support your business growth in the long term.",
  },
  {
    title: "Web Design and Development",
    description:
      "We design and develop user-friendly, responsive websites that are perfectly suited for your business goals. Our focus is on user experience and fast performance. In one word, we build functionality that helps turn visitors into loyal customers!",
  },
  {
    title: "Email Marketing",
    description:
      "Professional email marketing strategies keep your audience engaged and informed. Our email marketing includes promotional offers and custom newsletters. It helps build strong customer relationships and enhances repeat sales.",
  },
];

const processSteps = [
  {
    title: "Audit & Analysis",
    description:
      "Our strategic approach starts with a deep audit of your digital business. We analyze your current online presence, website performance, and marketing efforts. It gives us a clear blueprint of where we can bring opportunities for better traffic.",
  },
  {
    title: "Customized Strategy",
    description:
      "We don’t rely on one-size-fits-all solutions for all e-commerce businesses. We build a custom digital marketing strategy based on your business goals and industry trends. Our target is to ensure meaningful growth at every step.",
  },
  {
    title: "Campaign Implementation & Optimization",
    description:
      "We handle every detail with precision and implement your campaigns across all relevant channels. Say about SEO, PPC, social media, email, and more, we continuously optimize for maximum impact and ROI.",
  },
  {
    title: "Reporting & Growth Tracking",
    description:
      "We track every metric closely. Plus, you receive regular updates with clear and actionable insights. It helps you see what’s working and how your business keeps growing.",
  },
];

const differences = [
  {
    title: "Personalized Strategies",
    description:
      "We develop strategies based on your business goals and audience. Our every optimization moves your business towards better visibility and better conversions!",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We use modern marketing technologies to stay ahead of the competition. We ensure to maximize your return on investment every step of the way.",
  },
  {
    title: "Creative Storytelling",
    description:
      "Our team creates engaging visuals and messages that connect with your audience emotionally. We help to make your brand stand out with ultimate customer engagement.",
  },
  {
    title: "Clear Communication",
    description:
      "We maintain full transparency with our comprehensive dashboards and detailed marketing reports. It enables you to make necessary adjustments according to your business objectives.",
  },
  {
    title: "Scalable Success",
    description:
      "We build flexible marketing strategies designed to grow with your business. As your e-commerce site grows, we adjust our marketing strategies to keep bringing you more customers and better results.",
  },
];

function DigitalMarketing() {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // First one open by default

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/digital-marketing")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching digital marketing images:", err));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen py-10 px-5">
      {/* Carousel */}
      <section className="max-w-6xl mx-auto mb-14">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img.imageUrl}
                alt={`Slide ${idx}`}
                className="w-full h-[300px] lg:h-[400px] object-cover rounded-xl shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Hero Text */}
      <section className="max-w-4xl mx-auto text-center mb-10">
        <Slide direction="down" triggerOnce>
          <h1 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-4">
            Expert Digital Marketing Services to Grow Your Business
          </h1>
        </Slide>
        <Fade cascade triggerOnce>
          <p className="text-gray-300 text-[16px]">
            Get more traffic, enhance conversions, and grow your e-commerce business with our digital marketing strategies that deliver!
          </p>
        </Fade>
        <Link
          to="/contact"
          className="inline-block mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded shadow-lg transition"
        >
          Request a Quote
        </Link>
      </section>

      {/* About and Service Sections */}
      <section className="max-w-6xl mx-auto mb-10">
        <Slide direction="up" triggerOnce>
          <h2 className="text-2xl md:text-3xl font-semibold text-amber-500 mb-4">Strategic Digital Marketing That Drives Growth</h2>
          <p className="text-gray-300 mb-6">
            At Imagine Dream World, we deliver tailor-made digital strategies for e-commerce brands. Our solutions increase visibility, drive conversions, and fuel long-term success.
          </p>
          <p className="text-gray-300">
            We solve critical digital challenges — from low visibility and poor ad targeting to weak engagement. Our performance-driven approach ensures smart advertising, powerful content, and seamless user experiences.
          </p>
        </Slide>

        <section className="py-12  text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-amber-500 mb-4">
          Addressing Digital Marketing Challenges that Limit Your Growth
        </h2>
        <p className="text-gray-300 max-w-6xl mx-auto mb-8">
          No wonder, getting noticed online now is far more challenging than ever. If your brand isn’t showing up in the top search results, you could be losing thousands of your customers daily. Digital marketing issues can slow down your business. It may include low visibility or poor ad targeting. On top of that, weak engagement and slow site speed only make those issues even bigger!
        </p>
        <p className="text-gray-300 max-w-6xl mx-auto mb-12">
          At Imagine Dream World, we solve these challenges by improving your site performance, targeting the right audience with smarter ads. Plus, we create content that connects and enhances the presence of your site at every digital platform.
        </p>
      </motion.div>

      <div className="grid gap-10 grid-cols-1">
      <h2 className="text-2xl md:text-3xl font-bold text-amber-500 mb-2">Our Digital Marketing Services 
      </h2>
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-stone-900 border border-stone-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-purple-500 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>

      </section>

     <Fade direction="up"> <section className="text-white px-4 md:px-10 lg:px-20 mb-10">
      <motion.h2
        className="text-2xl text-center md:text-3xl font-bold  text-amber-500 mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Proven Digital Marketing Process: From Strategy to Results
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-stone-900 p-6 rounded-xl shadow-md border border-stone-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-purple-500 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section></Fade>

   <Fade direction="up">
   <section className="py-10 px-4 md:px-10 lg:px-20 text-white">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center text-purple-600 mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        The Difference That Sets Us Apart!
      </motion.h2>

      <div className="grid grid-cols-1 gap-5">
        {differences.map((item, index) => (
          <motion.div
            key={index}
            className="bg-stone-900 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-amber-500 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
   </Fade>


      {/* Testimonials */}
    <Fade direction="up">
    <section className="max-w-6xl mx-auto py-10 px-4">
  <Slide direction="left" triggerOnce>
    <h2 className="text-center text-3xl font-bold text-purple-600 mb-10">
      Hear from Our Clients
    </h2>
  </Slide>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {testimonials.map((client, i) => (
      <Fade key={i} delay={i * 100} triggerOnce>
        <div className="flex flex-col justify-between h-full bg-zinc-900 p-6 rounded-xl shadow-lg border border-zinc-700 text-center min-h-[260px]">
          <p className="italic text-gray-200 mb-4 flex-1">“{client.quote}”</p>
          <div className="mt-4">
            <h4 className="text-lg text-amber-500 font-semibold">{client.name}</h4>
            <span className="text-sm text-gray-400">{client.role}</span>
          </div>
        </div>
      </Fade>
    ))}
  </div>
</section>
    </Fade>


      {/* FAQs */}
      <section className="py-16 px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-purple-600">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            layout
            key={index}
            className="border border-stone-800 rounded-xl overflow-hidden shadow-sm"
            transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-stone-900 hover:bg-stone-800 transition-all font-medium text-amber-500"
            >
              <span>{faq.question}</span>
              <motion.span
                animate={{ rotate: activeIndex === index ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronRight className="text-xl" />
              </motion.span>
            </button>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  key="content"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 py-4 bg-black text-gray-300 text-sm leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
      {/* CTA */}
      {/* <section className="text-center">
        <Fade delay={500} triggerOnce>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-xl transition"
          >
            Ready to Take Your Business to the Next Level?
          </Link>
        </Fade>
      </section> */}
      <section>
        <NewSection></NewSection>
      </section>
    </div>
  );
}

export default DigitalMarketing;