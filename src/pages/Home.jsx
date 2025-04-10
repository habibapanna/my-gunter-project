
import About from "../components/About/About";
import HeroSection from "../components/HeroSection/HeroSection";
import LatestNews from "../components/LatestNews/LatestNews";
import OurServices from "../components/OurServices/OurServices";
import OurTeam from "../components/OurTeam/OurTeam";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import ServiceCards from "../components/ServiceCards/ServiceCards";
import Testimonials from "../components/Testimonials/Testimonials";
import OurClients from "../components/OurClients/OurClients";
import { Link } from "react-router-dom";

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
                <div
      className="mx-auto max-w-5xl flex flex-col gap-10 bg-stone-950 bg-cover bg-center rounded p-10 items-center justify-between shadow-lg mb-5"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/gXF5DSp/pexels-pavel-danilyuk-8112172.jpg')",
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <div className="md:w-2/3 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl text-amber-400 font-bold mb-5">
          Would you like to start a project with us?
        </h3>
        <p className="text-white leading-relaxed">
          Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo.
          Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue
          libero. 1-800-1234-567
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <button className="py-4 text-white px-10 text-sm bg-amber-500 shadow-animation shadow-md font-semibold">
          Book Intro Call
        </button>
        <Link to="/contact">
          <button className="py-4 text-white px-10 text-sm bg-purple-600 shadow-animation shadow-md cursor-pointer font-semibold">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
                </Section>
                <style>
        {`
          .shadow-animation {
              position: relative;
              overflow: hidden;
          }

          .shadow-animation::before,
          .shadow-animation::after {
              content: '';
              position: absolute;
              width: 50%;
              height: 100%;
              background: rgba(0, 0, 0, 0.9);
              transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
              opacity: 0;
          }

          .shadow-animation::before {
              left: 0;
              bottom: -100%;
          }

          .shadow-animation::after {
              right: 0;
              top: -100%;
          }

          .shadow-animation:hover::before {
              transform: translateY(-100%);
              opacity: 1;
          }

          .shadow-animation:hover::after {
              transform: translateY(100%);
              opacity: 1;
          }

          .shadow-animation:hover::before,
          .shadow-animation:hover::after {
              animation: panelDisappear 1s ease-in-out forwards;
          }

          @keyframes panelDisappear {
              0% { opacity: 1; }
              70% { opacity: 1; }
              100% { opacity: 0; transform: translateY(0); }
          }
        `}
      </style>
            </div>
        </>
    );
};

export default Home;
