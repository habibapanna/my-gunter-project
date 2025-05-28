import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import * as Accordion from '@radix-ui/react-accordion';
import {
  ShoppingCart,
  Timer,
  DollarSign,
  BadgeCheck,
  Repeat,
} from "lucide-react"; // Lucide icons

const iconMap = {
  "E-Commerce Expertise": <ShoppingCart className="text-amber-500 w-6 h-6" />,
  "Fast Turnaround": <Timer className="text-amber-500 w-6 h-6" />,
  "Affordable Packages": <DollarSign className="text-amber-500 w-6 h-6" />,
  "Consistent Branding": <BadgeCheck className="text-amber-500 w-6 h-6" />,
  "Revision-Friendly Process": <Repeat className="text-amber-500 w-6 h-6" />,
};
const faqs = [
  {
    question: "How do you ensure the designs match the style of my brand?",
    answer: "First, we understand the value, target audience, and visual preference for your brand. Our team follows the guidelines carefully. They always communicate regularly to ensure every design reflects the unique identity of your brand."
  },
  {
    question: "Can I request revisions?",
    answer: "Yes, absolutely! At Imagine Dream World, we offer a revision-friendly process. You can request changes until you are completely satisfied with the final design. We’re committed to making sure every detail meets your expectations."
  },
  {
    question: "What types of design files will I get?",
    answer: "You will receive high-resolution files in multiple formats such as JPG, PNG, PSD, and WebP. The final graphic designs are optimized and ready for use across all e-commerce platforms. No need for modification."
  },
  {
    question: "How long does the design process take?",
    answer: "Typically, our graphic design projects take 5 to 10 days to complete. However, that depends on the complexity of the project and the number of revisions. We always aim for a fast turnaround without compromising quality. Moreover, we keep you updated throughout the process."
  }
];

