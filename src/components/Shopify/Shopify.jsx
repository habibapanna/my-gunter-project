import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaCheck } from "react-icons/fa6";
import { Slide, Fade, Zoom } from "react-awesome-reveal";
import {
  FiShoppingCart,
  FiEdit3,
  FiUpload,
  FiCheckCircle,
  FiRepeat,
  FiLayers,
} from "react-icons/fi";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const offers = [
  {
    title: "Custom Shopify Store Setup",
    desc: "We design and build Shopify stores that meet your brand identity and business goals, handling everything from layout to launch.",
    icon: <FiShoppingCart className="text-amber-400 w-7 h-7 mb-3" />,
  },
  {
    title: "Shopify Theme Development & Customization",
    desc: "We customize themes that reflect your brand’s personality. Layouts, colors, fonts—tailored to engage and convert.",
    icon: <FiEdit3 className="text-amber-400 w-7 h-7 mb-3" />,
  },
  {
    title: "Product Upload & Management",
    desc: "We upload products with accurate details and high-quality visuals, ensuring efficient catalog management.",
    icon: <FiUpload className="text-amber-400 w-7 h-7 mb-3" />,
  },
  {
    title: "Testing & QA",
    desc: "We test your store’s performance, responsiveness, and functionality across all devices to ensure a bug-free launch.",
    icon: <FiCheckCircle className="text-amber-400 w-7 h-7 mb-3" />,
  },
  {
    title: "Migration to Shopify",
    desc: "We handle full migration from any platform to Shopify, ensuring zero data loss and full operational continuity.",
    icon: <FiRepeat className="text-amber-400 w-7 h-7 mb-3" />,
  },
  {
    title: "Headless Shopify Solutions",
    desc: "We develop headless setups for complete control, integrating modern front-end frameworks with Shopify’s backend.",
    icon: <FiLayers className="text-amber-400 w-7 h-7 mb-3" />,
  },
];

const services = [
  "Custom Shopify Store Design – Mobile-friendly, fast-loading, and optimized for sales.",
  "Winning Product Research – Find high-demand products for dropshipping & private label.",
  "Shopify SEO & Conversion Optimization – Rank higher and boost sales with keyword-rich content.",
  "Store Automation & Order Management – Set up automated order processing & inventory tracking.",
  "Facebook, Google & TikTok Ads – Drive traffic and maximize sales with targeted advertising.",
];

function Shopify() {
  const [shopifyImages, setShopifyImages] = useState([]);
  const { ref, inView } = useInView({ triggerOnce: true });
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
        <p className="text-3xl font-bold text-white">
          {inView && <CountUp end={1000} duration={2} />}+
        </p>
        Successful Projects
      </div>
      <div>
        <p className="text-3xl font-bold text-white">
          {inView && <CountUp end={500} duration={2} />}+
        </p>
        Happy Clients
      </div>
      <div>
        <p className="text-3xl font-bold text-white">
          {inView && <CountUp end={100} duration={2} />}+
        </p>
        Experts
      </div>
    </div>
  </Fade>
</section>

{/* Offerings Section */}
<section className="mt-16 px-5 md:px-20 text-white">
      <Slide direction="right" triggerOnce>
        <h2 className="text-xl lg:text-2xl font-bold mb-6 text-purple-600 text-center">
          Our Expert Shopify Services
        </h2>
      </Slide>

      <Fade cascade triggerOnce damping={0.1}>
        <div className="grid md:grid-cols-2 gap-8">
          {offers.map(({ title, desc, icon }, i) => (
            <div
              key={i}
              className="bg-zinc-900 p-5 border border-zinc-700 rounded hover:bg-zinc-800 transition flex flex-col items-start"
            >
              {icon}
              <h3 className="text-lg font-semibold text-amber-400 mb-2">{title}</h3>
              <p className="text-gray-300 text-[15px]">{desc}</p>
            </div>
          ))}
        </div>
      </Fade>
    </section>

{/* Integrations Section */}
<section className="mt-16 px-5 md:px-20 text-white">
  <Zoom triggerOnce>
    <h2 className="text-xl lg:text-2xl font-bold mb-6 text-center text-amber-500">
      Maximize Your Store with Advanced Integrations
    </h2>
  </Zoom>

  <Fade cascade damping={0.1} triggerOnce>
    <ul className="list-disc list-inside text-gray-300 space-y-3 grid grid-cols-1 md:grid-cols-2">
      <li><strong>Payment Gateway Integrations:</strong> Shopify Payments, Stripe, PayPal setup with fraud protection.</li>
      <li><strong>Custom API Integrations:</strong> Automate processes with CRMs, ERPs, and other tools.</li>
      <li><strong>Marketing & Email Automation:</strong> Setup Klaviyo, Mailchimp with advanced workflows.</li>
      <li><strong>Shipping & Fulfillment:</strong> Connect top providers for automated shipping and tracking.</li>
      <li><strong>Chatbot Integration:</strong> 24/7 support via AI-powered chatbot for customer engagement.</li>
      <li><strong>OMS Integration:</strong> Centralized order management for smooth operations across platforms.</li>
    </ul>
  </Fade>
</section>

{/* Process Section */}
<section className="mt-16 px-5 md:px-20 text-white">
  <Slide direction="left" triggerOnce>
    <h2 className="text-xl lg:text-2xl font-bold mb-6 text-purple-600 text-center">
      Our Shopify Development Process
    </h2>
  </Slide>

  <Fade cascade triggerOnce>
    <ol className="list-decimal list-inside text-gray-300 space-y-3 grid grid-cols-1 md:grid-cols-2">
      <li><strong>Discovery & Planning:</strong> Understand your goals, audience, and industry for strategic store setup.</li>
      <li><strong>Design & Development:</strong> Craft unique and functional layouts aligned with your branding.</li>
      <li><strong>Testing & Launch:</strong> Perform device and checkout testing before public release.</li>
      <li><strong>Ongoing Support:</strong> We optimize speed, fix bugs, and adapt to your store’s growth needs.</li>
    </ol>
  </Fade>
</section>

{/* Why Choose Us */}
<section className="mt-16 px-5 md:px-20 text-white">
  <Slide direction="up" triggerOnce>
    <h2 className="text-xl lg:text-2xl font-bold mb-6 text-center text-amber-500">Why Imagine Dream World?</h2>
  </Slide>
  <Fade cascade direction="up" damping={0.1} triggerOnce>
    <ul className="list-disc list-inside text-gray-300 space-y-3 grid grid-cols-1 md:grid-cols-2">
      <li><strong>Expert Shopify Specialists:</strong> Deep expertise in Shopify development and growth.</li>
      <li><strong>Custom Solutions:</strong> Tailored designs and workflows per client need.</li>
      <li><strong>Proven Track Record:</strong> 1000+ projects completed with measurable growth.</li>
      <li><strong>End-to-End Support:</strong> From setup to scaling — we’re always there.</li>
      <li><strong>Speed & Performance:</strong> We prioritize fast-loading stores to increase retention and conversions.</li>
    </ul>
  </Fade>
</section>

{/* Testimonials Section */}
<section className="mt-16 px-5 md:px-20 text-white">
  <Zoom triggerOnce>
    <h2 className="text-xl lg:text-2xl font-bold mb-6 text-center text-purple-500">What Our Clients Say</h2>
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
          <p className="mt-2 text-right text-purple-400 font-semibold">— {item.name}</p>
        </div>
      ))}
    </div>
  </Fade>
</section>

{/* CTA Section */}
<section className="mt-16 px-5 md:px-20 text-white text-center">
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
</section>


    </div>
  );
}

export default Shopify;
