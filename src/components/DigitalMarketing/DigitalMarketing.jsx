import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Slide, Fade } from "react-awesome-reveal";
import { FaDiamond } from "react-icons/fa6";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";

const services = [
  "Search Engine Optimization (SEO) – Rank higher on search engines with optimized content and structure.",
  "Pay-Per-Click Advertising (PPC) – Drive instant traffic with highly targeted ad campaigns.",
  "Social Media Marketing – Build a strong presence across platforms and engage your audience.",
  "Content Marketing – Create valuable, relevant content that nurtures customer relationships.",
  "Web Design and Development – Responsive, user-centric websites that convert visitors into customers.",
  "Email Marketing – Professional campaigns to increase engagement and boost repeat sales."
];

const faqs = [
  {
    question: "What types of digital marketing services do you offer?",
    answer:
      "We offer comprehensive digital marketing solutions including SEO, PPC, social media marketing, email campaigns, content creation, and analytics tracking."
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "PPC can produce results in days or weeks, while SEO and content marketing typically take 3–6 months for meaningful growth."
  },
  {
    question: "How do you measure digital marketing success?",
    answer:
      "We track KPIs such as website traffic, conversion rates, lead quality, and ROI. Regular reporting ensures transparency and adaptability."
  },
  {
    question: "Can you customize digital marketing strategies?",
    answer:
      "Absolutely. We tailor strategies to fit your business objectives and industry landscape, ensuring relevancy and results."
  }
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

function DigitalMarketing() {
  const [images, setImages] = useState([]);

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
      <section className="max-w-5xl mx-auto mb-16">
        <Slide direction="up" triggerOnce>
          <h2 className="text-2xl font-semibold text-amber-500 mb-4">Strategic Digital Marketing That Drives Growth</h2>
          <p className="text-gray-300 mb-6">
            At Imagine Dream World, we deliver tailor-made digital strategies for e-commerce brands. Our solutions increase visibility, drive conversions, and fuel long-term success.
          </p>
          <p className="text-gray-300">
            We solve critical digital challenges — from low visibility and poor ad targeting to weak engagement. Our performance-driven approach ensures smart advertising, powerful content, and seamless user experiences.
          </p>
        </Slide>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {services.map((service, i) => (
            <Fade key={i} triggerOnce delay={i * 100}>
              <div className="bg-zinc-900 p-5 border border-zinc-700 hover:bg-zinc-800 transition rounded-lg shadow-md">
                <div className="flex gap-3 items-start text-gray-300">
                  <FaDiamond className="text-amber-500 mt-1" />
                  <span>{service}</span>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-5xl mx-auto mb-16 px-4">
  <Slide direction="left" triggerOnce>
    <h2 className="text-center text-3xl font-bold text-purple-500 mb-10">
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


      {/* FAQs */}
      <section className="max-w-4xl mx-auto mb-16">
        <Slide direction="right" triggerOnce>
          <h2 className="text-2xl font-bold text-amber-500 mb-8 text-center">Frequently Asked Questions</h2>
        </Slide>
        <Accordion type="single" defaultValue="faq-0" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="bg-zinc-800 rounded-lg border border-zinc-700 overflow-hidden">
              <button className="w-full text-left p-4 font-medium text-white bg-zinc-900 hover:bg-zinc-700 transition">
                {faq.question}
              </button>
              <div className="p-4 text-gray-300 border-t border-zinc-700">
                {faq.answer}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Fade delay={500} triggerOnce>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-xl transition"
          >
            Ready to Take Your Business to the Next Level?
          </Link>
        </Fade>
      </section>
    </div>
  );
}

export default DigitalMarketing;