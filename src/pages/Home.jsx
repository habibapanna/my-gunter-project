import { useState } from "react";
import About from "../components/About/About";
import ContactForm from "../components/ContactForm/ContactForm";
import HeroSection from "../components/HeroSection/HeroSection";
import LatestNews from "../components/LatestNews/LatestNews";
import OurServices from "../components/OurServices/OurServices";
import OurTeam from "../components/OurTeam/OurTeam";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import ServiceCards from "../components/ServiceCards/ServiceCards";
import Testimonials from "../components/Testimonials/Testimonials";


const AnimatedStick = () => {


    return (
        <div className="relative w-[2px] h-16 bg-orange-600 overflow-hidden mx-auto mt-2">
            {/* Falling Black Elements */}
            <div className="falling absolute left-0 w-[2px] h-4 bg-black"></div>
            <div className="falling absolute left-0 w-[2px] h-4 bg-black" style={{ animationDelay: "0.5s" }}></div>
        </div>
    );
};



const Section = ({ title, children }) => {
    return (
        <div className="text-left mt-8">  {/* Reduced margin */}
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <AnimatedStick />
            <div className="mt-6">{children}</div>
        </div>
    );
};


const Home = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, like sending the data to a server.
        console.log('Form Data Submitted: ', formData);
    };

    return (
        <>
            {/* Scoped Animation inside Home */}
            <style>
                {`
                @keyframes fall {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                .falling {
                    animation: fall 1.5s linear infinite;
                }
                `}
            </style>

            <div className="bg-black">
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
                <div id="contact" className="bg-black contact-form-container p-8">
            <h2 className="text-center font-semibold mb-5 mt-10 text-orange-600">LET'S TALK</h2>
            <h2 className="text-3xl font-bold mb-10 text-white text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Form Column */}
                <div className=" mx-auto px-4">
    {/* Contact Form */}
    <form onSubmit={handleSubmit} className="space-y-6 bg-black p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 gap-5">
            {/* Name Field */}
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

            {/* Email Field */}
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

            {/* Phone Field */}
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

            {/* Subject Field */}
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

        {/* Message Field */}
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
            className="bg-orange-600 px-10 py-4 text-white font-semibold transition duration-300 shadow-animation"
        >
            Submit Message
        </button>
    </form>

</div>


                {/* Location Map Column */}
                <div className="w-full aspect-video">
            <iframe
                className="w-full h-full shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14607.996596886385!2d90.36290812581547!3d23.747409749772967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHouse%20No%3A%20137%2F24%2FA%2C%20Dhanmondi%2C%20Dhaka-1209%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1742632275655!5m2!1sen!2sbd"
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
