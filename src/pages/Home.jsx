import { useState } from "react";
import About from "../components/About/About";
import HeroSection from "../components/HeroSection/HeroSection";
import LatestNews from "../components/LatestNews/LatestNews";
import OurServices from "../components/OurServices/OurServices";
import OurTeam from "../components/OurTeam/OurTeam";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import ServiceCards from "../components/ServiceCards/ServiceCards";
import Testimonials from "../components/Testimonials/Testimonials";
import OurClients from "../components/OurClients/OurClients";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoGlobeOutline, IoRocketOutline } from "react-icons/io5";
import { MdOutlineWarehouse } from "react-icons/md";
import { AiOutlineBoxPlot } from "react-icons/ai";

const AnimatedStick = () => {
    return (
        <>
            <style>
                {`
                @keyframes fall {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(100%); }
                }

                .falling {
                    animation: fall 5s linear infinite;
                }

                .falling:nth-child(2) {
                    animation-delay: 5s;
                }
                `}
            </style>
            <div className="relative w-[2px] h-16 bg-purple-600 overflow-hidden mx-auto mt-2">
                <div className="falling absolute left-0 top-0 w-[2px] h-8 bg-black"></div>
                <div className="falling absolute left-0 top-0 w-[2px] h-4 bg-black"></div>
            </div>
        </>
    );
};


const Section = ({ title, children }) => {
    return (
        <div className="text-left mt-8">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <AnimatedStick />
            <div className="mt-6">{children}</div>
        </div>
    );
};

const Home = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [successMessage, setSuccessMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        fetch("https://my-gunter-project-server.vercel.app/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to send email");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data.message);
            setSuccessMessage("Your message has been successfully sent!");
      
            // Reset form fields
            setFormData({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            });
      
            // Hide success message after 3 seconds
            setTimeout(() => setSuccessMessage(""), 3000);
          })
          .catch((err) => {
            console.error("Error:", err);
            alert("Something went wrong. Please try again later.");
          });
      };

      const services = [
        { title: "Private Label", icon: <IoRocketOutline />, path: "private-label" },
        { title: "Retail / Online Arbitrage", icon: <HiOutlineShoppingCart />, path: "retail-arbitrage" },
        { title: "Wholesale FBA / WFS", icon: <MdOutlineWarehouse />, path: "wholesale-fba" },
        { title: "Web Development", icon: <IoGlobeOutline />, path: "web-development" },
        { title: "Shopify", icon: <AiOutlineBoxPlot />, path: "shopify" },
      ];

      const scrollToServices = () => {
        const section = document.getElementById("our-services");
        section?.scrollIntoView({ behavior: "smooth" });
      };
      

    return (
        <>
            <style>
                {`
                @keyframes fadeIn {
                    0% { opacity: 0; transform: translateY(-10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .success-message {
                    animation: fadeIn 0.5s ease-in-out;
                }
                `}
            </style>

            <div className="bg-black overflow-x-hidden">
                <HeroSection />
                          {/* Service Cards - Continuous Marquee */}
{/* Service Cards - Continuous Marquee */}
<div className="w-full overflow-hidden mt-5">
  <div className="marquee flex gap-6">
    {[...services, ...services].map((service, idx) => (
      <div
        key={idx}
        className="w-[300px] text-lg h-15 backdrop-blur-md bg-white/10 border border-white/10 text-white  flex flex-col justify-center items-center px-8 shadow-md rounded-full"
      >
        <div className="mt-1">{service.title}</div>
      </div>
    ))}
  </div>

  {/* See More Button - moved here BELOW marquee */}
  <div className="mt-8 text-center">
    <button
      onClick={scrollToServices}
      className="hover:text-white hover:bg-purple-600  rounded-full px-4 py-1 text-sm bg-amber-500 text-white transition cursor-pointer"
    >
      See More Services
    </button>
  </div>
</div>
                <Section>
                    <OurClients></OurClients>
                </Section>
                <Section>
                    <ServiceCards />
                </Section>
                <Section>
                    <About />
                </Section>
                <Section>
                    <OurServices />
                </Section>
                <Section>
                    <RecentProjects />
                </Section>
                <Section>
                    <Testimonials />
                </Section>
                <Section>
                    <OurTeam />
                </Section>
                <Section>
                    <LatestNews />
                </Section>
                <Section>
                    <div id="contact" className="bg-black contact-form-container px-5 lg:px-10 md:pl-5">
                        <h2 className="text-left font-semibold mb-5 mt-20 lg:mt-10 text-amber-500">LET'S TALK</h2>
                        <h2 className="text-2xl lg;text-3xl font-bold mb-5 lg:mb-10 text-white text-left">Get in Touch</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="">
                                <form onSubmit={handleSubmit} className="space-y-6 bg-black py-6">
                                    {successMessage && (
                                        <div className="success-message bg-purple-600 text-white text-center py-2">
                                            Message sent successfully!
                                        </div>
                                    )}

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="form-group relative">
                                            <label htmlFor="name" className="block text-white">
                                                Name <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 bg-stone-900 border-none focus:outline-none focus:ring-0 focus:bg-stone-200 focus:text-gray-800 transition-all"
                                                required
                                            />
                                        </div>

                                        <div className="form-group relative">
                                            <label htmlFor="email" className="block text-white">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 bg-stone-900 border-none focus:outline-none focus:ring-0 focus:bg-stone-200 focus:text-gray-800 transition-all"
                                                required
                                            />
                                        </div>

                                        <div className="form-group relative">
                                            <label htmlFor="phone" className="block text-white">
                                                Phone <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 bg-stone-900 border-none focus:outline-none focus:ring-0 focus:bg-stone-200 focus:text-gray-800 transition-all"
                                                required
                                            />
                                        </div>

                                        <div className="form-group relative">
                                            <label htmlFor="subject" className="block text-white">
                                                Subject <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 bg-stone-900 border-none focus:outline-none focus:ring-0 focus:bg-stone-200 focus:text-gray-800 transition-all"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group relative">
                                        <label htmlFor="message" className="block text-white">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-5 bg-stone-900 border-none focus:outline-none focus:ring-0 focus:bg-stone-200 focus:text-gray-800 transition-all"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-purple-600 px-5 py-2 lg:px-10 lg:py-4 text-white lg:font-semibold transition duration-300 shadow-animation cursor-pointer"
                                    >
                                        Submit Message
                                    </button>
                                </form>
                            </div>

                            <div className="w-full aspect-video md:pr-10">
                                <iframe
                                    className="w-full h-full shadow-lg"
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14607.996596886385!2d90.36290812581547!3d23.747409749772967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHouse%20No%3A%20137%2F24%2FA%2C%20Dhanmondi%2C%20Dhaka-1209%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1742632275655!5m2!1sen!2sbd"
  style={{ border: 0, filter: "invert(100%) hue-rotate(180deg)" }} // This inverts the colors to create a dark mode effect
  allowFullScreen
  loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default Home;
