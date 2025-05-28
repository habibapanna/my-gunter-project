import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import CountUp from "react-countup";


function WebDevelopment() {
  const [images, setImages] = useState([]);
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // only trigger once
        }
      },
      {
        threshold: 0.5, // trigger when 50% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/web-development")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  const servicePoints = [
    "Custom-designed e-commerce website with intuitive navigation",
    "Fully responsive design optimized for all devices",
    "Secure payment gateway integration",
    "Advanced product and inventory management",
    "Shopping cart and checkout optimization",
    "Third-party integration (CRM, ERP, marketing tools)",
    "Ongoing technical support & performance enhancement",
    "Proactive security and regular updates",
    "Data-driven insights for continuous optimization",
  ];

  const steps = [
    "Ongoing Support & Optimization",
    "Design & Prototype Approval",
    "Development & Integration",
    "Testing & Quality Assurance",
    "Launch & Deployment",
    "Consultation & Requirement Analysis",
  ];

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

  const pricing = [
    {
      plan: "Basic",
      features: [
        "Custom-designed e-commerce website",
        "Mobile responsive design",
        "Basic product catalog management",
        "Secure payment integration",
        "Post-launch support",
      ],
    },
    {
      plan: "Standard",
      features: [
        "Everything in Basic",
        "Advanced inventory management",
        "Streamlined checkout process",
        "Third-party integrations",
        "Enhanced security and priority support",
      ],
    },
    {
      plan: "Premium",
      features: [
        "Everything in Standard",
        "Performance tuning & scalability",
        "Multi-channel sales integration",
        "Custom features & analytics",
        "Dedicated support",
      ],
    },
  ];

  return (
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
          {startCount ? <CountUp end={60} duration={2} /> : 0}+
        </h2>
        <p className="text-gray-400">Expert Web Developers</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-amber-500">
          {startCount ? <CountUp end={80} duration={2} /> : 0}+
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
      <section className="mt-14">
        <Fade cascade triggerOnce>
          <h2 className="text-2xl font-bold text-center text-amber-500 mb-6">
            Custom E-commerce Web Development Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicePoints.map((point, idx) => (
              <div
                key={idx}
                className="bg-zinc-900 p-5 border border-zinc-700 rounded-md"
              >
                <div className="flex gap-3 text-gray-300">
                  <FaCheck className="text-amber-500 mt-1" />
                  <span>{point}</span>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* Development Steps */}
      <section className="mt-16 md:max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-purple-500 mb-4 text-center">
          Just 6 Steps to Build Your Perfect Online Store
        </h2>
        <ol className="list-decimal text-gray-300  space-y-2 pl-20 grid grid-cols-1 md:grid-cols-2 ">
          {steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Testimonials */}
      <section className="mt-16">
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
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-8">
          Flexible E-commerce Development Pricing Packages
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pricing.map((pkg, idx) => (
            <div
              key={idx}
              className="bg-zinc-900 p-6 border border-purple-600 rounded-md"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-4">
                {pkg.plan} Plan
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm">
                {pkg.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center mt-20">
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
      </section>
    </div>
  );
}

export default WebDevelopment;
