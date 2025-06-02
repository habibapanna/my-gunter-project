import { Link } from "react-router-dom";
import CalendlyPopup from "../CalendlyPopup/CalendlyPopup";
import { Fade } from "react-awesome-reveal";


const NewSection = () => {
    return (
       <div>
        <Fade direction="up"> <div id="contact">
                            <div
      className="mx-auto max-w-5xl flex flex-col gap-10 bg-black bg-cover bg-center rounded px-5 py-5 lg:p-10 items-center justify-between shadow-lg mb-5"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/cKXvftPN/Get-In-Touch.png')",
        backgroundBlendMode: "multiply",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <div className="md:w-2/3 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl text-amber-500 font-bold mb-5 text-center">
          Would you like to start a project with us?
        </h3>
        <p className="text-white leading-relaxed text-sm md:text-[16px] text-center">
        Imagine Dream World is your ultimate partner for expert e-commerce strategies and online store solutions. We offer industry-leading development, marketing, and optimization services to elevate your brand growth and identity.


        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        <Link to="/contact">
          <button className="py-2 lg:py-4 text-white px-10 text-sm bg-purple-600 hover:bg-purple-500 shadow-md cursor-pointer font-semibold hover:scale-95">
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
        </div></Fade>
       </div>
    );
};

export default NewSection;