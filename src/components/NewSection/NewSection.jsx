import { Link } from "react-router-dom";
import CalendlyPopup from "../CalendlyPopup/CalendlyPopup";


const NewSection = () => {
    return (
        <div>
                            <div
      className="mx-auto max-w-5xl flex flex-col gap-10 bg-black bg-cover bg-center rounded p-10 items-center justify-between shadow-lg mb-5"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/gXF5DSp/pexels-pavel-danilyuk-8112172.jpg')",
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <div className="md:w-2/3 text-center md:text-left">
        <h3 className="text-xl md:text-3xl text-amber-400 font-bold mb-5">
          Would you like to start a project with us?
        </h3>
        <p className="text-white leading-relaxed text-sm md:text-[16px]">
          Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo.
          Nullam quis vulputate orci, ac accumsan quam. Morbi fringilla congue
          libero. 1-800-1234-567
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <Link to="/contact">
          <button className="py-2 lg:py-4 text-white px-10 text-sm bg-purple-600 shadow-animation shadow-md cursor-pointer font-semibold">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
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
    );
};

export default NewSection;