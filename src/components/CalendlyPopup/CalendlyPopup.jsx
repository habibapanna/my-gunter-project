import React from "react";
import { FcCalendar } from "react-icons/fc";

const CalendlyPopup = () => {
  const openCalendly = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/habibapanna49",
    });
  };

  return (
    <button
      onClick={openCalendly}
      className="text-white bg-purple-600 shadow-animation text-xs md:text-sm px-4 md:px-8 py-2 md:py-3 rounded-bl-full rounded-tr-full font-semibold transition duration-300 cursor-pointer flex items-center gap-2"
    >
      <FcCalendar className="text-lg md:text-xl" />
      Make a Schedule

      {/* 👇 Custom Shadow Animation Styling */}
      <style>
        {`
          .shadow-animation {
              position: relative;
              overflow: hidden;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          }

          .shadow-animation::before,
          .shadow-animation::after {
              content: '';
              position: absolute;
              width: 50%;
              height: 100%;
              background: rgba(0, 0, 0, 0.2);
              transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
              opacity: 0;
              z-index: 1;
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
    </button>
  );
};

export default CalendlyPopup;
