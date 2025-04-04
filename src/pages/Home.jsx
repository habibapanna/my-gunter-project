import { useState } from "react";
import About from "../components/About/About";
import HeroSection from "../components/HeroSection/HeroSection";
import LatestNews from "../components/LatestNews/LatestNews";
import OurServices from "../components/OurServices/OurServices";
import OurTeam from "../components/OurTeam/OurTeam";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import ServiceCards from "../components/ServiceCards/ServiceCards";
import Testimonials from "../components/Testimonials/Testimonials";

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
            <div className="relative w-[2px] h-16 bg-orange-600 overflow-hidden mx-auto mt-2">
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
        console.log("Form Data Submitted: ", formData);

        // Show success message
        setSuccessMessage(true);

        // Reset form fields
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });

        // Hide success message after 3 seconds
        setTimeout(() => {
            setSuccessMessage(false);
        }, 3000);
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
                        <h2 className="text-left font-semibold mb-5 mt-20 lg:mt-10 text-orange-600">LET'S TALK</h2>
                        <h2 className="text-2xl lg;text-3xl font-bold mb-5 lg:mb-10 text-white text-left">Get in Touch</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="">
                                <form onSubmit={handleSubmit} className="space-y-6 bg-black py-6 shadow-lg">
                                    {successMessage && (
                                        <div className="success-message bg-orange-600 text-white text-center py-2">
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
                                        className="bg-orange-600 px-5 py-2 lg:px-10 lg:py-4 text-white lg:font-semibold transition duration-300 shadow-animation cursor-pointer"
                                    >
                                        Submit Message
                                    </button>
                                </form>
                            </div>

                            <div className="w-full aspect-video md:pr-10">
                                <iframe
                                    className="w-full h-full shadow-lg"
                                    src="https://www.google.com/maps/embed?pb=!1m16..."
                                    allowFullScreen=""
                                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
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
