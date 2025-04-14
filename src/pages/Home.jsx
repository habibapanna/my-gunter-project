
import About from "../components/About/About";
import HeroSection from "../components/HeroSection/HeroSection";
import LatestNews from "../components/LatestNews/LatestNews";
import OurServices from "../components/OurServices/OurServices";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import ServiceCards from "../components/ServiceCards/ServiceCards";
import Testimonials from "../components/Testimonials/Testimonials";
import OurClients from "../components/OurClients/OurClients";
import ContactForm from "../components/ContactForm/ContactForm";

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
                    <RecentProjects />
                </Section>
                <Section>
                    <Testimonials />
                </Section>
                <Section>
                    <LatestNews />
                </Section>
                <Section>
               <ContactForm></ContactForm>
                </Section>

            </div>
        </>
    );
};

export default Home;