function CreativeDesign() {
  const [images, setImages] = useState([]);
  const reasons = [
    "E-Commerce Expertise",
    "Fast Turnaround",
    "Affordable Packages",
    "Consistent Branding",
    "Revision-Friendly Process",
  ];


  useEffect(() => {
    fetch("https://my-gunter-project-server.vercel.app/creative-designs")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  return (
    <div className="bg-black text-white min-h-screen py-10 px-5 md:px-20">
      {/* Carousel */}
      <Zoom triggerOnce>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full mb-10"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img.imageUrl}
                alt={`Slide ${index}`}
                className="w-full h-[300px] lg:h-[400px] object-cover rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Zoom>

      {/* Hero Heading */}
      <Fade direction="down" triggerOnce>
        <h1 className="text-2xl lg:text-4xl font-bold text-center text-purple-600 mb-6">
          Trusted Graphic Design Services for E-Commerce Brands
        </h1>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <p className="text-gray-300 text-center max-w-4xl mx-auto">
          Get professional, customized graphic design that captures attention and enhances your online presence. You just focus on your growing e-commerce business, and we will handle the visuals!
        </p>
      </Fade>

      <Fade direction="up" delay={400} triggerOnce>
        <div className="text-center mt-6">
          <Link to="/contact" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-purple-700 transition">
            Request a Quote
          </Link>
        </div>
      </Fade>

      {/* Understanding Section */}
      <section className="mt-14">
        <Slide direction="left" triggerOnce>
          <h2 className="text-xl lg:text-2xl font-bold text-amber-500 text-center mb-4">
            We Understand What E-Commerce Brands Need to Stand Out
          </h2>
        </Slide>
        <p className="text-gray-300 text-center max-w-4xl mx-auto">
          At Imagine Dream World, we’re ecommerce experts who truly understand the challenges brands face in today’s competitive online market. We create eye-catching visuals and branding across all your platforms with our years of experience. Our design helps you capture attention and build trust among your target audience. More importantly, we work to enhance your sales. Our team is dedicated to providing personalized support to ensure your brand stands out and grows successfully!
        </p>
      </section>

      {/* Services Section */}
      <section className="mt-14">
        <Slide direction="left" triggerOnce>
          <h2 className="text-xl lg:text-2xl font-bold text-amber-500 text-center mb-6">
            One-Stop Graphic Design Solutions for Online Businesses
          </h2>
        </Slide>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "Product Image Design",
            "Lifestyle & Infographic Design",
            "Storefront & Banner Graphics",
            "Packaging & Insert Design",
            "Social Media Creatives",
            "Listing Image SEO Optimization",
            "Custom Projects & Ongoing Support",
          ].map((service, i) => (
            <Slide key={i} direction="up" delay={i * 100} triggerOnce>
              <div className="bg-zinc-900 hover:bg-zinc-800 transition p-5 shadow-lg border border-zinc-700">
                <div className="flex items-start gap-3 text-gray-300 text-[16px]">
                  <FaCheck className="text-amber-500 text-xl mt-1" />
                  <p>{service}</p>
                </div>
              </div>
            </Slide>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="mt-14">
        <Slide direction="left" triggerOnce>
          <h2 className="text-xl lg:text-2xl font-bold text-amber-500 text-center mb-6">
            Our Easy, Creative Design Process
          </h2>
        </Slide>
        {[
          ["Product Understanding", "Our exclusive service starts with understanding your product, your visual, and your target audience. It helps us create the design strategy with your business goals and create designs that resonate with your customers."],
          ["Draft & Design", "Next, our designers create an initial concept using your idea and ecommerce industry standards. We create each design just for your brand so that it effectively tells your brand's unique identity and story!"],
          ["Unlimited Revisions", "Your satisfaction is our priority. We listen to your feedback and make updates until you're fully satisfied. You’ll always have a say in how the final design looks. Our goal is to ensure the design perfectly reflects your vision for your brand."],
          ["Final Delivery", "After everything is done and you are fully satisfied with the final results, we’ll send you high-quality files in all the formats you need. They will be ready to upload and use right away. We also provide support to ensure the designs continue to perform across all platforms."]
        ].map(([title, desc], i) => (
          <Fade key={i} direction="up" delay={i * 200} triggerOnce>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-purple-400">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          </Fade>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="mt-14">
      <Slide direction="left" triggerOnce>
        <h2 className="text-xl lg:text-2xl font-bold text-amber-500 text-center mb-6">
          Why Choose Imagine Dream World for Graphic Design
        </h2>
      </Slide>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {reasons.map((point, i) => (
          <Fade key={i} direction="up" delay={i * 150} triggerOnce>
            <div className="bg-zinc-900 p-5 rounded shadow border border-zinc-700 flex items-start gap-4">
              <div className="mt-1">{iconMap[point]}</div>
              <div>
                <h3 className="text-purple-400 font-semibold mb-1">
                  {point}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {point === "E-Commerce Expertise" &&
                    "With years of hands-on experience across platforms like Amazon, Walmart, and Shopify, we create visuals meant to meet marketplace standards and ensure sustainable results."}
                  {point === "Fast Turnaround" &&
                    "No wonder time matters the most in retail. With our streamlined process, we ensure your designs are ready on time—without compromising quality!"}
                  {point === "Affordable Packages" &&
                    "We offer flexible pricing options that fit businesses of all sizes. You get high-quality graphic design support for your brand without breaking the bank."}
                  {point === "Consistent Branding" &&
                    "We ensure your brand maintains a consistent look and feel across platforms, helping build trust and recognition with your customers."}
                  {point === "Revision-Friendly Process" &&
                    "Your satisfaction matters most! We offer multiple revision rounds so your designs perfectly match your vision."}
                </p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>

      {/* Testimonials */}
      <section className="mt-14">
        <Fade direction="up" triggerOnce>
          <h2 className="text-xl lg:text-2xl font-bold text-amber-500 text-center mb-6">
            Real Results From Real Clients!
          </h2>
        </Fade>

        {[
          ["Liam T.", "Beauty Brand Owner", "Our product listings now look premium, and our sales have gone up noticeably. The team at Imagine Dream World really understands e-commerce."],
          ["Amira S.", "Home Decor Seller", "They nailed our brand vibe from the first draft. Their graphics helped us build trust and stand out in a crowded market."],
          ["Daniel K.", "Fitness Equipment Store Owner", "Honestly speaking, working with Imagine Dream World was efficient. They have fast turnaround, excellent quality, and great communication."]
        ].map(([name, title, feedback], i) => (
          <Fade key={i} direction="up" delay={i * 150} triggerOnce>
            <div className="bg-zinc-900 p-5 mb-6 rounded shadow border border-zinc-700">
              <p className="italic text-gray-300">“{feedback}”</p>
              <p className="mt-2 text-right text-purple-600 font-semibold">— {name}, <span className="text-sm font-normal">{title}</span></p>
            </div>
          </Fade>
        ))}
      </section>

      {/* Final CTA */}
      <section className="mt-14 text-center">
        <Fade direction="up" triggerOnce>
          <h2 className="text-xl lg:text-2xl font-bold text-amber-500 mb-4">
            Ready To Enhance Clicks With Impactful Graphic Design?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            Want to enhance the impact of your brand across the market and increase sales? Let Imagine Dream World help your e-commerce business stand out and grow with impactful visuals.
          </p>
          <Link to="/contact" className="inline-block bg-purple-600 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-purple-700 transition">
            Let’s Get Started
          </Link>
        </Fade>
      </section>

{/* FAQ Section */}
<section className="mt-14">
  <Fade direction="up" triggerOnce>
    <h2 className="text-xl lg:text-2xl font-bold text-amber-500 text-center mb-6">
      Frequently Asked Questions
    </h2>
  </Fade>

  <Accordion.Root
    type="single"
    defaultValue="item-1"
    collapsible
    className="w-full max-w-4xl mx-auto space-y-4"
  >
    {faqs.map((faq, i) => (
      <Fade key={i} direction="up" delay={i * 150} triggerOnce>
        <Accordion.Item
          value={`item-${i + 1}`}
          className="rounded-lg overflow-hidden"
        >
          <Accordion.Header>
            <Accordion.Trigger className="w-full text-left px-5 py-4 font-semibold text-purple-600 bg-stone-900 hover:bg-zinc-700 transition duration-300 focus:outline-none hover:cursor-pointer">
              Q: {faq.question}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-5 py-4 text-gray-300 bg-zinc-900">
            A: {faq.answer}
          </Accordion.Content>
        </Accordion.Item>
      </Fade>
    ))}
  </Accordion.Root>
</section>

    </div>
  );
}

export default CreativeDesign;
